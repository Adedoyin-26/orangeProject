class Info{
info = 'a[href="/web/index.php/pim/viewMyDetails"]';
contact = 'a[href="/web/index.php/pim/contactDetails/empNumber/7"]';
emergency = 'a[href="/web/index.php/pim/viewEmergencyContacts/empNumber/7"]';
expectedHeader = '.oxd-text.oxd-text--h6.orangehrm-main-title';
expectedHeader1 = '.oxd-text.oxd-text--h6.orangehrm-sub-title';
expectedHeader2 = '.oxd-text.oxd-text--span';
dependents = 'a[href="/web/index.php/pim/viewDependents/empNumber/7"]';
expectedHeader3 = '.oxd-text.oxd-text--h6.orangehrm-main-title';
immigration = 'a[href="/web/index.php/pim/viewImmigration/empNumber/7"]';
expectedHeader4 = '.oxd-text.oxd-text--span';
membership = 'a[href="/web/index.php/pim/viewMemberships/empNumber/7"]';
expectedHeader5 = '.oxd-button.oxd-button--medium.oxd-button--text';

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

}
export default Info;