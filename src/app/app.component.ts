import { mockTasks } from './constants/mock-tasks-data';
import { ConstantValues } from './constants/constant-values';
import { Component } from '@angular/core';
import { ToDoManagerService } from './services/to-do-manager.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  viewCategories: Array<any> = ConstantValues.VIEW_CATEGORIES;
  viewingOnlyCompletedTasks: boolean = false;

  constructor(private todoService: ToDoManagerService) {

  }

  ngOnInit() {
  }

  addTask(event) {
    this.todoService.add(event);
  }

}
