import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor(private http: HttpClient) {}

  getAllEmployees(page?: string): Observable<Employee[]> {
    const params: HttpParams = new HttpParams();
    params.append('page', page || '0');

    return this.http
      .get<Employee[]>(environment.services.employeeController.getAll, {
        params
      })
      .pipe(
        map((data: any) => {
          return data['content'];
        })
      );
  }

  getEmployeeById(id: number): Observable<Employee> {
    return this.http.get<Employee>(
      `${environment.services.employeeController.getById}/${id}`
    );
  }

  saveEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(
      environment.services.employeeController.save,
      employee
    );
  }

  updateEmployee(employee: Employee): Observable<Employee> {
    return this.http.put<Employee>(
      `${environment.services.employeeController.update}/${employee.id}`,
      employee
    );
  }

  deleteEmployeeById(id: number): Observable<boolean> {
    return this.http.delete<boolean>(
      `${environment.services.employeeController.delete}/${id}`
    );
  }
}
