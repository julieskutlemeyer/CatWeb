describe('My First Test', () => {
  it('Does not do much!', () => {
    expect(true).to.equal(true)
  })
})

// describe('My Second Test', () => {
//   it('All it does is fail!', () => {
//     expect(true).to.equal(false)
//   })
// })

describe('My First ACTUAL test', () => {
    it('Does something on our page', () => {
        cy.visit('http://localhost:3000/')

        cy.contains('Female').click()

        // cy.get('.info2')
        
        // gets the star icon and clicks it
        cy.get('#favoriteStarIcon').click()
        expect(cy.get('#likenr'))
        // .should('include', 'likes').click()
    })
})