# Common Workflows

This document outlines step-by-step workflows for common tasks AI agents might perform on this codebase.

## Table of Contents

1. [Creating a New Portfolio Project](#creating-a-new-portfolio-project)
2. [Adding a New Section](#adding-a-new-section)
3. [Modifying Animations](#modifying-animations)
4. [Updating Styles](#updating-styles)
5. [Adding New Fonts](#adding-new-fonts)
6. [Optimizing Images](#optimizing-images)
7. [Debugging Animation Issues](#debugging-animation-issues)
8. [Making Responsive Adjustments](#making-responsive-adjustments)

---

## Creating a New Portfolio Project

### Overview
Create a new isolated portfolio showcase route (like `/kiani` or `/solara`).

### Prerequisites
- Project name decided (e.g., "aurora")
- Design mockups or references
- Assets ready (fonts, images)
- Color scheme defined

### Steps

#### 1. Choose Architecture Pattern

**Decision Matrix:**
- **Simple project** (1-3 sections) → Use Solara pattern (hooks + context)
- **Complex project** (4+ sections) → Use Kiani pattern (sections folder)

#### 2. Create Folder Structure

```bash
# For Kiani pattern (multi-section)
mkdir -p app/aurora/{components/{sections,ui/icons,layouts},fonts,images}

# For Solara pattern (hook-based)
mkdir -p app/aurora/{components/ui/icons,hooks,context}
```

#### 3. Create Core Files

**Create `layout.tsx`:**

```tsx
import localFont from 'next/font/local';
import './page.css';

const customFont = localFont({
  src: [
    {
      path: './fonts/FontName-Light.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: './fonts/FontName-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/FontName-Bold.otf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-custom',
});

export default function AuroraLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className={customFont.variable}>{children}</div>;
}
```

**Create `page.css`:**

```css
@import "tailwindcss";

:root {
  --color-background: #yourBgColor;
  --color-foreground: #yourFgColor;
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

  /* Add more typography */
}
```

**Create `page.tsx`:**

For Kiani pattern:
```tsx
import { constructMetadata } from '@/lib/siteConfig';
import Preloader from './components/Preloader';
import Hero from './components/sections/Hero';
import Section1 from './components/sections/Section1';
import Footer from './components/sections/Footer';

export const metadata = constructMetadata({
  title: 'Project Name',
  description: 'Project description',
});

export default function AuroraPage() {
  return (
    <main className="relative flex flex-col gap-30 bg-background">
      <Preloader />
      <Hero />
      <Section1 />
      <Footer />
    </main>
  );
}
```

For Solara pattern:
```tsx
import { constructMetadata } from '@/lib/siteConfig';
import { Hero } from './components/Hero';
import { Preloader } from './components/Preloader';
import { AnimationProvider } from './context/AnimationContext';

export const metadata = constructMetadata({
  title: 'Project Name',
  description: 'Project description',
});

export default function AuroraPage() {
  return (
    <AnimationProvider>
      <Preloader />
      <Hero />
    </AnimationProvider>
  );
}
```

#### 4. Create Preloader Component

```tsx
'use client';

export default function Preloader() {
  return (
    <div id="preloader" className="fixed inset-0 z-30">
      <div className="absolute inset-0" id="background-wrapper">
        <div className="relative w-full h-full bg-black" id="background" />
      </div>
    </div>
  );
}
```

#### 5. Create Hero Component

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
      onComplete: () => {
        gsap.to('#preloader', { display: 'none' });
      },
    });

    // Animation logic
    tl.to('#preloader #background', { yPercent: -100 });
  });

  return (
    <section id="hero" className="relative min-h-svh w-full px-5 py-10">
      {/* Hero content */}
    </section>
  );
}
```

#### 6. Add Assets

- Copy fonts to `/fonts/` or `/components/fonts/`
- Add images to `/images/` or `/components/images/`
- Update imports in components

#### 7. Test

```bash
pnpm dev
# Navigate to /aurora
# Test animations
# Test responsive design
# Check accessibility
```

#### 8. Refine

- Adjust animation timing
- Fine-tune typography
- Optimize images
- Add remaining sections

---

## Adding a New Section

### Overview
Add a new section to an existing portfolio project.

### Steps

#### 1. Create Section Component

**For Kiani pattern:**
```bash
# Create in components/sections/
touch app/project/components/sections/NewSection.tsx
```

```tsx
'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export default function NewSection() {
  useGSAP(() => {
    // Add scroll-triggered animation if needed
  });

  return (
    <section
      id="new-section"
      className="relative min-h-svh w-full px-10 py-12.5"
    >
      <h2>Section Title</h2>
      {/* Content */}
    </section>
  );
}
```

#### 2. Import in Page

```tsx
import NewSection from './components/sections/NewSection';

export default function Page() {
  return (
    <main>
      {/* Other sections */}
      <NewSection />
      {/* Footer */}
    </main>
  );
}
```

#### 3. Add Section-Specific Styles

```css
/* In page.css */
#new-section {
  /* Section-specific styles */
}
```

#### 4. Test

- Verify layout
- Check animations
- Test responsiveness

---

## Modifying Animations

### Overview
Adjust existing animations or add new animation sequences.

### Common Modifications

#### Change Animation Duration

```tsx
// Before
tl.to('#element', { y: 0 });

// After
tl.to('#element', { y: 0, duration: 2 });
```

#### Change Easing

```tsx
// Before
tl.to('#element', { y: 0, ease: 'power2.out' });

// After
tl.to('#element', { y: 0, ease: 'expo.out' });
```

#### Adjust Stagger

```tsx
// Before
tl.to('.items', { y: 0, stagger: 0.1 });

// After
tl.to('.items', { y: 0, stagger: 0.2 });
```

#### Change Timeline Position

```tsx
// Before
tl.to('#a', { x: 100 })
  .to('#b', { x: 100 });

// After (simultaneous)
tl.to('#a', { x: 100 })
  .to('#b', { x: 100 }, '<');
```

### Workflow

1. **Locate animation code**
   - Find the component with the animation
   - Look for `useGSAP` hook

2. **Modify values**
   - Adjust duration, ease, stagger, position

3. **Test in browser**
   - Reload page
   - Observe animation
   - Adjust as needed

4. **Use GSAP DevTools (optional)**
   ```tsx
   import { GSDevTools } from 'gsap/GSDevTools';
   gsap.registerPlugin(GSDevTools);

   useGSAP(() => {
     const tl = gsap.timeline();
     // animations...

     GSDevTools.create({ animation: tl });
   });
   ```

---

## Updating Styles

### Overview
Modify typography, colors, or layout styles.

### Workflows

#### Update Colors

**1. Update CSS variables:**
```css
/* In page.css */
:root {
  --color-background: #newValue;
  --color-foreground: #newValue;
}
```

**2. Apply in Tailwind:**
```tsx
className="bg-background text-foreground"
```

#### Update Typography

**1. Modify base layer:**
```css
@layer base {
  h1 {
    font-size: 10rem; /* Changed from 8rem */
    line-height: 0.75; /* Changed from 0.8 */
  }
}
```

**2. Test responsiveness:**
```css
@media (max-width: 768px) {
  h1 {
    font-size: 6rem;
  }
}
```

#### Update Layout

**1. Change grid:**
```tsx
// Before
className="grid grid-cols-12"

// After
className="grid grid-cols-[1fr_30vw]"
```

**2. Adjust spacing:**
```tsx
// Before
className="gap-10"

// After
className="gap-5 sm:gap-10 lg:gap-20"
```

---

## Adding New Fonts

### Overview
Add custom fonts to a project route.

### Steps

#### 1. Add Font Files

```bash
# Copy .otf/.woff2 files to:
cp fonts/* app/project/fonts/
# OR
cp fonts/* app/project/components/fonts/
```

#### 2. Update layout.tsx

**Single font:**
```tsx
import localFont from 'next/font/local';

const customFont = localFont({
  src: './fonts/CustomFont-Regular.otf',
  variable: '--font-custom',
  display: 'swap',
});
```

**Multiple weights:**
```tsx
const customFont = localFont({
  src: [
    { path: './fonts/Custom-Light.otf', weight: '300' },
    { path: './fonts/Custom-Regular.otf', weight: '400' },
    { path: './fonts/Custom-Bold.otf', weight: '700' },
  ],
  variable: '--font-custom',
});
```

#### 3. Apply in Layout

```tsx
export default function Layout({ children }) {
  return (
    <div className={customFont.variable}>{children}</div>
  );
}
```

#### 4. Use in CSS

```css
@theme inline {
  --font-sans: var(--font-custom);
  /* OR */
  --font-display: var(--font-custom);
}

