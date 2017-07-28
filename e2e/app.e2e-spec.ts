import { browser } from 'protractor';
import { NgTestPage } from './app.po';

describe('App: ngTest - Welcome Screen', () => {
  let page: NgTestPage;

  beforeEach(() => {
    page = new NgTestPage();
  });

  it('should contain button with text `PROCEED`', () => {
    page.navigateTo();
    expect(page.getButtonText()).toEqual('PROCEED');
  });

  it('should navigate `Personal Details Screen` when `PROCEED` button is clicked', () => {
    page.navigateTo();
    page.getProceedButton().click();

    expect(browser.getCurrentUrl()).toEqual(browser.baseUrl + '/#/personal');
  });
});
