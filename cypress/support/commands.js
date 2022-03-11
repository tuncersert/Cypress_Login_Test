// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('checkElementText', { prevSubject: 'element' }, (subject, text) => {
    cy.get(subject).invoke('text').then(t => {
        expect(t.toUpperCase().trim()).to.contain(text.toUpperCase());
    })
})

Cypress.Commands.add('checkURL', (link, exactResult) => {
    cy.location('href', { timeout: 60000 }).should(url => {
        if (exactResult)
            expect(url).to.endsWith(link);
        else
            expect(url).to.include(link);
    })
})