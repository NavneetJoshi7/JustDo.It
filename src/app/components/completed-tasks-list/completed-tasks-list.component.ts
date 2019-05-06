import { ConstantValues } from './../../constants/constant-values';
import { AppComponent } from './../../app.component';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToDoManagerService } from '../../services/to-do-manager.service';

@Component({
  selector: 'app-completed-tasks-list',
  templateUrl: './completed-tasks-list.component.html',
  styleUrls: ['./completed-tasks-list.component.css']
})
export class CompletedTasksListComponent implements OnInit {

  completedTaskList: Array<any>;

  constructor(appComponent: AppComponent, router: Router, private todoService: ToDoManagerService) {
    if(router.url.includes(ConstantValues.ROUTE_URL_COMPLETED_TASKS)) {
      appComponent.viewingOnlyCompletedTasks = true;
    }
  }

  ngOnInit() {
    this.completedTaskList = ToDoManagerService._completedTasks;
  }

  trackByCompletedTasks(index, item) {
    return index;
  }

  deleteTask(event) {
    this.todoService.delete(event);
  }

}
