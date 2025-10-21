class Logout{

    dropDown='.oxd-userdropdown-tab';
    logOutBtn='a[href="/web/index.php/auth/logout"]';

clickUserDropdown(){
    cy.get(this.dropDown).click();
}

clickLogout(){
    cy.get(this.logOutBtn).click();
}

}
export default Logout;