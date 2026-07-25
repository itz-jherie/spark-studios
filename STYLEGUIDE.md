# Flynth Technologies — Official Brand Style Guide

> **Version:** 1.0  
> **Rebrand Context:** Formerly Spark Studios Creatives (`sparkstudios.qzz.io`)  
> **Source of Truth:** Flynth Technologies Design System & Codebase Tokens  

---

## 1. Brand Essence & Story

### 1.1 Brand Identity & Pronunciation
- **Brand Name:** Flynth
- **Formal / Legal Name:** Flynth Technologies
- **Phonetic Pronunciation:** `/ˈflɪnθ/` (rhymes with *"flint"*, ending in a soft *"th"* sound as in *"think"*). **NOT** *"fleenth"* or *"fly-nth"*.
- **Usage Rules:**
  - Use **"Flynth"** in casual, conversational, social media, merchandise, and everyday brand communications.
  - Use **"Flynth Technologies"** in legal agreements, proposals, invoices, contracts, and footer copyright statements.

### 1.2 The Meaning Behind the Name
- **Flint (Origin):** Derived from the sedimentary rock used historically to strike sparks and initiate fire. Symbolizes **strength**, **resilience**, and the **spark of creation**.
- **Security & Systems:** Flint's historical association with starting fire and providing warmth ties directly into constructing **secure, resilient, and dependable digital systems** for enterprise and fintech clients.
- **The Falcon (Logo Icon):** Symbolizes **speed**, agility, razor-sharp precision, and rapid execution.
- **Core Brand Promise:** **Strong. Secure. Fast.**

---

## 2. Tagline Architecture & Usage Matrix

Flynth Technologies maintains three official taglines for specific touchpoints:

1. **Brand Story Tagline (Primary):** `"Built strong. Delivered fast."`
2. **Process Tagline (Descriptive):** `"We design, develop, and deliver powerful digital experiences."`
3. **Process Tagline (Shorthand):** `"Design | Develop | Deliver"`

### Tagline Placement Matrix

| Tagline | Placement / Context | Purpose |
| :--- | :--- | :--- |
| **"Built strong. Delivered fast."** | Full Logo Lockup, Business Cards, Pitch Deck Cover, Website Footer, Formal Proposals | Primary brand positioning & promise |
| **"We design, develop, and deliver..."** | Website Hero Subhead, About Us section, Company Profiles | Informative narrative for clients |
| **"Design \| Develop \| Deliver"** | Social Media Banners, Merch, Event Badges, Inline UI Dividers | Snappy process shorthand |

---

## 3. Logo System & Usage Guidelines

The Flynth logo system consists of three flexible assets designed for specific UI and marketing applications.

### 3.1 Logo Variants & Source Files

