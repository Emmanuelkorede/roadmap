<div align="center">

# 🗺️ ROADMAP2026 — Full-Stack Developer Roadmap

A modern, fast, and responsive web application built to guide aspiring developers through a practical path from web fundamentals to building real-world applications in 2026.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6%2B-F7DF1E?logo=javascript&logoColor=black)
![Zero Dependencies](https://img.shields.io/badge/Dependencies-Zero-success)
![License](https://img.shields.io/badge/License-MIT-green)

**[🌐 Live Demo](https://roadmap-navy-seven.vercel.app/)**

</div>

---

## 📖 Overview

Instead of overwhelming learners with endless lists, ROADMAP2026 organizes **13 comprehensive stages** into clean, expandable accordion cards with intuitive category filtering and an interactive creator portfolio drawer.

## 📑 Table of Contents

- [Key Features](#-key-features)
- [Tech Stack](#️-tech-stack)
- [Project Architecture](#-project-architecture)
- [Getting Started](#-getting-started)
- [Roadmap Categories](#️-roadmap-categories)
- [Author & Creator](#-author--creator)
- [License](#-license)

## ✨ Key Features

- **Progressive Disclosure UI:** Stage details are tucked inside interactive accordion cards, preventing clutter and keeping the interface clean.
- **Category Filtering:** Filter roadmap stages dynamically by domain (All, Basics, Frontend, Backend, and Advanced).
- **Safe HTML Escaping:** Built-in sanitization function (`escapeHTML`) prevents raw code tags (such as `<header>` or `<main>`) from breaking the DOM layout.
- **Creator Profile Slide-over Drawer:** Integrated "Meet the Creator" modal featuring bio, social connection links, and direct access to the WhatsApp community channel.
- **Dark Theme Architecture:** Styled with a modern dark palette, smooth micro-interactions, custom scrollbars, and Plus Jakarta Sans typography.
- **Zero Dependencies:** Built purely with native HTML5, modular CSS3, and modern vanilla JavaScript (ES Modules) — no bulky frameworks or heavy build setups needed.

## 🛠️ Tech Stack

| Category       | Technology                                                                 |
| -------------- | --------------------------------------------------------------------------- |
| Markup          | HTML5 — semantic layout structuring (`<header>`, `<main>`, `<aside>`, `<nav>`) |
| Styling         | CSS3 — native CSS variables, Flexbox, Grid, backdrop filters, keyframe animations |
| Scripting       | JavaScript (ES6+) — ES Modules (`import`/`export`), dynamic DOM rendering, event delegation |
| Typography      | Google Fonts — Plus Jakarta Sans & JetBrains Mono                          |

## 📁 Project Architecture

```text
roadmap-project/
│
├── index.html          # Main HTML structure shell
│
├── css/
│   ├── styles.css      # CSS variables, global resets, typography imports
│   ├── navbar.css      # Fixed header, hero banner & filter tab styles
│   ├── roadmap.css     # Accordion card layout, stage badges & typography
│   └── profile.css     # Slide-over creator profile drawer & backdrop overlay
│
└── js/
    ├── data.js         # Complete array of 13 roadmap stages and summary data
    ├── render.js        # Safe HTML string generator with character escaping
    ├── profile.js       # Drawer open/close state controller
    └── app.js           # Application entry point, accordion toggles & category filtering
```

## ⚡ Getting Started

Because this project uses native JavaScript ES Modules (`type="module"`), browser security rules require it to be served over HTTP rather than opened directly as a file (`file://`).

### Option 1: VS Code Live Server (Recommended)

1. Clone or download this repository.
2. Open the project folder in Visual Studio Code.
3. Install the **Live Server** extension if you haven't already.
4. Right-click `index.html` and select **"Open with Live Server"**.

### Option 2: Local Node.js Server

Run a quick local server using `npx`:

```bash
# Using serve
npx serve .

# Or using http-server
npx http-server .
```

Navigate to `http://localhost:3000` or the port shown in your terminal.

## 🗺️ Roadmap Categories

| # | Stage Name | Category | Primary Focus |
|---|---|---|---|
| 01 | Web Fundamentals | Basics | HTTP, HTML5, Semantic Markup, CSS Grid & Flexbox |
| 02 | JavaScript | Basics | ES6+, DOM Manipulation, Async/Await, Fetch API |
| 03 | Git & GitHub | Basics | Version Control, CLI Workflow, Branching & PRs |
| 04 | Frontend Development | Frontend | React, TypeScript, Next.js App Router |
| 05 | UI & Product Development | Frontend | Design Systems, Form UX, Accessible Components |
| 06 | Backend Development | Backend | Node.js, Express, RESTful APIs, Middleware |
| 07 | Databases | Backend | SQL, PostgreSQL, Relational Design, ORMs |
| 08 | Authentication & Security | Backend | JWT, OAuth, Passwords, Role-Based Access Control |
| 09 | APIs & Third-Party Services | Backend | Stripe, Webhooks, File Storage, AI Integrations |
| 10 | Deployment & DevOps | Advanced | Vercel, Domains, DNS, CI/CD Pipelines |
| 11 | Real-World Development | Advanced | Debugging, Code Refactoring, Unit Testing |
| 12 | Build Real Projects | Advanced | Production SaaS, Architecture Case Studies |
| 13 | Specialization & Beyond | Advanced | Systems, Cloud Infrastructure, AI Engineering |

## 👤 Author & Creator

**Job Emmanuel**
Computer Science Student at Obafemi Awolowo University (OAU)
Full-stack developer building clean, responsive, and intuitive web applications.

- **WhatsApp Channel:** Join for updates & tips
- **GitHub:** [@Emmanuelkorede](https://github.com/Emmanuelkorede)
- **X (Twitter):** [@jobemmanuel_dev](https://x.com/jobemmanuel_dev)
- **Instagram:** [@job.emmauel.io](https://www.instagram.com/job.emmauel.io)
- **TikTok:** [@job.emmanuel.io](https://tiktok.com/@job.emmanuel.io)
- **WhatsApp Direct:** [+234 912 286 5246](https://wa.me/2349122865246)

## 📄 License

This project is open-source and free to use under the [MIT License](LICENSE). Feel free to fork, customize, and share!
