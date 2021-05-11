// https://docs.cypress.io/api/introduction/api.html

describe('Home Page', () => {
  it('Visits the app root url', () => {
    cy.visit('/')
    cy.contains('h2', 'Featured Posts')
  })
})
describe('Posts Page', () => {
  it('Tests visiting posts', () => {
    cy.visit('/posts')
  })
  it('Tests navigation to post', () => {
    cy.contains('.title', 'Lorem ipsum')
    cy.contains('Lorem ipsum').click()
  })
  it('Tests forward and backword navigation of posts', () => {
    cy.get('#next').click()
    cy.get('#previous').click()
  })
})
describe('Account Page', () => {
  it('Tests registering', () => {
    cy.visit('/account')
    cy.get('#register1').click()
    cy.get('#register2').click()
  })
  it('Tests logging out', () => {
    cy.get('#logout1').click()
  })
  it('Tests logging in', () => {
    cy.get('#login1').click()
  })
})
describe('Post Create Page', () => {
  it('Tests making new post', () => {
    cy.wait(2000).visit('/post/new')
    cy.get('#addpost').click()
  })
})
describe('Post Page', () => {
  it('Tests favorites', () => {
    cy.wait(2000).get('#addFav').click()
    cy.get('#removeFav').click()
  })
  it('Tests updating posts', () => {
    cy.contains('button', 'Update').click();
    cy.get('#title').type('Lorem ipsum 2')
    cy.contains('button', 'Update').click();
    cy.contains('button', 'Cancel').click();
  })
  it('Tests deleting posts', () => {
    cy.contains('button', 'Delete').click();
  })
})
describe('Global Favorites Page', () => {
  it('Tests page loading', () => {
    cy.visit('/favorites')
    cy.contains('h2', "Favorites")
  })
})
describe('Search Page', () => {
  it('Tests search', () => {
    cy.visit('/search')
    cy.get('#search').type('Lorem')
    cy.contains('div', "Lorem ipsum")
  })
})
describe('Categories Page', () => {
  it('Tests category listing and cancel', () => {
    cy.visit('/categories')
    cy.contains('button', "lorem").click()
    cy.contains('button', "Cancel").click()
  })
})