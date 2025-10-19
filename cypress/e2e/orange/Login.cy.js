/// <reference types="cypress" />

import Login from '../../pageObjects/Login';

describe('HRM login', () => {
   it('Login test', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        
        cy.wait(5000);

        const lgn = new Login();
        
        cy.fixture('Orangehrm').then((data) => {
            lgn.enterUsername(data.username);
            lgn.enterPassword(data.password);
            lgn.clickLogin();
            lgn.verifyLogin(data.expectedTitle);
    });
    });
});