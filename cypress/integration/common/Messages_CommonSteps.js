import { And } from 'cypress-cucumber-preprocessor/steps'
import messagesPage from '../pages/messagesPage.js';
const messages_PO = new messagesPage();


And('Verify Messages page is displayed successfully', () => {
    messages_PO.messagesHeader().contains('Messages').should('be.visible')
    messages_PO.channelsLabel().should('be.visible')
    messages_PO.newChannel_button().should('be.visible')
    cy.url().should('include', 'Messages')
})

And('Click on New Channel button', () => {
    messages_PO.newChannel_button().click()
})

And('Select {string} names and click on create button', (number) => {

    for (var i = 1; i <= number; i += 1) {
        cy.xpath("//ul[contains(@class,'message-check-list')]//li[" + i + "]//input").click()
    }
    messages_PO.create_button().click()
})

And('New channel should be created successfully', () => {
    messages_PO.createdchannel().should('be.visible')
})

And('Click on newly created channel', () => {
    messages_PO.createdchannel().click()
})

And('Click on info icon in channel', () => {
    messages_PO.infoicon_channel().click()
})

And('Click on Leave channel', () => {
    messages_PO.leavechannel_button().click()
})

And('Verify user left the channel successfully', () => {
    messages_PO.createdchannel().should('not.exist')
})