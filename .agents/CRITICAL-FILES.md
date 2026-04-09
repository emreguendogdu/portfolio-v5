# Critical Files Reference

This document provides a comprehensive reference of important files in the codebase, their purposes, and when to modify them.

## Configuration Files

### `package.json`

**Location:** `/package.json`
**Purpose:** Project dependencies and scripts
**When to modify:** Adding/removing packages, updating scripts

**Key sections:**
```json
{
  "dependencies": {
    "next": "16.1.1",          // Next.js framework
    "react": "19.2.3",         // React library
    "gsap": "^3.13.0",         // Animation library
    "@gsap/react": "^2.1.2",   // GSAP React integration
    "lenis": "^1.3.15",        // Smooth scroll
    "tailwind-merge": "^3.4.0" // cn() utility
  },
  "scripts": {
    "dev": "next dev",         // Development server
    "build": "next build",     // Production build
    "start": "next start",     // Run production
    "lint": "eslint"           // Linting
  }
}
```

**⚠️ Don't modify:** Version numbers without testing
**✅ Do modify:** When adding new dependencies

---

### `next.config.ts`

**Location:** `/next.config.ts`
**Purpose:** Next.js configuration
**When to modify:** Adding remote image domains, environment variables

```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
```

**⚠️ Don't modify:** Unless you know what you're doing
**✅ Do modify:** When adding new image sources

---

### `tsconfig.json`

**Location:** `/tsconfig.json`
**Purpose:** TypeScript configuration
**When to modify:** Rarely

**Key settings:**
```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./*"]  // Import alias
    }
  }
}
```

**⚠️ Don't modify:** Compiler options
**✅ Do modify:** Path aliases if needed

---

### `eslint.config.mjs`

**Location:** `/eslint.config.mjs`
**Purpose:** ESLint configuration
**When to modify:** Adjusting linting rules

**⚠️ Don't modify:** Without team discussion
**✅ Do modify:** To fix specific linting issues

---

### `postcss.config.mjs`

**Location:** `/postcss.config.mjs`
**Purpose:** PostCSS configuration for Tailwind
**When to modify:** Rarely (Tailwind v4 handles most)

**⚠️ Don't modify:** Unless Tailwind setup changes
**✅ Do modify:** For custom PostCSS plugins

---

## Core Application Files

### `app/layout.tsx`

**Location:** `/app/layout.tsx`
**Purpose:** Root layout for entire application
**When to modify:** Global metadata, fonts, providers

```tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  // Global metadata
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
```

**⚠️ Don't modify:** Structure without reason
**✅ Do modify:** Global metadata, analytics scripts

---

### `app/page.tsx`

**Location:** `/app/page.tsx`
**Purpose:** Homepage
**When to modify:** Updating homepage content

**⚠️ Don't modify:** To add project routes (use separate folders)
**✅ Do modify:** Homepage-specific content

---

### `app/globals.css`

**Location:** `/app/globals.css`
**Purpose:** Global base styles
**When to modify:** True global styles only

```css
@import "tailwindcss";

/* Global resets and base styles only */
```

**⚠️ Don't modify:** For project-specific styles (use route CSS)
**✅ Do modify:** For true global styles

---

## Utility Files

### `lib/siteConfig.ts`

**Location:** `/lib/siteConfig.ts`
**Purpose:** Site configuration and metadata helper
**When to modify:** Site-wide metadata

```typescript
export const siteConfig = {
  name: "Emre Gundogdu",
  titleTemplate: "%s | Emre Gundogdu",
  defaultTitle: "Emre Gundogdu | Creative Developer & Designer",
  description: "...",
};

export function constructMetadata({
  title,
  description,
  noIndex = false,
}: {
  title?: string;
  description?: string;
  noIndex?: boolean;
} = {}): Metadata {
  // Returns formatted metadata
}
```

**⚠️ Don't modify:** Function signature
**✅ Do modify:** Site name, default metadata

---

### `lib/utils.ts`

**Location:** `/lib/utils.ts`
**Purpose:** Shared utility functions
**When to modify:** Adding new utilities

```typescript
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getIstanbulTime = (): string => {
  // Returns Istanbul time
};
```

**⚠️ Don't modify:** Existing utilities without checking usage
**✅ Do modify:** To add new shared utilities

---

## Project Route Files

### Project-Specific Structure

Each project route has these critical files:

#### `app/{project}/layout.tsx`

**Purpose:** Load project-specific fonts
**When to modify:** Changing fonts

```tsx
import localFont from 'next/font/local';
import './page.css';

const customFont = localFont({
  src: './fonts/Font-Regular.otf',
  variable: '--font-custom',
});

export default function ProjectLayout({ children }) {
  return <div className={customFont.variable}>{children}</div>;
}
```

**⚠️ Don't modify:** Structure
**✅ Do modify:** Font configuration

---

#### `app/{project}/page.tsx`

**Purpose:** Main page composition
**When to modify:** Adding/removing sections

