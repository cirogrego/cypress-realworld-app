class LoginPage {
    selectorList() {
        const selectors = {
            usernameField:"#username",
            passwordField:"#password",
            rememberField:'[name="remember"]',
            signinButton:'[data-test="signin-submit"]',
            wrongcredentialalert:'[role="alert"]',

        }

        return selectors
        
    }

    accessLoginPage() {
        cy.visit('http://localhost:3000/signin')
    }

    loginWithUser(username,password) {
        cy.get(this.selectorList().usernameField).type(username)
        cy.get(this.selectorList().passwordField).type(password)
        cy.get(this.selectorList().rememberField).click()
        cy.get(this.selectorList().signinButton).click()
    }
    
    checkAccessInvalid() {
        cy.get(this.selectorList().wrongcredentialalert)
    }


}

export default LoginPage