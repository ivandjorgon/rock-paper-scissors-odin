describe('First Passing Test', () => {
    it('Does not do much!', () => {
        expect(5).to.be.lessThan(6)
        expect('test').to.have.length.of.at.most(4)
    })
})

describe('First Failing Test', () => {
    // Chain multiple assertions together using cy.and()
    it('Does not do anything either!', () => {
        cy.get('div').should('have.class', 'foo').and('have.class', 'bar').and('have.class', 'baz')
    })
})

describe('Access Rock Paper Scissors', () => {
    it('Visits the Rock Paper Scissors Site', () => {
        cy.visit('https://ivandjorgon.github.io/rock-paper-scissors-odin/')
    })
})

describe('Check button container is visible', () => {
    it('Checks that buttons are visible', () => {
        cy.visit('https://ivandjorgon.github.io/rock-paper-scissors-odin/')
        cy.get('#button-container').should('be.visible')
    })
})

describe('Find button Rock', () => {
    it('Finds the button "Rock"', () => {
        cy.visit('https://ivandjorgon.github.io/rock-paper-scissors-odin/')
        cy.get('#button-container', { timeout: 10000 }).should('be.visible');
        cy.contains('Rock')
    })
})

describe('Click on Rock button', () => {
    it('Clicks the button Rock', () => {
        cy.visit('https://ivandjorgon.github.io/rock-paper-scissors-odin/')
        cy.contains('Rock').click()
        // TODO Add Assertions
    })
})

describe('Find content Game On!', () => {
    it('Finds the content "Game On!"', () => {
        cy.visit('https://ivandjorgon.github.io/rock-paper-scissors-odin/')
        cy.get('#message-container', { timeout: 10000 }).should('be.visible');
        cy.contains('Game On!')
    })
})

describe('Check Main Container Content - Negative Test', () => {
    it('Checks Game Heading Content Negative Test', () => {
        cy.visit('https://ivandjorgon.github.io/rock-paper-scissors-odin/')
        cy.get('#main-container').should('not.contain', 'click me')
    })
})

describe('Check Main Container Content - Positive Test', () => {
    it('Checks Game Heading Content Positive Test', () => {
        cy.visit('https://ivandjorgon.github.io/rock-paper-scissors-odin/')
        cy.get('#main-container').should('contain', 'Rock Paper Scissors Game')
    })
})