Feature: Test Login form with empty credentials

Scenario: Attempt login with empty credentials
  Given I am on the login page
  When I enter "<username>" and "<password>"
  And I clear the "Username" and the "Password" fields
  And I click the "Login" button for login
  Then I should see the error message "Username is required"

  Examples:
    | username          | password          |
    | Danylo            | test123           |
    | admin             | admin123          |