@layer base {
  h1 {
    font-family: var(--font-custom);
  }
}
```

---

## Optimizing Images

### Overview
Optimize and properly implement images.

### Steps

#### 1. Use Next.js Image Component

```tsx
import Image from 'next/image';
import HeroImage from '../images/hero.png';

<Image
  src={HeroImage}
  alt="Descriptive alt text"
  placeholder="blur"      // For static imports
  priority               // For above-fold images
  className="w-full h-full object-cover"
  style={{ objectPosition: '20%' }}
/>
```

#### 2. Optimize Image Files

**Before adding to project:**
- Resize to appropriate dimensions
- Compress with tools (ImageOptim, Squoosh)
- Use WebP format when possible
- Aim for < 500KB per image

#### 3. Lazy Load Below-the-Fold

```tsx
<Image
  src={image}
  alt="Description"
  loading="lazy"  // Default, explicit for clarity
/>
```

#### 4. Responsive Images

```tsx
<Image
  src={image}
  alt="Description"
  sizes="(max-width: 768px) 100vw, 50vw"
/>
```

---

## Debugging Animation Issues

### Overview
Troubleshoot common GSAP animation problems.

### Common Issues & Solutions

#### Animation Not Running

**Check 1: Is element in DOM?**
```tsx
useGSAP(() => {
  const element = document.getElementById('hero');
  console.log('Element:', element); // Should not be null

  if (!element) {
    console.error('Element not found!');
    return;
  }

  gsap.to('#hero', { opacity: 1 });
});
```

**Check 2: Is plugin registered?**
```tsx
import { SplitText } from 'gsap/SplitText';
import gsap from 'gsap';

