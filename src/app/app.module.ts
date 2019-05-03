import { appRoutes } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ToDoListComponent } from './components/to-do-list/to-do-list.component';
import { CompletedTasksListComponent } from './components/completed-tasks-list/completed-tasks-list.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AllTasksComponent } from './components/all-tasks/all-tasks.component';


@NgModule({
  declarations: [
    AppComponent,
    ToDoListComponent,
    CompletedTasksListComponent,
    AllTasksComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatCheckboxModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
