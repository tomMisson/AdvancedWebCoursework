describe("Help page appear", () => {
  it("Visits the app root url", () => {
    cy.visit("/help");
  });

  it("Check if title appear", () => {
    cy.get("h1").contains("How can we help you?");
  });

  it("Verify that the select help appear", () => {
    cy.get("#select_help");
  });

  it("Check if select option appear and display all options", () => {
    cy.get("#select_help").select("How to Register");
    cy.get("#select_help").select("How to Login");
    cy.get("#select_help").select("How to view account");
    cy.get("#select_help").select("How to submit data");
    cy.get("#select_help").select(
      "How to view, edit and delete the user submitted data"
    );
    cy.get("#select_help").select(
      "How to search cardiomyopathy types internally and externally"
    );
    cy.get("#select_help").select("How to query data");
  });

  it("Check if the video of help appear", () => {
    cy.get("#select_help").select("How to Register");
    cy.get(".gif_display").find("iframe");
  });
});
