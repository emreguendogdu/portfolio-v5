# Code Patterns & Conventions

This document outlines the coding patterns, conventions, and best practices used throughout the project.

## Table of Contents

1. [File Organization](#file-organization)
2. [Naming Conventions](#naming-conventions)
3. [Component Patterns](#component-patterns)
4. [Styling Patterns](#styling-patterns)
5. [Animation Patterns](#animation-patterns)
6. [TypeScript Patterns](#typescript-patterns)
7. [Import/Export Patterns](#importexport-patterns)
8. [Error Handling](#error-handling)

---

## File Organization

### Component Files

```tsx
// 1. Client directive (if needed)
'use client';

// 2. External library imports
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/SplitText';
import Image from 'next/image';

// 3. Internal library imports
import { cn } from '@/lib/utils';
import { constructMetadata } from '@/lib/siteConfig';

// 4. Component imports
import Header from './Header';
import Section from './Section';

// 5. Asset imports
import HeroImage from '../images/hero.png';

// 6. Plugin registration (GSAP)
gsap.registerPlugin(SplitText);

// 7. Type definitions
interface ComponentProps {
  // ...
}

// 8. Constants
const ANIMATION_DURATION = 1.5;

// 9. Component definition
export default function Component() {
  // ...
}
```

### Directory Structure Per Pattern

**Kiani Pattern (Multi-Section):**
```
app/project/
├── layout.tsx
├── page.tsx
├── project.css
├── components/
│   ├── sections/
│   ├── ui/
│   └── layouts/
├── fonts/
└── images/
```

**Solara Pattern (Hook-Based):**
```
app/project/
├── layout.tsx
├── page.tsx
├── page.css
├── components/
├── hooks/
└── context/
```

---

## Naming Conventions

### Files

| Type | Convention | Example |
|------|------------|---------|
| Components | PascalCase.tsx | `Hero.tsx` |
| Hooks | camelCase.ts | `useHeroAnimation.ts` |
| Utils | camelCase.ts | `siteConfig.ts` |
| Contexts | PascalCase.tsx | `AnimationContext.tsx` |
| CSS files | kebab-case.css OR page.css | `kiani.css`, `page.css` |
| Images | kebab-case.ext | `hero-bg.png` |
| Fonts | PascalCase-Weight.ext | `Gotham-Bold.otf` |

### Variables & Functions

```typescript
// Components
const MyComponent = () => {};
export default function MyPage() {}

// Hooks
const useMyHook = () => {};
const { data } = useMyHook();

// State
const [isOpen, setIsOpen] = useState(false);
const [startAnimation, setStartAnimation] = useState(false);

// Refs
const elementRef = useRef<HTMLDivElement>(null);
const heroRef = useRef(null);

// Functions
const handleClick = () => {};
const handleSubmit = () => {};

// Constants
const ANIMATION_DURATION = 1.5;
const DEFAULT_EASE = 'power2.out';

// CSS IDs
id="hero-section"
id="preloader"
id="text-wrapper"

// CSS Classes
className="booking-element-item"
className="preloader-star"
```

### Animation-Related Naming

```typescript
// Timelines
const tl = gsap.timeline();
const mainTimeline = gsap.timeline();

// SplitText instances
const splitTitle = SplitText.create('#title', { type: 'chars' });
const splitH1 = SplitText.create('h1', { type: 'lines' });

// Animation functions
const animateHero = () => {};
const revealText = () => {};

// Animation configs
const timelineDefaults = { duration: 1, ease: 'power2.out' };
const lineAnimation = {
  start: { opacity: 0, y: 100 },
  end: { opacity: 1, y: 0 }
};
```

---

## Component Patterns

### Basic Component

```tsx
'use client';

import { cn } from '@/lib/utils';

interface ComponentProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Component({
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

### Section Component

```tsx
'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export default function Section() {
  useGSAP(() => {
    const tl = gsap.timeline();
    // Animation logic
  });

  return (
    <section
      id="section-name"
      className="relative min-h-svh w-full px-5 sm:px-10 py-10 sm:py-12.5"
    >
      {/* Content */}
    </section>
  );
}
```

### Layout Component

```tsx
import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
  className?: string;
}

export default function Layout({
  children,
  className,
}: LayoutProps) {
  return (
    <div className={cn('default-layout-classes', className)}>
      {children}
    </div>
  );
}
```

### Icon Component

```tsx
import { SVGProps } from 'react';

export default function Icon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="..." />
    </svg>
  );
}
```

---

## Styling Patterns

### CSS File Structure

```css
/* 1. Import Tailwind */
@import "tailwindcss";

/* 2. CSS Variables */
:root {
  --color-background: #f1efec;
  --color-foreground: #161819;
}

/* 3. Theme Extension */
@theme inline {
  --color-background: var(--color-background);
  --color-foreground: var(--color-foreground);
  --font-sans: var(--font-custom);
  --font-display: var(--font-display);
}

/* 4. Global Styles */
html {
  background-color: var(--color-background);
}

body {
  line-height: 1.4;
  letter-spacing: -0.025em;
}

/* 5. Base Layer (Typography) */
@layer base {
  h1, .h1 {
    font-size: 8rem;
    line-height: 0.8;
    letter-spacing: -0.075em;
  }

  h2, .h2 {
    font-size: 2rem;
    line-height: 1;
  }

  p, .p {
    font-size: 1rem;
    line-height: 1.4;
  }
}

/* 6. Components Layer */
@layer components {
  .component-class {
    /* Component-specific styles */
  }
}

/* 7. Project-Specific Styles */
#preloader {
  perspective: 2000px;
}

.star {
  will-change: transform, opacity;
}

/* 8. Responsive Overrides */
@media screen and (max-width: 768px) {
  body {
    font-size: 0.875rem;
  }

  h1, .h1 {
    font-size: 5.5rem;
  }
}
```

### Utility Class Usage

```tsx
// Basic utilities
className="flex items-center justify-center"

// Responsive
className="text-base sm:text-lg lg:text-xl 2xl:text-2xl"

// Spacing
className="px-5 sm:px-10 py-10 sm:py-12.5 gap-5 sm:gap-10"

// Grid
className="grid grid-cols-12 gap-x-10"
className="col-span-6 lg:col-span-4"

// Positioning
className="relative absolute inset-0 z-10"

// Colors
className="bg-background text-foreground"
className="bg-white/40 text-black/80"

// Typography
className="font-sans font-display font-bold"
className="text-sm uppercase tracking-wider"

// Combining with cn()
className={cn(
  'base-class',
  condition && 'conditional-class',
  className
)}
```

### Custom CSS Patterns

```css
/* Overflow hidden for text reveals */
.text-wrapper {
  overflow: hidden;
}

/* Will-change for animations */
.animated-element {
  will-change: transform, opacity;
}

/* Transform-style for 3D */
.three-dee-container {
  perspective: 2000px;
  transform-style: preserve-3d;
}

.three-dee-element {
  backface-visibility: hidden;
  transform-style: preserve-3d;
}
```

---

## Animation Patterns

### Basic Timeline

```tsx
useGSAP(() => {
  const tl = gsap.timeline({
    defaults: {
      duration: 1.5,
      ease: 'power2.out',
    },
    onComplete: () => {
      // Cleanup
    },
  });

  tl.from('#element', { opacity: 0 })
    .to('#other', { y: 0 }, '<');
});
```

### SplitText Character Reveal

```tsx
useGSAP(() => {
  const splitTitle = SplitText.create('#title', { type: 'chars' });

  gsap.set(splitTitle.chars, { yPercent: 110 });

  const tl = gsap.timeline();

  tl.to(splitTitle.chars, {
    yPercent: 0,
    duration: 0.8,
    stagger: 0.01625,
    ease: 'expo.out',
  });
});
```

### SplitText Line Reveal with Mask

```tsx
useGSAP(() => {
  const splitH3 = SplitText.create('h3', {
    type: 'lines',
    mask: 'lines', // Creates overflow:hidden wrapper
  });

  gsap.set(splitH3.lines, {
    y: 200,
    rotate: '8deg',
  });

  const tl = gsap.timeline();

  tl.to(splitH3.lines, {
    y: 0,
    rotate: 0,
    stagger: 0.1,
  });
});
```

### Clip Path Animation

```tsx
useGSAP(() => {
  gsap.set('.card', {
    clipPath: 'inset(100% 0% 0% 0%)',
    opacity: 0,
  });

  const tl = gsap.timeline();

  tl.to('.card', {
    clipPath: 'inset(0% 0% 0% 0%)',
    opacity: 1,
    stagger: 0.3,
  });
});
```

### Stagger Patterns

```tsx
// From start
stagger: 0.1

// From center
stagger: {
  amount: 0.5,
  from: 'center',
}

// From end
stagger: {
  amount: 0.5,
  from: 'end',
}

// Complex stagger
stagger: {
  each: 0.1,
  from: 'start',
  grid: 'auto',
  ease: 'power2.inOut',
}
```

### Position Parameter

```tsx
// Sequential (default)
tl.to('#a', { x: 100 })
  .to('#b', { x: 100 });

// Same time as previous
tl.to('#a', { x: 100 })
  .to('#b', { x: 100 }, '<');

// 0.2s after previous starts
tl.to('#a', { x: 100 })
  .to('#b', { x: 100 }, '<0.2');

// 0.5s before previous ends
tl.to('#a', { x: 100 })
  .to('#b', { x: 100 }, '>-0.5');

// 0.5s after previous ends
tl.to('#a', { x: 100 })
  .to('#b', { x: 100 }, '+=0.5');

// At specific time
tl.to('#a', { x: 100 })
  .to('#b', { x: 100 }, 2); // At 2 seconds
```

### Hook-Based Animation

```tsx
// hooks/useMyAnimation.ts
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export const useMyAnimation = ({ trigger }) => {
  useGSAP(() => {
    if (!trigger) return;

    const tl = gsap.timeline();
    // Animation logic
  }, { dependencies: [trigger] });
};

// Component
const { startAnimation } = useAnimationContext();
useMyAnimation({ trigger: startAnimation });
```

---

## TypeScript Patterns

### Component Props

```typescript
// Basic props
interface ComponentProps {
  title: string;
  subtitle?: string;
  className?: string;
  children?: React.ReactNode;
}

// With events
interface ButtonProps {
  onClick?: () => void;
  disabled?: boolean;
  children: React.ReactNode;
}

// With refs
interface InputProps {
  ref?: React.RefObject<HTMLInputElement>;
  value: string;
  onChange: (value: string) => void;
}

// Extending HTML attributes
interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: 'primary' | 'secondary';
}
```

### Context Types

```typescript
interface AnimationContextType {
  startHeroAnimation: boolean;
  setStartHeroAnimation: React.Dispatch<React.SetStateAction<boolean>>;
}

const AnimationContext = createContext<AnimationContextType | undefined>(
  undefined
);
```

### Hook Return Types

```typescript
// Inferred
export const useMyHook = () => {
  const [value, setValue] = useState(0);
  return { value, setValue };
};

// Explicit
export const useMyHook = (): {
  value: number;
  setValue: Dispatch<SetStateAction<number>>;
} => {
  const [value, setValue] = useState(0);
  return { value, setValue };
};
```

### Utility Types

```typescript
// From clsx
import { type ClassValue } from 'clsx';

// Image types
import { StaticImageData } from 'next/image';

// SVG props
import { SVGProps } from 'react';

// React types
import { ReactNode, Dispatch, SetStateAction } from 'react';
```

---

## Import/Export Patterns

### Component Exports

```tsx
// Default export (preferred for pages/layouts)
export default function Page() {
  return <main>...</main>;
}

// Named export (preferred for reusable components)
export const Hero = () => {
  return <section>...</section>;
};
```

### Utility Exports

```typescript
// Named exports
export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export function constructMetadata() {
  // ...
}
```

### Type Exports

```typescript
// Export interface
export interface ComponentProps {
  // ...
}

// Export type
export type Variant = 'primary' | 'secondary';

// Re-export from library
export type { ClassValue } from 'clsx';
```

### Import Patterns

```tsx
// Default imports
import gsap from 'gsap';
import Image from 'next/image';
import Component from './Component';

// Named imports
import { useGSAP } from '@gsap/react';
import { cn } from '@/lib/utils';
import { Hero, Footer } from './components';

// Type imports
import type { NextConfig } from 'next';
import type { ComponentProps } from './types';

// Asset imports
import HeroImage from './images/hero.png';
```

---

## Error Handling

### Guard Clauses

```tsx
useGSAP(() => {
  const element = document.getElementById('hero');
  if (!element) return; // Guard clause

  gsap.to('#hero', { opacity: 1 });
});
```

### Context Error Handling

```tsx
export const useAnimationContext = () => {
  const context = useContext(AnimationContext);

  if (!context) {
    throw new Error(
      'useAnimationContext must be used within AnimationProvider'
    );
  }

  return context;
};
```

### Conditional Rendering

```tsx
// Prevent render until ready
if (!startAnimation) return null;

// Conditional classes
<div className={cn('base', isActive && 'active')}>
```

### Try-Catch (Rarely Needed)

```tsx
try {
  const data = JSON.parse(input);
} catch (error) {
  console.error('Parse error:', error);
  return null;
}
```

---

## Best Practices

### Do's ✅

```tsx
// Use semantic HTML
<section>, <header>, <main>, <nav>, <footer>

// Use proper TypeScript types
const Component: React.FC<Props> = ({ prop }) => {};

// Use cn() for conditional classes
className={cn('base', condition && 'variant', className)}

// Use CSS variables
--color-primary: #value;

// Clean up animations
useGSAP(() => {
  const tl = gsap.timeline();
  return () => tl.kill();
});

// Add IDs for animations
id="hero-section"

// Use transform over layout properties
gsap.to('#el', { x: 100, y: 50 }); // Good
```

### Don'ts ❌

```tsx
// Don't use div soup
<div><div><div>...</div></div></div>

// Don't use any type
const value: any = getSomething();

// Don't animate layout properties
gsap.to('#el', { left: 100, top: 50 }); // Bad

// Don't forget 'use client'
// Missing 'use client' with hooks will error

// Don't hardcode values
const width = 1920; // Use CSS variables

// Don't skip cleanup
useEffect(() => {
  // Missing cleanup function
});

// Don't mix patterns
// Using both inline and hook-based animations inconsistently
```

---

**Last Updated:** 2026-04-03
