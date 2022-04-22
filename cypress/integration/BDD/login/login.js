// login.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
/// <reference types="Cypress" />
import login_PO from '../../../support/pageObjects/login_PO'

describe('Login', function () {
    it('Login ', function () {
        const login = new login_PO();
        


        cy.visit("https://stage.moneta.stage-codal.net/")



    }
    )
})