class Info{
// ========== Navigation Links ==========
info = 'a[href="/web/index.php/pim/viewMyDetails"]';
contact = 'a[href="/web/index.php/pim/contactDetails/empNumber/7"]';
emergency = 'a[href="/web/index.php/pim/viewEmergencyContacts/empNumber/7"]';
dependents = 'a[href="/web/index.php/pim/viewDependents/empNumber/7"]';
immigration = 'a[href="/web/index.php/pim/viewImmigration/empNumber/7"]';
membership = 'a[href="/web/index.php/pim/viewMemberships/empNumber/7"]';

// ========== Headers ==========
expectedHeader = '.oxd-text.oxd-text--h6.orangehrm-main-title';
expectedHeader1 = '.oxd-text.oxd-text--h6.orangehrm-sub-title';
expectedHeader2 = '.oxd-text.oxd-text--span';
expectedHeader3 = '.oxd-text.oxd-text--h6.orangehrm-main-title';
expectedHeader4 = '.oxd-text.oxd-text--span';
expectedHeader5 = '.oxd-button.oxd-button--medium.oxd-button--text';

// ========== Personal Details Form Fields ==========
firstNameField = "input[name='firstName']";
middleNameField = "input[name='middleName']";
lastNameField = "input[name='lastName']";
// employeeIdField = '.oxd-input.oxd-input--active';
// otherIdField = ".oxd-input.oxd-input--active";
// driverLicenseField = "input[placeholder=\"Driver's License Number\"]";
// licenseExpiryDateField = "input[placeholder='yyyy-dd-mm']";
nationalityDropdown = '.oxd-select-text-input';
maritalStatusDropdown = '.oxd-select-text-input';
bloodTypeDropdown = '.oxd-select-text-input';
// dateOfBirthField = "input[placeholder='yyyy-dd-mm']";
genderRadio = "input[type='radio']";

// ========== Contact Details Form Fields ==========
street1Field = ".oxd-input.oxd-input--active";
street2Field = ".oxd-input.oxd-input--active";
cityField = ".oxd-input.oxd-input--active";
stateProvinceField = ".oxd-input.oxd-input--active";
zipPostalCodeField = ".oxd-input.oxd-input--active";
countryDropdown = '.oxd-select-text-input'; 
homeTelephoneField = ".oxd-input.oxd-input--active";
mobileField = ".oxd-input.oxd-input--active";
workTelephoneField = ".oxd-input.oxd-input--active";
workEmailField = ".oxd-input.oxd-input--active";
otherEmailField = ".oxd-input.oxd-input--active";

// ========== Emergency Contacts Form Fields ==========
emergencyNameField = "input[placeholder='Name']";
emergencyRelationshipField = "input[placeholder='Relationship']";
emergencyHomeTelephoneField = "input[placeholder='Home Telephone']";
emergencyMobileField = "input[placeholder='Mobile']";
emergencyWorkTelephoneField = "input[placeholder='Work Telephone']";

// ========== Dependents Form Fields ==========
dependentNameField = "input[placeholder='Name']";
dependentRelationshipDropdown = '.oxd-select-text-input';
dependentDateOfBirthField = "input[placeholder='yyyy-dd-mm']";

// ========== Immigration Form Fields ==========
immigrationNumberField = "input[placeholder='Number']";
immigrationIssuedDateField = "input[placeholder='yyyy-dd-mm']";
immigrationExpiryDateField = "input[placeholder='yyyy-dd-mm']";
immigrationEligibleStatusField = "input[placeholder='Eligible Status']";
immigrationIssuedByField = "input[placeholder='Issued By']";
immigrationReviewDateField = "input[placeholder='yyyy-dd-mm']";
immigrationCommentsField = "textarea[placeholder='Comments']";
documentTypeDropdown = '.oxd-select-text-input';
countryDropdownImmigration = '.oxd-select-text-input';

// ========== Membership Form Fields ==========
membershipDropdown = '.oxd-select-text-input';
subscriptionPaidByDropdown = '.oxd-select-text-input';
subscriptionAmountField = "input[placeholder='Subscription Amount']";
currencyDropdown = '.oxd-select-text-input';
subscriptionCommenceDateField = "input[placeholder='yyyy-dd-mm']";
subscriptionRenewalDateField = "input[placeholder='yyyy-dd-mm']";

// ========== Common Elements ==========
saveButton = "button[type='submit']"; 
addButton = '.oxd-button.oxd-button--medium.oxd-button--secondary';
cancelButton = "button[type='button']";
deleteButton = '.oxd-icon.bi-trash';
editButton = '.oxd-icon.bi-pencil-fill';
successMessage = '.oxd-toast.oxd-toast--success';

// ========== Navigation Methods ==========
clickMyInfo(){
    cy.get(this.info).click();
}

verifyMyInfo(expectedName){
    cy.get(this.expectedHeader).should('contain.text', expectedName);
}

clickContactInfo(){
    cy.get(this.contact).click();
}

verifyMyContactDetails(expectedName1){
    cy.get(this.expectedHeader1).should('contain.text', expectedName1);
}

clickEmergencyContacts(){
    cy.get(this.emergency).click();
}

verifyEmergencyContacts(expectedName2){
    cy.get(this.expectedHeader2).should('exist', expectedName2);
}

clickDependents(){
    cy.get(this.dependents).click();
}

verifyDependents(expectedName3){
    cy.get(this.expectedHeader3).should('contain.text', expectedName3);
}

clickImmigration(){
    cy.get(this.immigration).click();
}

verifyImmigration(expectedName4){
    cy.get(this.expectedHeader4).should('exist', expectedName4);
}

clickMembership(){
    cy.get(this.membership).click();
}

verifyMembership(expectedName5){
    cy.get(this.expectedHeader5).should('contain.text', expectedName5);
}

// ========== Personal Details Form Methods ==========
enterFirstName(firstName){
    cy.get(this.firstNameField).clear().type(firstName);
}

enterMiddleName(middleName){
    cy.get(this.middleNameField).clear().type(middleName);
}

enterLastName(lastName){
    cy.get(this.lastNameField).clear().type(lastName);
}

// enterEmployeeId(employeeId){
//     cy.get(this.employeeIdField).eq(1).clear().type(employeeId);
// }

// enterOtherId(otherId){
//     cy.get(this.otherIdField).clear().type(otherId);
// }

// enterDriverLicense(licenseNumber){
//     cy.get(this.driverLicenseField).clear().type(licenseNumber);
// }

// enterLicenseExpiryDate(expiryDate){
//     cy.get(this.licenseExpiryDateField).eq(0).clear().type(expiryDate);
// }

selectNationality(nationality){
    cy.get(this.nationalityDropdown).eq(0).click();
    cy.contains('.oxd-select-option', nationality).click();
}

selectMaritalStatus(status){
    cy.get(this.maritalStatusDropdown).eq(1).click();
    cy.contains('.oxd-select-option', status).click();
}

// enterDateOfBirth(dob){
//     cy.get(this.dateOfBirthField).eq(1).clear().type(dob);
// }

selectGender(gender){
    if(gender === 'Male'){
        cy.get(this.genderRadio).eq(0).check({force: true});
    } else if(gender === 'Female'){
        cy.get(this.genderRadio).eq(1).check({force: true});
    }
}

clickSaveButton(){
    cy.get(this.saveButton).eq(0).click();
}

verifySuccessMessage(){
    cy.get(this.successMessage).should('be.visible');
}

verifyFirstName(expectedFirstName){
    cy.get(this.firstNameField).should('have.value', expectedFirstName);
}

verifyLastName(expectedLastName){
    cy.get(this.lastNameField).should('have.value', expectedLastName);
}

selectBloodType(bloodType){
    cy.get(this.bloodTypeDropdown).eq(2).click();
    cy.contains('.oxd-select-option', bloodType).click();
}

clickSaveButton(){
    cy.get(this.saveButton).eq(1).click();
}

verifySuccessMessage(){
    cy.get(this.successMessage).should('be.visible');
}

// ========== Contact Details Form Methods ==========
enterStreet1(street1){
    cy.get(this.street1Field).eq(1).clear().type(street1);
}

enterStreet2(street2){
    cy.get(this.street2Field).eq(1).clear().type(street2);
}

enterCity(city){
    cy.get(this.cityField).eq(2).clear().type(city);
}

enterStateProvince(stateProvince){
    cy.get(this.stateProvinceField).eq(3).clear().type(stateProvince);
}

enterZipPostalCode(zipPostalCode){
    cy.get(this.zipPostalCodeField).eq(4).clear().type(zipPostalCode);
}

selectCountry(country){
    cy.get(this.countryDropdown).eq(0).click();
    cy.contains('.oxd-select-option', country).click();
}

enterHomeTelephone(homeTelephone){
    cy.get(this.homeTelephoneField).eq(5).clear().type(homeTelephone);
}

enterMobile(mobile){
    cy.get(this.mobileField).eq(6).clear().type(mobile);
}

enterWorkTelephone(workTelephone){
    cy.get(this.workTelephoneField).eq(7).clear().type(workTelephone);
}

enterWorkEmail(workEmail){
    cy.get(this.workEmailField).eq(8).clear().type(workEmail);
}

enterOtherEmail(otherEmail){
    cy.get(this.otherEmailField).eq(9).clear().type(otherEmail);
}

verifyCity(expectedCity){
    cy.get(this.cityField).should('have.value', expectedCity);
}

verifyMobile(expectedMobile){
    cy.get(this.mobileField).should('have.value', expectedMobile);
}

// ========== Emergency Contacts Form Methods ==========
clickAddButton(){
    cy.get(this.addButton).click();
}

enterEmergencyName(name){
    cy.get(this.emergencyNameField).type(name);
}

enterEmergencyRelationship(relationship){
    cy.get(this.emergencyRelationshipField).type(relationship);
}

enterEmergencyHomeTelephone(phone){
    cy.get(this.emergencyHomeTelephoneField).type(phone);
}

enterEmergencyMobile(mobile){
    cy.get(this.emergencyMobileField).type(mobile);
}

enterEmergencyWorkTelephone(workPhone){
    cy.get(this.emergencyWorkTelephoneField).type(workPhone);
}

verifyEmergencyContactAdded(name){
    cy.contains('.oxd-table-cell', name).should('be.visible');
}

// ========== Dependents Form Methods ==========
enterDependentName(name){
    cy.get(this.dependentNameField).type(name);
}

selectDependentRelationship(relationship){
    cy.get(this.dependentRelationshipDropdown).eq(0).click();
    cy.contains('.oxd-select-option', relationship).click();
}

enterDependentDateOfBirth(dob){
    cy.get(this.dependentDateOfBirthField).type(dob);
}

verifyDependentAdded(name){
    cy.contains('.oxd-table-cell', name).should('be.visible');
}

// ========== Immigration Form Methods ==========
selectDocumentType(docType){
    cy.get(this.documentTypeDropdown).eq(0).click();
    cy.contains('.oxd-select-option', docType).click();
}

enterImmigrationNumber(number){
    cy.get(this.immigrationNumberField).type(number);
}

enterImmigrationIssuedDate(date){
    cy.get(this.immigrationIssuedDateField).eq(0).type(date);
}

enterImmigrationExpiryDate(date){
    cy.get(this.immigrationExpiryDateField).eq(1).type(date);
}

enterEligibleStatus(status){
    cy.get(this.immigrationEligibleStatusField).type(status);
}

selectImmigrationCountry(country){
    cy.get(this.countryDropdownImmigration).eq(1).click();
    cy.contains('.oxd-select-option', country).click();
}

enterIssuedBy(issuedBy){
    cy.get(this.immigrationIssuedByField).type(issuedBy);
}

enterReviewDate(date){
    cy.get(this.immigrationReviewDateField).eq(2).type(date);
}

enterImmigrationComments(comments){
    cy.get(this.immigrationCommentsField).type(comments);
}

verifyImmigrationRecordAdded(number){
    cy.contains('.oxd-table-cell', number).should('be.visible');
}

// ========== Membership Form Methods ==========
selectMembership(membership){
    cy.get(this.membershipDropdown).eq(0).click();
    cy.contains('.oxd-select-option', membership).click();
}

selectSubscriptionPaidBy(paidBy){
    cy.get(this.subscriptionPaidByDropdown).eq(1).click();
    cy.contains('.oxd-select-option', paidBy).click();
}

enterSubscriptionAmount(amount){
    cy.get(this.subscriptionAmountField).type(amount);
}

selectCurrency(currency){
    cy.get(this.currencyDropdown).eq(2).click();
    cy.contains('.oxd-select-option', currency).click();
}

enterSubscriptionCommenceDate(date){
    cy.get(this.subscriptionCommenceDateField).eq(0).type(date);
}

enterSubscriptionRenewalDate(date){
    cy.get(this.subscriptionRenewalDateField).eq(1).type(date);
}

verifyMembershipAdded(membership){
    cy.contains('.oxd-table-cell', membership).should('be.visible');
}

}
export default Info;