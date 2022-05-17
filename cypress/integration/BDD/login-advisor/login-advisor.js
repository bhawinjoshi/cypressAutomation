/// <reference types="Cypress" />
import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import loginPage from '../../pages/loginPage.js'
const login = new loginPage();
//import login_PO from '../../../support/pageObjects/login_PO'


Given('Hit the Moneta dev URL', () => {
    cy.visit('/')
})

When('User clicks on SSO button', () => {
    login.sso_button().click();
})