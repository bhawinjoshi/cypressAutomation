/// <reference types="Cypress" />
import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import loginPage from '../../pages/loginPage.js'
const login = new loginPage();
//import login_PO from '../../../support/pageObjects/login_PO'


Given('Hit the Moneta stage URL', () => {
    cy.visit('https://moneta_stage:.YaD)gQCV3Rz@stage.moneta.stage-codal.net/')
})

When('User enters Email address as {string}', (username) => {
    login.emailAddress_textbox().type(username)
})


And('User clicks on login button', () => {
    // cy.get('#btnLogin').click()

})

Then('User is able to successfully login to the Website', () => {
    // cy.get('#welcome').should('be.visible', { timeout: 10000 })
})