class LoginForm {
    //Selectors to get all required DOM elements
    get usernameInput() {
        return $('#user-name')
    }

    get passwordInput() {
        return $('#password')
    }

    get errorText() {
        return $('.error-message-container')
    }

    get loginButton() {
        return $('[data-test="login-button"]')
    }

    // Actions with selectors

     /**
     * Setting up credentials to login form
     * @param {string} username - Set user login.
     * @param {string} password - Set user password.
     */

    async provideCredentials(username, password) {
        await this.usernameInput.setValue(username)
        await this.passwordInput.setValue(password)
    }


    /**
     * Function to clear field using hot keys(Chrome bug fix)
     * @param {WebdriverIO.Element} inputElement - Input field to clear.
     */

    async clearField(inputElement) {
        await inputElement.click();
        await browser.keys(['Control', 'a']); // Hot key to select whole text in the input field
        await browser.keys('Backspace');  // Clear the content of the field
    }

    /**
     * Clears inputs for both login form fields
     */
    async clearInputs() {
        await this.clearField(this.usernameInput);
        await this.clearField(this.passwordInput);
    }

    /**
     * Clears only username input field
     */
    async clearUsernameInput() {
        await this.clearField(this.usernameInput); 
    }
    
    /**
     * Clears only password input field
     */
    async clearPasswordInput() {
        await this.clearField(this.passwordInput);
    }
    
    /**
     * Returs the value of an error banner
     */
    async getErrorText() {
        return await this.errorText.getText()
    } 
}


export default LoginForm