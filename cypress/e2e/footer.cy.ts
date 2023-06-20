describe("Footer", () => {
  it("Renders the link elements as expected", () => {
    cy.visit("/showcase/components");
    cy.dataCy("footerGithubLink")
      .should("have.attr", "href", "https://github.com/dmaxchristiansen")
      .and("include.text", "dmaxchristiansen");
    cy.dataCy("footerLinkedInLink")
      .should("have.attr", "href", "https://www.linkedin.com/in/dmaxdev/")
      .and("include.text", "dmaxdev");
    cy.dataCy("footerResumeLink")
      .should("have.attr", "href", "/max_christiansen_resume_spring_2023.pdf")
      .and("include.text", "resume");
  });
});
