describe('Button Component Integration', () => {
  it('should render buttons on homepage', () => {
    cy.visit('/');

    // Check that buttons exist and are visible
    cy.contains('Get Started').should('be.visible');
    cy.contains('View Documentation').should('be.visible');

    // Check that buttons have correct styling
    cy.get('button').contains('Get Started').should('have.class', 'bg-primary');
  });
});
