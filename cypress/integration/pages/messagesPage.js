/// <reference types="Cypress" />
class messagesPage {

    messagesHeader() { return cy.get(".m-0") }
    channelsLabel() { return cy.get("h5[class='m-0']") }
    newChannel_button() { return cy.xpath("//button[contains(@class, 'create-channel-btn')]") }
    create_button() { return cy.xpath("//div[@class='modal-footer']//div//button[@variant='primary']") }
    createdchannel() { return cy.get("div[class='d-flex align-items-center max-chann'] h6") }
    infoicon_channel() { return cy.xpath("//em[contains(@class,'sb-info')]") }
    leavechannel_button() { return cy.xpath("//button[contains(@class, 'leave-channel-btn')]")}
    enterMessage_textarea() {return cy.get("textarea[name='sendbird-message-input']")}
    sentMessage() {return cy.xpath("//p[contains(@class, 'outgoing')]")}






}

export default messagesPage