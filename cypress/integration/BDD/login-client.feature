Feature: Login

    Scenario Outline: Login to Moneta application as client

        Given Hit the Moneta dev URL
        When User enters Email address as 'automationtest@codaldemo.com'
        And User clicks on login button
        Then User is able to successfully login to the Website
        Examples:
            | username | password |
            | Admin    | admin123 |
