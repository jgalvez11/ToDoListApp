import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskComponent } from './components/task/task.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./components/home/home.module').then((m) => m.HomeModule)
  },
  {
    path: 'employee',
    loadChildren: () =>
      import('./components/employee/employee.module').then(
        (m) => m.EmployeeModule
      )
  },
  {
    path: 'task',
    loadChildren: () =>
      import('./components/task/task.module').then((m) => m.TaskModule)
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
