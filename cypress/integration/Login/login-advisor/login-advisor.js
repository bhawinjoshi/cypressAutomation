import { Given } from 'cypress-cucumber-preprocessor/steps'
const userDetails_key_advisor = { "device_token": "d7e3305f890a99caebe12c8cbb5b1ecabf21581d", "is_first_login": false }
const user_key_advisor = false;
const email_key_advisor = "advisorautomationtest@codaldemo.com";

Given('Hit the Moneta URL as Advisor', () => {
    cy.visit("/", {
        onBeforeLoad: function (window) {
            window.localStorage.setItem('userDetails', JSON.stringify(userDetails_key_advisor));
            window.localStorage.setItem('user', JSON.stringify(user_key_advisor));
            window.localStorage.setItem('Email', JSON.stringify(email_key_advisor));
        }
    })

})