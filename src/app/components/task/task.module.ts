import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskComponent } from './task.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditComponent } from './edit/edit.component';
import { TaskRoutingModule } from './task-routing.module';
import { CreateComponent } from './create/create.component';
import { FormCreateEditionComponent } from './form-create-edition/form-create-edition.component';

@NgModule({
  declarations: [
    TaskComponent,
    EditComponent,
    CreateComponent,
    FormCreateEditionComponent
  ],
  imports: [CommonModule, ReactiveFormsModule, TaskRoutingModule]
})
export class TaskModule {}
