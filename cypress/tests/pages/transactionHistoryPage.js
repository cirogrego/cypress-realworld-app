class TransactionHistoryPage {

    selectorList() {
        const selectors = {
            usernameField:"#username",
            passwordField:"#password",
            rememberField:'[name="remember"]',
            signinButton:'[data-test="signin-submit"]',
            mineButton:'[href="/personal"]',
            nameDetail:'[data-test="transaction-sender-jXGkMr8pw"]',
            transactionDetail:'[data-test="transaction-detail-header"]',
            commentField:'[name="content"]'

        }
        return selectors
    }

    accesstransactionHistoryPage() {
        cy.visit('/')
    }

    accesstransactionHistoryPageWithUser(username,password) {
        cy.get(this.selectorList().usernameField).type(username)
        cy.get(this.selectorList().passwordField).type(password)
        cy.get(this.selectorList().rememberField).click()
        cy.get(this.selectorList().signinButton).click()
        cy.get(this.selectorList().mineButton).click()
        cy.get(this.selectorList().nameDetail).click()
        cy.get(this.selectorList().transactionDetail).click()
        cy.get(this.selectorList().commentField).type('test comment')
    }

    accesstransactionNoHistoryPageWithUser(username,password) {
         cy.get(this.selectorList().usernameField).type(username)
        cy.get(this.selectorList().passwordField).type(password)
        cy.get(this.selectorList().rememberField).click()
        cy.get(this.selectorList().signinButton).click()
        cy.get(this.selectorList().mineButton).click()
    }
        

}

export default TransactionHistoryPage