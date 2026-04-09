# Portfolio Project Routes - Developer Guide

This document outlines the architecture, patterns, and conventions for creating new portfolio project showcase routes (like `/kiani` and `/solara`).

## Table of Contents

1. [Project Structure](#project-structure)
2. [Styling System](#styling-system)
3. [Animation Patterns](#animation-patterns)
4. [Code Conventions](#code-conventions)
5. [Component Architecture](#component-architecture)
6. [Step-by-Step Creation Guide](#step-by-step-creation-guide)

---

## Project Structure

Each portfolio project lives in `/app/{project-name}/` and follows this structure:

```
app/{project-name}/
├── layout.tsx              # Font configuration
├── page.tsx                # Main page composition
├── {project-name}.css      # OR page.css - Custom styles
├── components/
│   ├── sections/           # (Optional) Section components
│   ├── ui/                 # UI components & icons
│   ├── layouts/            # (Optional) Layout components
│   ├── fonts/              # (Optional) Local fonts
│   ├── images/             # (Optional) Images
│   ├── Preloader.tsx       # Preloader component
│   └── Hero.tsx            # Hero section
├── fonts/                  # (Alternative) Local fonts
├── images/                 # (Alternative) Images
├── hooks/                  # (Optional) Custom animation hooks
└── context/                # (Optional) React context for state
```

### Architecture Variants

**Kiani Pattern** (Traditional):
- Sections organized in `/components/sections/`
- Images in `/images/`, fonts in `/fonts/`
- Inline animation logic within components

**Solara Pattern** (Modern):
- Fewer components, more focused
- Assets in `/components/fonts/` and `/components/images/`
- Animation logic extracted to `/hooks/`
- State management via `/context/`

Choose based on project complexity:
- **Simple projects** (1-2 sections): Use Solara pattern
- **Complex projects** (5+ sections): Use Kiani pattern

---

## Styling System

### CSS File Setup

Every project needs a custom CSS file (`{project-name}.css` or `page.css`):

```css
@import "tailwindcss";

:root {
  --color-background: #f1efec;  /* Light theme */
  --color-foreground: #161819;  /* OR dark theme: #0d0d0d / #f1efec */
}

@theme inline {
  --color-background: var(--color-background);
  --color-foreground: var(--color-foreground);
  --font-sans: var(--font-{project-font});
  --font-display: var(--font-{display-font}); /* Optional */
}

html {
  background-color: var(--color-background);
}

body {
  font-family: var(--font-default), sans-serif;
  line-height: 1;
  letter-spacing: -0.025em;
}

@media screen and (max-width: 768px) {
  body {
    font-size: 0.875rem; /* or 0.75rem */
  }
}
```

### Typography Classes

Define custom typography using `@layer base`:

**Kiani Style** (Editorial/Luxury):
```css
@layer base {
  .h0 {
    font-family: var(--font-bosch);
    text-transform: uppercase;
    font-size: 6rem;
    letter-spacing: 0.3em;
    margin-right: -0.3em;
    line-height: 0.7;
    overflow: hidden;
  }

  h2, .h2 {
    font-size: 6rem;
    line-height: 1.05;
    letter-spacing: -0.06em;
  }

  h3, .h3 {
    font-size: 2rem;
    letter-spacing: -0.04em;
    line-height: 1.05;
  }

  p, .p {
    font-size: 1rem;
    letter-spacing: -0.02em;
    line-height: 1.4;
  }

  .secondary-text {
    font-size: 1rem;
    letter-spacing: 0.05em;
    line-height: 1.4;
    text-transform: uppercase;
    white-space: nowrap;
  }
}
```

**Solara Style** (Modern/Minimal):
```css
@layer base {
  h1, .h1 {
    font-size: 8rem;
    line-height: 0.8;
    font-weight: 300;
    letter-spacing: -0.075em;
    white-space: nowrap;
  }

  h2, .h2 {
    font-size: 2rem;
    font-weight: 300;
    line-height: 1;
    letter-spacing: -0.05em;
  }
}
```

### Responsive Typography

Always include responsive breakpoints:

```css
@media (min-width: 640px) {
  .h0:not(.h0-small) {
    font-size: 9rem;
  }
}

@media (min-width: 1024px) {
  .h0:not(.h0-small) {
    font-size: 11rem;
  }
}

@media (min-width: 1536px) {
  .h0:not(.h0-small) {
    font-size: 20rem;
  }
}
```

### Component-Specific Styles

For component-specific utilities, use `@layer components`:

```css
@layer components {
  .booking-element-item {
    padding-right: 1.25rem;
    width: max-content;
    font-size: 0.75rem;
    border-right: 1px solid oklch(0% 0 0 / 10%);
  }
}
```

---

## Animation Patterns

### GSAP Setup

All animations use GSAP with the following plugins:

```tsx
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(SplitText);
```

### Animation Architecture

**Option 1: Inline (Kiani Pattern)**
```tsx
export default function Hero() {
  useGSAP(() => {
    const splitTitle = SplitText.create('#title', { type: 'chars' });

    const tl = gsap.timeline({
      defaults: { duration: 1.5, ease: 'pow1.inOut' },
      onComplete: () => {
        gsap.to('#preloader', { display: 'none', duration: 0.1 });
      },
    });

    tl.to('#preloader #background', { yPercent: -100 })
      .to(splitTitle.chars, { yPercent: 0, stagger: 0.01625 }, '<0.2');
  });

  return <section>...</section>;
}
```

**Option 2: Custom Hook (Solara Pattern)**
```tsx
// hooks/useHeroAnimation.ts
export const useHeroAnimation = ({ startHeroAnimation }) => {
  useGSAP(() => {
    if (!startHeroAnimation) return;

    const tl = gsap.timeline({
      defaults: { duration: 1.618, ease: 'power2.out' },
      onStart: () => {
        document?.getElementById('hero')?.classList.remove('hidden');
      },
    });

    // Animation logic...
  }, { dependencies: [startHeroAnimation] });
};

// Component
export const Hero = () => {
  const { startHeroAnimation } = useAnimationContext();
  useHeroAnimation({ startHeroAnimation });
  return <section>...</section>;
};
```

### Common Animation Patterns

#### Text Reveal (Character Split)
```tsx
const splitTitle = SplitText.create('#title', { type: 'chars' });
gsap.set(splitTitle.chars, { yPercent: 110 });
tl.to(splitTitle.chars, {
  yPercent: 0,
  duration: 0.8,
  stagger: 0.01625, // ~0.016-0.025 for smooth reveals
});
```

#### Text Reveal (Line Split with Mask)
```tsx
const splitH3 = SplitText.create('h3', {
  type: 'lines',
  mask: 'lines', // Creates mask wrapper
});
gsap.set(splitH3.lines, { y: 200, rotate: '8deg' });
tl.to(splitH3.lines, {
  y: 0,
  rotate: 0,
  stagger: 0.1,
});
```

#### Clip Path Reveal
```tsx
gsap.set('.card-image-wrapper', {
  clipPath: 'inset(100% 0% 0% 0%)',
  opacity: 0,
  yPercent: 50,
});

tl.to('.card-image-wrapper', {
  opacity: 1,
  yPercent: 0,
  clipPath: 'inset(0% 0% 0% 0%)',
  stagger: 0.3,
});
```

#### Stagger From Center
```tsx
const stars = gsap.utils.toArray('.star');
tl.fromTo(stars,
  { yPercent: 100, opacity: 0 },
  {
    yPercent: 0,
    opacity: 1,
    stagger: {
      amount: 0.5,
      from: 'center',
    },
  }
);
```

#### 3D Transforms (Solara Style)
```tsx
// CSS
#preloader {
  perspective: 2000px;
}

.star {
  transform-style: preserve-3d;
  backface-visibility: hidden;
}

// Animation
tl.fromTo(stars,
  { z: 800, y: 150, autoAlpha: 0 },
  {
    z: 0,
    y: 0,
    autoAlpha: 1,
    stagger: 0.1,
    force3D: true,
  }
);
```

### Preloader Pattern

**Simple Preloader** (Kiani):
```tsx
export default function Preloader() {
  return (
    <div id="preloader" className="fixed inset-0 z-30">
      <div className="absolute inset-0" id="background-wrapper">
        <div className="relative w-full h-full bg-[#1D1D1D]" id="background" />
      </div>
    </div>
  );
}

// Animated away in Hero component:
tl.to('#preloader #background', { yPercent: -100 })
  .to('#preloader', { display: 'none' });
```

**Complex Preloader** (Solara):
```tsx
export const Preloader = () => {
  const { setStartHeroAnimation } = useAnimationContext();
  usePreloaderAnimation({ setStartHeroAnimation });

  return (
    <section id="preloader" className="fixed inset-0 z-999 hidden">
      {/* Complex preloader content */}
    </section>
  );
};

// Separate hook manages animation and triggers hero
```

### Timeline Configuration

**Standard Defaults:**
```tsx
const tl = gsap.timeline({
  defaults: {
    duration: 1.5,           // 1.0-2.0 typical
    ease: 'pow1.inOut',      // or 'power2.out', 'expo.out'
  },
  onComplete: () => {
    // Cleanup logic
  },
});
```

**Position Parameter Usage:**
- `'<'` - Start at the start of previous animation
- `'<0.2'` - Start 0.2s after previous animation starts
- `'<1'` - Start 1s after previous animation starts
- `'>` - Start at the end of previous animation
- `'+=0.5'` - Start 0.5s after previous animation ends

---

## Code Conventions

### Layout File

```tsx
import localFont from 'next/font/local';
import './page.css'; // or './{project-name}.css'

// Single font
const fontName = localFont({
  src: './fonts/Font-Regular.otf',
  variable: '--font-name',
  display: 'swap',
});

// Multiple weights
const fontName = localFont({
  src: [
    { path: './fonts/Font-Light.otf', weight: '300', style: 'normal' },
    { path: './fonts/Font-Regular.otf', weight: '400', style: 'normal' },
    { path: './fonts/Font-Bold.otf', weight: '700', style: 'normal' },
  ],
  variable: '--font-name',
});

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${fontName.variable} ${fontName.className}`}>
      {children}
    </div>
  );
}
```

### Page File

**Simple Structure** (Solara):
```tsx
import { constructMetadata } from '@/lib/siteConfig';
import { Hero } from './components/Hero';
import { Preloader } from './components/Preloader';
import { AnimationProvider } from './context/AnimationContext';

export const metadata = constructMetadata({
  title: 'Project Name',
  description: 'Project description for SEO',
});

export default function Page() {
  return (
    <AnimationProvider>
      <Preloader />
      <Hero />
    </AnimationProvider>
  );
}
```

**Section-Based Structure** (Kiani):
```tsx
import { constructMetadata } from '@/lib/siteConfig';
import Hero from './components/sections/Hero';
import Philosophy from './components/sections/Philosophy';
import Footer from './components/sections/Footer';
import Preloader from './components/Preloader';

export const metadata = constructMetadata({
  title: 'Project Name',
  description: 'Project description for SEO',
});

export default function ProjectPage() {
  return (
    <main className="relative flex flex-col gap-30 bg-background">
      <Preloader />
      <Hero />
      <Philosophy />
      {/* More sections */}
      <Footer />
    </main>
  );
}
```

### Component Structure

**Section Component:**
```tsx
'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Image from 'next/image';

export default function SectionName() {
  useGSAP(() => {
    // Animation logic
  });

  return (
    <section
      id="section-name"
      className="relative min-h-svh w-full px-10 py-12.5"
    >
      {/* Content */}
    </section>
  );
}
```

**UI Component:**
```tsx
import { cn } from '@/lib/utils';

interface ComponentProps {
  className?: string;
  children?: React.ReactNode;
}

export default function ComponentName({
  className,
  children,
}: ComponentProps) {
  return (
    <div className={cn('base-classes', className)}>
      {children}
    </div>
  );
}
```

### Image Handling

```tsx
import Image from 'next/image';
import HeroImage from '../images/hero-img.png';

<Image
  src={HeroImage}
  alt="Descriptive alt text for accessibility"
  placeholder="blur"        // For static imports
  loading="eager"          // For above-fold images
  priority                 // For LCP images
  className="w-full h-full object-cover"
  style={{ objectPosition: '20%' }}  // Fine-tune positioning
/>
```

### Client Directives

Always add `'use client'` at the top of files that use:
- Hooks (`useGSAP`, `useState`, `useEffect`)
- Event handlers
- Browser APIs
- Animation logic

```tsx
'use client';

import { useGSAP } from '@gsap/react';
// ... rest of imports
```

---

## Component Architecture

### Context Pattern (for Complex Animation State)

```tsx
// context/AnimationContext.tsx
'use client';

import React, { createContext, useContext, useState } from 'react';

interface AnimationContextType {
  startHeroAnimation: boolean;
  setStartHeroAnimation: React.Dispatch<React.SetStateAction<boolean>>;
}

const AnimationContext = createContext<AnimationContextType | undefined>(
  undefined
);

export const AnimationProvider = ({ children }: { children: React.ReactNode }) => {
  const [startHeroAnimation, setStartHeroAnimation] = useState(false);

  return (
    <AnimationContext.Provider
      value={{ startHeroAnimation, setStartHeroAnimation }}
    >
      {children}
    </AnimationContext.Provider>
  );
};

export const useAnimationContext = () => {
  const context = useContext(AnimationContext);
  if (!context) {
    throw new Error('useAnimationContext must be used within AnimationProvider');
  }
  return context;
};
```

### Custom Hooks Pattern

```tsx
// hooks/useHeroAnimation.ts
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const timelineDefaults = { duration: 1, ease: 'power2.out' };

export const useHeroAnimation = ({ startAnimation }) => {
  useGSAP(() => {
    if (!startAnimation) return;

    const tl = gsap.timeline({
      defaults: timelineDefaults,
      onStart: () => {
        // Show/hide elements
      },
    });

    // Animation logic
    tl.from('#element', { opacity: 0 })
      .to('#other', { y: 0 });

  }, { dependencies: [startAnimation] });
};
```

### Layout Components

```tsx
// components/layouts/FullScreenImageLayout.tsx
import { cn } from '@/lib/utils';
import Image, { StaticImageData } from 'next/image';
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
  imageUrl?: StaticImageData;
  imageAlt?: string;
  sectionId?: string;
  className?: string;
  contentClassName?: string;
  objectPosition?: string;
}

export default function FullScreenImageLayout({
  children,
  imageUrl,
  imageAlt = '',
  sectionId,
  className,
  objectPosition = 'center',
  contentClassName,
}: LayoutProps) {
  return (
    <section
      id={sectionId}
      className={cn('relative w-full h-[95svh] px-10 py-10', className)}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="relative w-full h-full">
          {imageUrl && (
            <Image
              src={imageUrl}
              alt={imageAlt}
              fill
              className="object-cover"
              style={{ objectPosition }}
            />
          )}
        </div>
      </div>

      {/* Content */}
      <div className={cn('relative z-20', contentClassName)}>
        {children}
      </div>
    </section>
  );
}
```

---

## Step-by-Step Creation Guide

### 1. Create Project Folder

```bash
mkdir app/project-name
cd app/project-name
```

### 2. Determine Architecture

**Choose based on complexity:**

- **Simple (1-3 sections):** Solara pattern
  - Use hooks for animations
  - Use context if needed
  - Fewer folders

- **Complex (4+ sections):** Kiani pattern
  - Use `/sections/` folder
  - Inline animations OK
  - More organized structure

### 3. Setup Core Files

**Create `layout.tsx`:**
```tsx
import localFont from 'next/font/local';
import './page.css';

const customFont = localFont({
  src: './fonts/Font-Regular.otf',
  variable: '--font-custom',
  display: 'swap',
});

export default function ProjectLayout({ children }) {
  return <div className={customFont.variable}>{children}</div>;
}
```

**Create `page.css`:**
```css
@import "tailwindcss";

:root {
  --color-background: #f1efec;
  --color-foreground: #161819;
}

@theme inline {
  --color-background: var(--color-background);
  --color-foreground: var(--color-foreground);
  --font-sans: var(--font-custom);
}

body {
  line-height: 1.4;
  letter-spacing: -0.025em;
}

@layer base {
  h1 {
    font-size: 8rem;
    line-height: 0.8;
    letter-spacing: -0.075em;
  }
}
```

**Create `page.tsx`:**
```tsx
import { constructMetadata } from '@/lib/siteConfig';

export const metadata = constructMetadata({
  title: 'Project Name',
  description: 'Description',
});

export default function Page() {
  return (
    <main>
      {/* Content */}
    </main>
  );
}
```

### 4. Add Fonts & Images

Place custom fonts in:
- `/fonts/` OR `/components/fonts/`

Place images in:
- `/images/` OR `/components/images/`

### 5. Create Components

**For Kiani pattern:**
```
components/
├── sections/
│   ├── Hero.tsx
│   ├── Section1.tsx
│   └── Footer.tsx
├── ui/
│   └── Button.tsx
├── Preloader.tsx
└── Header.tsx
```

**For Solara pattern:**
```
components/
├── Hero.tsx
├── Preloader.tsx
└── ui/
    └── icons/
        └── Icon.tsx
hooks/
└── useHeroAnimation.ts
context/
└── AnimationContext.tsx
```

### 6. Implement Preloader

**Simple version:**
```tsx
'use client';

export default function Preloader() {
  return (
    <div id="preloader" className="fixed inset-0 z-30">
      <div id="background" className="w-full h-full bg-black" />
    </div>
  );
}
```

Animate it away in your Hero component.

### 7. Build Hero Section

```tsx
'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(SplitText);

export default function Hero() {
  useGSAP(() => {
    const tl = gsap.timeline({
      defaults: { duration: 1.5, ease: 'power2.out' },
    });

    // Your animations
  });

  return (
    <section id="hero" className="min-h-svh">
      {/* Hero content */}
    </section>
  );
}
```

### 8. Add Sections

Create additional section components following the same pattern:
- Use semantic `<section>` tags
- Add unique `id` attributes for animations
- Include responsive classes
- Use custom typography classes

### 9. Wire Up Animation Context (if using Solara pattern)

1. Create AnimationContext
2. Wrap page in Provider
3. Create custom hooks
4. Connect components to context

### 10. Test & Refine

- Test animations on different screen sizes
- Verify preloader timing
- Check accessibility (alt text, semantic HTML)
- Optimize images
- Test font loading

---

## Best Practices

### Performance

1. **Use `will-change` sparingly:**
   ```css
   .animated-element {
     will-change: transform, opacity;
   }
   ```

2. **Prefer transforms over layout properties:**
   ```tsx
   // Good
   gsap.to('#el', { x: 100, y: 50, scale: 1.2 });

   // Avoid
   gsap.to('#el', { left: 100, top: 50, width: 200 });
   ```

3. **Use `force3D` for better performance:**
   ```tsx
   gsap.to('#el', { x: 100, force3D: true });
   ```

### Accessibility

1. **Always provide alt text:**
   ```tsx
   <Image src={img} alt="Descriptive text" />
   ```

2. **Use semantic HTML:**
   ```tsx
   <section>, <header>, <main>, <footer>, <nav>
   ```

3. **Include ARIA labels where needed:**
   ```tsx
   <div aria-hidden="true" />
   <button aria-label="Close menu" />
   ```

### Responsive Design

1. **Use Tailwind breakpoints:**
   ```tsx
   className="text-base sm:text-lg lg:text-xl 2xl:text-2xl"
   ```

2. **Test animations on mobile:**
   ```tsx
   const isMobile = window.matchMedia('(max-width: 768px)').matches;
   if (isMobile) {
     // Adjust animation
   }
   ```

3. **Use viewport units:**
   ```tsx
   className="min-h-svh" // Safe viewport height
   ```

### Code Organization

1. **Group related imports:**
   ```tsx
   // External libraries
   import gsap from 'gsap';
   import { useGSAP } from '@gsap/react';

   // Internal utilities
   import { cn } from '@/lib/utils';

   // Components
   import Hero from './components/Hero';

   // Assets
   import HeroImage from './images/hero.png';
   ```

2. **Use consistent naming:**
   - Components: `PascalCase`
   - Files: `PascalCase.tsx`
   - CSS files: `kebab-case.css`
   - IDs: `kebab-case`
   - Classes: Tailwind utilities or custom classes

3. **Comment complex animations:**
   ```tsx
   // Reveal title characters from bottom with stagger
   tl.to(splitTitle.chars, {
     yPercent: 0,
     stagger: 0.025,
   });
   ```

---

## Common Pitfalls

### Animation Issues

❌ **Don't forget to register plugins:**
```tsx
import { SplitText } from 'gsap/SplitText';
gsap.registerPlugin(SplitText); // Required!
```

❌ **Don't animate before elements exist:**
```tsx
useGSAP(() => {
  const element = document.getElementById('el');
  if (!element) return; // Guard clause

  gsap.to('#el', { x: 100 });
});
```

❌ **Don't forget cleanup:**
```tsx
useGSAP(() => {
  const tl = gsap.timeline();
  // animations...

  return () => {
    tl.kill(); // Cleanup
  };
});
```

### Styling Issues

❌ **Don't forget responsive font sizes:**
```css
h1 {
  font-size: 8rem; /* Desktop */
}

@media (max-width: 768px) {
  h1 {
    font-size: 5.5rem; /* Mobile */
  }
}
```

❌ **Don't hardcode z-index values randomly:**
```tsx
// Use a system: preloader (z-50), overlays (z-40), content (z-10-30)
className="z-30" // Preloader
className="z-20" // Content layer
className="z-10" // Background layer
```

### Structure Issues

❌ **Don't mix patterns:**
```tsx
// Bad: Using both context AND inline animations inconsistently
// Pick one pattern and stick with it
```

❌ **Don't skip TypeScript types:**
```tsx
// Good
interface HeroProps {
  title: string;
  subtitle?: string;
}

// Bad
function Hero(props) { }
```

---

## Quick Reference

### Essential Imports

```tsx
// Every animated component needs:
'use client';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(SplitText);
```

### Common Class Patterns

```tsx
// Section wrapper
className="relative min-h-svh w-full px-5 sm:px-10 py-10 sm:py-12.5"

// Full-screen section
className="relative h-svh w-full overflow-hidden"

// Centered content
className="flex items-center justify-center"

// Grid layouts
className="grid grid-cols-12 gap-x-10"

// Overflow hidden for text reveals
className="overflow-hidden"
```

### Animation Timing Guide

- **Character stagger:** `0.016 - 0.025`
- **Line stagger:** `0.1 - 0.2`
- **Element stagger:** `0.2 - 0.3`
- **Duration (fast):** `0.6 - 0.8`
- **Duration (normal):** `1.0 - 1.5`
- **Duration (slow):** `1.8 - 2.5`

### Easing Reference

- **Smooth:** `power2.out`, `power2.inOut`
- **Snappy:** `expo.out`, `expo.inOut`
- **Gentle:** `power1.out`, `sine.out`
- **Bouncy:** `elastic.out`, `back.out`

---

## Examples

### Creating a New Project: "Lumina"

```bash
# 1. Create folder
mkdir app/lumina

# 2. Create core files
touch app/lumina/layout.tsx
touch app/lumina/page.tsx
touch app/lumina/page.css

# 3. Create folder structure
mkdir -p app/lumina/components/{sections,ui/icons,fonts,images}
mkdir -p app/lumina/hooks

# 4. Implement layout.tsx
# (See layout example above)

# 5. Implement page.css
# (See CSS example above)

# 6. Build components
# - components/Preloader.tsx
# - components/sections/Hero.tsx
# - components/sections/About.tsx

# 7. Wire up page.tsx
# (Import and compose sections)
```

---

## Resources

- [GSAP Documentation](https://greensock.com/docs/)
- [SplitText Plugin](https://greensock.com/docs/v3/Plugins/SplitText)
- [useGSAP Hook](https://greensock.com/docs/v3/React)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Next.js Image](https://nextjs.org/docs/app/api-reference/components/image)

---

## Changelog

- **2026-04-03:** Initial documentation based on kiani and solara projects
