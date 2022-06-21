import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from 'src/app/models/task';
import { TaskService } from 'src/app/services/task.service';
import { UtilService } from 'src/app/utils/util.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  taskList: Task[] = [];

  constructor(
    private router: Router,
    private utilService: UtilService,
    private taskService: TaskService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');

    if (id) {
      this.getAllTasksByEmployeeId(Number(id));
    } else {
      this.getAllTasks();
    }
  }

  editTask(task: Task) {
    localStorage.setItem('ID_TASK', String(task.id));
    this.router.navigate(['/task/edit', task.id]);
  }

  deleteTask(task: Task): void {
    this.taskService.deleteTaskById(task.id || 0).subscribe((response) => {
      if (response) {
        this.taskList = this.utilService.removeItemFromArray(
          this.taskList,
          task
        ) as Task[];
      } else {
        Swal.fire({
          text: `No se ha podido eliminar la tarea # ${task.id}`,
          icon: 'error',
          confirmButtonText: 'Aceptar'
        });
      }
    });
  }

  showModalToDelete(task: Task): void {
    Swal.fire({
      title: 'Eliminar Tarea',
      text: `Estás seguro/a de eliminar la tarea # ${task.id}`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Si',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.isConfirmed) {
        this.deleteTask(task);
      }
    });
  }

  getAllTasks() {
    this.taskService.getAllTasks().subscribe((data) => {
      this.taskList = data;
    });
  }

  getAllTasksByEmployeeId(id: number) {
    this.taskService.getTasksByEmployeeId(id).subscribe((data) => {
      this.taskList = data;
    });
  }
}
