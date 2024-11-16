import { Given, When, Then } from '@wdio/cucumber-framework';
import LoginPage from '../../po/pages/login.page';
import DashboardPage from '../../po/pages/dashboard.page';



const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()



Given('I am on the login page', async() => {
    await loginPage.open()
});

When('I enter {string} and {string}', async (username, password) => {
    await loginPage.loginForm.provideCredentials(username, password)
})

When('I clear the {string} and the {string} fields', async (input1, input2) => {
    await loginPage.loginForm.clearInputs()

})

When('I clear {string} field', async (input) => {
    if(input == "Password") {
        await loginPage.loginForm.clearPasswordInput()
    } else if (input == "Username") {
        await loginPage.loginForm.clearUsernameInput()
    } else {
        console.log("Invalid parameter")
    }
})

When('I click the "Login" button for login', async () => {
    await loginPage.loginForm.loginButton.click()
})

Then('I should see the error message {string}', async (expectedError) => {
   
    const actualError = await loginPage.loginForm.getErrorText();
    console.log('Actual Error Message:', actualError);
    expect(actualError).toContain(expectedError);
})

When('I am on the dashboard page', async () => {
    const url = await browser.getUrl()

    expect(url).toContain('/inventory.html')
})

Then('I should see dashboard header title {string}', async (headerTitle) => {
    const dashboardHeaderTitle = await dashboardPage.dashboardHeader.headerTitle

    expect(dashboardHeaderTitle).toContain(headerTitle)
})

