import userData from '../../fixtures/userData.json'
import TransactionPage from '../pages/transactionPage.js'


const transactionPage = new TransactionPage


describe('Transaction - Real World app', () => {

    const selectorList = {

    }

    it('Transaction - Success', () => {
        transactionPage.accesstransactionPage()
        transactionPage.accesstransactionWithUser(userData.userSuccess.username,userData.userSuccess.password)
        
    })

     it('Transaction - Fail', () => {
        transactionPage.accesstransactionPage()
        transactionPage.accesstransactionWithUser(userData.userSuccess.username,userData.userSuccess.password)
        transactionPage.checkAccountBalanceField()

})

})





