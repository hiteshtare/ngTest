import { OccupationPage } from './Occupation.po';
import { browser, element, by } from 'protractor';

describe('App: ngTest - Occupation Screen', function () {
    let page: OccupationPage;

    beforeEach(() => {
        page = new OccupationPage();
    });

    it('should contain button with text `Next`', () => {
        page.navigateTo();
        expect(page.getButtonText()).toEqual('Next');
    });
});
