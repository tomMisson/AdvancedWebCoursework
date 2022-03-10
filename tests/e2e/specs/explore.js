// https://docs.cypress.io/api/introduction/api.html

describe("Explore page appear", () => {
  it("Visits the app root url", () => {
    cy.visit("/explore");
  });

  it("Check if title appear", () => {
    cy.get("h1").contains("Explore");
  });

  it("Verify that the select cardiomyopathy type appear", () => {
    cy.get("#cardio_select");
  });

  it("Verify that the select gene type appear", () => {
    cy.get("#gene_select");
  });

  it("Check if gene data appear", () => {
    cy.get("#gene_select").select("Gene");
    cy.get("#text_type").type("TTN");
    cy.get(".card-body");
  });

  it("Check if cardio data appear", () => {
    cy.get("#cardio_select").select(
      "Arrhythmogenic right ventricular dysplasia"
    );
    cy.get(".card-body");
  });
});
