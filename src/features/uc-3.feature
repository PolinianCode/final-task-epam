Feature: Test Login form with credentials by passing Username & Password

Scenario: Attempt to login with valid credentials
    Given I am on the login page
    When I enter "<username>" and "<password>"
    And I click the "Login" button for login
    And I am on the dashboard page
    Then I should see dashboard header title "Swag Labs"

    Examples:
        | username                 | password          |
        | standard_user            | secret_sauce      |