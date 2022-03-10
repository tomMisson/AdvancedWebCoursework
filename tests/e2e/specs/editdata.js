describe('update data page works', () => {
    it('Visit edit data page', () => {
        cy.visit('/editdata/:id')
    })

    it('Makes sure the validation is working', () => {
        cy.get('#manualdata').submit(), (e) =>{
            e.preventDefault()
            throw new Error('Submitting')
        }
    })

    it('Add form details with incorrect formals, expect fialed', () => {
        cy.get('#LEDV').type("432");
        cy.get('#REDV').type("432");
        cy.get('#LESV').type("432");
        cy.get('#RESV').type("432");
        cy.get('#LVEF').type("432");
        cy.get('#RVEF').type("432");
        cy.get('#LVMASS').type("432.444444444444");

        cy.get('#manualdata').submit(), (e) =>{
            e.preventDefault()
            
        }
    })

})
