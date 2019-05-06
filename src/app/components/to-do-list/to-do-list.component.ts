import { ToDoManagerService } from './../../services/to-do-manager.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {

  pendingTasks: Array<any>;

  constructor(private todoService: ToDoManagerService) {
  }

  ngOnInit() {
    this.pendingTasks = ToDoManagerService._pendingTasks;
  }

  trackByPendingTasks(index, item) {
    return index;
  }

  deleteTask(event) {
    this.todoService.delete(event);
  }

}
