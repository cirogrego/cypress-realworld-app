import userData from '../../fixtures/userData.json'
import LoginPage from '../pages/loginPage.js'
import TransactionPage from '../pages/transactionPage.js'

const loginPage = new LoginPage()
const transactionPage = new TransactionPage


describe('Transaction - Real World app', () => {

    
    it('Transaction - Positive Balance', () => {
        loginPage.accessLoginPage()
        loginPage.loginWithUser(userData.userSuccess.username,userData.userSuccess.password)
        
        
        transactionPage.accesstransactionPage()
        transactionPage.accesstransactionWithUser()
        transactionPage.checkAccountBalanceField()
        
    })

     it('Transaction - No Balance', () => {
        loginPage.accessLoginPage()
        loginPage.loginWithUser(userData.newUser.username,userData.newUser.password)


        transactionPage.accesstransactionPage()
        transactionPage.accesstransactionWithUser(userData.newUser.username,userData.newUser.password)
        transactionPage.checkAccountBalanceField()

})

})





