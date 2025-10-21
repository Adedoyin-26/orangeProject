/// <reference types="cypress" />

import Logout from '../../pageObjects/Logout';
import Login from '../../pageObjects/Login';

describe('HRM logout', () => {
    it('Successful logout test', () => {

        const lgn = new Login();

        const lgt = new Logout();

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

        cy.wait(5000);

        cy.fixture('Orangehrm').then((data) => {
            lgn.enterUsername(data.username);
            lgn.enterPassword(data.password);
            lgn.clickLogin();
            lgn.verifyLogin(data.expectedTitle);

            cy.wait(5000);

            lgt.clickUserDropdown();

            cy.wait(2000);
            
            lgt.clickLogout();

            cy.url().should('include', '/auth/login');
        });
    });
});