Feature: Login

    Scenario Outline: Login to Moneta application as client

        Given User is at the login page
        When User enters username as 'Admin' and password as 'admin123'
        And User clicks on login button
        Then User is able to successfully login to the Website
        Examples:
            | username | password |
            | Admin    | admin123 |
