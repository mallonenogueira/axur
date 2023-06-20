/// <reference types="cypress" />

describe('web inspection e2e', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should create new web inspection', () => {
    cy.get('button').click();
    cy.get('input[name=keyword]').type('palavra');

    cy.get('form').submit();

    cy.get('a').should('contain', 'palavra');
  });

  it('should navigate to new web inspection', () => {
    cy.intercept('POST', '**/crawl').as('createCrawl');
    cy.intercept('GET', '**/crawl/**').as('getCrawl');

    cy.get('button').click();
    cy.get('input[name=keyword]').type('palavra');

    cy.get('form').submit();

    cy.wait('@createCrawl');

    cy.get('li a').click();

    cy.wait('@getCrawl');

    cy.get('small').should('contain', 'Status: Em andamento');
    cy.get('div').should('contain', 'Nenhum registro encontrado');
  });
});
