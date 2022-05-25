import { Given } from 'cypress-cucumber-preprocessor/steps'
import loginPage from '../pages/loginPage'
const login_PO = new loginPage();
import dashboardPage from '../pages/dashboardPage'
const dashboard_PO = new dashboardPage();
const userDetailsClient = { "device_token": "de42d772e3d46e097a1ed23594395f75a00b71a4", "is_first_login": false }
const userDetailsAdvisor = { "device_token": "d7e3305f890a99caebe12c8cbb5b1ecabf21581d", "is_first_login": false }
const userNameClient = "automationtest@codaldemo.com";
const passwordClient = "Moneta@123"
const userNameAdvisor = "automationtest@codaldemo.com";
const passwordAdvisor = "Moneta@123"

Given('Login into Moneta as {string}', (string) => {
    if (string = "Client") {
        cy.visit("/", {
            onBeforeLoad: function (window) {
                window.localStorage.setItem('userDetails', JSON.stringify(userDetailsClient));
            }
        })
        login_PO.emailAddress_textbox().type(userNameClient)
        login_PO.next_button().click()
        login_PO.password_textbox().type(passwordClient)
    }
    else if (string = "Advisor") {
        cy.visit("/", {
            onBeforeLoad: function (window) {
                window.localStorage.setItem('userDetails', JSON.stringify(userDetailsAdvisor));
            }
        })
        login_PO.emailAddress_textbox().type(userNameAdvisor)
        login_PO.next_button().click()
        login_PO.password_textbox().type(passwordAdvisor)
    }
    login_PO.loginButton().click()
    dashboard_PO.homeLabel().should('be.visible', { timeout: 30000 })
    dashboard_PO.bannerImage().should('be.visible', { timeout: 30000 })
    cy.url().should('include', 'dashboard')

})

Given('Click on {string} from Left Navigation', (string) => {
    cy.get("a[href='/dashboard/" + string + "']", { timeout: 10000 }).should('be.visible')
    cy.get("a[href='/dashboard/" + string + "']").click()
})