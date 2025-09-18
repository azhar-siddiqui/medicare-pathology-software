"use client";

import { getDictionary } from "@/app/[lang]/dictionaries";
import { AnimatedThemeToggler } from "@/components/magicui/animated-theme-toggler";
import { IconCloud } from "@/components/magicui/icon-cloud";
import { ScriptCopyBtn } from "@/components/magicui/script-copy-btn";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import {
  SiClerk,
  SiCypress,
  SiEslint,
  SiJest,
  SiLocal,
  SiNextdotjs,
  SiPostgresql,
  SiPrisma,
  SiShadcnui,
  SiTypescript,
} from "@icons-pack/react-simple-icons";
import {
  ArrowRight,
  Clock,
  Code,
  Database,
  GitBranch,
  Moon,
  Settings,
  Star,
  Sun,
  TestTube,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { AuroraText } from "../components/ui/aurora-text";

type Locale = "en" | "es" | "fr";

type SetupStep = {
  title: string;
  description: string;
  commandMap: Record<string, string>;
  icon: React.ReactNode;
};

export default function Home() {
  const [locale, setLocale] = useState<Locale>("en");
  const dictionary = getDictionary(locale);

  const changeLanguage = (newLocale: Locale) => {
    setLocale(newLocale);
  };

  const features = [
    {
      icon: <SiNextdotjs className="h-6 w-6" />,
      title: dictionary.features.nextjs.title,
      description:
        "Latest Next.js 15 with App Router, Server Components, and Turbopack for 700x faster builds. Includes API routes, middleware, and optimized performance.",
      color: "text-foreground",
    },
    {
      icon: <SiTypescript color={"default"} className="h-6 w-6" />,
      title: dictionary.features.typescript.title,
      description:
        "100% TypeScript with strict type checking, IntelliSense support, and advanced type inference. Prevents runtime errors with compile-time validation.",
      color: "text-foreground",
    },
    {
      icon: <SiPostgresql color={"default"} className="h-6 w-6" />,
      title: dictionary.features.prisma.title,
      description:
        "Type-safe database operations with Prisma ORM and PostgreSQL. Auto-generated types, migrations, and connection pooling for optimal performance.",
      color: "text-foreground",
    },
    {
      icon: <SiClerk color={"default"} className="h-6 w-6" />,
      title: dictionary.features.clerk.title,
      description:
        "Complete authentication solution with social logins, user management, and session handling. Pre-built sign-in/sign-up components and middleware protection.",
      color: "text-foreground",
    },
    {
      icon: <SiShadcnui className="h-6 w-6" />,
      title: dictionary.features.shadcn.title,
      description:
        "50+ accessible, customizable UI components built on Radix UI primitives. Dark/light theme support with Tailwind CSS and full TypeScript integration.",
      color: "text-foreground",
    },
    {
      icon: <SiLocal className="h-6 w-6" />,
      title: dictionary.features.i18n.title,
      description:
        "Multi-language support with Next.js internationalization. Dynamic routing, locale detection, and dictionary-based content management.",
      color: "text-foreground",
    },
    {
      icon: <SiCypress color={"default"} className="h-6 w-6" />,
      title: dictionary.features.cypress.title,
      description:
        "End-to-end and component testing with Cypress. Visual testing, API mocking, and CI/CD integration for comprehensive test coverage.",
      color: "text-foreground",
    },
    {
      icon: <SiJest color={"default"} className="h-6 w-6" />,
      title: dictionary.features.jest.title,
      description:
        "Unit testing with Jest and React Testing Library. Snapshot testing, mocking utilities, and coverage reports for reliable code quality.",
      color: "text-foreground",
    },
  ];

  const setupSteps: SetupStep[] = [
    {
      title: dictionary.setup.steps.clone.title,
      description:
        "Clone the repository with Git and navigate to the project directory. This gives you access to the full codebase with all dependencies and configurations.",
      commandMap: {
        npm: "git clone https://github.com/The-Lone-Druid/nextjs-boilerplate.git && cd nextjs-boilerplate && npm install",
        yarn: "git clone https://github.com/The-Lone-Druid/nextjs-boilerplate.git && cd nextjs-boilerplate && yarn install",
        pnpm: "git clone https://github.com/The-Lone-Druid/nextjs-boilerplate.git && cd nextjs-boilerplate && pnpm install",
      },
      icon: <GitBranch className="h-5 w-5" />,
    },
    {
      title: dictionary.setup.steps.env.title,
      description:
        "Configure environment variables for database connection, authentication keys, and other sensitive configuration. Copy .env.example to .env.local and fill in your actual values.",
      commandMap: {
        bash: "cp .env.example .env.local",
      },
      icon: <Settings className="h-5 w-5" />,
    },
    {
      title: dictionary.setup.steps.database.title,
      description:
        "Set up PostgreSQL database with Prisma ORM. Run migrations to create tables and generate the Prisma client for type-safe database operations.",
      commandMap: {
        npm: "npx prisma migrate dev && npx prisma generate",
        yarn: "yarn prisma migrate dev && yarn prisma generate",
        pnpm: "pnpm prisma migrate dev && pnpm prisma generate",
      },
      icon: <Database className="h-5 w-5" />,
    },
    {
      title: dictionary.setup.steps.dev.title,
      description:
        "Launch the Next.js development server with hot reloading. The app will be available at http://localhost:3000 with full TypeScript support and optimized builds.",
      commandMap: {
        npm: "npm run dev",
        yarn: "yarn dev",
        pnpm: "pnpm dev",
      },
      icon: <Zap className="h-5 w-5" />,
    },
  ];

  return (
    <div className="bg-background min-h-screen">
      {/* Header */}
      <header className="bg-card/50 sticky top-0 z-50 border-b backdrop-blur-sm">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-2">
              <SiNextdotjs className="text-primary h-7 w-7" />
              <h1 className="text-card-foreground hidden text-xl font-bold sm:block">
                Next.js Boilerplate
              </h1>
            </div>
            <Badge variant="secondary" className="hidden sm:inline-flex">
              <Star className="mr-1 h-3 w-3" />
              v0.1.0
            </Badge>
          </div>
          <div className="flex items-center space-x-4">
            {/* Language Dropdown */}
            <Select value={locale} onValueChange={changeLanguage}>
              <SelectTrigger className="w-[120px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en">
                  {dictionary.language.english}
                </SelectItem>
                <SelectItem value="es">
                  {dictionary.language.spanish}
                </SelectItem>
                <SelectItem value="fr">{dictionary.language.french}</SelectItem>
              </SelectContent>
            </Select>
            <AnimatedThemeToggler />
            <Link
              href="/dashboard"
              className={cn(
                "group flex items-center gap-2",
                buttonVariants({ variant: "outline" })
              )}
            >
              Dashboard
              <ArrowRight className="size-4 opacity-0 -translate-x-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="mx-auto max-w-4xl">
          <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm">
            {dictionary.hero.badge}
          </Badge>
          <h1 className="text-foreground mb-6 text-5xl leading-tight font-bold md:text-7xl">
            <AuroraText colors={["var(--primary)", "var(--foreground)"]}>
              {dictionary.hero.title}
            </AuroraText>
            <span className="text-primary mt-2 block">
              {dictionary.hero.titleHighlight}
            </span>
          </h1>
          <p className="text-muted-foreground mx-auto mb-10 max-w-2xl text-xl leading-relaxed">
            {dictionary.hero.description}
          </p>
          <div className="mb-12 flex flex-col justify-center gap-4 sm:flex-row">
            <Button size="lg" className="h-12 px-8 text-lg" asChild>
              <a
                href="https://github.com/The-Lone-Druid/nextjs-boilerplate#-quick-start"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Zap className="mr-2 h-5 w-5" />
                {dictionary.hero.getStarted}
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="h-12 px-8 text-lg"
              asChild
            >
              <a
                href="https://github.com/The-Lone-Druid/nextjs-boilerplate#readme"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Code className="mr-2 h-5 w-5" />
                {dictionary.hero.viewDocs}
              </a>
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="mx-auto grid max-w-2xl grid-cols-2 gap-6 md:grid-cols-4">
            <div className="text-center">
              <div className="text-primary text-2xl font-bold">Managable</div>
              <div className="text-muted-foreground text-sm">
                {dictionary.hero.stats.components}
              </div>
            </div>
            <div className="text-center">
              <div className="text-primary text-2xl font-bold">Flexible</div>
              <div className="text-muted-foreground text-sm">
                {dictionary.hero.stats.languages}
              </div>
            </div>
            <div className="text-center">
              <div className="text-primary text-2xl font-bold">Type Safe</div>
              <div className="text-muted-foreground text-sm">
                {dictionary.hero.stats.typescript}
              </div>
            </div>
            <div className="text-center">
              <div className="text-primary text-2xl font-bold">Reliable</div>
              <div className="text-muted-foreground text-sm">
                {dictionary.hero.stats.testing}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-4 py-20">
        <div className="mb-16 text-center">
          <h2 className="text-foreground mb-4 text-4xl font-bold">
            {dictionary.features.title}
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-xl">
            {dictionary.features.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card
              key={`${index}-${feature.description}`}
              className="border-border transition-shadow duration-300 hover:shadow-lg"
            >
              <CardHeader>
                <div
                  className={`mb-2 flex items-center space-x-3 ${feature.color}`}
                >
                  {feature.icon}
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </div>
                <CardDescription className="text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      {/* Tech Stack Showcase */}
      <section className="bg-muted/30 py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="text-foreground mb-4 text-4xl font-bold">
              {dictionary.techStack.title}
            </h2>
            <p className="text-muted-foreground text-xl">
              {dictionary.techStack.subtitle}
            </p>
          </div>

          <div className="relative flex size-full items-center justify-center overflow-hidden">
            <IconCloud
              icons={[
                <SiNextdotjs size={"98px"} key="nextjs" />,
                <SiTypescript
                  size={"98px"}
                  color={"default"}
                  key="typescript"
                />,
                <SiPrisma size={"98px"} color={"default"} key="prisma" />,
                <SiPostgresql
                  size={"98px"}
                  color={"default"}
                  key="postgresql"
                />,
                <SiClerk size={"98px"} color={"default"} key="clerk" />,
                <SiCypress size={"98px"} color={"default"} key="cypress" />,
                <SiJest size={"98px"} color={"default"} key="jest" />,
                <SiEslint size={"98px"} color={"default"} key="eslint" />,
                <SiShadcnui size={"98px"} key="shadcnui" />,
              ]}
            />
          </div>
        </div>
      </section>

      {/* Quick Start Guide */}
      <section className="container mx-auto px-4 py-20">
        <div className="mb-16 text-center">
          <h2 className="text-foreground mb-4 text-4xl font-bold">
            {dictionary.setup.title}
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-xl">
            {dictionary.setup.subtitle}
          </p>
        </div>

        <div className="mx-auto max-w-4xl overflow-x-auto md:overflow-x-hidden">
          <div className="space-y-8">
            {setupSteps.map((step, index) => (
              <div
                key={`${index}-${step.description}`}
                className="flex items-start space-x-6"
              >
                <div className="bg-primary text-primary-foreground flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full text-lg font-bold">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <div className="mb-2 flex items-center space-x-3">
                    <h3 className="text-foreground text-xl font-semibold">
                      {step.title}
                    </h3>
                    <div className="text-muted-foreground">{step.icon}</div>
                  </div>
                  <p className="text-muted-foreground mb-4 text-lg">
                    {step.description}
                  </p>
                  <ScriptCopyBtn
                    codeLanguage="bash"
                    lightTheme="github-dark"
                    darkTheme="github-dark"
                    commandMap={step.commandMap}
                    showMultiplePackageOptions={
                      Object.keys(step.commandMap).length > 1
                    }
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Developer Guides */}
      <section className="container mx-auto px-4 py-20">
        <div className="mb-16 text-center">
          <h2 className="text-foreground mb-4 text-4xl font-bold">
            Developer Guides
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-xl">
            Comprehensive guides to help you master the development workflow and
            best practices
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Development Environment",
              description:
                "Set up your local development environment with all necessary tools and configurations",
              href: "https://github.com/The-Lone-Druid/nextjs-boilerplate/blob/main/guides/development-environment.md",
              icon: <Settings className="h-6 w-6" />,
            },
            {
              title: "Internationalization",
              description:
                "Implement multi-language support with Next.js internationalization features",
              href: "https://github.com/The-Lone-Druid/nextjs-boilerplate/blob/main/guides/Internationalization.md",
              icon: <SiLocal className="h-6 w-6" />,
            },
            {
              title: "Lazy Loading",
              description:
                "Optimize your application performance with code splitting and lazy loading techniques",
              href: "https://github.com/The-Lone-Druid/nextjs-boilerplate/blob/main/guides/lazy-loading.md",
              icon: <Zap className="h-6 w-6" />,
            },
            {
              title: "Package Bundling",
              description:
                "Understand the build process and how to optimize bundle sizes for production",
              href: "https://github.com/The-Lone-Druid/nextjs-boilerplate/blob/main/guides/package-bundling.md",
              icon: <SiNextdotjs className="h-6 w-6" />,
            },
            {
              title: "Testing with Jest",
              description:
                "Write unit tests and integration tests using Jest and React Testing Library",
              href: "https://github.com/The-Lone-Druid/nextjs-boilerplate/blob/main/guides/testing-with-jest.md",
              icon: <SiJest className="h-6 w-6" />,
            },
            {
              title: "Testing with Cypress",
              description:
                "Create end-to-end tests and component tests with Cypress for comprehensive coverage",
              href: "https://github.com/The-Lone-Druid/nextjs-boilerplate/blob/main/guides/testing-with-cypress.md",
              icon: <SiCypress className="h-6 w-6" />,
            },
          ].map((guide, index) => (
            <Card
              key={`${index}-${guide.description}`}
              className="transition-shadow duration-300 hover:shadow-lg"
            >
              <CardHeader>
                <div className="mb-2 flex items-center space-x-3">
                  <div className="text-primary">{guide.icon}</div>
                  <CardTitle className="text-xl">{guide.title}</CardTitle>
                </div>
                <CardDescription className="text-base leading-relaxed">
                  {guide.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full" asChild>
                  <a
                    href={guide.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read Guide
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Component Showcase */}
      <section className="bg-muted/30 py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="text-foreground mb-4 text-4xl font-bold">
              {dictionary.components.title}
            </h2>
            <p className="text-muted-foreground text-xl">
              {dictionary.components.subtitle}
            </p>
          </div>

          <Tabs defaultValue="components" className="mx-auto w-full max-w-4xl">
            <TabsList className="mb-8 grid w-full grid-cols-1 gap-2 sm:grid-cols-3">
              <TabsTrigger value="components">
                {dictionary.components.tabs.ui}
              </TabsTrigger>
              <TabsTrigger value="theme">
                {dictionary.components.tabs.theme}
              </TabsTrigger>
              <TabsTrigger value="testing">
                {dictionary.components.tabs.testing}
              </TabsTrigger>
            </TabsList>

            <TabsContent value="components" className="mt-10 space-y-6 sm:mt-0">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Button size="sm" variant="default">
                        Button
                      </Button>
                    </CardTitle>
                    <CardDescription>
                      Multiple variants and sizes
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Badge>Badge</Badge>
                      <Badge variant="secondary">Secondary</Badge>
                    </CardTitle>
                    <CardDescription>
                      Status indicators and labels
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Progress Bars</CardTitle>
                    <CardDescription>
                      <Progress value={75} className="mt-2" />
                    </CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="theme" className="mt-10 space-y-6 sm:mt-0">
              <Card>
                <CardHeader>
                  <CardTitle>{dictionary.components.theme.title}</CardTitle>
                  <CardDescription>
                    {dictionary.components.theme.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-wrap items-center gap-4">
                  <div className="flex items-center space-x-2">
                    <Sun className="h-4 w-4" />
                    <span>{dictionary.components.theme.light}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Moon className="h-4 w-4" />
                    <span>{dictionary.components.theme.dark}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Settings className="h-4 w-4" />
                    <span>{dictionary.components.theme.system}</span>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="testing" className="mt-10 space-y-6 sm:mt-0">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <SiJest className="h-5 w-5" />
                      <span>{dictionary.components.testing.jest.title}</span>
                    </CardTitle>
                    <CardDescription>
                      {dictionary.components.testing.jest.description}
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <SiCypress className="h-5 w-5" />
                      <span>{dictionary.components.testing.cypress.title}</span>
                    </CardTitle>
                    <CardDescription>
                      {dictionary.components.testing.cypress.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Development Workflow */}
      <section className="container mx-auto px-4 py-20">
        <div className="mb-16 text-center">
          <h2 className="text-foreground mb-4 text-4xl font-bold">
            {dictionary.workflow.title}
          </h2>
          <p className="text-muted-foreground text-xl">
            {dictionary.workflow.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: <SiEslint className="h-8 w-8" />,
              title: dictionary.workflow.codeQuality.title,
              description: dictionary.workflow.codeQuality.description,
            },
            {
              icon: <GitBranch className="h-8 w-8" />,
              title: dictionary.workflow.git.title,
              description: dictionary.workflow.git.description,
            },
            {
              icon: <TestTube className="h-8 w-8" />,
              title: dictionary.workflow.testing.title,
              description: dictionary.workflow.testing.description,
            },
            {
              icon: <Clock className="h-8 w-8" />,
              title: dictionary.workflow.performance.title,
              description: dictionary.workflow.performance.description,
            },
          ].map((item, index) => (
            <Card key={`${index}-${item.description}`} className="text-center">
              <CardHeader>
                <div className="text-primary mx-auto mb-4">{item.icon}</div>
                <CardTitle className="text-xl">{item.title}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-4xl font-bold">{dictionary.cta.title}</h2>
          <p className="mx-auto mb-8 max-w-2xl text-xl opacity-90">
            {dictionary.cta.description}
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              variant="secondary"
              className="h-12 px-8 text-lg"
              asChild
            >
              <a
                href="https://github.com/The-Lone-Druid/nextjs-boilerplate"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitBranch className="mr-2 h-5 w-5" />
                {dictionary.cta.clone}
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary h-12 px-8 text-lg"
              asChild
            >
              <a
                href="https://github.com/The-Lone-Druid/nextjs-boilerplate"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Code className="mr-2 h-5 w-5" />
                {dictionary.cta.source}
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t py-12">
        <div className="container mx-auto px-4">
          <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-4">
            <div>
              <div className="mb-4 flex items-center space-x-2">
                <SiNextdotjs className="text-primary h-6 w-6" />
                <h3 className="text-card-foreground font-bold">
                  Next.js Boilerplate
                </h3>
              </div>
              <p className="text-muted-foreground text-sm">
                {dictionary.footer.description}
              </p>
            </div>

            <div>
              <h4 className="text-card-foreground mb-4 font-semibold">
                {dictionary.footer.links.title}
              </h4>
              <ul className="text-muted-foreground space-y-2 text-sm">
                <li>
                  <a
                    href="https://github.com/The-Lone-Druid/nextjs-boilerplate#readme"
                    className="hover:text-primary transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {dictionary.footer.links.docs}
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/The-Lone-Druid/nextjs-boilerplate"
                    className="hover:text-primary transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {dictionary.footer.links.github}
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/The-Lone-Druid/nextjs-boilerplate/issues"
                    className="hover:text-primary transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {dictionary.footer.links.issues}
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/The-Lone-Druid/nextjs-boilerplate/blob/main/CONTRIBUTING.md"
                    className="hover:text-primary transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {dictionary.footer.links.contributing}
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-card-foreground mb-4 font-semibold">
                {dictionary.footer.resources.title}
              </h4>
              <ul className="text-muted-foreground space-y-2 text-sm">
                <li>
                  <a
                    href="https://nextjs.org/docs"
                    className="hover:text-primary transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {dictionary.footer.resources.nextjs}
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.prisma.io/docs"
                    className="hover:text-primary transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {dictionary.footer.resources.prisma}
                  </a>
                </li>
                <li>
                  <a
                    href="https://clerk.com/docs"
                    className="hover:text-primary transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {dictionary.footer.resources.clerk}
                  </a>
                </li>
                <li>
                  <a
                    href="https://ui.shadcn.com"
                    className="hover:text-primary transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {dictionary.footer.resources.shadcn}
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-card-foreground mb-4 font-semibold">
                {dictionary.footer.community.title}
              </h4>
              <ul className="text-muted-foreground space-y-2 text-sm">
                <li>
                  <a
                    href="https://github.com/The-Lone-Druid/nextjs-boilerplate/discussions"
                    className="hover:text-primary transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {dictionary.footer.community.discord}
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/The-Lone-Druid"
                    className="hover:text-primary transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {dictionary.footer.community.twitter}
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/The-Lone-Druid/nextjs-boilerplate#readme"
                    className="hover:text-primary transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {dictionary.footer.community.blog}
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/The-Lone-Druid/nextjs-boilerplate/releases"
                    className="hover:text-primary transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {dictionary.footer.community.newsletter}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <Separator className="mb-8" />

          <div className="text-muted-foreground flex flex-col items-center justify-between text-sm sm:flex-row">
            <p>{dictionary.footer.copyright}</p>
            <div className="mt-4 flex items-center space-x-4 sm:mt-0">
              <span>{dictionary.footer.version}</span>
              <span>•</span>
              <span>{dictionary.footer.license}</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
