import { Injectable } from '@angular/core';
import { Task } from './';

@Injectable()
export class TaskService {

  constructor() {}

  getTasks(): Task[] {
    return [
      new Task (1, 'clean up'),
      new Task (2, 'learn ng2', true)
    ];
  }

}
