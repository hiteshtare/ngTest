import { browser, element, by, Key } from 'protractor';

export class PersonalPage {
    navigateTo() {
        return browser.get('/#/personal');
    }

    getButtonText() {
        return element(by.buttonText('Next')).getText();
    }

    getNextButton() {
        return element(by.buttonText('Next'));
    }

    getNextButtonisEnabledProperty() {
        return element(by.buttonText('Next')).isEnabled();
    }

    getDateOfBirthInputValue() {
        return element(by.id('dob')).getAttribute('value');
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
