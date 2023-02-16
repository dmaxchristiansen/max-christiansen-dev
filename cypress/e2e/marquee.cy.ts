describe("Marquee Page", () => {
  before(() => {
    cy.visit("/showcase/components/marquee");
  });

  it("Has no detectable a11y violations on load", () => {
    cy.a11yCheck();
  });
});
