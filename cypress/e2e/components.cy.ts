describe("Showcase Components Page", () => {
  before(() => {
    cy.visit("/showcase/components");
  });

  it("Has no detectable a11y violations on load", () => {
    cy.a11yCheck();
  });
});
