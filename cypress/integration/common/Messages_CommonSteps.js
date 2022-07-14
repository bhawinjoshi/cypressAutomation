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
    cy.wait(2000)
    messages_PO.leavechannel_button().click()
})

And('Verify user left the channel successfully', () => {
    messages_PO.createdchannel().should('not.exist')
})

And('Type {string} in messagebox and hit Enter', (chatMessage) => {
    messages_PO.enterMessage_textarea().type(chatMessage).type('{enter}')

})

And('Verify that {string} message is sent and displayed in chat', (chatMessage) => {
    messages_PO.sentMessage().contains(chatMessage).should('be.visible')
    cy.wait(5000)

})

And('Click on attach icon in message box and send a file', () => {
    //cy.xpath("//*[name()='path' and contains(@class,'icon-attac')]").attachFile("Automation_TestClientDemo.pdf")
    cy.get('.sendbird-icon.sendbird-icon-attach.sendbird-icon-color--content-inverse').attachFile("Automation_TestClientDemo.pdf")
    cy.wait(5000)
    //cy.get('.sendbird-file-message-item-body__file-name__text.sendbird-label.sendbird-label--body-1.sendbird-label--color-oncontent-1').should('be.visible')
})