import { async, TestBed, inject } from '@angular/core/testing';
import { PersonalPage } from './personal.po';
import { browser, element, by } from 'protractor';

describe('App: ngTest - Personal Screen', function () {
    let page: PersonalPage;

    beforeEach(() => {
        page = new PersonalPage();
    });

    it('should contain button with text `Next`', () => {
        page.navigateTo();
        expect(page.getButtonText()).toEqual('Next');
    });

    it('All input fields should be empty by default', () => {
        page.navigateTo();
        expect(page.getInputValue('firstName')).toBe('');
        expect(page.getInputValue('lastName')).toBe('');
        expect(page.getInputValue('email')).toBe('');
        expect(page.getInputValue('mobileNo')).toBe('');
        // expect(page.getDateOfBirthInputValue()).toBe('');
    });

    it('should set then clear the value of an all inputs', () => {
        page.setInputValue('firstName', 'Hitesh');
        expect(page.getInputValue('firstName')).toBe('Hitesh');
        page.clearInputValue('firstName');
        expect(page.getInputValue('firstName')).toBe('');

        page.setInputValue('lastName', 'Tare');
        expect(page.getInputValue('lastName')).toBe('Tare');
        page.clearInputValue('lastName');
        expect(page.getInputValue('lastName')).toBe('');

        page.setInputValue('email', 'hiteshtare@gmail.com');
        expect(page.getInputValue('email')).toBe('hiteshtare@gmail.com');
        page.clearInputValue('email');
        expect(page.getInputValue('email')).toBe('');

        page.setInputValue('mobileNo', '8082679112');
        expect(page.getInputValue('mobileNo')).toBe('8082679112');
        page.clearInputValue('mobileNo');
        expect(page.getInputValue('mobileNo')).toBe('');
    });

    // it('should navigate `Occupation Details Screen` when all fields are entered and `Next` button is clicked', () => {
    //     page.navigateTo();

    //     page.setInputValue('firstName', 'Hitesh');
    //     page.setInputValue('lastName', 'Tare');
    //     page.setInputValue('email', 'hiteshtare@gmail.com');
    //     page.setInputValue('mobileNo', '8082679112');

    //     page.getNextButton().click();
    //     expect(browser.getCurrentUrl()).toEqual(browser.baseUrl + '/#/occupation');
    // });

    // it('`Next` button should be disabled by default', () => {
    //     page.navigateTo();
    //     expect(page.getNextButtonisEnabledProperty).toBeFalsy();
    // });
});
