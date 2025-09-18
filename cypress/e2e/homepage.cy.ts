describe('Homepage', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should load the homepage successfully', () => {
    cy.contains('Build Faster with Next.js 15').should('be.visible');
    cy.contains('Modern Full-Stack Boilerplate').should('be.visible');
  });

  it('should have working theme toggle', () => {
    // Theme toggle should exist
    cy.get('button[aria-label="Toggle theme"]').should('exist');

    // Click the theme toggle
    cy.get('button[aria-label="Toggle theme"]').click();

    // The html element should have the dark class
    cy.get('html').should('have.class', 'dark');
  });

  it('should display all feature cards', () => {
    cy.contains('Next.js 15').should('be.visible');
    cy.contains('Prisma + PostgreSQL').should('be.visible');
    cy.contains('Clerk Auth').should('be.visible');
    cy.contains('shadcn/ui').should('be.visible');
    cy.contains('TypeScript').should('be.visible');
    cy.contains('Developer Tools').should('be.visible');
  });

  it('should have working tabs in the demo section', () => {
    // Check that tabs exist
    cy.contains('Components').should('be.visible');
    cy.contains('Progress').should('be.visible');
    cy.contains('Alerts').should('be.visible');

    // Click on Progress tab
    cy.contains('Progress').click();

    // Should show progress bars (using data-slot attribute from shadcn/ui)
    cy.get('[data-slot="progress"]').should('have.length.at.least', 1);
  });

  it('should display call-to-action buttons', () => {
    cy.contains('Get Started').should('be.visible');
    cy.contains('View Documentation').should('be.visible');
  });
});
