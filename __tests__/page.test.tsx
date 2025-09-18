import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Page from '../src/app/page';

describe('Page', () => {
  it('renders the main heading', () => {
    render(<Page />);

    const heading = screen.getByRole('heading', {
      name: /build faster with next\.js 15/i,
    });

    expect(heading).toBeInTheDocument();
  });

  it('renders the badge with correct text', () => {
    render(<Page />);

    const badge = screen.getByText('Modern Full-Stack Boilerplate');

    expect(badge).toBeInTheDocument();
  });

  it('renders call-to-action buttons', () => {
    render(<Page />);

    const getStartedButton = screen.getByRole('button', {
      name: /get started/i,
    });
    const docsButton = screen.getByRole('button', {
      name: /view documentation/i,
    });

    expect(getStartedButton).toBeInTheDocument();
    expect(docsButton).toBeInTheDocument();
  });

  it('renders feature cards', () => {
    render(<Page />);

    // Check for card titles specifically - use getAllByText since text may appear multiple times
    expect(screen.getAllByText('Next.js 15')).toHaveLength(2); // Once in heading, once in card
    expect(screen.getByText('Prisma + PostgreSQL')).toBeInTheDocument();
    expect(screen.getByText('Clerk Auth')).toBeInTheDocument();
    expect(screen.getByText('shadcn/ui')).toBeInTheDocument();
    expect(screen.getAllByText('TypeScript')).toHaveLength(2); // Once in icon title, once in card
    expect(screen.getByText('Developer Tools')).toBeInTheDocument();
  });
});
