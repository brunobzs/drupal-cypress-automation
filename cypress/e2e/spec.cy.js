describe('template spec', () => {
  beforeEach(() => {
    cy.visit('')
    cy.get('.site-branding__name').should('be.visible')
  })


  it('Should display admin page', () => {
    cy.visit('/user')
    cy.get('[data-drupal-selector="user-login-form"]').should('be.visible')
  })

  it('Should login as admin', () => {
    cy.loginAsAdmin()
  })

    it('[Responsiviness] Menu should be opened', () => {
    cy.viewport('iphone-6')
    cy.get('[data-drupal-selector="mobile-nav-button"]').click()
    cy.get('[data-drupal-selector="header-nav"]').should('be.visible')
  })

  it('Should logout', () => {
    cy.loginAsAdmin()
    
    cy.visit('/user/logout')
    cy.contains('input', 'Log out').click()
  })
});
