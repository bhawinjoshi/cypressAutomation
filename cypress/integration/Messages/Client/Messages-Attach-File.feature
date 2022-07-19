Feature: Verify attach File in Messages as Client

    Scenario: Verify attach File in Messages as Client

        Given Login into Moneta as 'Client'
        When  Click on 'Messages' from Left Navigation
        Then  Verify Messages page is displayed successfully
        And   Click on New Channel button
        And  'New Message' pop-up should be displayed with disabled 'Create' button
        And   Select '4' names and click on create button
        Then  New channel should be created successfully
        And   Click on newly created channel
        And   Click on attach icon in message box and send a file
        Then  Verify sent file is displayed in Message box
        And   Click on info icon in channel
        And   Click on Leave channel
        Then  Verify user left the channel successfully