describe('Login for account works', () => {
    it('Visit login page', () => {
        cy.visit('/login')
    })

    it('Rest password link works', () =>{
        cy.contains('Reset').click
        })

    it('Register link works', () =>{
    cy.get('#register-button').click();
    })

    it('Makes sure the validation is working', () => {
        cy.visit('/login')
        cy.get('#login-button').click();
        cy.get('.alert').should('have.length', 1).contains("Error: The email address is badly formatted.");
    })

    it('Makes sure the Login Function is working, except account page', () => {
        cy.get('#email').type("test@test.com");
        cy.get('#password').type("test123456");
        cy.get('#login-button').click();
        cy.visit('/account')
    })

})
