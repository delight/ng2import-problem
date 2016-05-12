import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { PomodoroAppComponent, environment } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(PomodoroAppComponent);
