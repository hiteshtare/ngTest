import { LoanPage } from './loan.po';
import { browser, element, by } from 'protractor';

describe('App: ngTest - Loan Screen', function () {
    let page: LoanPage;

    beforeEach(() => {
        page = new LoanPage();
    });

    it('should contain button with text `Next`', () => {
        page.navigateTo();
        expect(page.getButtonText()).toEqual('Next');
    });
});
