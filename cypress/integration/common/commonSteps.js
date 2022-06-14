import { Before, Given, When } from 'cypress-cucumber-preprocessor/steps'
import loginPage from '../pages/loginPage'
const login_PO = new loginPage();
import dashboardPage from '../pages/dashboardPage'
const dashboard_PO = new dashboardPage();
const userDetailsClient = { "device_token": "de42d772e3d46e097a1ed23594395f75a00b71a4", "is_first_login": false }
const userDetailsAdvisor = { "device_token": "d7e3305f890a99caebe12c8cbb5b1ecabf21581d", "is_first_login": false }
let data;

//Load All the data from loginData.json file from fixture folder
Before(() => {
    cy.fixture('loginData').then((tData) => {
        data = tData;
    });
});

Given('Login into Moneta as {string}', (string) => {
    if (string == "Client") {
        cy.visit("/", {
            onBeforeLoad: function (window) {
                window.localStorage.setItem('userDetails', JSON.stringify(userDetailsClient));
            }
        })
        login_PO.emailAddress_textbox().type(data.userNameClient)
        login_PO.next_button().click()
        login_PO.password_textbox().type(data.passwordClient)
    }
    else if (string == "Advisor") {
        cy.visit("/", {
            onBeforeLoad: function (window) {
                window.localStorage.setItem('userDetails', JSON.stringify(userDetailsAdvisor));
            }
        })
        login_PO.emailAddress_textbox().type(data.userNameAdvisor)
        login_PO.next_button().click()
        login_PO.password_textbox().type(data.passwordAdvisor)
    }
    login_PO.loginButton().click()
    dashboard_PO.homeLabel().should('be.visible')
    dashboard_PO.bannerImage().should('be.visible')
    cy.url().should('include', 'dashboard')
})

When('Click on {string} from Left Navigation', (string) => {
    cy.xpath("//a[normalize-space()='" + string + "']", { timeout: 10000 }).should('be.visible')
    cy.xpath("//a[normalize-space()='" + string + "']").click()
})

And('Click on {string} button', (string) => {
    cy.xpath("//button[normalize-space()='" + string + "']").click()
})