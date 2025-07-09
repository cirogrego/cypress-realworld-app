import userData from '../../fixtures/userData.json'
import LoginPage from '../pages/loginPage.js'
import SignupPage from '../pages/signupPage.js'

const loginPage = new LoginPage()
const signupPage = new SignupPage()

describe('User Info Update - Real World app', () => {


  it('Login - New User Success', () => {
    signupPage.accessSignupPage()
    signupPage.signupWithUser(userData.newUser.firstname,userData.newUser.lastname,userData.newUser.username,userData.newUser.password,userData.newUser.confirmpassword)
    signupPage.saveform()
})

it('Login - New User Fail', () => {
    signupPage.accessSignupPage()
    signupPage.signupWithUser(userData.newUserFail.firstname,userData.newUserFail.lastname,userData.newUserFail.username,userData.newUserFail.password,userData.newUserFail.confirmpassword)
    signupPage.checkSingupInvalid()
})

}) 
