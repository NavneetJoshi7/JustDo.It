import { ConstantValues } from './../constants/constant-values';
import { Injectable } from '@angular/core';
import { mockTasks } from '../constants/mock-tasks-data';

@Injectable()
export class ToDoManagerService {

  static _pendingTasks: Array<any> = mockTasks.pending;
  static _completedTasks: Array<any> = mockTasks.completed;

  constructor() { 

  }

  add(event) {
    var textToAdd = event.target.value;
    ToDoManagerService._pendingTasks.push({text: textToAdd, importance: ConstantValues.TASKS_NOT_URGENT});
    event.target.value = "";
  }

  delete(event) {
    var evTarget = event.target;
    var idx;
    if(evTarget) {
      if(evTarget.classList.contains("completedtaskslist")) {
        ToDoManagerService._completedTasks.forEach(obj => {
            idx = ToDoManagerService._completedTasks.findIndex(obj => obj.text === evTarget.parentElement.innerText.trim());
        });
        ToDoManagerService._completedTasks.splice(idx, 1);
      }
      else if(evTarget.classList.contains("todolist")) {
        ToDoManagerService._pendingTasks.forEach(obj => {
          idx = ToDoManagerService._pendingTasks.findIndex(obj => obj.text === evTarget.parentElement.innerText.trim());
        });
        ToDoManagerService._pendingTasks.splice(idx, 1);
      }
      else {
        console.log("Error deleting.");
      }
    }
  }


}
