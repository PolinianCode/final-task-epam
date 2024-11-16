import LoginForm from "../components/loginComponents/loginForm.component"

class LoginPage {

    constructor() {
        this.url = "/"
        this.loginForm = new LoginForm
    }


    async open() {
        await browser.url(this.url)
    }


}

export default LoginPage