# Project Architecture

This document provides a detailed overview of the project's architecture, structure, and organization.

## High-Level Architecture

```
┌─────────────────────────────────────┐
│         Next.js App Router          │
│  (Server Components + Client Comps) │
└─────────────────────────────────────┘
                 │
    ┌────────────┼────────────┐
    │            │            │
┌───▼───┐   ┌───▼───┐   ┌───▼────┐
│ Root  │   │Project│   │Project │
│ Route │   │ Kiani │   │Solara  │
└───────┘   └───────┘   └────────┘
    │            │            │
┌───▼───────────▼────────────▼───┐
│     Shared Utilities (lib/)    │
│  • siteConfig.ts              │
│  • utils.ts (cn, etc.)        │
└────────────────────────────────┘
```

## Directory Structure

### Root Level

```
portfolio-v5/
├── .agents/              # AI agent documentation
│   ├── README.md         # Main guide
│   ├── ARCHITECTURE.md   # This file
│   ├── PATTERNS.md       # Code patterns
│   ├── WORKFLOWS.md      # Common workflows
│   └── CRITICAL-FILES.md # Important files
│
├── .claude/              # Claude Code configuration
│   ├── projects/         # Project-specific settings
│   └── memory/           # Auto memory
│
├── app/                  # Next.js app directory
│   ├── layout.tsx        # Root layout (metadata, fonts)
│   ├── page.tsx          # Homepage
│   ├── globals.css       # Global base styles
│   ├── not-found.tsx     # 404 page
│   ├── middleware.ts     # Middleware (if any)
│   │
│   ├── kiani/            # Portfolio project route
│   │   ├── layout.tsx        # Project-specific layout
│   │   ├── page.tsx          # Project page
│   │   ├── kiani.css         # Project styles
│   │   ├── components/       # Project components
│   │   ├── fonts/            # Project fonts
│   │   └── images/           # Project images
│   │
│   └── solara/           # Another portfolio project
│       ├── layout.tsx
│       ├── page.tsx
│       ├── page.css
│       ├── components/
│       ├── hooks/
│       └── context/
│
├── lib/                  # Shared utilities
│   ├── siteConfig.ts     # Site config & metadata helper
│   └── utils.ts          # Utility functions
│
├── public/               # Static assets (favicons, etc.)
│
├── CLAUDE.md             # Portfolio route creation guide
├── README.md             # Project readme
│
├── next.config.ts        # Next.js configuration
├── tailwind.config.ts    # Tailwind config (if exists)
├── tsconfig.json         # TypeScript configuration
├── postcss.config.mjs    # PostCSS configuration
├── eslint.config.mjs     # ESLint configuration
└── package.json          # Dependencies & scripts
```

### Project Route Structure

Each portfolio project follows this pattern:

#### Kiani Pattern (Traditional - Multi-Section)

```
app/kiani/
├── layout.tsx              # Font loading
├── page.tsx                # Main page composition
├── kiani.css               # Project-specific styles
│
├── components/
│   ├── Header.tsx          # Top-level header
│   ├── Preloader.tsx       # Loading animation
│   │
│   ├── sections/           # Page sections
│   │   ├── Hero.tsx
│   │   ├── Philosophy.tsx
│   │   ├── SomeStays.tsx
│   │   ├── RoomsSuites.tsx
│   │   ├── SpaWellness.tsx
│   │   ├── TestimonialSection.tsx
│   │   └── Footer.tsx
│   │
│   ├── layouts/            # Layout components
│   │   └── FullScreenImageLayout.tsx
│   │
│   └── ui/                 # UI components
│       ├── CTA.tsx
│       ├── CardImageWrapper.tsx
│       └── icons/
│           ├── Facebook.tsx
│           ├── Instagram.tsx
│           └── YouTube.tsx
│
├── fonts/                  # Local fonts
│   ├── Bosch-Regular.otf
│   └── Satoshi-Regular.otf
│
└── images/                 # Project images
    ├── hero-img.png
    ├── card-image-1.png
    └── card-image-2.png
```

#### Solara Pattern (Modern - Hook-Based)

```
app/solara/
├── layout.tsx              # Font loading
├── page.tsx                # Main page with providers
├── page.css                # Project-specific styles
│
├── components/
│   ├── Hero.tsx            # Main hero section
│   ├── Preloader.tsx       # Loading animation
│   │
│   ├── fonts/              # Fonts in components
│   │   ├── Gotham-Light.otf
│   │   ├── Gotham-Book.otf
│   │   └── Gotham-Bold.otf
│   │
│   ├── images/             # Images in components
│   │   └── hero-bg.png
│   │
│   └── ui/
│       └── icons/
│           ├── Logo.tsx
│           ├── Star.tsx
│           └── ArrowOutwardRounded.tsx
│
├── hooks/                  # Custom animation hooks
│   ├── useHeroAnimation.ts
│   └── usePreloaderAnimation.ts
│
└── context/                # React context
    └── AnimationContext.tsx
```

## Data Flow

### Server-Side

```
next.config.ts
     │
     ▼
app/layout.tsx (Root Layout)
     │
     ├─ Site metadata
     ├─ Global styles
     └─ Root structure
          │
          ▼
app/{route}/layout.tsx (Route Layout)
     │
     ├─ Load custom fonts
     ├─ Apply font variables
     └─ Import route styles
          │
          ▼
app/{route}/page.tsx (Route Page)
     │
     ├─ Metadata (SEO)
     ├─ Component composition
     └─ Render content
```

### Client-Side Animation Flow

```
Preloader Component
     │
     ├─ Initialize GSAP timeline
     ├─ Animate preloader sequence
     └─ Trigger completion
          │
          ▼
Main Content Animation
     │
     ├─ Hero animations
     ├─ Section reveals
     └─ Interactive elements
```

