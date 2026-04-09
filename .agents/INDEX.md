# .agents/ Documentation Index

**Quick navigation for AI agents working on this codebase.**

---

## Start Here 👇

### New to this codebase?
→ **[QUICK-START.md](./QUICK-START.md)** (5 min read)
Get productive immediately with the essentials.

### Need detailed guidance?
→ **[README.md](./README.md)** (15 min read)
Comprehensive overview of the entire project.

### Creating a portfolio route?
→ **[../CLAUDE.md](../CLAUDE.md)** (30 min read)
Step-by-step guide for creating routes like `/kiani` or `/solara`.

---

## Documentation by Purpose

### 🎯 I need to understand...

| What | File | Time |
|------|------|------|
| How to get started | [QUICK-START.md](./QUICK-START.md) | 5 min |
| Project overview | [README.md](./README.md) | 15 min |
| Architecture & structure | [ARCHITECTURE.md](./ARCHITECTURE.md) | 20 min |
| Code patterns | [PATTERNS.md](./PATTERNS.md) | 20 min |
| Step-by-step workflows | [WORKFLOWS.md](./WORKFLOWS.md) | 30 min |
| Important files | [CRITICAL-FILES.md](./CRITICAL-FILES.md) | 15 min |
| Creating portfolio routes | [../CLAUDE.md](../CLAUDE.md) | 30 min |

---

## Documentation by Task

### 📝 I need to...

