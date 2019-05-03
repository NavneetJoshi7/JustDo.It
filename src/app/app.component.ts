import { mockTasks } from './constants/mock-tasks-data';
import { ConstantValues } from './constants/constant-values';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  viewCategories: Array<any> = ConstantValues.VIEW_CATEGORIES;
  viewingOnlyCompletedTasks: boolean = false;
  pendingTasks: Array<any>;

  ngOnInit() {
  }

  addTask(event) {
    var textToAdd = event.target.value;
    this.pendingTasks.push({text: textToAdd, importance: ConstantValues.TASKS_NOT_URGENT});
  }

}
