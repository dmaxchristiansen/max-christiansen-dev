describe("DataVisualizer Page", () => {
  before(() => {
    cy.visit("/showcase/components/data-visualizer");
  });

  it("Has no detectable a11y violations on load", () => {
    cy.a11yCheck();
  });
});
