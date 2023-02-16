describe("Contact Page", () => {
  before(() => {
    cy.visit("/contact");
  });

  it("Has no detectable a11y violations on load", () => {
    cy.a11yCheck();
  });
});
