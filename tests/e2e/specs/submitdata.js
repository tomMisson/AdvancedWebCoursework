describe("SubmitData page appear", () => {
  it("Visits the app root url", () => {
    cy.visit("/submitdata");
  });

  it("Check if the container appear", () => {
    cy.get(".container");
  });

  it("Verify that the submit data using file appear", () => {
    cy.get("#upload_file_part");
  });

  it("Verify that the submit data manually appear", () => {
    cy.get("#manual_add_part");
  });

  it("Check if user didn't upload file", () => {
    cy.get("#submit_data_upload").click();
    cy.get(".alert");
  });

  it("Check if user didn't add data manually", () => {
    cy.get("#submit_data_manually").click();
    cy.get(".alert");
  });
});
