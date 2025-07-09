class TransactiondPage {

    selectorList() {
        const selectors = {
          
            accountBalanceField:".NavDrawer-amount",
            newtransactionButton:'[href="/transaction/new"]',
            avatarButton:'[src="https://avatars.dicebear.com/api/human/uBmeaz5pX.svg"]',
            amountField:"#amount",
            addnoteField:"#transaction-create-description-input",
            payButton:'[data-test="transaction-create-submit-payment"]',
            alertMsg:".MuiAlert-message"
        }

        return selectors
    }

    accesstransactionPage() {
        cy.visit('/')
    }

    accesstransactionWithUser() {
        cy.get(this.selectorList().newtransactionButton).click()
        cy.get(this.selectorList().avatarButton).click({force:true})
        cy.get(this.selectorList().amountField).type('100')
        cy.get(this.selectorList().addnoteField).type('Test transaction')
        cy.get(this.selectorList().payButton).click()
        cy.get(this.selectorList().alertMsg)

    }

    checkAccountBalanceField() {
        cy.get(this.selectorList().accountBalanceField)
        
    }
}

export default TransactiondPage