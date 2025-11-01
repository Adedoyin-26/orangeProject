/// <reference types="cypress" />

import Info from '../../pageObjects/Info';
import Login from '../../pageObjects/Login';

describe('Info Page - Complete Form Interactions', () => {

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

    // ========== Personal Details Tests ==========
    it('Should update Personal Details with all form fields', () => {
        const inf = new Info();

        cy.fixture('Orangehrm').then((data) => {
            inf.clickMyInfo();
            cy.wait(2000);

            cy.scrollTo('top');
            cy.wait(1000);

            inf.enterFirstName(data.personalDetails.firstName);
            inf.enterMiddleName(data.personalDetails.middleName);
            inf.enterLastName(data.personalDetails.lastName);
            inf.enterEmployeeId(data.personalDetails.employeeId);
            inf.enterOtherId(data.personalDetails.otherId);
            inf.enterDriverLicense(data.personalDetails.driverLicense);
            inf.enterLicenseExpiryDate(data.personalDetails.licenseExpiryDate);

            cy.scrollTo('center');
            cy.wait(1000);

            inf.selectNationality(data.personalDetails.nationality);
            cy.wait(500);
            inf.selectMaritalStatus(data.personalDetails.maritalStatus);
            cy.wait(500);
            inf.enterDateOfBirth(data.personalDetails.dateOfBirth);
            inf.selectGender(data.personalDetails.gender);

            cy.scrollTo('bottom');
            cy.wait(1000);

            inf.clickSaveButton();
            cy.wait(2000);
            inf.verifySuccessMessage();
        });
    });

    it('Should update only First Name and Last Name', () => {
        const inf = new Info();

        cy.fixture('Orangehrm').then((data) => {
            inf.clickMyInfo();
            cy.wait(2000);

            inf.enterFirstName(data.personalDetails.firstName);
            inf.enterLastName(data.personalDetails.lastName);

            inf.clickSaveButton();
            cy.wait(2000);
            inf.verifySuccessMessage();
            inf.verifyFirstName(data.personalDetails.firstName);
            inf.verifyLastName(data.personalDetails.lastName);
        });
    });

    it('Should select Nationality and Marital Status', () => {
        const inf = new Info();

        cy.fixture('Orangehrm').then((data) => {
            inf.clickMyInfo();
            cy.wait(2000);

            cy.scrollTo('center');
            cy.wait(1000);

            inf.selectNationality(data.personalDetails.nationality);
            cy.wait(500);
            inf.selectMaritalStatus(data.personalDetails.maritalStatus);
            cy.wait(500);

            cy.scrollTo('bottom');
            inf.clickSaveButton();
            cy.wait(2000);
            inf.verifySuccessMessage();
        });
    });

    // ========== Contact Details Tests ==========
    it('Should update Contact Details with all fields', () => {
        const inf = new Info();

        cy.fixture('Orangehrm').then((data) => {
            inf.clickMyInfo();
            cy.wait(2000);
            inf.clickContactInfo();
            cy.wait(2000);

            cy.scrollTo('top');
            cy.wait(1000);

            inf.enterStreet1(data.contactDetails.street1);
            inf.enterStreet2(data.contactDetails.street2);
            inf.enterCity(data.contactDetails.city);
            inf.enterStateProvince(data.contactDetails.stateProvince);
            inf.enterZipPostalCode(data.contactDetails.zipPostalCode);

            cy.scrollTo('center');
            cy.wait(1000);

            inf.selectCountry(data.contactDetails.country);
            cy.wait(500);

            inf.enterHomeTelephone(data.contactDetails.homeTelephone);
            inf.enterMobile(data.contactDetails.mobile);
            inf.enterWorkTelephone(data.contactDetails.workTelephone);

            cy.scrollTo('bottom');
            cy.wait(1000);

            inf.enterWorkEmail(data.contactDetails.workEmail);
            inf.enterOtherEmail(data.contactDetails.otherEmail);

            inf.clickSaveButton();
            cy.wait(2000);
            inf.verifySuccessMessage();
        });
    });

    it('Should update City and Mobile number', () => {
        const inf = new Info();

        cy.fixture('Orangehrm').then((data) => {
            inf.clickMyInfo();
            cy.wait(2000);
            inf.clickContactInfo();
            cy.wait(2000);

            inf.enterCity(data.contactDetails.city);
            inf.enterMobile(data.contactDetails.mobile);

            inf.clickSaveButton();
            cy.wait(2000);
            inf.verifySuccessMessage();
            inf.verifyCity(data.contactDetails.city);
            inf.verifyMobile(data.contactDetails.mobile);
        });
    });

    // ========== Emergency Contacts Tests ==========
    it('Should add Emergency Contact with all fields', () => {
        const inf = new Info();

        cy.fixture('Orangehrm').then((data) => {
            inf.clickMyInfo();
            cy.wait(2000);
            inf.clickEmergencyContacts();
            cy.wait(2000);

            inf.clickAddButton();
            cy.wait(2000);

            inf.enterEmergencyName(data.emergencyContact.name);
            inf.enterEmergencyRelationship(data.emergencyContact.relationship);
            inf.enterEmergencyHomeTelephone(data.emergencyContact.homeTelephone);
            inf.enterEmergencyMobile(data.emergencyContact.mobile);
            inf.enterEmergencyWorkTelephone(data.emergencyContact.workTelephone);

            inf.clickSaveButton();
            cy.wait(2000);
            inf.verifySuccessMessage();
            inf.verifyEmergencyContactAdded(data.emergencyContact.name);
        });
    });

    it('Should add Emergency Contact with required fields only', () => {
        const inf = new Info();

        cy.fixture('Orangehrm').then((data) => {
            inf.clickMyInfo();
            cy.wait(2000);
            inf.clickEmergencyContacts();
            cy.wait(2000);

            inf.clickAddButton();
            cy.wait(2000);

            inf.enterEmergencyName(data.emergencyContact.name);
            inf.enterEmergencyRelationship(data.emergencyContact.relationship);

            inf.clickSaveButton();
            cy.wait(2000);
            inf.verifySuccessMessage();
        });
    });

    // ========== Dependents Tests ==========
    it('Should add Dependent with all fields', () => {
        const inf = new Info();

        cy.fixture('Orangehrm').then((data) => {
            inf.clickMyInfo();
            cy.wait(2000);
            inf.clickDependents();
            cy.wait(2000);

            inf.clickAddButton();
            cy.wait(2000);

            inf.enterDependentName(data.dependent.name);
            inf.selectDependentRelationship(data.dependent.relationship);
            cy.wait(500);
            inf.enterDependentDateOfBirth(data.dependent.dateOfBirth);

            inf.clickSaveButton();
            cy.wait(2000);
            inf.verifySuccessMessage();
            inf.verifyDependentAdded(data.dependent.name);
        });
    });

    it('Should add Dependent with Child relationship', () => {
        const inf = new Info();

        cy.fixture('Orangehrm').then((data) => {
            inf.clickMyInfo();
            cy.wait(2000);
            inf.clickDependents();
            cy.wait(2000);

            inf.clickAddButton();
            cy.wait(2000);

            inf.enterDependentName('Sarah Johnson');
            inf.selectDependentRelationship('Child');
            cy.wait(500);
            inf.enterDependentDateOfBirth('2015-15-03');

            inf.clickSaveButton();
            cy.wait(2000);
            inf.verifySuccessMessage();
        });
    });

    // ========== Immigration Tests ==========
    it('Should add Immigration record with all fields', () => {
        const inf = new Info();

        cy.fixture('Orangehrm').then((data) => {
            inf.clickMyInfo();
            cy.wait(2000);
            inf.clickImmigration();
            cy.wait(2000);

            inf.clickAddButton();
            cy.wait(2000);

            cy.scrollTo('top');
            cy.wait(1000);

            inf.selectDocumentType(data.immigration.documentType);
            cy.wait(500);
            inf.enterImmigrationNumber(data.immigration.number);
            inf.enterImmigrationIssuedDate(data.immigration.issuedDate);
            inf.enterImmigrationExpiryDate(data.immigration.expiryDate);

            cy.scrollTo('center');
            cy.wait(1000);

            inf.enterEligibleStatus(data.immigration.eligibleStatus);
            inf.selectImmigrationCountry(data.immigration.country);
            cy.wait(500);
            inf.enterIssuedBy(data.immigration.issuedBy);
            inf.enterReviewDate(data.immigration.reviewDate);

            cy.scrollTo('bottom');
            cy.wait(1000);

            inf.enterImmigrationComments(data.immigration.comments);

            inf.clickSaveButton();
            cy.wait(2000);
            inf.verifySuccessMessage();
            inf.verifyImmigrationRecordAdded(data.immigration.number);
        });
    });

    it('Should add Immigration record with Passport document type', () => {
        const inf = new Info();

        cy.fixture('Orangehrm').then((data) => {
            inf.clickMyInfo();
            cy.wait(2000);
            inf.clickImmigration();
            cy.wait(2000);

            inf.clickAddButton();
            cy.wait(2000);

            inf.selectDocumentType('Passport');
            cy.wait(500);
            inf.enterImmigrationNumber('P987654321');
            inf.enterImmigrationIssuedDate('2020-01-01');
            inf.enterImmigrationExpiryDate('2030-31-12');

            inf.clickSaveButton();
            cy.wait(2000);
            inf.verifySuccessMessage();
        });
    });

    // ========== Membership Tests ==========
    it('Should add Membership with all fields', () => {
        const inf = new Info();

        cy.fixture('Orangehrm').then((data) => {
            inf.clickMyInfo();
            cy.wait(2000);
            inf.clickMembership();
            cy.wait(2000);

            inf.clickAddButton();
            cy.wait(2000);

            cy.scrollTo('top');
            cy.wait(1000);

            inf.selectMembership(data.membership.membership);
            cy.wait(500);
            inf.selectSubscriptionPaidBy(data.membership.subscriptionPaidBy);
            cy.wait(500);
            inf.enterSubscriptionAmount(data.membership.subscriptionAmount);
            inf.selectCurrency(data.membership.currency);
            cy.wait(500);

            cy.scrollTo('bottom');
            cy.wait(1000);

            inf.enterSubscriptionCommenceDate(data.membership.subscriptionCommenceDate);
            inf.enterSubscriptionRenewalDate(data.membership.subscriptionRenewalDate);

            inf.clickSaveButton();
            cy.wait(2000);
            inf.verifySuccessMessage();
            inf.verifyMembershipAdded(data.membership.membership);
        });
    });

    it('Should add Membership with Company paid subscription', () => {
        const inf = new Info();

        cy.fixture('Orangehrm').then((data) => {
            inf.clickMyInfo();
            cy.wait(2000);
            inf.clickMembership();
            cy.wait(2000);

            inf.clickAddButton();
            cy.wait(2000);

            inf.selectMembership('British Computer Society (BCS)');
            cy.wait(500);
            inf.selectSubscriptionPaidBy('Company');
            cy.wait(500);
            inf.enterSubscriptionAmount('500');
            inf.selectCurrency('United States Dollar');
            cy.wait(500);

            inf.clickSaveButton();
            cy.wait(2000);
            inf.verifySuccessMessage();
        });
    });

    it('Should add Membership with Individual paid subscription', () => {
        const inf = new Info();

        cy.fixture('Orangehrm').then((data) => {
            inf.clickMyInfo();
            cy.wait(2000);
            inf.clickMembership();
            cy.wait(2000);

            inf.clickAddButton();
            cy.wait(2000);

            inf.selectMembership('Association for Computing Machinery (ACM)');
            cy.wait(500);
            inf.selectSubscriptionPaidBy('Individual');
            cy.wait(500);
            inf.enterSubscriptionAmount('250');
            inf.selectCurrency('Euro');
            cy.wait(500);

            inf.clickSaveButton();
            cy.wait(2000);
            inf.verifySuccessMessage();
        });
    });

    // ========== Navigation Tests ==========
    it('Should verify all Info page sections are accessible', () => {
        const inf = new Info();

        cy.fixture('Orangehrm').then((data) => {
            // Personal Details
            inf.clickMyInfo();
            cy.wait(2000);
            inf.verifyMyInfo(data.expectedHeader);

            // Contact Details
            inf.clickContactInfo();
            cy.wait(2000);
            inf.verifyMyContactDetails(data.expectedHeader1);

            // Emergency Contacts
            inf.clickEmergencyContacts();
            cy.wait(2000);

            // Dependents
            inf.clickDependents();
            cy.wait(2000);
            inf.verifyDependents(data.expectedHeader3);

            // Immigration
            inf.clickImmigration();
            cy.wait(2000);

            // Membership
            inf.clickMembership();
            cy.wait(2000);
            inf.verifyMembership(data.expectedHeader5);
        });
    });

});


