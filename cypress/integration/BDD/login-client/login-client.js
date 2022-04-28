/// <reference types="Cypress" />
import cypress from 'cypress';
import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import login_PO from '../../../support/pageObjects/login_PO'
const login = new login_PO();


Given('Login to Moneta application as client', () => {

    cy.visit('https://moneta_stage:.YaD)gQCV3Rz@stage.moneta.stage-codal.net/')
    cy.get("input[placeholder='Enter email address']").should('be.visible')
    
    
})

When('User enters Email address as {string}', (username) => {
    cy.get('#txtUsername').type(username)
    cy.get('#txtPassword').type(password)

})

And('User clicks on login button', () => {
    cy.get('#btnLogin').click()

})

Then('User is able to successfully login to the Website', () => {
    cy.get('#welcome').should('be.visible', { timeout: 10000 })
})