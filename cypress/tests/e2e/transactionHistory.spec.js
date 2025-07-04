import userData from '../../fixtures/userData.json'

describe('Transaction History - Real World app', () => {

    const selectorList = {
        usernameField:"#username",
        passwordField:"#password",
        rememberField:'[name="remember"]',
        signinButton:'[data-test="signin-submit"]',
        mineButton:'[href="/personal"]',
        personalField:'[data-test="transaction-sender-FW6V8-LaP"]',
        transactionDetail:'[data-test="transaction-detail-header"]'
 }

    it('Transaction History ', () => {
         cy.visit('http://localhost:3000/signin')
        cy.get(selectorList.usernameField).type(userData.userSuccess.username)
        cy.get(selectorList.passwordField).type(userData.userSuccess.password)
        cy.get(selectorList.rememberField).click()
        cy.get(selectorList.signinButton).click()
        cy.get(selectorList.mineButton).click()
        cy.get(selectorList.personalField).click()
        cy.get(selectorList.transactionDetail).contains('Transaction Detail')
    })
    


})