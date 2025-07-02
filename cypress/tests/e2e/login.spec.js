describe('Real World app', () => {

  const selectorList = {
    usernameField:"#username",
    passwordField:"#password",
    rememberField:'[name="remember"]',
    loginButton:'[data-test="signin-submit"]',


  }

  it('Login - Success', () => {
    cy.visit('http://localhost:3000/signin')
    cy.get(selectorList.usernameField).type('Arvilla_Hegmann')
    cy.get(selectorList.passwordField).type('s3cret')
    cy.get(selectorList.rememberField).click()
    cy.get(selectorList.loginButton).click()
  })


 it('Login - Fail', () => {
    cy.visit('http://localhost:3000/signin')
    cy.get(selectorList.usernameField).type('Test')
    cy.get(selectorList.passwordField).type('Test')
    cy.get(selectorList.loginButton).click()
    cy.get('[role="alert"]')
  })

  it('Login - New User', () => {
    cy.visit('http://localhost:3000/signin')
    cy.get('[href="/signup"]').click()
    cy.get('#firstName').type('Ciro')
    cy.get('#lastName').type('Dutra')
    cy.get('#username').type('cirogrego')
    cy.get('#password').type('123456')
    cy.get('#confirmPassword').type('123456')
    cy.get('[type="submit"]').click()

})

it('Login - New User Fail', () => {
    cy.visit('http://localhost:3000/signin')
    cy.get('[href="/signup"]').click()
    cy.get('#firstName').type('Donald')
    cy.get('#lastName').type('Trump')
    cy.get('#username').type('DonaldTrump')
    cy.get('#password').type('123456')
    cy.get('#confirmPassword').type('12345')
    cy.get('#confirmPassword-helper-text').contains('Password does not match')
    

})

})