gsap.registerPlugin(SplitText); // Don't forget!
```

**Check 3: Is component client-side?**
```tsx
'use client'; // Add at top of file
```

#### Animation Timing Off

**Use GSDevTools:**
```tsx
import { GSDevTools } from 'gsap/GSDevTools';

useGSAP(() => {
  const tl = gsap.timeline();
  // animations...

  GSDevTools.create({ animation: tl });
});
```

**Add labels:**
```tsx
tl.add('start')
  .to('#a', { x: 100 })
  .add('middle')
  .to('#b', { x: 100 })
  .add('end');
```

#### SplitText Not Working

**Check overflow:**
```css
#text-element {
  overflow: hidden; /* Required for mask */
}
```

**Check element exists:**
```tsx
const split = SplitText.create('#title', { type: 'chars' });
console.log('Split chars:', split.chars); // Should be array
```

#### Animation Jumpy/Flickering

**Set initial state:**
```tsx
gsap.set('#element', { opacity: 0, y: 100 });

tl.to('#element', { opacity: 1, y: 0 });
```

**Use force3D:**
```tsx
gsap.to('#element', { x: 100, force3D: true });
```

#### Cleanup Issues

**Add cleanup function:**
```tsx
useGSAP(() => {
  const tl = gsap.timeline();

  return () => {
    tl.kill(); // Cleanup on unmount
  };
});
```

---

## Making Responsive Adjustments

### Overview
Ensure designs work across all screen sizes.

### Workflow

#### 1. Test Breakpoints

```
Mobile: < 640px
Tablet: 640px - 1024px
Desktop: > 1024px
Large: > 1536px
```

#### 2. Adjust Typography

```css
@layer base {
  h1 {
    font-size: 5rem; /* Mobile default */
  }

  @media (min-width: 640px) {
    h1 {
      font-size: 7rem;
    }
  }

  @media (min-width: 1024px) {
    h1 {
      font-size: 10rem;
    }
  }

  @media (min-width: 1536px) {
    h1 {
      font-size: 15rem;
    }
  }
}
```

#### 3. Adjust Spacing

```tsx
className="px-5 sm:px-10 lg:px-20"
className="gap-5 sm:gap-10 lg:gap-20"
className="py-10 sm:py-12.5 lg:py-20"
```

#### 4. Adjust Layout

```tsx
// Stack on mobile, side-by-side on desktop
className="flex flex-col md:flex-row"

// Different grid columns
className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"

// Hide on mobile
className="hidden md:block"

// Show only on mobile
className="block md:hidden"
```

#### 5. Adjust Animations for Mobile

```tsx
useGSAP(() => {
  const isMobile = window.matchMedia('(max-width: 768px)').matches;

  const tl = gsap.timeline({
    defaults: {
      duration: isMobile ? 1 : 1.5, // Faster on mobile
    },
  });

  if (isMobile) {
    // Simplified mobile animation
    tl.to('#element', { opacity: 1 });
  } else {
    // Complex desktop animation
    tl.to('#element', { opacity: 1, y: 0, rotate: 0 });
  }
});
```

#### 6. Test on Real Devices

- Use Chrome DevTools device emulation
- Test on actual mobile devices if possible
- Check both portrait and landscape orientations

---

## Quick Reference Commands

```bash
# Start development server
pnpm dev

# Build for production
pnpm build

# Run production build locally
pnpm start

# Run linter
pnpm lint

# Add dependency
pnpm add package-name

# Remove dependency
pnpm remove package-name
```

---

**Last Updated:** 2026-04-03
