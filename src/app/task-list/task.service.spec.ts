import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { TaskService } from './';

describe('Task Service', () => {
  beforeEachProviders(() => [TaskService]);

  it('should ...',
      inject([TaskService], (service: TaskService) => {
    expect(service).toBeTruthy();
  }));
});
