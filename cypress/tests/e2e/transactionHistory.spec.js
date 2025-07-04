import userData from '../../fixtures/userData.json'
import TransactionHistoryPage from '../pages/transactionHistoryPage'

const transactionHistoryPage = new TransactionHistoryPage

describe('Transaction History - Real World app', () => {

    const selectorList = {
        
 }

 it('Transaction History ', () => {
        transactionHistoryPage.accesstransactionHistoryPage()
        transactionHistoryPage.accesstransactionHistoryPageWithUser(userData.userSuccess.username,userData.userSuccess.password)

      
    })

    it('Transaction No History ', () => {
        transactionHistoryPage.accesstransactionHistoryPage()
        transactionHistoryPage.accesstransactionNoHistoryPageWithUser(userData.userTransactionNoHistory.username,userData.userTransactionNoHistory.password)

      
    })

     
    


})