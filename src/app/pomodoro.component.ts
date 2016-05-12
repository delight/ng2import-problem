import { Component } from '@angular/core';
import { TaskListComponent, TaskService } from './task-list';

@Component({
  moduleId: module.id,
  selector: 'pomodoro-app',
  templateUrl: 'pomodoro.component.html',
  styleUrls: ['pomodoro.component.css'],
  directives: [TaskListComponent],
  providers: [TaskService]
})
export class PomodoroAppComponent {
  title = 'pomodoro works!';
}
