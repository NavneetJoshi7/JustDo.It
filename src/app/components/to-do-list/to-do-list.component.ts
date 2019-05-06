import { AppComponent } from './../../app.component';
import { ToDoManagerService } from './../../services/to-do-manager.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {

  @Input() id: string;
  pendingTasks: Array<any>;
  //isChecked: boolean = false;

  constructor(appComponent: AppComponent, private todoService: ToDoManagerService) {
    appComponent.viewingOnlyCompletedTasks = false;
  }

  ngOnInit() {
    this.pendingTasks = ToDoManagerService._pendingTasks;
  }

  trackByPendingTasks(index, item) {
    return index;
  }

  editTask(event) {
    this.todoService.edit(event);
  }

  deleteTask(event) {
    this.todoService.delete(event);
  }

  moveToCompletedTasks(event) {
    this.todoService.move(event);
    //this.isChecked = false;
  }

  changeTag(event) {
    this.todoService.changeTag(event);
  }

}
