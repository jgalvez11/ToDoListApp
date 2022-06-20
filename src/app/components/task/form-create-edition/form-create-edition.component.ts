import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Employee } from 'src/app/models/employee';
import { Task } from 'src/app/models/task';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-form-create-edition',
  templateUrl: './form-create-edition.component.html',
  styleUrls: ['./form-create-edition.component.scss']
})
export class FormCreateEditionComponent implements OnInit {
  @Input() formTask!: FormGroup;
  @Input() task!: Task;
  @Output() sendTask: EventEmitter<Task> = new EventEmitter();
  textButtonAccept: string = 'Crear';
  employeeList: Employee[] = [];

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    if (this.task) {
      this.textButtonAccept = 'Editar';
    }

    this.getAllEmployees();
  }

  createOrEditEmployee(): void {
    const employee = this.employeeList.filter(
      (item) => item.id === Number(this.formTask.get('employee')?.value)
    )[0];

    this.task = {
      description: this.formTask.get('description')?.value,
      status: this.formTask.get('status')?.value,
      executionDate: this.formTask.get('executionDate')?.value,
      // employee
    };

    this.sendTask.emit(this.task);
  }

  getAllEmployees(): void {
    this.employeeService
      .getAllEmployees()
      .subscribe((response) => (this.employeeList = response));
  }
}
