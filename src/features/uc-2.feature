Feature: Test Login form with credentials by passing Username

Scenario: Attempt to login only with username
    Given I am on the login page
    When I enter "<username>" and "<password>"
    And I clear "Password" field
    And I click the "Login" button for login
    Then I should see the error message "Password is required"

    Examples:
        | username          | password          |
        | Danylo            | test123           |
        | admin             | admin123          |