beforeEach(() => {
    cy.log('I run before every test in the test spec file!')
})

describe('First Passing Test', () => {
    it('Does not do much!', () => {
      expect(true).to.equal(true)
    })
})

describe('Access Rock Paper Scissors', () => {
    it('Visits the Rock Paper Scissors Site', () => {
        cy.visit('https://ivandjorgon.github.io/rock-paper-scissors-odin/')
    })
})

describe('Find button Rock', () => {
    it('finds the button "Rock"', () => {
        cy.visit('https://ivandjorgon.github.io/rock-paper-scissors-odin/')
        cy.get('#button-container', { timeout: 10000 }).should('be.visible');
        cy.contains('Rock')
    })
})

describe('Find content Game On!', () => {
    it('finds the content "Game On!"', () => {
        cy.visit('https://ivandjorgon.github.io/rock-paper-scissors-odin/')
        cy.get('#message-container', { timeout: 10000 }).should('be.visible');
        cy.contains('Game On!')
    })
})

describe('Click on Rock button', () => {
    it('clicks the button Rock', () => {
        cy.visit('https://ivandjorgon.github.io/rock-paper-scissors-odin/')
        cy.contains('Rock').click()
        // TODO Add Assertions
    })
})

describe('First Failing Test!', () => {
    it('Fail this test!', () => {
        cy.visit('https://ivandjorgon.github.io/rock-paper-scissors-/')
    })
})