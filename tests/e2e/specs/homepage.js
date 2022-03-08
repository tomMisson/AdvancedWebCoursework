// https://docs.cypress.io/api/introduction/api.html

const mockArticle = [
  {
  "title":"Novel AI tool can spot difficult-to-diagnose cardiac conditions",
  "description":"Physician-scientists in the Smidt Heart Institute at Cedars-Sinai have created an artificial intelligence (AI) tool that can effectively identify and distinguish between two life-threatening heart conditions that are often easy to miss: hypertrophic cardiomyopathy",
  "url":"https://www.news-medical.net/news/20220223/Novel-AI-tool-can-spot-difficult-to-diagnose-cardiac-conditions.aspx",
  "image":"https://d2jx2rerrg6sh3.cloudfront.net/image-handler/picture/2019/5/futuristic_techno_design_on_background_of_supercomputer_data_center_-_Image_-_Timofeev_Vladimir_M1_402c068791b640469e416c4f55d84afe-620x480.jpg",
  }
]

describe('Homepage title is correct', () => {
  it('Visits the app root url', () => {
    cy.visit('/')
  })
  it('Verifies that the H1 tag exists', () => {
    cy.contains('h1', 'Cardiomyopathy Data')
  })
})

describe('Homepage has an image', () => {
  it('Visits the app root url', () => {
    cy.visit('/')
  })
  it('Verifies that the image exists', () => {
    cy.get('#hero').find('img').should('have.attr', 'src', '/img/CardianTransparent2.1f43b1a0.png')
  })
})

describe('Homepage contains news feed cards', () => {
  it('Visits the app root url', () => {
    cy.visit('/')
    cy.window().then((win) => {
      win.localStorage.setItem('articles', JSON.stringify(mockArticle))
    })
  })
  it('Verifies that the feed exists', () => {
    cy.get('#cardList').find('div').should('have.length', 1)
  })
})
