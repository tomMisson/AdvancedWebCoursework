const userDetails = {
    email: 'test@test.com',
    password: 'test123456',
    accountType: 'user',
    number: '01234567890',
    address: 'test address'
}

describe('Checks operations from account page work', () => {
    it('Visits login page page', () => {
        cy.visit('/login');
    })
    it('signs in to test account', () => {
        cy.get('#email').type(userDetails.email);
        cy.get('#password').type(userDetails.password);
        cy.get('#login-button').click();
    })
    it('contains user details', () => {
        cy.get('#accountEmail').contains(userDetails.email)
        cy.get('#accountType').contains(userDetails.accountType)
        cy.get('#accountNumber').contains(userDetails.number)
        cy.get('#accountAddress').contains(userDetails.address)

    })
    it('checks the edit button is rerouting to the edit page', () => {
        cy.get('#card-btn').click();
        cy.get('#edit-btn').click({force: true});
        cy.location().should((loc) => {
            expect(loc.pathname).to.include('/editdata');
        })
    })
})