The official standalone vector SVG logo assets are organized in the [`assets/`](file:///Users/jherie/Documents/Flynth/assets) directory:

| Asset Category | Variant Description | File Name & Path |
| :--- | :--- | :--- |
| **Full Lockup** | Primary Blue Gradient (Light Surface) | [`assets/flynth-full-gradient-light.svg`](file:///Users/jherie/Documents/Flynth/assets/flynth-full-gradient-light.svg) |
| **Full Lockup** | Inverse Gradient (Dark Navy Surface) | [`assets/flynth-full-gradient-dark.svg`](file:///Users/jherie/Documents/Flynth/assets/flynth-full-gradient-dark.svg) |
| **Full Lockup** | Monochrome Solid Black (`#0D0D0D`) | [`assets/flynth-full-monochrome-black.svg`](file:///Users/jherie/Documents/Flynth/assets/flynth-full-monochrome-black.svg) |
| **Full Lockup** | Monochrome Solid White (`#FFFFFF`) | [`assets/flynth-full-monochrome-white.svg`](file:///Users/jherie/Documents/Flynth/assets/flynth-full-monochrome-white.svg) |
| **Everyday Lockup** | Icon + FLYNTH Gradient (Light Surface) | [`assets/flynth-everyday-gradient-light.svg`](file:///Users/jherie/Documents/Flynth/assets/flynth-everyday-gradient-light.svg) |
| **Everyday Lockup** | Icon + FLYNTH Dark (Dark Surface) | [`assets/flynth-everyday-gradient-dark.svg`](file:///Users/jherie/Documents/Flynth/assets/flynth-everyday-gradient-dark.svg) |
| **Everyday Lockup** | Icon + FLYNTH Monochrome Black | [`assets/flynth-everyday-monochrome-black.svg`](file:///Users/jherie/Documents/Flynth/assets/flynth-everyday-monochrome-black.svg) |
| **Everyday Lockup** | Icon + FLYNTH Monochrome White | [`assets/flynth-everyday-monochrome-white.svg`](file:///Users/jherie/Documents/Flynth/assets/flynth-everyday-monochrome-white.svg) |
| **Icon Only** | Falcon Bird Mark Gradient | [`assets/flynth-icon-gradient-light.svg`](file:///Users/jherie/Documents/Flynth/assets/flynth-icon-gradient-light.svg) |
| **Icon Only** | Falcon Bird Mark Dark Mode | [`assets/flynth-icon-gradient-dark.svg`](file:///Users/jherie/Documents/Flynth/assets/flynth-icon-gradient-dark.svg) |
| **Icon Only** | Falcon Bird Mark Monochrome Black | [`assets/flynth-icon-monochrome-black.svg`](file:///Users/jherie/Documents/Flynth/assets/flynth-icon-monochrome-black.svg) |
| **Icon Only** | Falcon Bird Mark Monochrome White | [`assets/flynth-icon-monochrome-white.svg`](file:///Users/jherie/Documents/Flynth/assets/flynth-icon-monochrome-white.svg) |

---

### 3.2 Clear Space & Minimum Sizes

- **Clear Space Rule:** Maintain a minimum clear space equal to `1.5x` the height of the letter **"F"** in the FLYNTH wordmark around all sides of the logo lockup. No graphic elements, text, or border lines should breach this zone.
- **Minimum Size Standards:**
  - **Icon Only:** `16px x 16px` (Favicon) | `32px x 32px` (UI Element)
  - **Icon + Wordmark:** Minimum width `120px`
  - **Full Lockup:** Minimum width `160px`

```
  +-------------------------------------------------------------+
  |                                                             |
  |      [ Clear Space = 1.5x 'F' Height ]                      |
  |                                                             |
  |         (FALCON MARK)  F L Y N T H                          |
  |                        T E C H N O L O G I E S              |
  |                        Built strong. Delivered fast.        |
  |                                                             |
  +-------------------------------------------------------------+
```

---

### 3.3 Logo Do's & Don'ts

- **DO** use the exact geometric falcon mark in official blue gradient or solid brand neutrals.
- **DO** keep "FLYNTH" visually dominant over "TECHNOLOGIES".
- **DON'T** fuse the name into "FLYNTHTECH" or "FLYNTHTECHNOLOGIES" as a single combined string.
- **DON'T** replace the logo font (Poppins) with website typography (Inter) in official logo lockups.
- **DON'T** use a literal lightning bolt or detailed photo-realistic falcon illustration.
- **DON'T** stretch, distort, rotate, or add drop shadows/glows to the mark outside designated brand tokens.

---

## 4. Color Palette & Tokens

Pulled directly from the production Tailwind configuration and CSS theme tokens.

### 4.1 Primary Brand Colors

| Token Name | Hex | RGB | HSL | Usage Context |
| :--- | :--- | :--- | :--- | :--- |
| `primary` | `#4A6CF7` | `rgb(74, 108, 247)` | `hsl(228, 92%, 63%)` | Main Brand Blue, Primary CTAs, Active States |
| `primary-light` | `#6583FF` | `rgb(101, 131, 255)` | `hsl(228, 100%, 70%)` | Hover states, Gradient highlights |
| `primary-dark` | `#3B5AE0` | `rgb(59, 90, 224)` | `hsl(228, 73%, 55%)` | Pressed / Deep active states, Gradient shadows |
| `yellow` (Accent) | `#FBB040` | `rgb(251, 176, 64)` | `hsl(36, 96%, 62%)` | Accent highlights, Badges, Spark callouts |

### 4.2 Falcon Mark Gradient
- **CSS Definition:** `linear-gradient(135deg, #6583FF 0%, #4A6CF7 50%, #3B5AE0 100%)`
- **Application:** Falcon icon shard surfaces, primary hero buttons glow backdrop.

---

### 4.3 Typography & Surface Neutrals

| Token Name | Hex | RGB | HSL | Role / Description |
| :--- | :--- | :--- | :--- | :--- |
| `ink` | `#0D0D0D` | `rgb(13, 13, 13)` | `hsl(0, 0%, 5%)` | Primary headings, display text (maximum contrast) |
| `ink-2` | `#3A3A42` | `rgb(58, 58, 66)` | `hsl(240, 6%, 24%)` | Secondary subtitles, dark neutral elements |
| `ink-3` (`body-color`)| `#6E6E78` | `rgb(110, 110, 120)` | `hsl(240, 4%, 45%)` | Main reading text, high legibility body paragraphs |
| `ink-4` | `#A0A0AB` | `rgb(160, 160, 171)` | `hsl(240, 7%, 65%)` | Captions, metadata, muted timestamps, labels |
| `dark` | `#1D2144` | `rgb(29, 33, 68)` | `hsl(234, 40%, 19%)` | Dark mode background canvas, deep navy surfaces |
| `surface` | `#FFFFFF` | `rgb(255, 255, 255)` | `hsl(0, 0%, 100%)` | Pure white background canvas, card surfaces |
| `surface-2` | `#F7F7F8` | `rgb(247, 247, 248)` | `hsl(240, 14%, 97%)` | Elevation layer 2, secondary section backgrounds |
| `surface-3` | `#EFEFEF` | `rgb(239, 239, 239)` | `hsl(0, 0%, 94%)` | Elevation layer 3, subtle container backgrounds |
| `border` / `surface-4`| `#E4E4E7` | `rgb(228, 228, 231)` | `hsl(240, 6%, 90%)` | Hairline dividers, card outlines |
| `border-2` | `#D1D1D6` | `rgb(209, 209, 214)` | `hsl(240, 7%, 83%)` | High-contrast structural lines |

---

## 5. Typography System

The Flynth design system separates **Logo Type** (a fixed visual mark asset) from **Site & App Typography** (editable interface text).

### 5.1 Type Family Roles

1. **Logo Wordmark Font:** `Poppins`  
   - *Usage:* Exclusively used for the rendered logo assets ("FLYNTH" in Poppins 800 Bold, "TECHNOLOGIES" in Poppins 300 Light).
2. **Primary Website & App Font:** `Inter` (sans-serif)  
   - *Usage:* All Headings (H1–H6), Body text, Navigation, Buttons, UI Components.
3. **Editorial Accent Font:** `Playfair Display` (serif, italic)  
   - *Usage:* Reserved exclusively for elegant, italicized injected callout words in large Display headers (e.g., *"We build <span className="font-accent italic">resilient</span> digital platforms"*).

---

### 5.2 Typography Scale & Specs

| Role | Font Family | Size (px / rem) | Line Height | Weight | Tailwind Utility |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Hero Display** | `Inter` | `64px / 4rem` | `1.1` | `900` (Black) | `text-5xl lg:text-6xl font-black tracking-tighter` |
| **H1 Heading** | `Inter` | `48px / 3rem` | `1.15` | `800` (Extra Bold) | `text-4xl lg:text-5xl font-extrabold tracking-tight` |
| **H2 Heading** | `Inter` | `36px / 2.25rem` | `1.2` | `700` (Bold) | `text-3xl lg:text-4xl font-bold` |
| **H3 Heading** | `Inter` | `28px / 1.75rem` | `1.25` | `700` (Bold) | `text-2xl lg:text-3xl font-bold` |
| **H4 Heading** | `Inter` | `24px / 1.5rem` | `1.3` | `600` (Semi Bold) | `text-xl lg:text-2xl font-semibold` |
| **H5 Heading** | `Inter` | `20px / 1.25rem` | `1.4` | `600` (Semi Bold) | `text-lg font-semibold` |
| **H6 Heading** | `Inter` | `16px / 1rem` | `1.4` | `600` (Semi Bold) | `text-base font-semibold` |
| **Body (Large)** | `Inter` | `18px / 1.125rem` | `1.6` | `400` (Regular) | `text-lg font-normal text-ink-3` |
| **Body (Default)** | `Inter` | `16px / 1rem` | `1.6` | `400` (Regular) | `text-base font-normal text-ink-3` |
| **Small / UI Label**| `Inter` | `14px / 0.875rem` | `1.4` | `600` (Semi Bold) | `text-sm font-semibold uppercase tracking-wider` |
| **Caption / Meta** | `Inter` | `12px / 0.75rem` | `1.4` | `400` (Regular) | `text-xs font-normal text-ink-4` |
| **Accent Word** | `Playfair Display` | Inherits | Inherits | `400 Italic` | `font-accent italic text-primary` |

---

## 6. Voice & Tone Guidelines

Flynth Technologies speaks with the clarity, conviction, and speed of high-performance engineering.

- **Confident & Direct:** We state capabilities without fluff or corporate jargon. We deliver results, not empty promises.
- **Engineering Precision:** Technical language is crisp, articulate, and grounded in architecture, speed, and security.
- **Fast & Responsive:** Communication is energetic, solution-oriented, and focused on momentum ("Built strong. Delivered fast.").
- **Tone Matrix:**
  - *Do say:* "We engineer secure, high-throughput digital systems delivered on aggressive timelines."
  - *Don't say:* "We synergy-align holistic web solutions for web paradigms."

---

## 7. Concrete Application Examples

### 7.1 Business Cards (Standard 3.5" x 2" / Dark & Light Side)
- **Front (Dark Mode Canvas `#1D2144`):**
  - Top Left: Full Logo Lockup (`Falcon Icon` + `FLYNTH TECHNOLOGIES` + `Built strong. Delivered fast.`)
  - Accent Line: 1px hairline border in `#4A6CF7`
- **Back (Surface `#FFFFFF`):**
  - Name: `Inter` Bold 700 `#0D0D0D`
  - Title: `Inter` SemiBold 600 `#4A6CF7` (e.g., `Lead Systems Architect`)
  - Contact Details: `Inter` Regular 400 `#6E6E78` (`email@flynth.tech` | `+1 (555) 019-2831` | `flynth.tech`)

---

### 7.2 Website Header & Footer

#### Header Navigation (`/app/components/Header.tsx`)
- **Left:** Icon + Wordmark (`FLYNTH TECHNOLOGIES`, Poppins hierarchy).
- **Center Links:** `Inter` 600 `14px` (`#3A3A42`, hover `#4A6CF7`).
- **Right Action:** Primary CTA Button (`.btn-primary`: `#4A6CF7` background, sharp 0px border radius, `14px UPPERCASE` semi-bold white text).

#### Footer (`/app/components/Footer.tsx`)
- **Brand Column:** Full Lockup (Icon + Wordmark + Tagline *"Built strong. Delivered fast."*).
- **Copyright Line:** `© 2026 Flynth Technologies. All rights reserved.` (`#A0A0AB`, `12px Inter`).

---

### 7.3 Social Profile Avatar (1000px x 1000px)
- **Background:** Solid Navy `#1D2144` or Clean White `#FFFFFF`.
- **Center Graphic:** Large geometric Falcon Mark in blue gradient (`#6583FF` → `#4A6CF7`).
- **Margin:** 200px outer padding around icon for circular cropping on Twitter/X, LinkedIn, and GitHub.

---

### 7.4 Email Signature Layout
```
------------------------------------------------------------------
[ FALCON MARK ]  Alex Rivera
                 Principal Architect | Flynth Technologies
                 
                 P: +1 (555) 019-2831
                 W: https://flynth.tech
                 E: alex@flynth.tech

                 Built strong. Delivered fast.
------------------------------------------------------------------
```

---

### 7.5 Pitch Deck Cover Slide (16:9 Landscape)
- **Canvas:** Dark `#1D2144` with subtle radial blue glow (`rgba(74, 108, 247, 0.15)`).
- **Title Block:**  
  - H1: `Inter` Black 900 64px White (`#FFFFFF`).  
  - Subhead: *"We design, develop, and deliver powerful digital experiences."* (`Inter` 400 24px `#A0A0AB`).
- **Footer Bar:** Full Logo Lockup with primary tagline in `#FBB040` Accent Yellow highlight.

---

## 8. Summary Checklist of Deliverables

- [x] **Logo usage rules:** Clear space, minimum sizes, bad practices / do's & don'ts documented.
- [x] **Full color palette:** Verified exact Hex, RGB, HSL values, falcon gradient, and usage context.
- [x] **Typography scale:** Full Inter + Playfair Display scale (H1–H6, Body, Caption) and Poppins logo separation.
- [x] **Tagline usage guide:** Clear positioning and touchpoint matrix for all 3 tagline variants.
- [x] **Voice & Tone guidelines:** Defined professional, confident, engineering-led brand voice.
- [x] **Example applications:** Business card, website header/footer, social avatar, email signature, and pitch deck cover layouts defined.
