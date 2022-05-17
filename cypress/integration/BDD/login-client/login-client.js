import { Given, Then } from 'cypress-cucumber-preprocessor/steps'
import loginPage from '../../pages/loginPage.js'
const login = new loginPage();
import dashboardPage from '../../pages/dashboardPage.js'
const dashboard = new dashboardPage();
const body = {
    //"uuid": "85eb6d66-c6c4-3b1d-8854-532e3ced62ab", "first_name": "shubham", "last_name": "manchalkar", "email": "smanchalkar@codal.com", "phone_number": "8446646732", "international_calling_codes": "+91", "user_type": "clients", "user_permission": { "can_manage_message_group": false }, "sendbird_user_id": "85eb6d66-c6c4-3b1d-8854-532e3ced62ab", "sendbird_user_token": "43f4e5836a9852354d86f2156c014a9a061c9f2b", "token": "6c850fb5b53c4ab1a7cf7fae2eddf2fc334253d0", "device_token": "de42d772e3d46e097a1ed23594395f75a00b71a4", "is_first_login": false
    "uuid": "21fc3969-364f-3218-b22f-40e33c08c4dd", "first_name": "automation", "last_name": "test", "email": "automationtest@codaldemo.com", "phone_number": "8238666449", "international_calling_codes": "+91", "user_type": "clients", "user_permission": { "can_manage_message_group": false }, "sendbird_user_id": "21fc3969-364f-3218-b22f-40e33c08c4dd", "sendbird_user_token": "10818918d90893cfc4d3b27e09b1ca6177e53af5", "token": "de3608eabdc17b3232ec6e44ff9e2ad02e573104", "device_token": "3e31278780db0c81e5bfe45e1b786c8a8719fc84", "is_first_login": false
}

Given('Hit the Moneta dev URL', () => {
    cy.visit("/", {
        onBeforeLoad: function (window) {
            window.localStorage.setItem('userDetails', JSON.stringify(body));
        }
    })

})

Then('User enters Email address as {string}', (username) => {
    login.emailAddress_textbox().type(username)
})

Then('User clicks on Next button', () => {
    login.next_button().click()
})

Then('User enters password as {string}', (password) => {
    login.password_textbox().type(password)
})

Then('User clicks on Login button', (password) => {
    login.loginButton().click()
})

Then('Dashboard page should be displayed', () => {
    dashboard.homeLabel().should('be.visible', { timeout: 10000 })
})