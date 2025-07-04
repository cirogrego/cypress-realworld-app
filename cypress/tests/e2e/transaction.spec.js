import userData from '../../fixtures/userData.json'

describe('Transaction - Real World app', () => {

    const selectorList = {
        usernameField:"#username",
        passwordField:"#password",
        rememberField:'[name="remember"]',
        signinButton:'[data-test="signin-submit"]',
        newtransactionButton:'[href="/transaction/new"]',
        avatarButton:'[src="https://avatars.dicebear.com/api/human/uBmeaz5pX.svg"]',
        amountField:"#amount",
        addnoteField:"#transaction-create-description-input",
        payButton:'[data-test="transaction-create-submit-payment"]',
    }

    it('Transaction - Success', () => {
        cy.visit('http://localhost:3000/signin')
        cy.get(selectorList.usernameField).type(userData.userSuccess.username)
        cy.get(selectorList.passwordField).type(userData.userSuccess.password)
        cy.get(selectorList.rememberField).click()
        cy.get(selectorList.signinButton).click()
        cy.get(selectorList.newtransactionButton).click()
        cy.get(selectorList.avatarButton).click({force:true})
        cy.get(selectorList.amountField).type(100)
        cy.get(selectorList.addnoteField).type('Test')
        cy.get(selectorList.payButton).click()
        cy.get('.MuiAlert-message')
    })

})





