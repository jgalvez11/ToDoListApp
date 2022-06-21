import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterStateSnapshot } from '@angular/router';
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  employee!: Employee;
  formEmployee!: FormGroup;
  showForm: boolean = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private employeeService: EmployeeService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.showForm = false;

    this.initForm();

    const id = this.activatedRoute.snapshot.paramMap.get('id');

    this.getEmployeeById(Number(id));
  }

  initForm(): void {
    this.formEmployee = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required]
    });
  }

  getEmployeeById(id: number) {
    this.employeeService.getEmployeeById(id).subscribe((response) => {
      this.employee = response;

      this.setFormEmployee(response);

      this.showForm = true;
    });
  }

  private setFormEmployee(employee: Employee): void {
    this.formEmployee.get('firstName')?.setValue(employee.firstName);
    this.formEmployee.get('lastName')?.setValue(employee.lastName);
    this.formEmployee.get('email')?.setValue(employee.email);

    this.formEmployee.updateValueAndValidity();
  }

  editEmployee(employee: Employee): void {
    this.employee.firstName = employee.firstName;
    this.employee.lastName = employee.lastName;
    this.employee.email = employee.email;
    this.employeeService.updateEmployee(this.employee).subscribe((response) => {
      this.router.navigate(['/employee']);
    });
  }
}
