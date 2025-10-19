class Login{

    textUsername = "input[name='username']";
    textPassword = "input[name='password']";
    btnLogin = "button[type='submit']";
    imgLogo = "img[alt='client brand banner']";

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

}

export default Login;