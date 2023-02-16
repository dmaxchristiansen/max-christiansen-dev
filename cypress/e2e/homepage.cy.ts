describe("Homepage", () => {
  before(() => {
    cy.visit("/");
  });
  it("Has no detectable a11y violations on load", () => {
    cy.get("h1").should("be.visible");
    cy.injectAxe();
    cy.checkA11y();
  });
  // it("Should fail", () => {
  //   cy.get("h2").should("be.visible");
  // });
});
