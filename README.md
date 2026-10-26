# Portfolio Website

A modern portfolio website built with Next.js, smooth animations, and internationalization support. This portfolio showcases the work of Giorgi Gugunava, a Front-End Developer specializing in React, TypeScript, and modern web technologies.

## Features

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
| Framework | Next.js ^16.4.3 (App Router) |
| UI | React ^19.2.4 |
| Language | TypeScript 5 |
| Styling | Tailwind CSS ^4.3.3 |
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
│   │       ├── layout.tsx              # Root layout
│   │       └── (main)/
│   │           ├── page.tsx            # Home page
│   │           ├── about/page.tsx      # About page
│   │           ├── projects/page.tsx   # Projects page
│   │           └── contact/page.tsx    # Contact page
│   ├── components/
│   │   ├── header/header.tsx           # Site header & navigation
│   │   ├── button/button.tsx           # Tailwind-styled button variants
│   │   └── form/form.tsx               # Contact form with GSAP animations
│   ├── assets/img/                     # Images and icons
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
