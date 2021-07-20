/// <reference types="cypress" />

describe('urlShortner form', () => {
    beforeEach(() => {
        cy.visit(Cypress.config().baseUrl);
    });

    it('display logo with punchline', () => {
        const topBar = cy.get('div[data-testid="topBar"]');
        topBar.find('img').should('be.visible');
        topBar.get('p').contains('Change mobility for good');
    });

    it('display empty form with submit button', () => {
        const form = cy.get('form[data-testid="shortenUrlForm"]');
        form.get('label').contains('Url:');
        form.get('input[data-testid="longURL"]').should('have.value', '');
        form.get('button[data-testid="buttonSubmit"]').should('be.visible');
        cy.get('div[data-testid="linkView"]').should('not.exist');
    });

    it('display error message if URL is empty', () => {
        // Test for empty string
        const form = cy.get('form[data-testid="shortenUrlForm"]');
        form.submit();
        cy.get('.toastify-error').should('be.visible');
    });

    it('display error message if URL is invalid', () => {
        const textInput = cy.get('input[data-testid="longURL"]');
        textInput.type('test');
        cy.get('button[data-testid="buttonSubmit"]').click();
        cy.get('.toastify-error').should('be.visible');
    });

    it('display error message for server error responses', () => {
        const textInput = cy.get('input[data-testid="longURL"]');
        textInput.type('test.com');
        cy.get('button[data-testid="buttonSubmit"]').click();
        cy.get('.toastify-error').should('be.visible');
    });

    it('display sucesss message and link viewer for valid urls', () => {
        const testLink = 'http://test.com/';
        const textInput = cy.get('input[data-testid="longURL"]');
        textInput.type(testLink);
        cy.get('button[data-testid="buttonSubmit"]').click();
        cy.get('.toastify-success').should('be.visible');
        cy.get('div[data-testid="linkView"]').should('exist');
        const longURL = cy.get('a[data-testid="longURL"]');
        longURL.should('exist');
        longURL.should('have.attr', 'href', testLink);
        cy.get('a[data-testid="bitlyLink"]').should('exist');
    });
});
