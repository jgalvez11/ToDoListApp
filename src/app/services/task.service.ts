import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  constructor(private http: HttpClient) {}

  getAllTasks(page?: string): Observable<Task[]> {
    const params: HttpParams = new HttpParams();
    params.append('page', page || '0');

    return this.http
      .get<Task[]>(environment.services.taskController.getAll, {
        params
      })
      .pipe(
        map((data: any) => {
          return data['content'];
        })
      );
  }

  getTaskById(id: number): Observable<Task> {
    return this.http.get<Task>(
      `${environment.services.taskController.getById}/${id}`
    );
  }

  getTasksByEmployeeId(id: number): Observable<Task[]> {
    return this.http.get<Task[]>(
      `${environment.services.taskController.getTasksByEmployeeId}/${id}`
    );
  }

  saveTask(task: Task): Observable<Task> {
    return this.http.post<Task>(environment.services.taskController.save, task);
  }

  updateTask(task: Task): Observable<Task> {
    return this.http.put<Task>(
      `${environment.services.taskController.update}/${task.id}`,
      task
    );
  }

  deleteTaskById(id: number): Observable<boolean> {
    return this.http.delete<boolean>(
      `${environment.services.taskController.delete}/${id}`
    );
  }
}
