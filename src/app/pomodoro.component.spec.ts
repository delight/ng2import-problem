import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { PomodoroAppComponent } from '../app/pomodoro.component';

beforeEachProviders(() => [PomodoroAppComponent]);

describe('App: Pomodoro', () => {
  it('should create the app',
      inject([PomodoroAppComponent], (app: PomodoroAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'pomodoro works!\'',
      inject([PomodoroAppComponent], (app: PomodoroAppComponent) => {
    expect(app.title).toEqual('pomodoro works!');
  }));
});
