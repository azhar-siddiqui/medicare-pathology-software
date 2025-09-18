# 🚀 Next.js Boilerplate

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js" alt="Next.js" />
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white" alt="Prisma" />
  <img src="https://img.shields.io/badge/Clerk-6C47FF?style=for-the-badge&logo=clerk&logoColor=white" alt="Clerk" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge" alt="License: MIT" />
  <br />
  <img src="https://img.shields.io/github/contributors/The-Lone-Druid/nextjs-boilerplate?style=for-the-badge" alt="Contributors" />
  <img src="https://img.shields.io/github/stars/The-Lone-Druid/nextjs-boilerplate?style=for-the-badge" alt="Stars" />
  <img src="https://img.shields.io/github/issues/The-Lone-Druid/nextjs-boilerplate?style=for-the-badge" alt="Issues" />
  <img src="https://img.shields.io/github/last-commit/The-Lone-Druid/nextjs-boilerplate?style=for-the-badge" alt="Last Commit" />
  <br />
  <strong>A production-ready, full-stack Next.js boilerplate with modern tools and best practices</strong>
  <br />
  <strong>🚀 Enhanced with Spec-Kit for AI-powered, specification-driven development</strong>
  <br />
  <a href="#-quick-start">🚀 Quick Start</a> •
  <a href="#-contributing">🤝 Contributing</a> •
  <a href="https://github.com/The-Lone-Druid/nextjs-boilerplate">📖 Documentation</a> •
  <a href="https://nextjs-boilerplate-ultra.vercel.app">✨ Live Demo</a>
</p>

---

## ✨ Features

### 🛠️ Core Technologies

| Technology                 | Description                                               |
| -------------------------- | --------------------------------------------------------- |
| **⚡ Next.js 15**          | App Router with Turbopack for lightning-fast development  |
| **🔷 TypeScript**          | Full type safety with strict checking and IntelliSense    |
| **🗄️ Prisma + PostgreSQL** | Type-safe database ORM with Accelerate for edge computing |
| **🔐 Clerk Auth**          | Complete authentication solution with social logins       |
| **🎨 shadcn/ui**           | Beautiful, accessible components built on Radix UI        |
| **🌈 Tailwind CSS v4**     | Utility-first CSS framework with custom design system     |

### 🧪 Testing & Quality

| Feature         | Description                                       |
| --------------- | ------------------------------------------------- |
| **🃏 Jest**     | Unit testing with React Testing Library           |
| **🌀 Cypress**  | E2E and component testing                         |
| **🔍 ESLint**   | Code linting with Next.js and accessibility rules |
| **💅 Prettier** | Code formatting with Tailwind CSS plugin          |

### 🚀 Developer Experience

| Feature                     | Description                                       |
| --------------------------- | ------------------------------------------------- |
| **🤖 Spec-Kit**             | AI-powered specification-driven development       |
| **🌐 Internationalization** | Multi-language support (English, Spanish, French) |
| **🎭 Theme System**         | Dark/light mode with system preference detection  |
| **🔧 Git Hooks**            | Husky + Commitlint for conventional commits       |
| **📝 Commitizen**           | Interactive conventional commit messages          |
| **⚙️ Custom Scripts**       | Feature development workflow automation           |

### 🎯 Additional Features

- **📱 Responsive Design** - Mobile-first approach with adaptive layouts
- **♿ Accessibility** - WCAG compliant components and keyboard navigation
- **🎨 Magic UI** - Enhanced UX with animated components
- **📊 Charts & Data** - Recharts integration for data visualization
- **📋 Form Handling** - React Hook Form with Zod validation
- **🎪 Animations** - Motion library for smooth interactions

---

## 🤖 Spec-Kit Integration

