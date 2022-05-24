import { Then } from 'cypress-cucumber-preprocessor/steps'
import loginPage from '../pages/loginPage'
const login = new loginPage();
import dashboardPage from '../pages/dashboardPage'
const dashboard = new dashboardPage();

Then('User enters Email address as {string}', (username) => {
    login.emailAddress_textbox().type(username)
})

Then('User clicks on Next button', () => {
    login.next_button().click()
})

Then('User enters password as {string}', (password) => {
    login.password_textbox().type(password)
})

Then('User clicks on Login button', () => {
    login.loginButton().click()
})

Then('Dashboard page should be displayed', () => {
    dashboard.homeLabel().should('be.visible', { timeout: 10000 })
    cy.url().should('include', 'dashboard')
    cy.wait(5000)
})
