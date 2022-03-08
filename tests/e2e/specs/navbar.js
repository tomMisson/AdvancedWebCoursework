describe('The navigation bar contains all element expected when you are logged out', () => {
    it('Visits the app root url', () => {
        cy.visit('/')
    })
    it('Check the active link is selected in the nav bar', () => {
        cy.get('.navbar').find('.router-link-active').contains('Home');
    })
    it('Check the logged out items are visible and named correctly', () => {
        cy.get('.navbar').find('ul').children().should('be.visible','have.length', 4);
        cy.get('.navbar').find('ul').children().eq(0).contains('Home');
        cy.get('.navbar').find('ul').children().eq(1).contains('Explore');
        cy.get('.navbar').find('ul').children().eq(2).contains('Login');
        cy.get('.navbar').find('ul').children().eq(3).contains('Help');
    })
})

describe('The navigation bar contains all element expected when you are logged in', () => {
    it('Visits the login page', () => {
        cy.visit('/login')
    })
    it('Signs in to the test account', () => {
        cy.get('#email').type("test@test.com");
        cy.get('#password').type("test123456");
        cy.get('#login-button').click();

        cy.location().should((loc) => {
            expect(loc.pathname).to.eq('/account')
        })
    })
    it('Check the logged in items are visible and named correctly', () => {
        cy.get('.navbar').find('ul').children().should('be.visible','have.length', 7);
        cy.get('.navbar').find('ul').children().eq(0).contains('Home');
        cy.get('.navbar').find('ul').children().eq(1).contains('Explore');
        cy.get('.navbar').find('ul').children().eq(2).contains('Query data');
        cy.get('.navbar').find('ul').children().eq(3).contains('Submit data');
        cy.get('.navbar').find('ul').children().eq(4).contains('Account');
        cy.get('.navbar').find('ul').children().eq(5).contains('Logout');
        cy.get('.navbar').find('ul').children().eq(6).contains('Help');
    })
})