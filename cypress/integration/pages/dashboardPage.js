/// <reference types="Cypress" />
class dashboardPage {

    homeLabel() { return cy.get('.m-0') }
    bannerImage() { return cy.xpath("//a[@class='cursor-pointer']//img") }
    emailDashboard() { return cy.get('.d-block.user-email') }
    logoutLink() { return cy.get(".dropdown-item.text-danger.d-flex.align-items-center") }
    downarrow() {return cy.get('.icon-chevron-down-outline')}
    
}

export default dashboardPage