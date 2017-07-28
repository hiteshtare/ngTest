import { browser, element, by, Key } from 'protractor';

export class OccupationPage {
    navigateTo() {
        return browser.get('/#/occupation');
    }

    getButtonText() {
        return element(by.buttonText('Next')).getText();
    }

    getNextButton() {
        return element(by.buttonText('Next'));
    }

      getInputValue(inputName: string) {
        return element(by.name(inputName)).getAttribute('value');
    }

    setInputValue(inputName: string, value: string) {
        const elem = element(by.name(inputName));
        return elem.sendKeys(value);
    }

    clearInputValue(inputName: string) {
        return element(by.name(inputName)).clear();
    }
}
