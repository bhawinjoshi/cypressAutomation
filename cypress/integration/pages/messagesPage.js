/// <reference types="Cypress" />
class messagesPage {

    messagesHeader() { return cy.get(".m-0") }
    channelsLabel() { return cy.get("h5[class='m-0']") }
    newChannel_button() { return cy.get('.create-channel-btn') }
    create_button() { return cy.xpath("//div[@class='modal-footer']//div//button[@variant='primary']") }
    createdchannel() { return cy.get("div[class='d-flex align-items-center max-chann'] h6") }
    infoicon_channel() { return cy.xpath("//em[contains(@class,'sb-info')]") }
    leavechannel_button() { return cy.xpath("//button[contains(@class, 'leave-channel-btn')]") }
    enterMessage_textarea() { return cy.get("textarea[name='sendbird-message-input']") }
    sentMessage() { return cy.get('.sendbird-message-content__middle__message-item-body') }
    chatMessage() { return cy.get('div.sendbird-message-content-menu.use-reactions.outgoing') }
    threeDotsmenu_button() { return cy.get('.sendbird-message-item-menu__trigger__icon > svg') }
    editOption() { return cy.get('.menu-item-edit > .sendbird-dropdown__menu-item__text') }
    editMessage_textarea() { return cy.get("form[class=' sendbird-message-input__edit ']>div>textarea") }
    saveMessage_button() { return cy.xpath("//span[normalize-space()='Save']") }
    edited_label() { return cy.xpath("//span[contains(@class, 'edited')]") }
    replysection() { return cy.get("div[class='sendbird-quote_message_input ']>div>span:nth-child(1)") }
    attach_button() { return cy.get('[class="sendbird-message-input--attach-input"]') }
    attachedFile() { return cy.xpath("//span[contains(@class,'file-message-item-body__file-name')]") }
    mainMessage() { return cy.xpath("//div[contains(@class,'replied-message')]//span") }
    replyicon() { return cy.get("path[class='icon-reply-filled_svg__fill']") }
    deleteMessage_popup() { return cy.get(".sendbird-modal__header") }
    deleteButton_popup() { return cy.get("div[class='sendbird-modal__footer'] :nth-child(2) span") }






}

export default messagesPage