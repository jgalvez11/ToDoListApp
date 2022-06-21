import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from 'src/app/models/task';
import { TaskService } from 'src/app/services/task.service';

import * as moment from 'moment';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  task!: Task;
  formTask!: FormGroup;
  showForm: boolean = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private taskService: TaskService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.showForm = false;

    this.initForm();

    const id = this.activatedRoute.snapshot.paramMap.get('id');

    this.getTaskById(Number(id));
  }

  initForm(): void {
    this.formTask = this.fb.group({
      description: ['', Validators.required],
      status: ['', Validators.required],
      executionDate: [''],
      employee: ['', Validators.required]
    });
  }

  getTaskById(id: number) {
    this.taskService.getTaskById(id).subscribe((response) => {
      this.task = response;

      this.setFormTask(response);

      this.showForm = true;
    });
  }

  private setFormTask(task: Task): void {
    const executionDate = task.executionDate
      ? moment(task.executionDate).format('yyyy-MM-DD')
      : null;
    this.formTask.get('description')?.setValue(task.description);
    this.formTask.get('status')?.setValue(task.status);
    this.formTask.get('executionDate')?.setValue(executionDate);
    this.formTask.get('employee')?.setValue(task.employee?.id);

    this.formTask.updateValueAndValidity();
  }

  editTask(task: Task): void {
    this.task.description = task.description;
    this.task.status = task.status;
    this.task.executionDate = task.executionDate;
    this.task.employee = task.employee;

    this.taskService.updateTask(this.task).subscribe((response) => {
      this.router.navigate(['/task']);
    });
  }
}
