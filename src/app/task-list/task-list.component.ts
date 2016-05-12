import { Component, OnInit } from '@angular/core';
import { TaskService } from './task.service';
import { Task } from './';

@Component({
  moduleId: module.id,
  selector: 'task-list',
  templateUrl: 'task-list.component.html',
  styleUrls: ['task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks: Task[];

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.tasks = this.taskService.getTasks();
  }

  onClick(task: Task) {
    task.selected = task.selected ? false : true;
  }

}
