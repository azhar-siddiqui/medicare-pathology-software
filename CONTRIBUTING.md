# Contributing to Next.js Boilerplate

Thank you for your interest in contributing to the Next.js Boilerplate! 🎉

This document provides guidelines and information for contributors. Whether you're fixing bugs, adding features, improving documentation, or helping with testing, your contributions are welcome and appreciated.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [How to Contribute](#how-to-contribute)
- [Development Scripts](#development-scripts)
- [Coding Standards](#coding-standards)
- [Testing](#testing)
- [Submitting Changes](#submitting-changes)
- [Reporting Issues](#reporting-issues)
- [Community](#community)

## Code of Conduct

This project follows a [Code of Conduct](CODE_OF_CONDUCT.md) to ensure a welcoming environment for all contributors. By participating, you agree to uphold this code.

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** ≥ 18.0.0
- **Git** ≥ 2.30.0
- **PostgreSQL** database (local or cloud)

### Setup

1. **Fork the repository** on GitHub
2. **Clone your fork:**
   ```bash
   git clone https://github.com/your-username/nextjs-boilerplate.git
   cd nextjs-boilerplate
   ```
3. **Install dependencies:**
   ```bash
   npm install
   ```
4. **Set up environment variables:**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your configuration
   ```
5. **Set up the database:**
   ```bash
   npx prisma migrate dev
   npx prisma generate
   ```
6. **Start development server:**
   ```bash
   npm run dev
   ```

## Development Workflow

This boilerplate uses a structured development workflow to maintain code quality and consistency:

### Feature Development Scripts

Located in the `scripts/` directory:

```bash
# Create a new feature with proper structure
./scripts/create-new-feature.sh "feature description"

# Set up development plan
./scripts/setup-plan.sh

# Update AI agent context
./scripts/update-agent-context.sh
```

### Git Workflow

1. **Create a feature branch:**

   ```bash
   git checkout -b feature/amazing-feature
   # or
   git checkout -b fix/bug-description
   # or
   git checkout -b docs/update-readme
   ```

2. **Make your changes** following the coding standards

3. **Test your changes:**

   ```bash
   npm run lint
   npm run type-check
   npm test
   npm run e2e:headless
   ```

4. **Commit using conventional commits:**

   ```bash
   npm run commit
   # This opens an interactive prompt for conventional commit messages
   ```

5. **Push your branch:**

   ```bash
   git push origin feature/amazing-feature
   ```

6. **Create a Pull Request** on GitHub

## How to Contribute

### Types of Contributions

- **🐛 Bug Fixes**: Fix existing issues
- **✨ Features**: Add new functionality
- **📚 Documentation**: Improve docs, guides, or comments
- **🧪 Tests**: Add or improve test coverage
- **🎨 UI/UX**: Improve user interface and experience
- **⚡ Performance**: Optimize performance
- **♿ Accessibility**: Improve accessibility
- **🌐 Internationalization**: Add or improve translations

### Finding Issues to Work On

- Check the [Issues](https://github.com/The-Lone-Druid/nextjs-boilerplate/issues) page
- Look for issues labeled `good first issue` or `help wanted`
- Comment on issues you'd like to work on to avoid duplicate work

## Development Scripts

| Command                | Description                             |
| ---------------------- | --------------------------------------- |
| `npm run dev`          | Start development server with Turbopack |
| `npm run build`        | Build for production                    |
| `npm run start`        | Start production server                 |
| `npm run lint`         | Check code linting                      |
| `npm run lint:fix`     | Auto-fix linting issues                 |
| `npm run format`       | Format code with Prettier               |
| `npm run format:check` | Check code formatting                   |
| `npm run type-check`   | Run TypeScript type checking            |
| `npm test`             | Run unit tests                          |
| `npm run test:watch`   | Run tests in watch mode                 |
| `npm run e2e`          | Open Cypress E2E tests                  |
| `npm run component`    | Open Cypress component tests            |
| `npm run commit`       | Interactive conventional commits        |

## Coding Standards

### TypeScript

- Use TypeScript for all new code
- Enable strict type checking
- Use meaningful type names
- Prefer interfaces over types for object shapes
- Use `unknown` over `any` when type is uncertain

### React

- Use functional components with hooks
- Use TypeScript for component props
- Follow the component naming convention: `PascalCase`
- Use meaningful prop names
- Implement proper error boundaries where needed

### Styling

- Use Tailwind CSS classes
- Follow the design system defined in `globals.css`
- Use CSS variables for theming
- Maintain responsive design principles
- Ensure accessibility (WCAG guidelines)

### File Structure

```
src/
├── app/                    # Next.js App Router
├── components/             # React components
│   ├── ui/                # shadcn/ui components
│   └── magicui/           # Enhanced UI components
├── hooks/                 # Custom React hooks
├── lib/                   # Utility functions
└── types/                 # TypeScript type definitions
```

### Commit Messages

This project uses [Conventional Commits](https://conventionalcommits.org/):

```
type(scope): description

[optional body]

[optional footer]
```

Types:

- `feat`: New features
- `fix`: Bug fixes
- `docs`: Documentation
- `style`: Code style changes
- `refactor`: Code refactoring
- `test`: Testing
- `chore`: Maintenance

## Testing

### Unit Tests (Jest)

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm test -- --coverage
```

### E2E Tests (Cypress)

```bash
# Open Cypress test runner
npm run e2e

# Run E2E tests headlessly
npm run e2e:headless
```

### Component Tests (Cypress)

```bash
# Open component test runner
npm run component

# Run component tests headlessly
npm run component:headless
```

### Testing Guidelines

- Write tests for new features
- Maintain test coverage above 80%
- Use descriptive test names
- Test both happy path and error scenarios
- Test accessibility features
- Use proper test data and mocks

## Submitting Changes

### Pull Request Process

1. **Ensure your branch is up to date:**

   ```bash
   git fetch origin
   git rebase origin/main
   ```

2. **Run all checks:**

   ```bash
   npm run lint
   npm run type-check
   npm test
   npm run e2e:headless
   ```

3. **Update documentation** if needed

4. **Create a Pull Request:**
   - Use a descriptive title
   - Provide a clear description of changes
   - Reference any related issues
   - Add screenshots for UI changes

5. **Wait for review** and address any feedback

### PR Checklist

- [ ] Tests pass
- [ ] Code is linted and formatted
- [ ] TypeScript checks pass
- [ ] Documentation is updated
- [ ] No breaking changes without discussion
- [ ] Commit messages follow conventional format
- [ ] PR description is clear and comprehensive

## Reporting Issues

### Bug Reports

When reporting bugs, please include:

- **Description**: Clear description of the issue
- **Steps to reproduce**: Step-by-step instructions
- **Expected behavior**: What should happen
- **Actual behavior**: What actually happens
- **Environment**: OS, Node.js version, browser
- **Screenshots**: If applicable
- **Additional context**: Any other relevant information

### Feature Requests

For feature requests, please include:

- **Description**: What feature you'd like to see
- **Use case**: Why this feature would be useful
- **Proposed solution**: How you think it should work
- **Alternatives**: Other solutions you've considered

## Community

- **GitHub Discussions**: [https://github.com/The-Lone-Druid/nextjs-boilerplate/discussions](https://github.com/The-Lone-Druid/nextjs-boilerplate/discussions)
- **Issues**: [https://github.com/The-Lone-Druid/nextjs-boilerplate/issues](https://github.com/The-Lone-Druid/nextjs-boilerplate/issues)
- **Pull Requests**: [https://github.com/The-Lone-Druid/nextjs-boilerplate/pulls](https://github.com/The-Lone-Druid/nextjs-boilerplate/pulls)

## Recognition

Contributors will be recognized in the project README and GitHub's contributor insights. Significant contributions may also be acknowledged in release notes.

Thank you for contributing to Next.js Boilerplate! 🚀
