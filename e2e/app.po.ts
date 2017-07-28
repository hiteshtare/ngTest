import { browser, element, by } from 'protractor';

export class NgTestPage {
  navigateTo() {
    return browser.get('/#/welcome');
  }

  getButtonText() {
    return element(by.name('proceed')).getText();
  }

  getProceedButton() {
    return element(by.name('proceed'));
  }
}
