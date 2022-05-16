/// <reference types="Cypress" />
import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import loginPage from '../../pages/loginPage.js'
const login = new loginPage();

Given('Hit the Moneta dev URL', () => {
    cy.visit('https://moneta_dev:T6J4WFVBuoXA@dev.moneta.stage-codal.net/')

})

Then('User enters Email address as {string}', (username) => {
    var body = {
        "uuid": "85eb6d66-c6c4-3b1d-8854-532e3ced62ab", "first_name": "shubham", "last_name": "manchalkar", "email": "smanchalkar@codal.com", "phone_number": "8446646732", "international_calling_codes": "+91", "user_type": "clients", "user_permission": { "can_manage_message_group": false }, "sendbird_user_id": "85eb6d66-c6c4-3b1d-8854-532e3ced62ab", "sendbird_user_token": "43f4e5836a9852354d86f2156c014a9a061c9f2b", "token": "6c850fb5b53c4ab1a7cf7fae2eddf2fc334253d0", "device_token": "de42d772e3d46e097a1ed23594395f75a00b71a4", "is_first_login": false
    }

    window.localStorage.setItem("userDetails", JSON.stringify(body));

    login.emailAddress_textbox().type(username)
})

Then('User clicks on Next button', () => {
    login.next_button().click()
    var body = {
        "uuid": "85eb6d66-c6c4-3b1d-8854-532e3ced62ab", "first_name": "shubham", "last_name": "manchalkar", "email": "smanchalkar@codal.com", "phone_number": "8446646732", "international_calling_codes": "+91", "user_type": "clients", "user_permission": { "can_manage_message_group": false }, "sendbird_user_id": "85eb6d66-c6c4-3b1d-8854-532e3ced62ab", "sendbird_user_token": "43f4e5836a9852354d86f2156c014a9a061c9f2b", "token": "6c850fb5b53c4ab1a7cf7fae2eddf2fc334253d0", "device_token": "de42d772e3d46e097a1ed23594395f75a00b71a4", "is_first_login": false
    }
    window.localStorage.setItem("userDetails", JSON.stringify(body));
})

Then('User is able to successfully login to the Website', () => {
    // cy.get('#welcome').should('be.visible', { timeout: 10000 })
})