import { ConstantValues } from './constants/constant-values';
import { AllTasksComponent } from './components/all-tasks/all-tasks.component';
import { CompletedTasksListComponent } from './components/completed-tasks-list/completed-tasks-list.component';
import { ToDoListComponent } from './components/to-do-list/to-do-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const appRoutes: Routes = [
  { path: '', redirectTo: '/'+ ConstantValues.ROUTE_URL_ALL_TASKS, pathMatch: 'full' },
  { path: ConstantValues.ROUTE_URL_ALL_TASKS, component: AllTasksComponent},
  { path: ConstantValues.ROUTE_URL_PENDING_TASKS, component: ToDoListComponent},
  { path: ConstantValues.ROUTE_URL_COMPLETED_TASKS, component: CompletedTasksListComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
