import { Given } from 'cypress-cucumber-preprocessor/steps'
const userDetails_key_advisor = { "device_token": "3850d0dda1313b43e911da872c2fbfb393beec25", "is_first_login": false }
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