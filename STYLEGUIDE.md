# Spark Studios Portfolio - Styleguide

This document serves as the single source of truth for the digital brand identity, design tokens, and components used across the Spark Studios architecture.

---

## 🎨 1. Color Palette

The codebase uses a semantic, utility-first color token system customized in `tailwind.config.js`.

### Primary Colors
Used for calls to actions, primary borders, and active states.
- **Primary:** `#4A6CF7` (Main Brand Blue)
- **Primary Light:** `#6583FF` (Hover / Light states)
- **Primary Dark:** `#3B5AE0` (Active / Deep states)
- **Accent Yellow:** `#FBB040` (Highlights)

### Ink (Typography)
Used for text hierarchy, establishing clear contrast on white/surface backgrounds.
- **Ink (Heading/Display):** `#0D0D0D` (Pure dark, maximum contrast)
- **Ink-2 (Subheading):** `#3A3A42` (Softened dark)
- **Ink-3 (Body Text):** `#6E6E78` (Main reading text, extremely legible)
- **Ink-4 (Caption/Meta):** `#A0A0AB` (Muted, for timestamps, categories, or subtle labels)

### Surfaces (Backgrounds)
Used to establish depth, layering, and separation of sections.
- **Surface (Primary Canvas):** `#FFFFFF` (Pure white)
- **Surface-2 (App/Image Backgrounds):** `#F7F7F8` (Off-white, 2nd layer elevation)
- **Surface-3 (Deep Canvas):** `#EFEFEF` (3rd layer)
- **Surface-4 (Muted Canvas):** `#E4E4E7` (4th layer)

### Borders / Dividers
Used for structural grid lines and UI separation.
- **Border:** `#E4E4E7` (Subtle dividers)
- **Border-2:** `#D1D1D6` (Stronger outlines)

---

## 🔤 2. Typography

We load UI fonts via `next/font/google` or `@import` rules, implementing a modern brutalist-meets-editorial typography mix.

### Font Families
- **Display & Headings:** `Inter` (sans-serif)
- **Body & Paragraphs:** `Inter` (sans-serif)
- **Accent (Editorial):** `Playfair Display` (serif) — *Used exclusively for elegant, italicized injected-words within large display tags.*

### Weights
- `400` (Regular): Main body paragraphs.
- `600` (Semi-Bold): Small UI labels, button text, and strong highlights.
- `700` (Bold): Section subtitles and important metadata.
- `800` (Extra Bold): Sub-section titles.
- `900` (Black): Massive Hero headers (`font-display font-black tracking-tighter`).

---

## 🔳 3. Components & UI Elements

### Buttons
All buttons in Spark Studios embrace a sharp, 0-border-radius brutalist aesthetic with smooth cubic-bezier transitions.

**Primary Button (`.btn-primary`)**
- Background: `#4A6CF7`
- Text color: `#FFFFFF`
- Padding: `16px 36px` 
- Font: `14px`, `Semi-Bold (600)`, `uppercase` tracking.
- Interaction: Smooth upward `translateY(-2px)` float with a darker blue `#3B5AE0` background on hover.

**Outline Button (`.btn-outline`)**
- Background: Transparent
- Text color: `#0D0D0D`
- Border: `1px solid #E4E4E7`
- Interaction: Smooth upward float, fills to solid black `#0D0D0D` with white text on hover.

---

## 💫 4. Animations & Micro-Interactions

Custom CSS Keyframes defined in Tailwind configuration for entry and interactive states.

- **Slide Up (`animate-slide-up`):** Smooth entrance for text and cards from `translateY(40px)` to `0`, combined with an opacity fade.
- **Fade In (`animate-fade-in`):** Standard opacity fade `0` to `1` over `1s`.
- **Spin Slow (`animate-spin-slow`):** 8-second linear infinite spin used for SVG stars/badges.
- **Global easing constraint:** Interfaces use a custom `cubic-bezier(0.16, 1, 0.3, 1)` easing for smooth, Apple-esque snappiness.

---

## 📏 5. Layout & Spacing

- **Containers:** Centered container with a default `1rem` padding layout constraint.
- **Grids:** Heavily relies on CSS Grids (`grid-cols-12` for macro layouts, `grid-cols-2` with `gap-px bg-border` for hairline sharp portfolio grid arrays).
- **Responsive Breakpoints:** 
  - `xs`: 450px
  - `sm`: 575px
  - `md`: 768px
  - `lg`: 992px
  - `xl`: 1200px
  - `2xl`: 1400px
