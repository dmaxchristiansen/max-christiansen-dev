/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
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
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }
//
// See https://docs.cypress.io/guides/tooling/typescript-support#Types-for-Custom-Commands
Cypress.Commands.add("dataCy", selector => {
  return cy.get(`[data-cy=${selector}]`);
});

Cypress.Commands.add("a11yCheck", () => {
  cy.get("h1").should("be.visible");
  cy.injectAxe();
  cy.checkA11y();
});

Cypress.Commands.add("isInViewport", selector => {
  cy.dataCy(selector).then($el => {
    cy.window().then(window => {
      const { documentElement } = window.document;
      const bottom = documentElement.clientHeight;
      const right = documentElement.clientWidth;
      const rect = $el[0].getBoundingClientRect();
      expect(rect.top).to.be.lessThan(bottom);
      expect(rect.bottom).to.be.greaterThan(0);
      expect(rect.right).to.be.greaterThan(0);
      expect(rect.left).to.be.lessThan(right);
    });
  });
});
