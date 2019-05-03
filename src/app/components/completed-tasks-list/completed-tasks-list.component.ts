import { ConstantValues } from './../../constants/constant-values';
import { AppComponent } from './../../app.component';
import { mockTasks } from './../../constants/mock-tasks-data';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-completed-tasks-list',
  templateUrl: './completed-tasks-list.component.html',
  styleUrls: ['./completed-tasks-list.component.css']
})
export class CompletedTasksListComponent implements OnInit {

  completedTaskList: Array<any>;

  constructor(appComponent: AppComponent, router: Router) {
    if(router.url.includes(ConstantValues.ROUTE_URL_COMPLETED_TASKS)) {
      appComponent.viewingOnlyCompletedTasks = true;
    }
  }

  ngOnInit() {
    this.completedTaskList = mockTasks.completed;
  }

}
