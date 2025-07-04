import userData from '../../fixtures/userData.json'
import TransactionPage from '../pages/transactionPage.js'


const transactionPage = new TransactionPage


describe('Transaction - Real World app', () => {

    const selectorList = {

    }

    it('Transaction - Positive Balance', () => {
        transactionPage.accesstransactionPage()
        transactionPage.accesstransactionWithUser(userData.userSuccess.username,userData.userSuccess.password)
        
    })

     it('Transaction - No Balance', () => {
        transactionPage.accesstransactionPage()
        transactionPage.accesstransactionWithUser(userData.userTransactionNoHistory.username,userData.userTransactionNoHistory.password)
        transactionPage.checkAccountBalanceField()

})

})





