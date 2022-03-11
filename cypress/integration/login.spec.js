/// <reference types="cypress" />

import * as pageObject from '../fixtures/login-page-object.json';
import * as data from '../fixtures/data.json';
import helper from '../helpers/helper'


beforeEach(function () {
  cy.viewport('macbook-15')
  
})

describe('Login/Logout Test Scenarious', () => {

  beforeEach(function () {
    cy.visit(data.loginPage.loginURL)
    
  })

  it('1.Checking Wrong User Id Alert', () => {
    ///Enter a wrong user id and check if correct alert displays
    //Enter an invalid usert id
    cy.get(pageObject.loginPage.userNameField).type(data.loginPage.FakeUser+'{enter}')
    //check the text of the alert is correct and visible
    cy.get(pageObject.loginPage.alert).should('be.visible').checkElementText( data.loginPage.InvalidUserAlert)
  
  })

  it('2.Checking Wrong Password Alert', () => {
    //Enter a correct user id but incorrect password and check if correct alert displays
    //Enter valid user id
    cy.get(pageObject.loginPage.userNameField).type(data.loginPage.user1)
    //Enter invalid Password
    cy.get(pageObject.loginPage.passwordField).type(data.loginPage.FakePass+'{enter}')
    //check the text of the alert is correct and visible
    cy.get(pageObject.loginPage.alert).should('be.visible').checkElementText( data.loginPage.InvalidPassAlert)
  
  })
  it('3.Checking Successfull User Login', () => {
    ///Enter correct user id/password and check if user ends up to the correct page
    helper.login(data.loginPage.user1, data.loginPage.pass1)
    //Assert the logout button exist on the page
    cy.get(pageObject.loginPage.signOutButton).should('be.visible')
    //Assert the message of successfully logged in
    cy.get(pageObject.loginPage.alert).should('be.visible').checkElementText( data.loginPage.loginSuccesfullMssg)
    //Assert the text of the page after logged in
    cy.get(pageObject.loginPage.secureArea).should('be.visible').checkElementText('Welcome to the Secure Area')

  })
  it('4.Checking Login-Logout Flow', () => {
    ///Check if user logs in and logs out successfully.
    helper.login(data.loginPage.user1, data.loginPage.pass1)
    //Assert the logout button exist on the page and click on it for logging out
    cy.get(pageObject.loginPage.signOutButton).should('be.visible').click()
    //Assert that user navigated to login page and login button exist on the page
    cy.get(pageObject.loginPage.loginButton).should('be.visible')
    //Assert the url is correct after log out
    cy.checkURL('login')
    //Assert the log out message displayed after logging out
    cy.get(pageObject.loginPage.alert).should('be.visible').checkElementText( data.loginPage.logoutSuccesfullMssg)

  })

})
