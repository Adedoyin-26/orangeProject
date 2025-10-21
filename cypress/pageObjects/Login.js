class Login{

    textUsername = "input[name='username']";
    textPassword = "input[name='password']";
    btnLogin = "button[type='submit']";
    imgLogo = "img[alt='client brand banner']";
    alert=".oxd-alert-content.oxd-alert-content--error";
    blankAlert=".oxd-text.oxd-text--span.oxd-input-field-error-message.oxd-input-group__message";

enterUsername(username){
    cy.get(this.textUsername).type(username);
}

enterPassword(password){
    cy.get(this.textPassword).type(password);
}

clickLogin(){
    cy.get(this.btnLogin).click();
}

verifyLogin(expectedTitle){
    cy.get(this.imgLogo).should('exist', expectedTitle);
} 

verifyLoginNegative(errorAlert){
    cy.get(this.alert).should('contain.text', 'Invalid credentials');

}

verifyEmptyLogin(errorAlert){
    cy.get(this.blankAlert).should('contain.text', 'Required');
}
}

export default Login;