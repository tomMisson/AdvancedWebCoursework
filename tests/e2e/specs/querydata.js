describe('checking options from Query Data page', () => {
    it('Visits querydata page', () => {
        cy.visit('/querydata');
    })
    it('check gene dropdown values', () => {
        cy.get('#Gene')
        .select('ACTC').should('have.value', 'ACTC')
        .select('MYBPC3').should('have.value', 'MYBPC3')
        .select('MYH7').should('have.value', 'MYH7')
        .select('MYL2').should('have.value', 'MYL2')
        .select('TNNCI').should('have.value', 'TNNCI')
        .select('TNNI3').should('have.value', 'TNNI3')
        .select('TNNT2').should('have.value', 'TNNT2')
        .select('TPM1').should('have.value', 'TPM1')
        .select('TTN').should('have.value', 'TTN')
    })
    it('check first dimension dropdown values', () => {
        cy.get('#fd')
        .select('ageAtMRI').should('have.value', 'ageAtMRI')
        .select('atypicalHCM').should('have.value', 'atypicalHCM')
        .select('diabetes').should('have.value', 'diabetes')
        .select('fibrosis').should('have.value', 'fibrosis')
        .select('gender').should('have.value', 'gender')
        .select('hypertension').should('have.value', 'hypertension')
        .select('ledv').should('have.value', 'ledv')
        .select('lesv').should('have.value', 'lesv')
        .select('lsv').should('have.value', 'lsv')
        .select('lvef').should('have.value', 'lvef')
        .select('lvmass').should('have.value', 'lvmass')
        .select('mutatatedGenes').should('have.value', 'mutatatedGenes')
        .select('myectomy').should('have.value', 'myectomy')
        .select('redv').should('have.value', 'redv')
        .select('resv').should('have.value', 'resv')
        .select('rsv').should('have.value', 'rsv')
        .select('rvef').should('have.value', 'rvef')
        .select('rvmass').should('have.value', 'rvmass')
        .select('scar').should('have.value', 'scar')
        .select('suddenCardiacDeath').should('have.value', 'suddenCardiacDeath')
    })
})