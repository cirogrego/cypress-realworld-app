import userData from '../../fixtures/userData.json'
import LoginPage from '../pages/loginPage.js'
import SignupPage from '../pages/signupPage.js'

const loginPage = new LoginPage()
const signupPage = new SignupPage()

describe('Login - Real World app', () => {

  const selectorList = {
    
  }

  it('Login - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.username,userData.userSuccess.password)
   
    
   })

 it('Login - Fail', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userFail.username,userData.userFail.password)
    loginPage.checkAccessInvalid()
   
  })

  it('Login - New User Success', () => {
    signupPage.accessSignupPage()
    signupPage.signupWithUserSuccess(userData.newUser.firstname,userData.newUser.lastname,userData.newUser.username,userData.newUser.password,userData.newUser.confirmpassword)
   
})

it('Login - New User Fail', () => {
    signupPage.accessSignupPage()
    signupPage.signupWithUserFail(userData.newUserFail.firstname,userData.newUserFail.lastname,userData.newUserFail.username,userData.newUserFail.password,userData.newUserFail.confirmpassword)
    
    

})



  }) 
