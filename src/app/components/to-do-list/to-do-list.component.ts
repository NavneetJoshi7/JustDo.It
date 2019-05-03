import { mockTasks } from './../../constants/mock-tasks-data';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {

  pendingTasks: Array<any>;

  constructor() {
  }

  ngOnInit() {
    this.pendingTasks = mockTasks.pending;
  }

  trackByPendingTasks(index, item) {
    return index;
  }

}
