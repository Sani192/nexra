# Nexra

Nexra builds simple, practical, and intelligent business software. This repository hosts the official marketing website, designed with a premium, restrained visual aesthetic and structured around an editorial storytelling narrative.

---

## 🛠️ Tech Stack

This project is built using modern frontend technologies:

- **[Next.js 15](https://nextjs.org/)** (App Router) — React framework for the web
- **[React 19](https://react.dev/)** — UI library
- **[Tailwind CSS v4](https://tailwindcss.com/)** — Utility-first CSS framework
- **[Framer Motion](https://www.framer.com/motion/)** — Production-ready animation library for fluid transitions
- **[Lucide React](https://lucide.dev/)** — Premium and consistent iconography
- **[TypeScript](https://www.typescriptlang.org/)** — Static type safety

---

## 📂 Project Structure

```text
├── app/
│   ├── globals.css          # Global styles, variables, typography, and theme overrides
│   ├── layout.tsx           # Global page wrapper, SEO metadata, and JSON-LD schema injection
│   ├── page.tsx             # Homepage orchestrating the editorial story sections
│   ├── privacy/             # Privacy Policy page
│   └── terms/               # Terms of Service page
├── components/
│   ├── ui/                  # Shared UI primitives (e.g., button.tsx)
│   ├── sections/            # Core sections of the storytelling homepage
│   │   ├── hero-section.tsx          # Q1: Value Proposition (Nexra / TableBoost showcase)
│   │   ├── why-exist-section.tsx     # Q2: Why we exist (Core mission and design principles)
│   │   ├── how-we-think-section.tsx  # Q3: How we think (Our perspective on utility vs. bloat)
│   │   ├── what-we-built-section.tsx # Q4: What we built (Interactive TableBoost device viewer)
│   │   ├── why-care-section.tsx      # Q5: Why you should care (Before/After & premium hover FAQs)
│   │   └── whats-next-section.tsx    # Q6: What's next (Roadmap: Society-Agent & RiseRoot)
│   ├── footer.tsx           # Reusable site footer with dynamic links and social items
│   ├── logo.tsx             # SVG branding logo
│   └── navigation.tsx       # Floating glassmorphism navbar pill
├── lib/
│   ├── schema.ts            # Dynamic JSON-LD structured data generator for search engines
│   ├── site-content.ts      # Single source of truth for links, text content, and social handles
│   └── utils.ts             # Tailwind helper functions
├── types/                   # TypeScript interfaces
└── public/                  # Static assets and screenshots
```

---

## ⚡ Key Features & Core Design Principles

1. **Editorial Layout & Design System**: Custom monochrome/slate theme styling with deep slate/navy accents and high contrast. Features highly-restrained mesh overlays and premium typography.
2. **Single Source of Truth (`lib/site-content.ts`)**: Centralized contact endpoints, social links, product descriptions, and navigation menus are configured here.
   - **Support Email**: `nexra.dev@gmail.com`
   - **Instagram**: `nexra.dev.ai`
   - **X (Twitter)**: `nexra_dev_ai`
   - **Facebook**: `nexra`
3. **Structured SEO & Metadata**: Dynamically generated SEO metadata per page and structured JSON-LD schemas in `lib/schema.ts` targeting Google Rich Results.
4. **Interactive Component Workspaces**:
   - Device selector showcase in the *What We Built* section, toggling desktop, tablet, and mobile screenshot frames with Framer Motion transitions.
   - Custom FAQ accordion items in the *Why Care* section featuring background fade hovers (`hover:bg-[#FAFAFA]`), text offset shifts, and scale responses.

---

## 🚀 Getting Started

Follow these instructions to run the website locally.

### Prerequisites

- **Node.js** (version 18.17 or later recommended)
- **npm** (comes packaged with Node.js)

### Installation

1. Clone this repository and navigate to the project root.
2. Install dependencies:
   ```bash
   npm install
   ```

### Run Locally

To start the Next.js development server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### Build and Launch

To build the application for production:
```bash
npm run build
```

To run the compiled production build:
```bash
npm run start
```

---

## 🧹 Code Quality & Linting

To run ESLint and static analysis checking:
```bash
npm run lint
```