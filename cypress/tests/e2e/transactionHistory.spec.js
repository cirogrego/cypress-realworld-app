import userData from '../../fixtures/userData.json'
import TransactionHistoryPage from '../pages/transactionHistoryPage'
import LoginPage from '../pages/loginPage.js'

const loginPage = new LoginPage()
const transactionHistoryPage = new TransactionHistoryPage()

describe('Transaction History - Real World app', () => {


    it('Transaction History ', () => {
        loginPage.accessLoginPage()
        loginPage.loginWithUser(userData.userSuccess.username,userData.userSuccess.password)

        transactionHistoryPage.accesstransactionHistoryPage()
        transactionHistoryPage.accesstransactionHistoryPageWithUser()

      
    })

    it('Transaction No History ', () => {
        loginPage.accessLoginPage()
        loginPage.loginWithUser(userData.newUser.username,userData.newUser.password)


        transactionHistoryPage.accesstransactionHistoryPage()
        transactionHistoryPage.accesstransactionNoHistoryPageWithUser()

      
    })

     
    


})