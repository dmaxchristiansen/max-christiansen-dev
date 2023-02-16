declare namespace Cypress {
  interface Chainable {
    a11yCheck(): void;
    dataCy(selector: string): Chainable<JQuery<HTMLElement>>;
    isInViewport(selector: string): Chainable<JQuery<HTMLElement>>;
  }
}
