/// <reference types="Cypress" />
class dashboardPage {

    homeLabel() { return cy.get('.m-0') }
    bannerImage() { return cy.get("div[class='featured-row full-row'] img") }
    emailDashboard() { return cy.get('.d-block.user-email') }
    logoutPopup() { return cy.xpath("//span[@class='ant-dropdown-menu-title-content']") }
    
}

export default dashboardPage