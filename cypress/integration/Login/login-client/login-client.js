import { Given } from 'cypress-cucumber-preprocessor/steps'
const userDetails_key_client = { "device_token": "de42d772e3d46e097a1ed23594395f75a00b71a4", "is_first_login": false }
const user_key_client = false;
const email_key_client = "automationtest@codaldemo.com";

Given('Hit the Moneta URL as Client', () => {
    cy.visit("/", {
        onBeforeLoad: function (window) {
            window.localStorage.setItem('userDetails', JSON.stringify(userDetails_key_client));
            window.localStorage.setItem('user', JSON.stringify(user_key_client));
            window.localStorage.setItem('Email', JSON.stringify(email_key_client));
        }
    })

})