### Context-Based Flow (Solara Pattern)

```
AnimationProvider (Context)
     │
     ├─ startHeroAnimation: boolean
     └─ setStartHeroAnimation: function
          │
          ▼
Preloader
     │
     └─ usePreloaderAnimation
          │
          └─ On complete: setStartHeroAnimation(true)
               │
               ▼
Hero
     │
     └─ useHeroAnimation
          │
          └─ Triggered when startHeroAnimation = true
```

## Component Hierarchy

### Typical Page Structure

```
<main>
  <Preloader />          # Fixed, z-index: 50
    └─ AnimationProvider (optional)

  <Hero />               # First section
    ├─ Header
    ├─ Title/Heading
    ├─ Content
    └─ Background Image

  <Section1 />           # Additional sections
  <Section2 />
  <SectionN />

  <Footer />             # Last section
</main>
```

## Styling Architecture

### CSS Layer System

```css
@import "tailwindcss";        /* Import Tailwind v4 */

:root {                       /* CSS variables */
  --color-background: #value;
  --color-foreground: #value;
}

@theme inline {               /* Extend Tailwind theme */
  --color-*: var(--color-*);
  --font-*: var(--font-*);
}

@layer base {                 /* Base typography */
  h1, h2, h3, p { }
}

@layer components {           /* Component utilities */
  .component-class { }
}

/* Project-specific styles */
#preloader { }
.star { }
```

### Styling Precedence

1. **Tailwind utilities** (highest specificity)
2. **@layer components** classes
3. **@layer base** typography
4. **CSS variables** from `:root`
5. **Inline styles** (when necessary)

## Animation Architecture

### GSAP Setup Pattern

```typescript
// Component imports
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { useGSAP } from '@gsap/react';

// Register plugins
gsap.registerPlugin(SplitText);

// In component
useGSAP(() => {
  // Create SplitText instances
  const split = SplitText.create('#element', { type: 'chars' });

  // Build timeline
  const tl = gsap.timeline({
    defaults: { duration: 1, ease: 'power2.out' },
    onComplete: () => { /* cleanup */ }
  });

  // Animate
  tl.from(split.chars, { yPercent: 100, stagger: 0.02 });
}, { dependencies: [] });
```

### Animation Layers

```
┌─────────────────────────────┐
│   Preloader (z-50)          │ ← Loads first
└─────────────────────────────┘
           │
           ▼
┌─────────────────────────────┐
│   Hero Entrance (z-20)      │ ← Triggered after preloader
└─────────────────────────────┘
           │
           ▼
┌─────────────────────────────┐
│   Section Reveals (z-10)    │ ← Scroll-triggered
└─────────────────────────────┘
           │
           ▼
┌─────────────────────────────┐
│   Interactive Elements      │ ← Hover, click animations
└─────────────────────────────┘
```

## TypeScript Architecture

### Type Organization

```typescript
// Component props
interface ComponentProps {
  className?: string;
  children?: React.ReactNode;
  // ...other props
}

// Context types
interface AnimationContextType {
  startAnimation: boolean;
  setStartAnimation: Dispatch<SetStateAction<boolean>>;
}

// Utility types
type ClassValue = string | number | boolean | undefined | null;
```

### Import/Export Patterns

```typescript
// Named exports (preferred for utilities)
export function utility() { }
export const Component = () => { };

// Default exports (for page components)
export default function Page() { }
export default function Layout() { }
```

## Build & Optimization

### Build Pipeline

```
Source Code (TypeScript + CSS)
     │
     ▼
Next.js Compiler
     │
     ├─ TypeScript → JavaScript
     ├─ CSS → Optimized CSS
     ├─ Image Optimization
     └─ Font Optimization
          │
          ▼
Production Build
     │
     ├─ Static pages (.html)
     ├─ Client bundles (.js)
     ├─ CSS bundles (.css)
     └─ Optimized assets
```

### Performance Optimizations

1. **Image Optimization**
   - Next.js Image component
   - Automatic format selection (WebP, AVIF)
   - Responsive images
   - Lazy loading

2. **Font Optimization**
   - `next/font/local` loader
   - Automatic font subsetting
   - FOUT prevention with `display: 'swap'`
   - CSS variable injection

3. **CSS Optimization**
   - Tailwind v4 JIT compilation
   - Automatic purging of unused styles
   - Critical CSS inlining
   - PostCSS minification

4. **JavaScript Optimization**
   - Automatic code splitting
   - Tree shaking
   - Client component bundling
   - Server component benefits

## Deployment Architecture

```
Git Repository
     │
     ▼
CI/CD Pipeline (Vercel/Netlify/etc.)
     │
     ├─ Install dependencies (pnpm)
     ├─ Run build (next build)
     ├─ Run tests/lint (if any)
     └─ Deploy to CDN
          │
          ▼
Production Environment
     │
     ├─ Static files → CDN
     ├─ API routes → Edge functions
     └─ Dynamic routes → SSR/ISR
```

## Environment Variables

```bash
# None currently used in the project
# Add environment variables here if needed:
# NEXT_PUBLIC_API_URL=
# ANALYTICS_ID=
```

## Security Considerations

- No sensitive data in client code
- All external images via Next.js Image
- CSP headers (if configured in middleware)
- Sanitized user inputs (if any forms)

## Scalability

### Adding New Projects

1. Each project is completely isolated
2. No shared state between projects
3. Independent styling and assets
4. Can use different animation approaches
5. Easy to add/remove without affecting others

### Performance Budget

- First Contentful Paint: < 1.5s
- Time to Interactive: < 3.5s
- Lighthouse Score: > 90
- Bundle size per route: < 200KB (gzipped)

---

**Last Updated:** 2026-04-03
**Maintained By:** AI Agents + Developer
