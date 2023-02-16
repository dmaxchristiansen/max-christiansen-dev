describe("Homepage", () => {
  before(() => {
    cy.visit("/");
  });

  it("Has no detectable a11y violations on load", () => {
    cy.a11yCheck();
  });
});
