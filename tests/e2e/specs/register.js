describe('Sign up for account works', () => {
    it('Visit register page', () => {
        cy.visit('/register')
    })

    it('Makes sure the validation is working', () => {
        cy.get('#register-button').click();
        cy.get('.alert').should('have.length', 1).contains("Failed to validate form, please ensure all fields are filled out.");
    })

    it('Add account details, expect failure', () => {
        cy.get('#name').type("test Mctestface");
        cy.get('#email').type("test@test.com");
        cy.get('#password').type("test123456");
        cy.get('#phonenumber').type("01234567890");
        cy.get('#affiliation').type("test affiliation");
        cy.get('#address').type("test address");
        cy.get('#register-button').click();

        cy.get('.alert').should('have.length', 1).contains("Error: The email address is already in use by another account.");
    })
})
