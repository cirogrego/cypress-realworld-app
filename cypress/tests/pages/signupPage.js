class SignupPage {
    selectorList() {
        const selectors = {
            signupField:'[href="/signup"]',
            firstnameField:"#firstName", 
            lastnameField:"#lastName",
            userNameField:"#username",
            passwordField:"#password",
            confirmpasswordField: "#confirmPassword",
            signupButton:'[type="submit"]',
            confirmpasswordFieldError:"#confirmPassword-helper-text",
        }

        return selectors
        
    }

    accessSignupPage() {
        cy.visit('/signin')
    }

    signupWithUser(firstname,lastname,username,password,confirmpassword) {
        cy.get(this.selectorList().signupField).click()
        cy.get(this.selectorList().firstnameField).type(firstname)
        cy.get(this.selectorList().lastnameField).type(lastname)
        cy.get(this.selectorList().userNameField).type(username)
        cy.get(this.selectorList().passwordField).type(password)
        cy.get(this.selectorList().confirmpasswordField).type(confirmpassword)
        

    }
    
    checkSingupInvalid() {
        cy.get(this.selectorList().confirmpasswordFieldError).contains('Password does not match')
        
    }

    saveform() {
        cy.get(this.selectorList().signupButton).click()

    }
           
    }

export default SignupPage