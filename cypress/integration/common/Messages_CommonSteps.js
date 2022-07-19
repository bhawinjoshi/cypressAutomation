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
    cy.wait(1000)
    for (var i = 1; i <= number; i += 1) {
        cy.xpath("//ul[contains(@class,'message-check-list')]//li[" + i + "]//input").click()
    }
    cy.wait(1000)
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
    cy.wait(2000)

})

And('Click on attach icon in message box and send a file', () => {
    messages_PO.attach_button().attachFile('Automation_TestClientDemo.pdf')
    cy.wait(2000)
})

And('Verify sent file is displayed in Message box', () => {
    messages_PO.attachedFile().contains('Automation_TestClientDemo.pdf').should('be.visible')
    cy.wait(2000)
})

And('Hover on sent message and click on three dots icon', () => {
    cy.wait(2000)
    messages_PO.chatMessage().invoke('show')
    messages_PO.threeDotsmenu_button().click({ force: true })
})

And('Click on {string} option from three dots menu', (menuOption) => {
    cy.xpath("//span[normalize-space()='" + menuOption + "']").click()
})

And('Edit Message box should be displayed with message {string}', (editMessage) => {
    messages_PO.editMessage_textarea().contains(editMessage).should('be.visible')
})

And('Enter message {string} in Edit message box and click on Save button', (updatedMessage) => {
    messages_PO.editMessage_textarea().clear().type(updatedMessage)
    messages_PO.saveMessage_button().click()
})

And('{string} Message should be displayed in Message Box', (updatedMessage) => {
    messages_PO.sentMessage().contains(updatedMessage).should('be.visible')
    messages_PO.edited_label().should('be.visible')
})

And('Reply Section should be displayed with {string} username label', (string) => {
    messages_PO.replysection().contains(string).should('be.visible')
})

And('Verify that {string} message appear as a reply to {string}', (repliedMessage, mainMessage) => {
    messages_PO.mainMessage().contains(mainMessage).should('be.visible')
    messages_PO.sentMessage().contains(repliedMessage).should('be.visible')
    messages_PO.replyicon().should('be.visible')
})

And('Click on Delete button in Delete Message popup', () => {
    messages_PO.deleteMessage_popup().should('be.visible')
    messages_PO.deleteButton_popup().click()
})

And('Verify that {string} message is not displayed in chat', (chatMessage) => {
    messages_PO.sentMessage().contains(chatMessage).should('not.exist')
    cy.wait(2000)
})