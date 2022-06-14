Feature: Verify create signature in DocuSign as Client

    Scenario: Verify create signature in DocuSign as Client

        Given Login into Moneta as 'Client'
        When  Click on 'DocuSign' from Left Navigation
        Then  Verify DocuSign page is displayed successfully
        And   Click on 'My Signature' button
        Then  My Signature Popup should be displayed with Create Signature button
        And   Click on 'Create Your Signature and Initials' button

        #Choose Signature
        And   Click on 'Choose' tab from My Signature pop-up
        And   Select first signature from list of available signatures
        And   Click on 'Create' button
        And   Click on 'My Signature' button
        Then  Verify that added signature is present with Signature and Initials

        #Delete added signature so that signature picture can be uploaded
        And   Click on Delete icon near signature textbox
        Then  Verify that added signature is delete successfully

        #Upload Signature
        And   Click on 'Create Your Signature and Initials' button
        And   Click on 'Upload Photo' tab from My Signature pop-up
        And   Select Signature and Initials file to upload and verify they are upload successfully
        And   Click on 'Create' button
        And   Click on 'My Signature' button
        And   Verify that added signature is present with Signature and Initials
        Then  Click on 'Done' button
