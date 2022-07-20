Feature: Verify Edit and Reply Messages as Client

    Scenario: Verify Edit and Reply Messages as Client

        Given Login into Moneta as 'Client'
        When  Click on 'Messages' from Left Navigation
        Then  Verify Messages page is displayed successfully
        And   Click on New Channel button
        And  'New Message' pop-up should be displayed with disabled 'Create' button
        And   Select '4' names and click on create button
        Then  New channel should be created successfully
        And   Click on newly created channel
        And   Type 'Hi This is an Automation Test' in messagebox and hit Enter
        Then  Verify that 'Hi This is an Automation Test' message is sent and displayed in chat

        #Edit Message
        And   Hover on sent message and click on three dots icon
        And   Click on 'Edit' option from three dots menu
        Then  Edit Message box should be displayed with message 'Hi This is an Automation Test'
        And   Enter message 'Hi This is an updated Automation Test' in Edit message box and click on Save button
        Then  'Hi This is an updated Automation Test' Message should be displayed in Message Box

        #Reply Message
        And   Hover on sent message and click on three dots icon
        And   Click on 'Reply' option from three dots menu
        Then  Reply Section should be displayed with 'Reply to' username label
        And   Type 'Hi This is a Reply to Automation Test' in messagebox and hit Enter
        Then  Verify that 'Hi This is a Reply to Automation Test' message appear as a reply to 'Hi This is an updated Automation Test'

        And   Click on info icon in channel
        And   Click on Leave channel
        Then  Verify user left the channel successfully