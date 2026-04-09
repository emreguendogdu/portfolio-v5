# AI Agent Guide - Portfolio V5

Welcome! This directory contains comprehensive documentation to help AI agents understand and work effectively with this codebase.

## Quick Start

1. **Read this file first** - Get an overview of the project
2. **Check [ARCHITECTURE.md](./ARCHITECTURE.md)** - Understand the project structure
3. **Review [PATTERNS.md](./PATTERNS.md)** - Learn the coding patterns
4. **Consult [WORKFLOWS.md](./WORKFLOWS.md)** - See common tasks and workflows
5. **Reference [CRITICAL-FILES.md](./CRITICAL-FILES.md)** - Know the important files

## Project Overview

**Type:** Personal Portfolio Website (Version 5)
**Framework:** Next.js 16 (App Router)
**Language:** TypeScript
**Styling:** Tailwind CSS v4
**Animation:** GSAP with SplitText plugin
**Package Manager:** pnpm

### Purpose

This is a creative developer's portfolio showcasing premium digital projects. Each project is a separate route with unique design, animations, and interactions.

### Key Features

- Portfolio project showcases (e.g., `/kiani`, `/solara`)
- Custom GSAP animations for each project
- Unique typography and styling per project
- Responsive design with mobile-first approach
- Performance-optimized with Next.js features

## Tech Stack

```json
{
  "framework": "Next.js 16.1.1",
  "react": "19.2.3",
  "typescript": "^5",
  "styling": "Tailwind CSS v4",
  "animation": "GSAP 3.13.0 + SplitText",
  "smooth-scroll": "Lenis 1.3.15",
  "webgl": "OGL 1.0.11",
  "utilities": ["clsx", "tailwind-merge"]
}
```

## Project Structure

```
portfolio-v5/
├── .agents/              # AI agent documentation (you are here)
├── app/                  # Next.js app directory
│   ├── layout.tsx        # Root layout
│   ├── page.tsx          # Homepage
│   ├── globals.css       # Global styles
│   ├── kiani/            # Portfolio project: Kiani Hotel
│   ├── solara/           # Portfolio project: Solara Hotel
│   └── */                # Other routes
├── lib/                  # Shared utilities
│   ├── siteConfig.ts     # Site configuration & metadata
│   └── utils.ts          # Utility functions (cn, etc.)
├── public/               # Static assets
├── .claude/              # Claude Code configuration
├── CLAUDE.md             # Portfolio route creation guide
├── next.config.ts        # Next.js configuration
├── tailwind.config.ts    # Tailwind configuration (if exists)
└── package.json          # Dependencies & scripts
```

## Core Principles

### 1. Route-Based Architecture

Each portfolio project is a **completely isolated route** with:
- Its own folder structure
- Custom fonts and images
- Unique styling system
- Independent animation logic

### 2. Animation-First Design

All projects use **GSAP for animations**:
- Timeline-based sequencing
- SplitText for text reveals
- Scroll-triggered animations
- 3D transforms where appropriate

### 3. Custom Typography

Each project defines its own **typography system**:
- CSS variables for colors
- Custom font loading with `next/font/local`
- Responsive font sizing
- `@layer base` for typography classes

### 4. Semantic HTML

All components use **proper semantic elements**:
- `<section>` for major sections
- `<header>`, `<main>`, `<footer>` for page structure
- Proper heading hierarchy
- ARIA labels where needed

### 5. Performance Optimization

- Image optimization with `next/image`
- Font optimization with `next/font/local`
- CSS-in-CSS (Tailwind v4 with `@import`)
- Transform-based animations (GPU-accelerated)

## Developer Workflow

### For New Portfolio Projects

1. Create route folder: `app/{project-name}/`
2. Set up core files: `layout.tsx`, `page.tsx`, `page.css`
3. Add fonts and images
4. Build components (sections, UI elements)
5. Implement animations with GSAP
6. Test responsiveness
7. Optimize and deploy

### For Modifications

1. **Identify the route** - Which project needs changes?
2. **Read existing code** - Understand current implementation
3. **Follow patterns** - Match the existing style
4. **Test changes** - Verify across screen sizes
5. **Commit with context** - Clear commit messages

## File Naming Conventions

- **Components:** `PascalCase.tsx` (e.g., `Hero.tsx`)
- **Utilities:** `camelCase.ts` (e.g., `siteConfig.ts`)
- **CSS files:** `kebab-case.css` OR `page.css`
- **Images:** `kebab-case.png` (e.g., `hero-bg.png`)
- **Fonts:** `PascalCase-Weight.otf` (e.g., `Gotham-Bold.otf`)

## Common Patterns

### Import Aliases

```tsx
import { cn } from '@/lib/utils';           // Utilities
import { constructMetadata } from '@/lib/siteConfig';  // Metadata
import Component from '@/app/route/Component';  // App components
```

### Component Structure

```tsx
'use client';  // Add for client components

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export default function Component() {
  useGSAP(() => {
    // Animation logic
  });

  return <section id="component-id">{/* Content */}</section>;
}
```

### Styling Pattern

```css
@import "tailwindcss";

:root {
  --color-background: #value;
  --color-foreground: #value;
}

@theme inline {
  --color-background: var(--color-background);
  --color-foreground: var(--color-foreground);
}

@layer base {
  h1 { /* Custom typography */ }
}
```

## Critical Don'ts

1. **Don't mix animation patterns** - Stick to one approach per project
2. **Don't skip 'use client'** - Required for hooks and animations
3. **Don't use global styles** - Each project is isolated
4. **Don't forget responsive design** - Test all breakpoints
5. **Don't hardcode values** - Use CSS variables where possible
6. **Don't ignore accessibility** - Add alt text, ARIA labels
7. **Don't create unnecessary files** - Keep structure clean

## When to Ask for Clarification

Ask the user when:
- Creating a completely new type of component
- Unclear about design intentions
- Choosing between multiple valid approaches
- Making breaking changes to existing patterns
- Unsure about animation timing/easing
- Need specific brand colors or fonts

## Documentation Files

| File | Purpose |
|------|---------|
| [ARCHITECTURE.md](./ARCHITECTURE.md) | Detailed project architecture |
| [PATTERNS.md](./PATTERNS.md) | Code patterns and conventions |
| [WORKFLOWS.md](./WORKFLOWS.md) | Common workflows and tasks |
| [CRITICAL-FILES.md](./CRITICAL-FILES.md) | Important files reference |

## Getting Help

1. **Read CLAUDE.md** - Detailed guide for creating portfolio routes
2. **Check existing projects** - `/kiani` and `/solara` are reference implementations
3. **Review this documentation** - All patterns are documented
4. **Ask the user** - When truly unclear

## Success Criteria

You're doing well if:
- ✅ New code matches existing patterns
- ✅ Animations are smooth and performant
- ✅ Responsive design works across devices
- ✅ TypeScript types are correct
- ✅ Code is clean and maintainable
- ✅ Components are properly isolated
- ✅ Accessibility is maintained

---

**Last Updated:** 2026-04-03
**Version:** 1.0.0
