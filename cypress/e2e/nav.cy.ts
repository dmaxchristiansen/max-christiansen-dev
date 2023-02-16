/* eslint-disable cypress/no-unnecessary-waiting */
const navConfig = [
  { text: "expertise", href: "/#expertise" },
  { text: "experience", href: "/#experience" },
  { text: "showcase", href: "/showcase/" },
  { text: "contact", href: "/contact/" },
];

describe("Nav", () => {
  before(() => {
    cy.visit("/");
  });

  context("Link Render", () => {
    it("Renders the home link as expected", () => {
      cy.dataCy("navHomeLink")
        .should("include.text", "Max Christiansen Dev")
        .and("have.attr", "href", "/");
      cy.dataCy("otterFriend").should("be.visible");
    });

    it("Renders the correct page and anchor links as expected", () => {
      navConfig.forEach(link => {
        cy.dataCy("navLink")
          .contains(link.text)
          .should("include.text", link.text)
          .and("have.attr", "href", link.href);
      });
    });
  });

  context("Link Function", () => {
    it("Navigates to the correct anchor when a link is clicked", () => {
      cy.dataCy("navLink").eq(0).click();
      cy.wait(1000);
      cy.isInViewport("expertise");
      cy.dataCy("navLink").eq(1).click();
      cy.wait(1000);
      cy.isInViewport("experience");
      cy.dataCy("navLink").eq(3).click().url().should("include", "/contact/");
      cy.dataCy("navHomeLink").click().url().should("include", "/");
    });

    it("Navigates to the correct page when a link is clicked", () => {
      cy.dataCy("navLink").eq(3).click().url().should("include", "/contact/");
      cy.dataCy("navHomeLink").click().url().should("include", "/");
      cy.dataCy("navLink").eq(2).click().url().should("include", "/showcase/");
    });
  });
});
