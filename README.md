# Portfolio Website

A modern, interactive portfolio website built with Next.js, featuring a custom 3D globe background, smooth animations, and internationalization support. This portfolio showcases the work of Giorgi Gugunava, a Front-End Developer specializing in React, TypeScript, and modern web technologies.

## Features

- **3D Interactive Globe**: Custom-built Three.js globe with real orbital mechanics (LEO/MEO/GEO satellites), twinkling land dots rendered in a single draw call via merged geometry and custom GLSL shaders
- **GSAP Animations**: Smooth staggered reveals and transitions throughout the UI
- **Internationalization**: Multi-language support via `next-intl` (English configured, easily extensible)
- **Contact Form**: Integrated with Web3Forms API — animated field reveals and success/error feedback
- **Responsive Design**: Optimized for both desktop and mobile

## Pages

- `/` — Home (hero section with name, profession, and navigation)
- `/about` — Professional background and skills
- `/projects` — Project showcase
- `/contact` — Contact form

## Tech Stack

| Category | Library / Tool |
|----------|---------------|
| Framework | Next.js ^16.2.2 (App Router) |
| UI | React ^19.2.4 |
| Language | TypeScript 5 |
| Styling | Sass/SCSS |
| 3D / WebGL | Three.js 0.183.2 |
| Animations | GSAP 3.13.0 |
| i18n | next-intl 4.5.8 |
| Icons | React Icons 5.5.0 |
| Forms | Web3Forms API |

## Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   └── [locale]/
│   │       ├── layout.tsx              # Root layout (Galaxy background)
│   │       └── (main)/
│   │           ├── page.tsx            # Home page
│   │           ├── about/page.tsx      # About page
│   │           ├── projects/page.tsx   # Projects page
│   │           └── contact/page.tsx    # Contact page
│   ├── components/
│   │   ├── galaxy/galaxy.tsx           # Three.js globe with orbital satellites
│   │   ├── header/header.tsx           # Site header & navigation
│   │   ├── button/button.tsx           # Button component (default / read_more / send variants)
│   │   └── form/form.tsx               # Contact form with GSAP animations
│   ├── assets/img/                     # SVG assets and GeoJSON (globe land data)
│   └── i18n/                           # next-intl routing & request config
├── messages/
│   └── en.json                         # English translations
└── public/                             # Static assets & fonts
```

## Getting Started

### Prerequisites

- Node.js 20+

### Installation

```bash
git clone <repository-url>
cd portfolio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Production Build

```bash
npm run build
npm start
```

## Galaxy Component

The background globe (`src/components/galaxy/galaxy.tsx`) is a fully custom Three.js scene:

- **Land dots**: GeoJSON land polygons converted to twinkling `CircleGeometry` dots, merged into a single `BufferGeometry` with a custom GLSL shader for per-dot twinkling (1 draw call)
- **Orbital satellites**:
  - LEO — 50 objects (Starlink-like), 160–2000 km equivalent, random inclinations
  - MEO — GPS constellation, 6 planes × 4 satellites, 55° inclination
  - GEO — 15 geostationary satellites, equatorial orbit
- **Physics**: Kepler's 3rd law for orbital speeds (`ω ∝ r^(-3/2)`)
- **Controls**: OrbitControls with auto-rotate, damping, constrained polar angle

## Internationalization

Adding a new language:

1. Add the locale to `src/i18n/routing.ts`
2. Create `messages/<locale>.json` matching the structure of `en.json`

## Available Scripts

- `npm run dev` — Start development server
- `npm run build` — Build for production
- `npm start` — Start production server
- `npm run lint` — Run ESLint

## Author

**Giorgi Gugunava (Giorgi014)**  
Front-End Developer — React, TypeScript, modern web technologies
