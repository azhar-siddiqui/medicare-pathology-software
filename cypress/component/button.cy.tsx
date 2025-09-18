import { Button } from '../../src/components/ui/button';

describe('<Button />', () => {
  it('should render with default variant', () => {
    cy.mount(<Button>Default Button</Button>);

    cy.get('button').should('contain', 'Default Button');
    cy.get('button').should('have.class', 'bg-primary');
  });

  it('should render with secondary variant', () => {
    cy.mount(<Button variant="secondary">Secondary Button</Button>);

    cy.get('button').should('contain', 'Secondary Button');
    cy.get('button').should('have.class', 'bg-secondary');
  });

  it('should render with outline variant', () => {
    cy.mount(<Button variant="outline">Outline Button</Button>);

    cy.get('button').should('contain', 'Outline Button');
    cy.get('button').should('have.class', 'border');
  });

  it('should handle click events', () => {
    const onClickSpy = cy.spy().as('onClickSpy');

    cy.mount(<Button onClick={onClickSpy}>Clickable Button</Button>);

    cy.get('button').click();
    cy.get('@onClickSpy').should('have.been.calledOnce');
  });

  it('should be disabled when disabled prop is true', () => {
    cy.mount(<Button disabled>Disabled Button</Button>);

    cy.get('button').should('be.disabled');
    cy.get('button').should('have.class', 'disabled:opacity-50');
  });

  it('should render with different sizes', () => {
    cy.mount(<Button size="sm">Small Button</Button>);
    cy.get('button').should('have.class', 'h-8');

    cy.mount(<Button size="lg">Large Button</Button>);
    cy.get('button').should('have.class', 'h-10');
  });
});
