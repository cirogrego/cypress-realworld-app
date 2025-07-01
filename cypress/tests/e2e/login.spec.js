describe('Real World app', () => {
    
  it('Login - Success', () => {
    cy.visit('http://localhost:3000/signin')
    cy.get('#username').type('cirogrego')
    cy.get('#password').type('123456')
    cy.get('[data-test="signin-submit"]').click()
  })
})

 it('Login - Fail', () => {
    cy.visit('http://localhost:3000/signin')
    cy.get('#username').type('Test')
    cy.get('#password').type('Test')
    cy.get('[data-test="signin-submit"]').click()
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