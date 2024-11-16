class LoginForm {
        //Selectors
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

    async provideCredentials(username, password) {
        await this.usernameInput.setValue(username)
        await this.passwordInput.setValue(password)
    }

    async clearInputs() {

        await this.usernameInput.click(); 
        let usernameValue = await this.usernameInput.getValue();
        while (usernameValue !== '') { 
            await browser.keys(['Control', 'a']);
            await browser.keys('Backspace');
            usernameValue = await this.usernameInput.getValue();
        }

        await browser.pause(300);

        await this.passwordInput.click(); 
        let passwordValue = await this.passwordInput.getValue();
        while (passwordValue !== '') { 
            await browser.keys(['Control', 'a']);
            await browser.keys('Backspace');
            passwordValue = await this.passwordInput.getValue();
        }

        await browser.pause(300);
    }

    async clearUsernameInput() {

        await this.usernameInput.click();
        await browser.keys(['Control', 'a']); 
        await browser.keys('Backspace'); 
    

        let usernameValue = await this.usernameInput.getValue();
        while (usernameValue !== '') {
            await browser.keys(['Control', 'a']);
            await browser.keys('Backspace');
            usernameValue = await this.usernameInput.getValue();
        }
    
        await browser.pause(300);
    }
    
    async clearPasswordInput() {
        await this.passwordInput.click(); 
        await browser.keys(['Control', 'a']);
        await browser.keys('Backspace');
    
        
        let passwordValue = await this.passwordInput.getValue();
        while (passwordValue !== '') {
            await browser.keys(['Control', 'a']);
            await browser.keys('Backspace');
            passwordValue = await this.passwordInput.getValue();
        }
    
        await browser.pause(300);
    }
    



    async getErrorText() {
        return await this.errorText.getText()
    } 
}


export default LoginForm