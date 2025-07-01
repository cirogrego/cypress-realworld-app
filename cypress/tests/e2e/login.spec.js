describe('Real World app', () => {
  it('Login - Success', () => {
    cy.visit('http://localhost:3000/signin')
    cy.get('#username').type('Dina20')
    cy.get('#password').type('s3cret')
    cy.get('[data-test="signin-submit"]').click()
  });
});