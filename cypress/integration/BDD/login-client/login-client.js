/// <reference types="Cypress" />
import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import loginPage from '../../pages/loginPage.js'
const login = new loginPage();

// before(() => {
//     cy.login();
//     cy.saveLocalStorage();
// });

// beforeEach(() => {
//     cy.restoreLocalStorage();
// });

Given('Hit the Moneta dev URL', () => {
    //cy.visit('https://moneta_dev:T6J4WFVBuoXA@dev.moneta.stage-codal.net/')
    cy.LoginClient().then(function () {

        cy.visit("https://moneta_dev:T6J4WFVBuoXA@dev.moneta.stage-codal.net/",

            {
                onBeforeLoad: function (window) {
                    window.localStorage.setItem('device_token', Cypress.env('device_token'))

                }

            })

    })


})

Then('User enters Email address as {string}', (username) => {
    //login.emailAddress_textbox().type(username)
})


And('User clicks on login button', () => {
    // cy.get('#btnLogin').click()

})

Then('User is able to successfully login to the Website', () => {
    // cy.get('#welcome').should('be.visible', { timeout: 10000 })
})