**Create a new portfolio project**
1. [QUICK-START.md](./QUICK-START.md#create-new-portfolio-project) - Quick overview
2. [WORKFLOWS.md](./WORKFLOWS.md#creating-a-new-portfolio-project) - Detailed steps
3. [../CLAUDE.md](../CLAUDE.md#step-by-step-creation-guide) - Complete guide

**Add a section to existing project**
1. [WORKFLOWS.md](./WORKFLOWS.md#adding-a-new-section) - Step-by-step
2. [PATTERNS.md](./PATTERNS.md#section-component) - Component pattern
3. Reference: `/app/kiani/components/sections/`

**Modify animations**
1. [WORKFLOWS.md](./WORKFLOWS.md#modifying-animations) - How to modify
2. [PATTERNS.md](./PATTERNS.md#animation-patterns) - Animation patterns
3. [../CLAUDE.md](../CLAUDE.md#animation-patterns) - Detailed examples

**Update styling**
1. [WORKFLOWS.md](./WORKFLOWS.md#updating-styles) - Styling workflows
2. [PATTERNS.md](./PATTERNS.md#styling-patterns) - CSS patterns
3. [../CLAUDE.md](../CLAUDE.md#styling-system) - Complete styling guide

**Debug an issue**
1. [WORKFLOWS.md](./WORKFLOWS.md#debugging-animation-issues) - Debug checklist
2. [QUICK-START.md](./QUICK-START.md#debug-checklist) - Quick debug tips
3. [PATTERNS.md](./PATTERNS.md#error-handling) - Error patterns

**Find a specific file**
1. [CRITICAL-FILES.md](./CRITICAL-FILES.md#quick-file-finder) - File finder
2. [ARCHITECTURE.md](./ARCHITECTURE.md#directory-structure) - Full structure
3. [CRITICAL-FILES.md](./CRITICAL-FILES.md#file-modification-matrix) - Modification guide

**Understand the architecture**
1. [ARCHITECTURE.md](./ARCHITECTURE.md) - Complete architecture
2. [README.md](./README.md#project-structure) - Overview
3. [../CLAUDE.md](../CLAUDE.md#project-structure) - Route structure

**Learn code patterns**
1. [PATTERNS.md](./PATTERNS.md) - All patterns
2. [QUICK-START.md](./QUICK-START.md#essential-imports) - Quick patterns
3. Reference projects: `/app/kiani/`, `/app/solara/`

---

## Documentation Map

```
.agents/
├── INDEX.md              ← You are here
├── QUICK-START.md        ← Start here (5 min)
├── README.md             ← Main overview (15 min)
├── ARCHITECTURE.md       ← Project structure (20 min)
├── PATTERNS.md           ← Code conventions (20 min)
├── WORKFLOWS.md          ← Task workflows (30 min)
└── CRITICAL-FILES.md     ← File reference (15 min)

../
└── CLAUDE.md             ← Portfolio route guide (30 min)
```

---

## Quick Answers

### What is this project?
Personal portfolio website built with Next.js 16, showcasing premium digital projects with custom GSAP animations.

### What's the main pattern?
Each portfolio project is an **isolated route** (`/kiani`, `/solara`) with its own design, fonts, animations, and styles.

### What tech stack?
- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Animation:** GSAP + SplitText
- **Package Manager:** pnpm

### Which file do I edit?
- **New project:** Create `app/{project}/`
- **Modify project:** Edit files in `app/{project}/`
- **Global config:** `next.config.ts`, `lib/siteConfig.ts`
- **Never edit:** Other projects' files

### Which pattern do I use?
- **Simple (1-3 sections):** Solara pattern (`/app/solara/`)
- **Complex (4+ sections):** Kiani pattern (`/app/kiani/`)

### How do I test?
```bash
pnpm dev  # Visit localhost:3000/{your-route}
```

---

## File Categories

### 📘 Getting Started
- [QUICK-START.md](./QUICK-START.md) - Fastest way to start
- [README.md](./README.md) - Project overview

### 🏗️ Understanding Structure
- [ARCHITECTURE.md](./ARCHITECTURE.md) - How it's organized
- [CRITICAL-FILES.md](./CRITICAL-FILES.md) - Important files

### 💻 Writing Code
- [PATTERNS.md](./PATTERNS.md) - Code conventions
- [WORKFLOWS.md](./WORKFLOWS.md) - Step-by-step tasks

### 🎨 Creating Routes
- [../CLAUDE.md](../CLAUDE.md) - Complete route creation guide

---

## Reading Order

### For Quick Tasks (15 min)
1. [QUICK-START.md](./QUICK-START.md) - 5 min
2. [PATTERNS.md](./PATTERNS.md) - 10 min (skim)
3. Start coding! Reference docs as needed

### For New Agents (45 min)
1. [QUICK-START.md](./QUICK-START.md) - 5 min
2. [README.md](./README.md) - 15 min
3. [ARCHITECTURE.md](./ARCHITECTURE.md) - 15 min
4. [PATTERNS.md](./PATTERNS.md) - 10 min
5. Browse reference projects

### For Deep Understanding (2 hours)
1. [README.md](./README.md) - 15 min
2. [ARCHITECTURE.md](./ARCHITECTURE.md) - 20 min
3. [PATTERNS.md](./PATTERNS.md) - 20 min
4. [WORKFLOWS.md](./WORKFLOWS.md) - 30 min
5. [../CLAUDE.md](../CLAUDE.md) - 30 min
6. Study `/app/kiani/` and `/app/solara/`

---

## Reference Projects

### Kiani (`/app/kiani/`)
**Pattern:** Multi-section, traditional structure
**Use for:** Complex layouts, multiple sections
**Study:** Section organization, inline animations

**Key files:**
- `layout.tsx` - Font loading
- `page.tsx` - Section composition
- `kiani.css` - Custom typography
- `components/sections/Hero.tsx` - Inline animations
- `components/Preloader.tsx` - Simple preloader

### Solara (`/app/solara/`)
**Pattern:** Hook-based, modern structure
**Use for:** Simpler layouts, fewer sections
**Study:** Custom hooks, context pattern

**Key files:**
- `layout.tsx` - Multi-weight fonts
- `page.tsx` - Provider pattern
- `page.css` - Modern CSS
- `hooks/useHeroAnimation.ts` - Extracted animations
- `context/AnimationContext.tsx` - State management

---

## Common File Paths

```
Configuration
├── package.json              Dependencies & scripts
├── next.config.ts            Next.js config
├── tsconfig.json             TypeScript config
└── eslint.config.mjs         Linting rules

Core App
├── app/layout.tsx            Root layout
├── app/page.tsx              Homepage
├── app/globals.css           Global styles
└── app/{project}/            Portfolio projects

Utilities
├── lib/siteConfig.ts         Site metadata
└── lib/utils.ts              Utility functions

Documentation
├── .agents/                  AI agent docs
└── CLAUDE.md                 Portfolio guide
```

---

## Emergency Checklist

Something broken? Check:

1. **Animation not working?**
   - `'use client'` directive present?
   - GSAP plugins registered?
   - Element IDs correct?

2. **Styles not applying?**
   - CSS variables defined?
   - `@theme inline` configured?
   - Right CSS file imported?

3. **Build failing?**
   - TypeScript errors?
   - Import paths valid?
   - Image files exist?

4. **Need help?**
   - Check [WORKFLOWS.md](./WORKFLOWS.md#debugging-animation-issues)
   - Review [PATTERNS.md](./PATTERNS.md#error-handling)
   - Study reference projects

---

## Documentation Versions

- **Created:** 2026-04-03
- **Last Updated:** 2026-04-03
- **Version:** 1.0.0
- **Maintained By:** AI Agents + Developer

---

**Happy coding! 🚀**

*Start with [QUICK-START.md](./QUICK-START.md) and reference other docs as needed.*
