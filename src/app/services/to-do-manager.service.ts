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

  search(event) {
    var searchVal = event.target.previousElementSibling.value;
    ToDoManagerService._pendingTasks.filter(el => el.text === searchVal);
    ToDoManagerService._completedTasks.filter(el => el.text === searchVal);
  }

  edit(event) {
    var newText = event.target.innerText.trim();
    var label_idx = event.target.classList.item(1);
    if(event.target && event.target.classList.contains("pending-text")) {
      ToDoManagerService._pendingTasks[label_idx].text = newText;
      alert("Pending task edited successfully!");
    }
    else if(event.target && event.target.classList.contains("completed-text")) {
      ToDoManagerService._completedTasks[label_idx].text = newText;
      alert("Completed task changed successfully!");
    }
    else {
      console.log("Error editing");
    }

  }

  delete(event) {
    var evTarget = event.target;
    var idx;
    var classListArr = Array.from(evTarget.classList);
    var btnclassvalue = classListArr.find(name => String(name).includes("delete_"));
    if(evTarget) {
      if(evTarget.classList.contains("completedtaskslist")) {
        idx = String(btnclassvalue).split("_").pop();
        ToDoManagerService._completedTasks.splice(idx, 1);
        alert("Completed task deleted successfully!");
      }
      else if(evTarget.classList.contains("todolist")) {
        idx = String(btnclassvalue).split("_").pop();
        ToDoManagerService._pendingTasks.splice(idx, 1);
        alert("Pending task deleted successfully!");
      }
      else {
        console.log("Error deleting.");
      }
    }
  }

  move(event) {
    if(event.checked) {
      var pendingTaskArrIdx = event.source.id.split("-").pop();
      var pendingTaskObject = ToDoManagerService._pendingTasks[pendingTaskArrIdx];
      ToDoManagerService._pendingTasks.splice(pendingTaskArrIdx, 1);
      ToDoManagerService._completedTasks.push(pendingTaskObject);
      event.checked = false;
    }
  }

  changeTag(event) {
    var evTarget = event.target;
    var idx;
    var classListArr = Array.from(evTarget.classList);
    var btnclassvalue = classListArr.find(name => String(name).includes("btn_"));
    if(classListArr.includes("changetag-btn-todolist")) { 
      idx = String(btnclassvalue).split("_").pop();
      if(ToDoManagerService._pendingTasks[idx].importance === ConstantValues.TASKS_URGENT) {
        ToDoManagerService._pendingTasks[idx].importance = ConstantValues.TASKS_NOT_URGENT;
      }
      else {
        ToDoManagerService._pendingTasks[idx].importance = ConstantValues.TASKS_URGENT;
      }
    }
    else if(classListArr.includes("changetag-btn-completed")) {
      idx = String(btnclassvalue).split("_").pop();
      if(ToDoManagerService._completedTasks[idx].importance === ConstantValues.TASKS_URGENT) {
        ToDoManagerService._completedTasks[idx].importance = ConstantValues.TASKS_NOT_URGENT;
      }
      else {
        ToDoManagerService._completedTasks[idx].importance = ConstantValues.TASKS_URGENT;
      }
    }
    else {
      console.log("Error changing tag");
    }
  }


}
