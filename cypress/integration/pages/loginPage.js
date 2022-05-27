/// <reference types="Cypress" />
class loginPage {

    emailAddress_textbox() { return cy.get('.form-control') }
    next_button() { return cy.get(".btn.btn-success.w-100") }
    password_textbox() { return cy.get("input[placeholder='Enter password']") }
    loginButton() { return cy.get('.btn') }
}

export default loginPage