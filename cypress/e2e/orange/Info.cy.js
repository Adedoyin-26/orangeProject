/// <reference types="cypress" />   

import Info from '../../pageObjects/Info';
import Login from '../../pageObjects/Login';

describe('Interact with Info page', () => {

    beforeEach(() => {
    
         cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

        cy.wait(5000);

        const lgn = new Login();

        cy.fixture('Orangehrm').then((data) => {
            lgn.enterUsername(data.username);
            lgn.enterPassword(data.password);
            lgn.clickLogin();
            lgn.verifyLogin(data.expectedTitle);

            cy.wait(5000);

});
});
    it('Interact with My Info', () => {

        const inf = new Info();

        cy.fixture('Orangehrm').then((data) => {
            inf.clickMyInfo();

            cy.wait(2000);

            inf.verifyMyInfo(data.expectedHeader);
    });
});

    it('Interact with Contact Details', () => {

        const inf = new Info();

        cy.fixture('Orangehrm').then((data) => {

        inf.clickMyInfo();

        cy.wait(2000);

        inf.clickContactInfo();

        cy.wait(2000);

        inf.verifyMyContactDetails(data.expectedHeader1);
    });

});

    it('Interact with Emergency Contacts', () => {

        const inf = new Info();

        cy.fixture('Orangehrm').then((data) => {

        inf.clickMyInfo();

        cy.wait(2000);

        inf.clickEmergencyContacts();

        cy.wait(2000);

        inf.verifyEmergencyContacts(data.expectedHeader2);
    });
});

    it('Interact with Dependents', () => {

        const inf = new Info();

        cy.fixture('Orangehrm').then((data) => {

        inf.clickMyInfo();

        cy.wait(2000);

        inf.clickDependents();

        cy.wait(2000);

        inf.verifyDependents(data.expectedHeader3);
    });
});
    it('Interact with Immigration', () => {

        const inf = new Info();

        cy.fixture('Orangehrm').then((data) => {

        inf.clickMyInfo();

        cy.wait(2000);

        inf.clickImmigration();

        cy.wait(2000);

        inf.verifyImmigration(data.expectedHeader4);
    });
});

    it('Interact with Membership', () => {

        const inf = new Info();

        cy.fixture('Orangehrm').then((data) => {

        inf.clickMyInfo();

        cy.wait(2000);

        inf.clickMembership();

        cy.wait(2000);

        inf.verifyMembership(data.expectedHeader5);
    });
});
});
