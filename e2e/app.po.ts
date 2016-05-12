export class PomodoroPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('pomodoro-app h1')).getText();
  }
}
