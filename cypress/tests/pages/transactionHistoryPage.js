class TransactionHistoryPage {

    selectorList() {
        const selectors = {
            friendsButton: '[href="/contacts"]',
            mineButton:'[href="/personal"]',
            nameDetail:"[data-test='transaction-sender-f5QeIHeqw']",
            transactionDetail:'[data-test="transaction-detail-header"]',
            commentField:'[name="content"]',
            noTransactionName:'.css-mpyo7s-MuiTypography-root'

        }
        return selectors
    }

    accesstransactionHistoryPage() {
        cy.visit('/')
    }

    accesstransactionHistoryPageWithUser() {
        cy.get(this.selectorList().mineButton).click()
        cy.get(this.selectorList().nameDetail).click()
        cy.get(this.selectorList().transactionDetail).click()
        cy.get(this.selectorList().commentField).type('test comment')
    }

    accesstransactionNoHistoryPageWithUser() {
        cy.get(this.selectorList().friendsButton).click()
        cy.get(this.selectorList().noTransactionName).contains('No Transactions')
    }
        

}

export default TransactionHistoryPage