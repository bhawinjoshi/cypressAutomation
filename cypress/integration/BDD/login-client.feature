Feature: Login

    Scenario Outline: Login to Moneta application as client

        Given Login to Moneta application as client
        When User enters Email address as 'Admin'
        And User clicks on login button
        Then User is able to successfully login to the Website
        Examples:
            | username | password |
            | Admin    | admin123 |
