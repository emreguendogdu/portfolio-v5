# Quick Start Guide for AI Agents

**Time to productive:** 5 minutes

This is the fastest way to start working on this codebase. Read this first, then dive deeper into other documentation as needed.

---

## The 30-Second Overview

This is a **Next.js 16 portfolio site** showcasing premium digital projects. Each project is an **isolated route** with custom design, animations (GSAP), and styling (Tailwind v4).

```
Key tech: Next.js 16 + React 19 + TypeScript + GSAP + Tailwind v4
Pattern: Route-based architecture (each project = separate folder)
Style: Custom CSS per route, GSAP animations, responsive-first
```

---

## The 3-Minute Deep Dive

### Project Structure

```
portfolio-v5/
├── app/
│   ├── kiani/          # Reference: Multi-section pattern
│   ├── solara/         # Reference: Hook-based pattern
│   └── {new-project}/  # Create new projects here
├── lib/
│   ├── siteConfig.ts   # Site metadata helper
│   └── utils.ts        # cn() utility
├── .agents/            # Documentation (you're here)
└── CLAUDE.md           # Detailed portfolio route guide
```

### Two Patterns You Need to Know

**Pattern 1: Kiani (Multi-Section)**
- Use for: 4+ sections, complex layouts
- Structure: `components/sections/`, inline animations
- Example: `/app/kiani/`

**Pattern 2: Solara (Hook-Based)**
- Use for: 1-3 sections, simpler projects
- Structure: `hooks/`, `context/`, extracted animations
- Example: `/app/solara/`

### Core Files Per Project

Every project needs:
1. `layout.tsx` - Font loading
2. `page.tsx` - Page composition
3. `page.css` - Custom styles
4. `components/` - Components folder

---

## Common Tasks (1-Minute Each)

### Create New Portfolio Project

```bash
mkdir -p app/project/{components/sections,fonts,images}
# Create layout.tsx, page.tsx, page.css
# Copy pattern from /app/kiani/ or /app/solara/
```

### Add Section

```tsx
// components/sections/NewSection.tsx
'use client';
import { useGSAP } from '@gsap/react';

export default function NewSection() {
  useGSAP(() => {
    // Animations
  });
  return <section id="new-section">{/* Content */}</section>;
}
```

### Modify Animation

```tsx
// Find useGSAP() in component
useGSAP(() => {
  const tl = gsap.timeline();
  tl.to('#el', { y: 0, duration: 1.5, ease: 'power2.out' });
  //                     ↑ Change values
});
```

### Update Colors

```css
/* In page.css */
:root {
  --color-background: #newValue;
  --color-foreground: #newValue;
}
```

---

## Essential Imports

Every animated component needs:

```tsx
'use client';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(SplitText);
```

Every component with conditional classes:

```tsx
import { cn } from '@/lib/utils';
// Use: className={cn('base', condition && 'variant')}
```

Every page needs metadata:

```tsx
import { constructMetadata } from '@/lib/siteConfig';

export const metadata = constructMetadata({
  title: 'Page Title',
  description: 'Description',
});
```

---

## Critical Rules

### ✅ Always Do

- Use `'use client'` for components with hooks/animations
- Use `cn()` for conditional classes
- Use `useGSAP` for all GSAP animations
- Add unique `id` to sections for animations
- Test responsive design (mobile, tablet, desktop)
- Use semantic HTML (`<section>`, `<header>`, etc.)
- Add alt text to images

### ❌ Never Do

- Mix global styles with project styles
- Animate without `'use client'` directive
- Forget to register GSAP plugins
- Use `any` type in TypeScript
- Hardcode values (use CSS variables)
- Animate layout properties (use transforms)
- Skip testing on mobile

---

## Debug Checklist

Animation not working?
- [ ] `'use client'` at top of file?
- [ ] GSAP plugin registered?
- [ ] Element has correct `id`?
- [ ] Element exists in DOM?
- [ ] useGSAP dependencies correct?

Styling broken?
- [ ] CSS variables defined?
- [ ] `@theme inline` configured?
- [ ] Tailwind classes correct?
- [ ] Responsive breakpoints tested?

Build failing?
- [ ] TypeScript errors fixed?
- [ ] All imports valid?
- [ ] No unused variables?
- [ ] Image paths correct?

---

## File Quick Reference

| Need to... | File |
|------------|------|
| Add dependency | `package.json` |
| Configure Next.js | `next.config.ts` |
| Site metadata | `lib/siteConfig.ts` |
| Utility function | `lib/utils.ts` |
| New project | `app/{project}/` |
| Project fonts | `app/{project}/layout.tsx` |
| Project colors | `app/{project}/page.css` |
| Section component | `app/{project}/components/sections/` |

---

## Reference Projects

**Kiani** (`/app/kiani/`) - Multi-section, traditional structure
- See: Section organization, inline animations
- Files: `kiani.css`, `components/sections/Hero.tsx`

**Solara** (`/app/solara/`) - Hook-based, modern structure
- See: Custom hooks, context pattern
- Files: `hooks/useHeroAnimation.ts`, `context/AnimationContext.tsx`

---

## Next Steps

1. ✅ You've read this Quick Start
2. 📖 Read [CLAUDE.md](../CLAUDE.md) for detailed portfolio route guide
3. 🏗️ Check [ARCHITECTURE.md](./ARCHITECTURE.md) for structure
4. 🎨 Review [PATTERNS.md](./PATTERNS.md) for code patterns
5. 🔧 Consult [WORKFLOWS.md](./WORKFLOWS.md) for specific tasks
6. 📋 Reference [CRITICAL-FILES.md](./CRITICAL-FILES.md) for file locations

---

## Command Cheat Sheet

```bash
pnpm dev          # Start dev server (localhost:3000)
pnpm build        # Build for production
pnpm start        # Run production build
pnpm lint         # Run linter
pnpm add pkg      # Add dependency
```

---

## Emergency Contacts

- **Main documentation:** [README.md](./README.md)
- **Route creation guide:** [CLAUDE.md](../CLAUDE.md)
- **Architecture:** [ARCHITECTURE.md](./ARCHITECTURE.md)
- **Code patterns:** [PATTERNS.md](./PATTERNS.md)
- **Workflows:** [WORKFLOWS.md](./WORKFLOWS.md)

---

## You're Ready! 🚀

You now know enough to:
- ✅ Navigate the codebase
- ✅ Create new portfolio projects
- ✅ Modify existing components
- ✅ Debug common issues
- ✅ Follow established patterns

**Happy coding!**

---

**Last Updated:** 2026-04-03
