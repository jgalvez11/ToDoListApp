import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { EditComponent } from './edit/edit.component';
import { EmployeeComponent } from './employee.component';
import { CreateComponent } from './create/create.component';
import { EmployeeRoutingModule } from './employee-routing.module';
import { FormCreateEditionComponent } from './form-create-edition/form-create-edition.component';

@NgModule({
  declarations: [
    EmployeeComponent,
    EditComponent,
    CreateComponent,
    FormCreateEditionComponent
  ],
  imports: [CommonModule, ReactiveFormsModule, EmployeeRoutingModule]
})
export class EmployeeModule {}
