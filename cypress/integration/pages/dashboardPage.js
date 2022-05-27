/// <reference types="Cypress" />
class dashboardPage {

    homeLabel() { return cy.get('.m-0') }
    bannerImage() { return cy.get("div[class='featured-row full-row'] img") }
}

export default dashboardPage