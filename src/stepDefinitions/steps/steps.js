import { Given, When, Then } from '@wdio/cucumber-framework';
import LoginPage from '../../po/pages/login.page';
import DashboardPage from '../../po/pages/dashboard.page';



const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()

/**
 * Login page related steps
 */

Given('I am on the login page', async() => {
    await loginPage.open()
});

When('I enter {string} and {string}', async (username, password) => {
    await loginPage.loginForm.provideCredentials(username, password)
})

When('I clear the "Username" and the "Password" fields', async () => {
    await loginPage.loginForm.clearInputs()
})

When('I clear {string} field', async (input) => {

    switch(input) {
        case "Password":
            await loginPage.loginForm.clearPasswordInput()
            break
        case "Username":
            await loginPage.loginForm.clearUsernameInput()
            break
        default:
            throw new Error('Incorrect field name');
    }
})

When('I click the "Login" button for login', async () => {
    await loginPage.loginForm.loginButton.click()
})

Then('I should see the error message {string}', async (expectedError) => {
   
    const actualError = await loginPage.loginForm.getErrorText();
    expect(actualError).toContain(expectedError);
})


/**
 * Dashboard page related steps
 */

When('I am on the dashboard page', async () => {
    const url = await browser.getUrl()
    expect(url).toContain('/inventory.html')
})

Then('I should see dashboard header title {string}', async (headerTitle) => {
    const dashboardHeaderTitle = await dashboardPage.dashboardHeader.headerTitle
    expect(dashboardHeaderTitle).toContain(headerTitle)
})

