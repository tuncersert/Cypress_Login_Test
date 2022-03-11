/// <reference types="cypress" />
import * as pageObject from '../fixtures/login-page-object.json';
import * as data from '../fixtures/data.json';

export class helper{
    login (userName, password){
        //Enter valid user id
        cy.get(pageObject.loginPage.userNameField).type(userName)
        //Enter invalid Password
        cy.get(pageObject.loginPage.passwordField).type(password+'{enter}')
        //Assert the url after login
        cy.checkURL('secure')
    }    
}
export default new helper();