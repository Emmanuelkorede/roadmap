export const roadmapData = [
  {
    id: "01",
    title: "WEB FUNDAMENTALS",
    category: "basics",
    subtitle: "The non-negotiable foundation of the entire web.",
    learn: [
      "How the web works (HTTP/HTTPS, DNS, IP addresses, client-server model)",
      "HTML5 structural & semantic tags (<header>, <main>, <article>, <nav>, <aside>)",
      "CSS3 Core (Selectors, specificity, cascade, inheritance, box model)",
      "CSS Flexbox layout (Flex containers, axes, alignment, responsiveness)",
      "CSS Grid layout (Tracks, template areas, gaps, auto-fit/auto-fill)",
      "Responsive Web Design (Media queries, dynamic units rem/em/vw/vh, mobile-first approach)",
      "Web Accessibility / WCAG standards (ARIA roles, contrast ratios, keyboard navigation)",
      "Browser DevTools (Elements panel, CSS inspector, Console, Network tab)"
    ],
    build: [
      "Personal developer profile / portfolio layout",
      "Pixel-perfect responsive SaaS landing page",
      "Multi-page static website with styled forms and navigation"
    ],
    moveOn: "You can build a fully responsive, clean website layout from scratch without looking up basic CSS syntax or relying on a tutorial step-by-step."
  },
  {
    id: "02",
    title: "JAVASCRIPT",
    category: "basics",
    subtitle: "The core programming language of web development.",
    learn: [
      "Variables & Data types (let, const, primitives vs reference types)",
      "Functions (Declarations, expressions, arrow functions, scope, closures)",
      "Arrays & Objects (Methods: map, filter, reduce, find, object destructuring)",
      "Control flow (Conditionals, switch cases, loops, array iteration)",
      "DOM Manipulation & Event Listeners (Selecting elements, event bubbling, delegation)",
      "Asynchronous JavaScript (Event loop, Callbacks, Promises, async/await)",
      "Fetch API & AJAX (Making HTTP requests, handling JSON data)",
      "Error Handling (try...catch blocks, throw statements)",
      "Browser Storage (localStorage, sessionStorage, Cookies)",
      "ES Modules (import / export syntax)"
    ],
    build: [
      "Interactive Todo App with state persistence via LocalStorage",
      "Live Weather App using an external REST API (e.g., OpenWeatherMap)",
      "Dynamic Quiz App with timer, score tracking, and progress bar",
      "API-driven Movie Search & Filtering application"
    ],
    moveOn: "You can comfortably fetch data from an external API, manipulate the DOM, and handle user input without copying implementations from tutorials."
  },
  {
    id: "03",
    title: "GIT & GITHUB",
    category: "basics",
    subtitle: "Version control and collaborative workflow essentials.",
    learn: [
      "Git CLI basics (git init, status, add, commit, diff)",
      "Branching strategies (git branch, checkout, switch, merge)",
      "Remote repositories (git remote, push, pull, fetch)",
      "Collaborative workflows (Pull Requests, code reviews, resolving merge conflicts)",
      "Git configuration & hygiene (.gitignore, semantic commit messages)",
      "GitHub profile customization, Markdown, and solid README documentation"
    ],
    build: [
      "Initialize Git repositories for every project built so far",
      "Create clean feature branches, commit regularly, and open PRs to merge into main",
      "Write professional README.md files for your primary portfolio projects"
    ],
    moveOn: "Git commands and branching are integrated naturally into your daily development habit, not treated as an afterthought."
  },
  {
    id: "04",
    title: "FRONTEND DEVELOPMENT",
    category: "frontend",
    subtitle: "Component architecture, strong typing, and full-stack React frameworks.",
    learn: [
      "React Essentials (JSX, Components, Props, State management, Component lifecycle)",
      "React Hooks (useState, useEffect, useRef, useMemo, useCallback, custom hooks)",
      "Forms & UI State (Controlled inputs, validation, complex state management)",
      "TypeScript Fundamentals (Types, Interfaces, Unions, Generics, Type narrowing)",
      "TypeScript with React (Typing props, events, state, hook return types)",
      "Next.js App Router (File-based routing, Layouts, Server Components vs Client Components)",
      "Data Fetching in Next.js (Server actions, API routes, revalidation, dynamic rendering)",
      "Authentication & Middleware in Next.js (Protecting routes, managing sessions)",
      "Deployment platforms (Vercel, Netlify)"
    ],
    build: [
      "Interactive Analytics Dashboard with dark mode and chart filtering",
      "Full-stack Blog engine with server-side rendered markdown posts",
      "E-commerce product catalog with cart state, filter parameters, and TypeScript safety",
      "Full CRUD application using Next.js Server Actions"
    ],
    moveOn: "You understand when to run code on the server versus the client, and can build typed React applications confidently."
  },
  {
    id: "05",
    title: "UI & PRODUCT DEVELOPMENT",
    category: "frontend",
    subtitle: "Transition from coding simple sites to crafting real product user experiences.",
    learn: [
      "UI Design Principles (Hierarchy, typography, spatial spacing grids, color systems)",
      "Design Systems & Component Libraries (Tailwind CSS, Radix UI, Shadcn UI)",
      "Comprehensive State Handling (Loading skeletons, empty states, error boundaries, optimistic UI)",
      "Form UX & Validation (Inline error feedback, Zod schema validation, accessible inputs)",
      "Product-Driven Thinking (Solving user problems, reducing friction, intuitive UX flow)"
    ],
    build: [
      "Redesign an existing ugly website or application with a modern component system",
      "Build a tool designed to solve a specific personal or real-world problem with high visual polish"
    ],
    moveOn: "Your interfaces handle edge cases gracefully (loading, errors, empty data) and feel like polished commercial web apps."
  },
  {
    id: "06",
    title: "BACKEND DEVELOPMENT",
    category: "backend",
    subtitle: "Server architecture, request/response lifecycle, and business logic.",
    learn: [
      "HTTP Protocol Deep Dive (Verbs, status codes, headers, body, CORS)",
      "Node.js Runtime (Event loop, file system, process environment)",
      "Frameworks (Express.js or native Next.js API/Route Handlers)",
      "RESTful API Design Standards (Resource naming, payload structure, status response standards)",
      "Middleware Architecture (Logging, body parsing, request interception, rate limiting)",
      "Data Validation & Sanitization (Validating incoming request payloads before database queries)",
      "Error Handling (Centralized error handlers, custom error classes, clean responses)"
    ],
    build: [
      "Production-ready REST API with full CRUD operations and validation",
      "Standalone Node.js/Express service that processes and filters business data",
      "Decoupled backend service powering one of your frontend applications"
    ],
    moveOn: "You can design, build, test, and document a secure REST API with proper status codes and error handling."
  },
  {
    id: "07",
    title: "DATABASES",
    category: "backend",
    subtitle: "Relational data modeling, query optimization, and managed database solutions.",
    learn: [
      "Relational Database Fundamentals (Tables, columns, data types, constraints)",
      "SQL Syntax (SELECT, INSERT, UPDATE, DELETE, WHERE, ORDER BY, GROUP BY)",
      "Database Relationships (One-to-One, One-to-Many, Many-to-Many via Join tables)",
      "Advanced SQL (Joins, foreign keys, indexes, transactions, aggregations)",
      "ORMs & Query Builders (Prisma, Drizzle ORM)",
      "Managed Database Platforms (PostgreSQL, Supabase, Neon)",
      "Database Design & Migration workflows"
    ],
    build: [
      "Schema design for a multi-tenant app (Users, Profiles, Products, Orders, Order Items)",
      "Relational dataset implementation using PostgreSQL and Prisma/Drizzle ORM"
    ],
    moveOn: "You can design normalized relational database schemas and write queries or ORM commands to interact with complex data."
  },
  {
    id: "08",
    title: "AUTHENTICATION & SECURITY",
    category: "backend",
    subtitle: "Protecting user data and locking down server infrastructure.",
    learn: [
      "Authentication vs Authorization concepts",
      "Password Hashing algorithms (bcrypt, Argon2)",
      "Session-based Authentication (Cookies, session stores, HTTP-only flags)",
      "Token-based Authentication (JWTs, bearer tokens, refresh tokens)",
      "OAuth 2.0 & Third-party Logins (Google, GitHub logins via NextAuth / Auth.js / Clerk)",
      "Role-Based Access Control (RBAC) & Permissions",
      "Common Web Vulnerabilities & Prevention (SQL Injection, XSS, CSRF, CORS misconfigurations)",
      "Database Security (Row Level Security - RLS, sanitized inputs)"
    ],
    build: [
      "Full Authentication system (Sign up, login, password reset, protected routes, JWT/Session handling)",
      "Multi-role user portal (Admin, Manager, Standard user with custom permission restrictions)"
    ],
    moveOn: "You can securely authenticate users and enforce granular authorization rules across API endpoints and pages."
  },
  {
    id: "09",
    title: "APIs & THIRD-PARTY SERVICES",
    category: "backend",
    subtitle: "Leveraging external ecosystems to extend application capabilities.",
    learn: [
      "API Integration patterns & best practices (API Keys, secrets management)",
      "Webhooks (Receiving and verifying asynchronous event notifications)",
      "Rate Limiting, Pagination (Cursor vs offset), and Caching strategies",
      "Payment Gateway Integration (Stripe checkout, webhooks, subscription lifecycle)",
      "Transactional Email & Messaging (Resend, SendGrid)",
      "Cloud Object Storage (AWS S3, Supabase Storage, Uploadthing)",
      "AI & Machine Learning APIs (OpenAI API, Anthropic API, Structured JSON output)"
    ],
    build: [
      "SaaS billing integration with Stripe subscriptions and webhook sync",
      "AI-powered content generator or customer support bot integrated into a web dashboard",
      "File upload pipeline with direct-to-cloud bucket storage and thumbnail generation"
    ],
    moveOn: "You can integrate payment processors, storage providers, and AI endpoints seamlessly into an application."
  },
  {
    id: "10",
    title: "DEPLOYMENT & DEVOPS BASICS",
    category: "advanced",
    subtitle: "Taking applications from localhost into live production environments.",
    learn: [
      "Production Environment vs Development (Environment variables, secret keys)",
      "Domain Management (DNS records: A, CNAME, TXT, SSL/TLS certificates)",
      "Modern Hosting Platforms (Vercel, Render, Railway, Fly.io)",
      "CI/CD Workflows (GitHub Actions, automated testing and deployment pipelines)",
      "Application Monitoring & Error Tracking (Sentry, PostHog, Vercel Analytics)",
      "Production Build Optimization (Bundling, tree-shaking, static page generation)"
    ],
    build: [
      "Deploy every full-stack application to a custom domain with SSL enabled",
      "Set up GitHub Actions to auto-test and deploy code on git push to main branch",
      "Configure error monitoring with Sentry on a live project"
    ],
    moveOn: "Your applications are live on public URLs with custom domains, production environment variables, and active error logging."
  },
  {
    id: "11",
    title: "REAL-WORLD DEVELOPMENT",
    category: "advanced",
    subtitle: "Professional developer practices beyond basic coding syntax.",
    learn: [
      "Reading & parsing official documentation over obsolete tutorials",
      "Advanced Debugging techniques (Breakpoints, Network profiling, Memory leaks)",
      "Code Organization & Clean Architecture principles (DRY, SOLID, Modular structure)",
      "Refactoring legacy or messy code without breaking functionality",
      "Testing Fundamentals (Unit tests with Vitest/Jest, E2E tests with Playwright/Cypress)",
      "Pragmatic AI Usage (Using AI as a pair programmer for debugging/research without copy-pasting unverified code)"
    ],
    build: [
      "Add unit and integration tests to your core business logic endpoints",
      "Perform a major refactor on an older project to improve maintainability and performance"
    ],
    moveOn: "You can read unfamiliar documentation, debug complex stack traces independently, and test your own code."
  },
  {
    id: "12",
    title: "BUILD REAL PROJECTS",
    category: "advanced",
    subtitle: "Create 3-5 production-grade applications that solve actual user problems.",
    learn: [
      "Product Development Lifecycle: Problem → Scope → Design → Schema → Build → Test → Deploy → Iterate",
      "Writing technical decisions & architecture explanations in project case studies",
      "Gathering real user feedback and prioritizing feature iterations",
      "Creating compelling portfolio presentations with live demos and clean GitHub repositories"
    ],
    build: [
      "Project 1: Real-time Collaboration Tool or Workspace (WebSockets/Realtime DB)",
      "Project 2: Niche SaaS Product with Stripe Subscriptions & AI Capabilities",
      "Project 3: Open Source Contribution or Community Product with complex workflows"
    ],
    moveOn: "You have 3 polished full-stack applications with live demos, public code, clean documentation, and real utility."
  },
  {
    id: "13",
    title: "SPECIALIZATION & BEYOND",
    category: "advanced",
    subtitle: "Pick a domain direction to deepen your technical expertise.",
    learn: [
      "Backend & Systems (Go, Rust, Redis, Message Queues, Microservices, Distributed Systems)",
      "Advanced Frontend (Micro-frontends, WebGL/Three.js, Performance engineering, Design systems)",
      "DevOps & Infrastructure (Docker, Kubernetes, AWS/GCP, Terraform, Infrastructure as Code)",
      "AI Engineering (LLM orchestration, RAG, Vector Databases like Pinecone, LangChain/LlamaIndex)",
      "Mobile Development (React Native, Expo, Cross-platform state sharing)"
    ],
    build: [
      "Build a targeted project specifically aligned with your chosen track (e.g., a high-throughput Go microservice or a RAG vector search tool)"
    ],
    moveOn: "You have established a clear technical identity and specialized domain strength in the software engineering market."
  }
];


// Quick Access Summary: The Shortest Path
export const summaryPath = [
  "HTML & CSS",
  "JavaScript (ES6+)",
  "Git & GitHub",
  "React & TypeScript",
  "Next.js (Full-Stack)",
  "HTTP & APIs",
  "Backend Architecture",
  "SQL & PostgreSQL",
  "Authentication & Security",
  "Deployment & CI/CD",
  "Build Production Apps",
  "Specialize"
];