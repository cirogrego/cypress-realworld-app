import userData from '../../fixtures/userData.json'

describe('Real World app', () => {

  const selectorList = {
    usernameField:"#username",
    passwordField:"#password",
    rememberField:'[name="remember"]',
    loginButton:'[data-test="signin-submit"]',
    signupField:'[href="/signup"]',
    firstnameField:"#firstName", 
    lastnameField:"#lastName",
    confirmpasswordField: "#confirmPassword",
    signupButton:'[type="submit"]',
    confirmpasswordFieldError:"#confirmPassword-helper-text",
    newtransactionButton:'[href="/transaction/new"]',
    avatarButton:'[src="https://avatars.dicebear.com/api/human/uBmeaz5pX.svg"]',
    amountField:"#amount",
    addnoteField:"#transaction-create-description-input",
    payButton:'[data-test="transaction-create-submit-payment"]',
    
  }


  it.only('Login - Success', () => {
    cy.visit('http://localhost:3000/signin')
    cy.get(selectorList.usernameField).type(userData.userSuccess.username)
    cy.get(selectorList.passwordField).type(userData.userSuccess.password)
    cy.get(selectorList.rememberField).click()
    cy.get(selectorList.loginButton).click()
    cy.get(selectorList.newtransactionButton).click()
    cy.get(selectorList.avatarButton).click()
    cy.get(selectorList.amountField).type(100)
    cy.get(selectorList.addnoteField).type('Test')
    cy.get(selectorList.payButton).click()
    cy.get('.MuiAlert-message')
   })

 it('Login - Fail', () => {
    cy.visit('http://localhost:3000/signin')
    cy.get(selectorList.usernameField).type(userData.userFail.username)
    cy.get(selectorList.passwordField).type(userData.userFail.password)
    cy.get(selectorList.loginButton).click()
    cy.get('[role="alert"]')
  })

  it('Login - New User', () => {
    cy.visit('http://localhost:3000/signin')
    cy.get(selectorList.signupField).click()
    cy.get(selectorList.firstnameField).type(userData.newUser.firstname)
    cy.get(selectorList.lastnameField).type(userData.newUser.lastname)
    cy.get(selectorList.usernameField).type(userData.newUser.username)
    cy.get(selectorList.passwordField).type(userData.newUser.password)
    cy.get(selectorList.confirmpasswordField).type(userData.newUser.confirmpassword)
    cy.get(selectorList.signupButton).click()
})

it('Login - New User Fail', () => {
    cy.visit('http://localhost:3000/signin')
    cy.get(selectorList.signupField).click()
    cy.get(selectorList.firstnameField).type(userData.newUserFail.firstname)
    cy.get(selectorList.lastnameField).type(userData.newUserFail.lastname)
    cy.get(selectorList.usernameField).type(userData.newUserFail.username)
    cy.get(selectorList.passwordField).type(userData.newUserFail.password)
    cy.get(selectorList.confirmpasswordField).type(userData.newUserFail.confirmpassword)
    cy.get(selectorList.confirmpasswordFieldError).contains('Password does not match')
    

})



  }) 
