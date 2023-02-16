describe("Carousels Page", () => {
  before(() => {
    cy.visit("/showcase/components/carousels");
  });

  it("Has no detectable a11y violations on load", () => {
    cy.a11yCheck();
  });
});
