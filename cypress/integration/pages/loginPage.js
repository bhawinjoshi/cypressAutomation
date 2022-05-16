/// <reference types="Cypress" />
class loginPage {

    emailAddress_textbox() { return cy.get('.form-control') }    
    next_button() { return cy.get(".btn.btn-success.w-100") }
    sso_button() { return cy.get(".btn.btn-sso.w-100") }



}

export default loginPage