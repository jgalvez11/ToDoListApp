import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Employee } from 'src/app/models/employee';

@Component({
  selector: 'app-form-create-edition',
  templateUrl: './form-create-edition.component.html',
  styleUrls: ['./form-create-edition.component.scss']
})
export class FormCreateEditionComponent implements OnInit {
  @Input() formEmployee!: FormGroup;
  @Input() employee!: Employee;
  @Output() sendEmployee: EventEmitter<Employee> = new EventEmitter();
  textButtonAccept: string = 'Crear';

  constructor() {}

  ngOnInit(): void {
    if (this.employee) {
      this.textButtonAccept = 'Editar';
    }
  }

  createOrEditEmployee(): void {
    this.employee = {
      firstName: this.formEmployee.get('firstName')?.value,
      lastName: this.formEmployee.get('lastName')?.value,
      email: this.formEmployee.get('email')?.value
    };
    this.sendEmployee.emit(this.employee);
  }
}
