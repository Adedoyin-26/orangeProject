/// <reference types="cypress" />

import Info from '../../pageObjects/Info';
import Login from '../../pageObjects/Login';

describe('HRM login', () => {
    beforeEach(() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

        cy.wait(5000);
    });

   it('Successful login test', () => {

        const lgn = new Login();
        
        cy.fixture('Orangehrm').then((data) => {
            lgn.enterUsername(data.username);
            lgn.enterPassword(data.password);
            lgn.clickLogin();
            lgn.verifyLogin(data.expectedTitle);
    });
    });

    it('Negative login test', () => {
        const lgn = new Login();
        
        cy.fixture('Orangehrm').then((data) => {
            lgn.enterUsername(data.name);
            lgn.enterPassword(data.password);
            lgn.clickLogin();
            lgn.verifyLoginNegative('Invalid credentials');
    });
    });

    it('Blank login test', () => {
        const lgn = new Login();
        
        cy.fixture('Orangehrm').then((data) => {
            lgn.clickLogin();
            lgn.verifyEmptyLogin('Required');
    });
    });

});
