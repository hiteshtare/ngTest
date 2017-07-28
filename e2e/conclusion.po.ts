import { browser, element, by, Key } from 'protractor';

export class ConclusionPage {
    navigateTo() {
        return browser.get('/#/conclusion');
    }
}
