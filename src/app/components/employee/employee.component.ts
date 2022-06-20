import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/services/employee.service';
import { UtilService } from 'src/app/utils/util.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  employeeList: Employee[] = [];

  constructor(
    private router: Router,
    private utilService: UtilService,
    private employeeService: EmployeeService
  ) {}

  ngOnInit(): void {
    this.getAllEmployees();
  }

  editEmployee(employee: Employee) {
    localStorage.setItem('ID_EMPLOYEE', String(employee.id));
    this.router.navigate(['/employee/edit', employee.id]);
  }

  deleteEmployee(employee: Employee): void {
    this.employeeService
      .deleteEmployeeById(employee.id || 0)
      .subscribe((response) => {
        if (response) {
          this.employeeList = this.utilService.removeItemFromArray(
            this.employeeList,
            employee
          ) as Employee[];
        } else {
          Swal.fire({
            text: `No se ha podido eliminar al empleado ${employee.firstName} ${employee.lastName}`,
            icon: 'error',
            confirmButtonText: 'Aceptar'
          });
        }
      });
  }

  showModalToDelete(employee: Employee): void {
    Swal.fire({
      title: 'Eliminar Empleado',
      text: `Estás seguro/a de eliminar al empleado ${employee.firstName} ${employee.lastName}`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Si',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.isConfirmed) {
        this.deleteEmployee(employee);
      }
    });
  }

  getAllEmployees() {
    this.employeeService.getAllEmployees().subscribe((data) => {
      this.employeeList = data;
    });
  }
}
