describe('rest password page works', () => {
    it('Visit restpassword page', () => {
        cy.visit('/resetpassword')
    })

    it('Makes sure the validation is working', () => {
        cy.get('#resetpassword-button').click();
        cy.get('.alert').should('have.length', 1).contains("Error: The email address is badly formatted.");
    })

    it('Add rest password eamil details, expect success', () => {
        cy.get('#email').type("test1@test.com");
        cy.get('#resetpassword-button').click();

        cy.get('.alert').should('have.length', 1).contains("Email has been sent to you, please check your emails and verify.");
    })

})
