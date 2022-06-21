import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Task } from 'src/app/models/task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  formTask!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private taskService: TaskService
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.formTask = this.fb.group({
      description: ['', Validators.required],
      status: ['', Validators.required],
      executionDate: [''],
      employee: ['', Validators.required]
    });
  }

  createTask(task: Task): void {
    this.taskService.saveTask(task).subscribe((response) => {
      this.router.navigate(['/task']);
    });
  }
}
