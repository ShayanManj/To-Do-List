import { Component } from '@angular/core';
import {
  CdkDragDrop,
  CdkDrag,
  CdkDropList,
  CdkDropListGroup,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

interface Task {
  text: string;
  completed: boolean;
  editing: boolean;
}

@Component({
  selector: 'app-active-completed',
  templateUrl: './active-completed.component.html',
  styleUrls: ['./active-completed.component.css']
})
export class ActiveCompletedComponent {
  activeTasks: Task[] = [];
  completedTasks: Task[] = [];
  newTask: string = '';

  addTask() {
    if (this.newTask) {
      this.activeTasks.push({ text: this.newTask, completed: false, editing: false });
      this.newTask = '';
    }
  }

  deleteTask(task: Task) {
    const index = this.activeTasks.indexOf(task);
    if (index > -1) {
      this.activeTasks.splice(index, 1);
    }
    const completedIndex = this.completedTasks.indexOf(task);
    if (completedIndex > -1) {
      this.completedTasks.splice(completedIndex, 1);
    }
  }

  onTaskCompletionChange(task: Task) {
    if (task.completed) {
      this.moveTaskToCompleted(task);
    } else {
      this.moveTaskToActive(task);
    }
  }

  moveTaskToCompleted(task: Task) {
    const index = this.activeTasks.indexOf(task);
    if (index > -1) {
      const completedTask = this.activeTasks.splice(index, 1)[0];
      completedTask.editing = false;
      completedTask.completed=false; 
      this.completedTasks.push(completedTask);
    }
  }

  moveTaskToActive(task: Task) {
    const index = this.completedTasks.indexOf(task);
    if (index > -1) {
      const activeTask = this.completedTasks.splice(index, 1)[0];
      activeTask.completed = false;
      activeTask.editing = false; 
      this.activeTasks.push(activeTask);
    }
  }



  startEditing(task: Task) {
    task.editing = true;
  }

  saveTask(task: Task) {
    task.editing = false;
  }

  cancelEditing(task: Task) {
    task.editing = false;
  }

  drop(event: CdkDragDrop<any>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
}


