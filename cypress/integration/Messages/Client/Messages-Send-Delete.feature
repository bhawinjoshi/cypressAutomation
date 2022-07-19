Feature: Verify send messages in Messages as Client

    Scenario: Verify send messages in Messages as Client

        Given Login into Moneta as 'Client'
        When  Click on 'Messages' from Left Navigation
        Then  Verify Messages page is displayed successfully
        And   Click on New Channel button
        And  'New Message' pop-up should be displayed with disabled 'Create' button
        And   Select '4' names and click on create button
        Then  New channel should be created successfully
        And   Click on newly created channel

        #Send Message
        And   Type 'Hi This is an Automation Test' in messagebox and hit Enter
        Then  Verify that 'Hi This is an Automation Test' message is sent and displayed in chat

        #Delete Message
        And   Hover on sent message and click on three dots icon
        And   Click on 'Delete' option from three dots menu
        And   Click on Delete button in Delete Message popup
        Then  Verify that 'Hi This is an Automation Test' message is not displayed in chat

        And   Click on info icon in channel
        And   Click on Leave channel
        Then  Verify user left the channel successfully 