**Kiani pattern:**
```tsx
import { constructMetadata } from '@/lib/siteConfig';
import Hero from './components/sections/Hero';
import Section from './components/sections/Section';

export const metadata = constructMetadata({
  title: 'Project Name',
  description: 'Description',
});

export default function Page() {
  return (
    <main>
      <Hero />
      <Section />
    </main>
  );
}
```

**⚠️ Don't modify:** Import structure
**✅ Do modify:** Section composition, metadata

---

#### `app/{project}/page.css` or `{project}.css`

**Purpose:** Project-specific styles
**When to modify:** Styling changes for this project only

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
  /* Typography */
}
```

**⚠️ Don't modify:** Other projects' CSS files
**✅ Do modify:** This project's colors, typography

---

## Reference Projects

### Kiani (Multi-Section Pattern)

**Location:** `/app/kiani/`
**Use as reference for:**
- Multi-section layouts
- Complex page structures
- Traditional folder organization
- Inline animations

**Key files:**
- `kiani/layout.tsx` - Font loading
- `kiani/page.tsx` - Section composition
- `kiani/kiani.css` - Custom typography
- `kiani/components/sections/Hero.tsx` - Hero with inline animations
- `kiani/components/Preloader.tsx` - Simple preloader

---

### Solara (Hook-Based Pattern)

**Location:** `/app/solara/`
**Use as reference for:**
- Simple projects (fewer sections)
- Hook-based animation architecture
- Context-based state management
- Modern patterns

**Key files:**
- `solara/layout.tsx` - Multi-weight font loading
- `solara/page.tsx` - Provider pattern
- `solara/page.css` - Modern typography
- `solara/hooks/useHeroAnimation.ts` - Extracted animation logic
- `solara/context/AnimationContext.tsx` - Animation state

---

## Documentation Files

### `CLAUDE.md`

**Location:** `/CLAUDE.md`
**Purpose:** Portfolio route creation guide
**When to reference:** Creating new portfolio projects
**When to modify:** Updating patterns or conventions

---

### `.agents/README.md`

**Location:** `/.agents/README.md`
**Purpose:** AI agent overview guide
**When to reference:** First time working on project
**When to modify:** Adding new workflows or patterns

---

### `.agents/ARCHITECTURE.md`

**Location:** `/.agents/ARCHITECTURE.md`
**Purpose:** Project architecture documentation
**When to reference:** Understanding structure
**When to modify:** Architecture changes

---

### `.agents/PATTERNS.md`

**Location:** `/.agents/PATTERNS.md`
**Purpose:** Code patterns and conventions
**When to reference:** Writing new code
**When to modify:** Establishing new patterns

---

### `.agents/WORKFLOWS.md`

**Location:** `/.agents/WORKFLOWS.md`
**Purpose:** Step-by-step workflows
**When to reference:** Performing specific tasks
**When to modify:** Adding new workflows

---

### `.agents/CRITICAL-FILES.md`

**Location:** `/.agents/CRITICAL-FILES.md`
**Purpose:** This file
**When to reference:** Finding important files
**When to modify:** New critical files added

---

## File Modification Matrix

| File | Frequency | Risk Level | Requires Testing |
|------|-----------|------------|------------------|
| `package.json` | Medium | Medium | Yes |
| `next.config.ts` | Low | Medium | Yes |
| `tsconfig.json` | Very Low | High | Yes |
| `app/layout.tsx` | Low | Medium | Yes |
| `app/globals.css` | Low | Low | Yes |
| `lib/siteConfig.ts` | Medium | Low | No |
| `lib/utils.ts` | Medium | Low | Yes |
| `{project}/layout.tsx` | Medium | Low | Yes |
| `{project}/page.tsx` | High | Low | Yes |
| `{project}/page.css` | High | Low | Yes |
| Component files | Very High | Very Low | Yes |

**Risk Levels:**
- **Very Low:** Safe to modify
- **Low:** Generally safe
- **Medium:** Test thoroughly
- **High:** Modify with caution
- **Very High:** Rarely modify

---

## Quick File Finder

### Need to...

**Add a new dependency:**
→ `package.json`

**Change site name/metadata:**
→ `lib/siteConfig.ts`

**Add global styles:**
→ `app/globals.css` (rarely)

**Create new portfolio project:**
→ `app/{project-name}/` (new folder)

**Add fonts to a project:**
→ `app/{project}/fonts/` + `app/{project}/layout.tsx`

**Change project colors:**
→ `app/{project}/page.css` (`:root` variables)

**Add new section:**
→ `app/{project}/components/sections/NewSection.tsx`

**Modify animations:**
→ Component files (look for `useGSAP`)

**Add utility function:**
→ `lib/utils.ts`

**Update build configuration:**
→ `next.config.ts`

**Configure remote images:**
→ `next.config.ts` (`images.remotePatterns`)

---

## Safety Checklist

Before modifying critical files:

- [ ] Read the file completely
- [ ] Understand current behavior
- [ ] Check for dependencies
- [ ] Make backup if unsure
- [ ] Test changes locally
- [ ] Verify no errors in console
- [ ] Test responsive design
- [ ] Check other routes still work
- [ ] Lint code
- [ ] Commit with clear message

---

**Last Updated:** 2026-04-03
**Maintained By:** AI Agents + Developer