This boilerplate uniquely integrates [**Spec-Kit**](https://github.com/github/spec-kit), GitHub's specification-driven development toolkit that enhances AI-powered development workflows.

### Why Spec-Kit?

**Spec-Kit** is a unique feature of this boilerplate that provides:

- **🤖 AI-Powered Development** - Leverage cutting-edge AI assistance for faster development
- **📋 Specification-Driven Workflow** - Structured approach to feature development and delivery
- **🔄 Enhanced Productivity** - Streamlined workflows that accelerate your development cycles
- **🎯 Improved Quality** - AI-assisted code quality and best practices integration

### Getting Started with Spec-Kit

This boilerplate comes pre-configured with Spec-Kit integration. For detailed setup instructions, usage guides, and best practices, please refer to the [**Spec-Kit Documentation**](https://github.com/github/spec-kit#readme).

### Key Benefits

- **🚀 60% Faster Development** - AI assistance reduces development time significantly
- **🎯 Better Delivery** - Specification-driven approach ensures consistent results
- **🔧 Seamless Integration** - Works out-of-the-box with this boilerplate's architecture
- **📚 Comprehensive Documentation** - Full guides available in Spec-Kit's official repository

---

## 📋 Table of Contents

- [🚀 Quick Start](#-quick-start)
- [📦 Prerequisites](#-prerequisites)
- [⚡ Installation](#-installation)
- [🔧 Configuration](#-configuration)
- [🏃‍♂️ Usage](#️-usage)
- [🤖 Spec-Kit Integration](#-spec-kit-integration)
- [📁 Project Structure](#-project-structure)
- [🎨 Customization](#-customization)
- [🚀 Deployment](#-deployment)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)
- [📚 Learn More](#-learn-more)

---

## 🚀 Quick Start

> Get up and running in less than 5 minutes!

```bash
# 1. Clone the repository
git clone https://github.com/The-Lone-Druid/nextjs-boilerplate.git
cd nextjs-boilerplate

# 2. Install dependencies
npm install

# 3. Set up git hooks
npm run prepare

# 4. Set up environment variables
cp .env.example .env.local

# 5. Configure your database and Clerk keys in .env.local

# 6. Set up the database
npx prisma migrate dev
npx prisma generate

# 7. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) and start building! 🎉

---

## 📦 Prerequisites

Before you begin, ensure you have the following installed:

### Required

- **Node.js** ≥ 18.0.0
- **Git** ≥ 2.30.0
- **PostgreSQL** database (local or cloud)

### Package Managers (choose one)

- **npm** ≥ 8.0.0
- **yarn** ≥ 1.22.0
- **pnpm** ≥ 7.0.0
- **bun** ≥ 1.0.0

### Optional but Recommended

- **VS Code** with extensions:
  - TypeScript and JavaScript Language Features
  - Tailwind CSS IntelliSense
  - Prisma
  - ESLint

---

## ⚡ Installation

### Step 1: Clone the Repository

```bash
git clone https://github.com/The-Lone-Druid/nextjs-boilerplate.git
cd nextjs-boilerplate
```

### Step 2: Install Dependencies

Choose your preferred package manager:

```bash
# npm
npm install

# yarn
yarn install

# pnpm
pnpm install

# bun
bun install
```

### Step 3: Set Up Git Hooks

Initialize Husky git hooks for pre-commit linting and commit message validation:

```bash
npm run prepare
```

### Step 4: Environment Setup

1. **Copy environment template:**

   ```bash
   cp .env.example .env.local
   ```

2. **Configure required variables:**

   ```env
   # Database
   DATABASE_URL="postgresql://username:password@localhost:5432/database_name"

   # Clerk Authentication
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
   CLERK_SECRET_KEY=sk_test_...

   # Optional: Customize Clerk routes
   NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
   NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
   NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
   NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/
   ```

### Step 5: Database Setup

1. **Ensure PostgreSQL is running** on your system or use a cloud database
2. **Run database migrations:**
   ```bash
   npx prisma migrate dev
   ```
3. **Generate Prisma client:**
   ```bash
   npx prisma generate
   ```

### Step 6: Clerk Authentication Setup

1. **Create a Clerk application:**
   - Visit [clerk.com](https://clerk.com) and create a new application
   - Choose your authentication providers (Email, Google, GitHub, etc.)

2. **Copy API keys:**
   - Copy your `Publishable key` and `Secret key` from the Clerk dashboard
   - Paste them into your `.env.local` file

### Step 7: Verify Installation

```bash
# Start development server
npm run dev

# Open your browser to http://localhost:3000
# You should see the landing page with all features working!
```

---

## 🔧 Configuration

### Environment Variables

| Variable                              | Description                  | Required |
| ------------------------------------- | ---------------------------- | -------- |
| `DATABASE_URL`                        | PostgreSQL connection string | ✅       |
| `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`   | Clerk publishable key        | ✅       |
| `CLERK_SECRET_KEY`                    | Clerk secret key             | ✅       |
| `NEXT_PUBLIC_CLERK_SIGN_IN_URL`       | Custom sign-in route         | ❌       |
| `NEXT_PUBLIC_CLERK_SIGN_UP_URL`       | Custom sign-up route         | ❌       |
| `NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL` | Post-sign-in redirect        | ❌       |
| `NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL` | Post-sign-up redirect        | ❌       |

### Database Configuration

The boilerplate uses Prisma with PostgreSQL. You can:

- **Local PostgreSQL:** Install PostgreSQL locally
- **Cloud Database:** Use services like:
  - [Prisma](https://console.prisma.io)
  - [PlanetScale](https://planetscale.com)
  - [Neon](https://neon.tech)
  - [Railway](https://railway.app)

### Clerk Configuration

Customize authentication in `src/middleware.ts` and authentication pages in `src/app/auth/`.

---

## 🏃‍♂️ Usage

### Development

```bash
npm run dev
```

Starts the development server with Turbopack for fast refresh and hot reloading.

### Production Build

```bash
# Build the application
npm run build

# Start production server
npm start
```

### Code Quality Commands

```bash
# Linting
npm run lint              # Check for linting errors
npm run lint:fix          # Auto-fix linting issues

# Formatting
npm run format            # Format code with Prettier
npm run format:check      # Check if code is formatted

# Type checking
npm run type-check        # Run TypeScript type checking
```

### Testing

```bash
# Unit tests
npm test                  # Run Jest tests
npm run test:watch        # Run tests in watch mode

# E2E tests
npm run e2e               # Open Cypress E2E test runner
npm run e2e:headless      # Run E2E tests headlessly

# Component tests
npm run component         # Open Cypress component test runner
npm run component:headless # Run component tests headlessly
```

### Database Management

```bash
# View database in browser
npx prisma studio

# Create new migration
npx prisma migrate dev --name "migration_description"

# Reset database (⚠️  destructive)
npx prisma migrate reset

# Generate client after schema changes
npx prisma generate
```

### Git Workflow

```bash
# Interactive conventional commits
npm run commit

# Git hooks run automatically on commit:
# - Pre-commit: linting and formatting
# - Commit-msg: commit message validation
```

### Feature Development Scripts

Located in the `scripts/` directory:

```bash
# Create new feature with proper structure
./scripts/create-new-feature.sh "feature description"

# Set up development plan
./scripts/setup-plan.sh

# Update AI agent context
./scripts/update-agent-context.sh
```

---

## 📁 Project Structure

```
nextjs-boilerplate/
├── 📁 .husky/                    # Git hooks configuration
├── 📁 __tests__/                 # Jest test files
├── 📁 cypress/                   # Cypress E2E and component tests
│   ├── 📁 component/            # Component tests
│   ├── 📁 e2e/                  # End-to-end tests
│   └── 📁 screenshots/          # Test screenshots
├── 📁 guides/                   # Development guides
├── 📁 memory/                   # AI/memory related files
├── 📁 prisma/                   # Database schema and migrations
│   └── 📄 schema.prisma         # Database schema definition
├── 📁 public/                   # Static assets
├── 📁 scripts/                  # Development automation scripts
├── 📁 src/
│   ├── 📁 app/                  # Next.js App Router
│   │   ├── 📁 [lang]/           # Internationalization routes
│   │   │   ├── 📁 dictionaries/ # Translation files
│   │   │   └── 📄 dictionaries.ts
│   │   ├── 📁 auth/             # Authentication pages
│   │   ├── 📄 globals.css       # Global styles
│   │   ├── 📄 layout.tsx        # Root layout
│   │   └── 📄 page.tsx          # Landing page
│   ├── 📁 components/           # React components
│   │   ├── 📁 magicui/          # Enhanced UI components
│   │   ├── 📁 providers/        # Context providers
│   │   └── 📁 ui/               # shadcn/ui components
│   ├── 📁 hooks/                # Custom React hooks
│   ├── 📁 lib/                  # Utility libraries
│   └── 📄 middleware.ts         # Next.js middleware
├── 📁 templates/                # Feature development templates
├── 📄 .env.example              # Environment variables template
├── 📄 components.json           # shadcn/ui configuration
├── 📄 cypress.config.ts         # Cypress configuration
├── 📄 eslint.config.mjs         # ESLint configuration
├── 📄 jest.config.ts            # Jest configuration
├── 📄 next.config.ts            # Next.js configuration
├── 📄 package.json              # Dependencies and scripts
├── 📄 postcss.config.mjs        # PostCSS configuration
├── 📄 tailwind.config.ts        # Tailwind CSS configuration
├── 📄 tsconfig.json             # TypeScript configuration
└── 📄 README.md                 # This file
```

---

## 🎨 Customization

### Adding New Components

Add shadcn/ui components to your project:

```bash
# Add a specific component
npx shadcn@latest add button

# Add multiple components
npx shadcn@latest add card dialog

# Add all available components
npx shadcn@latest add --all
```

### Database Schema Changes

1. **Edit the schema:**

   ```bash
   # Edit prisma/schema.prisma
   ```

2. **Create and apply migration:**

   ```bash
   npx prisma migrate dev --name "add_new_table"
   ```

3. **Generate updated client:**
   ```bash
   npx prisma generate
   ```

### Authentication Customization

Modify authentication flows in:

- `src/middleware.ts` - Route protection and redirects
- `src/app/auth/` - Authentication pages
- Clerk dashboard - Authentication settings

### Theming

Customize the theme system:

- **Colors:** Edit `src/app/globals.css`
- **Theme provider:** Modify `src/components/providers/theme-provider.tsx`
- **Component variants:** Update `src/components/ui/` components

### Internationalization

Add new languages:

1. **Create dictionary file:** `src/app/[lang]/dictionaries/[locale].json`
2. **Update dictionaries.ts:** Add new locale to the export
3. **Update language selector:** Modify the language dropdown in components

---

## 🚀 Deployment

### Vercel (Recommended)

<p align="center">
  <a href="https://vercel.com/new/clone?repository-url=https://github.com/The-Lone-Druid/nextjs-boilerplate">
    <img src="https://vercel.com/button" alt="Deploy with Vercel" />
  </a>
</p>

1. **Connect repository** to Vercel
2. **Add environment variables** in Vercel dashboard
3. **Deploy automatically** on every push

### Manual Deployment

#### Docker

```dockerfile
# Dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

#### Build and run

```bash
# Build Docker image
docker build -t nextjs-boilerplate .

# Run container
docker run -p 3000:3000 nextjs-boilerplate
```

### Other Platforms

#### Netlify

1. Connect repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `.next`
4. Add environment variables

#### Railway

1. Connect GitHub repository
2. Railway auto-detects Next.js
3. Add environment variables
4. Deploy

#### AWS/GCP/Azure

Ensure your deployment platform supports:

- Node.js 18+
- Environment variables
- PostgreSQL database
- Static file serving

---

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for detailed information on:

- Development setup and workflow
- Coding standards and best practices
- Testing guidelines
- How to submit pull requests

### Quick Start for Contributors

1. Fork the repository
2. Clone your fork: `git clone https://github.com/your-username/nextjs-boilerplate.git`
3. Install dependencies: `npm install`
4. Set up environment: `cp .env.example .env.local`
5. Start developing: `npm run dev`

### Development Scripts

```bash
# Create new feature
./scripts/create-new-feature.sh "feature description"

# Interactive commits
npm run commit

# Run tests
npm test && npm run e2e:headless
```

### Guidelines

- Follow the existing code style
- Add tests for new features
- Update documentation as needed
- Use TypeScript for all new code
- Ensure accessibility compliance

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

## 🛡️ Code of Conduct

This project follows a [Code of Conduct](CODE_OF_CONDUCT.md) to ensure a welcoming environment for all contributors.

---

## 📚 Learn More

### Official Documentation

- [**Next.js Documentation**](https://nextjs.org/docs) - Learn about Next.js features and API
- [**TypeScript Handbook**](https://www.typescriptlang.org/docs/) - TypeScript language reference
- [**Prisma Documentation**](https://www.prisma.io/docs) - Database ORM documentation
- [**Clerk Documentation**](https://clerk.com/docs) - Authentication documentation
- [**shadcn/ui Documentation**](https://ui.shadcn.com) - Component library documentation
- [**Tailwind CSS Documentation**](https://tailwindcss.com/docs) - CSS framework documentation

### Community Resources

- [**Next.js Discord**](https://nextjs.org/discord) - Community support
- [**Prisma Slack**](https://slack.prisma.io/) - Database discussions
- [**Clerk Community**](https://clerk.com/community) - Authentication help

### Related Projects

- [**create-next-app**](https://nextjs.org/docs/api-reference/create-next-app) - Official Next.js starter
- [**next-auth**](https://next-auth.js.org/) - Alternative authentication
- [**t3-stack**](https://create.t3.gg/) - Full-stack TypeScript starter
- [**Spec-Kit**](https://github.com/github/spec-kit) - AI-powered specification-driven development toolkit

---

<div align="center">

**Please Star ⭐️ this repository if you found it useful!, and Fork 🍴 to Contribute your ideas!**

[⬆️ Back to Top](#-nextjs-boilerplate)

</div>
