# Portfolio Website

A modern, interactive portfolio website built with Next.js, featuring animated components, internationalization support, and a dynamic project showcase. This portfolio showcases the work of Giorgi Gugunava, a Front-End Developer specializing in React, TypeScript, and modern web technologies.

## 🌟 Features

### Core Features
- **Interactive UI**: Smooth animations and transitions powered by GSAP
- **Internationalization**: Multi-language support using `next-intl` (currently configured for English)
- **Dynamic Project Showcase**: Interactive carousel with 3D card effects for displaying projects
- **Project Filtering**: Category-based filtering system (All, Landing Pages, E-commerce, Informational, Games, Animations)
- **Contact Form**: Integrated contact form using Web3Forms API
- **Particle Background**: Animated particle system with connecting lines for visual appeal
- **Responsive Design**: Fully responsive layout optimized for desktop and mobile devices
- **Settings Panel**: Customizable sound and graphic settings

### Sections
- **Profile**: Personal information display with profile picture
- **About**: Professional background and skills overview
- **Projects**: Interactive showcase of portfolio projects with detailed descriptions
- **Contact**: Contact form for reaching out

## 🛠️ Tech Stack

### Core Technologies
- **Next.js 16.0.7**: React framework with App Router
- **React 19.2.1**: UI library
- **TypeScript 5**: Type-safe development
- **Sass/SCSS**: Styling with SCSS modules

### Key Libraries
- **next-intl 4.5.8**: Internationalization and routing
- **GSAP 3.13.0**: Advanced animations and transitions
- **React Icons 5.5.0**: Icon library
- **Swiper 12.0.3**: Touch slider component

### Development Tools
- **ESLint**: Code linting
- **TypeScript**: Type checking

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── [locale]/              # Internationalized routes
│   │   │   ├── home/              # Main home page
│   │   │   │   ├── main/          # Main content sections
│   │   │   │   │   ├── about/     # About section
│   │   │   │   │   ├── contact/   # Contact section
│   │   │   │   │   └── pojects/   # Projects section
│   │   │   │   ├── profile/       # Profile components
│   │   │   │   ├── categories/    # Project categories
│   │   │   │   ├── sidebar/       # Settings sidebar
│   │   │   │   └── projects/      # Individual project pages
│   │   │   ├── layout.tsx         # Root layout
│   │   │   └── page.tsx           # Home page entry
│   │   └── hooks/                 # Custom React hooks
│   ├── components/                # Reusable components
│   │   ├── button/                # Button component
│   │   ├── cart/                  # Project card carousel
│   │   ├── categories/            # Category filter
│   │   ├── container/             # Container wrapper
│   │   ├── form/                  # Contact form
│   │   ├── graphicSettngs/        # Graphic settings
│   │   ├── hexBg/                 # Hexagon background
│   │   ├── loader/                # Loading component
│   │   ├── particleBackground/    # Particle animation
│   │   ├── projects/              # Project data
│   │   ├── range/                 # Range slider
│   │   ├── soundSettings/         # Sound settings
│   │   └── soundToggle/           # Sound toggle
│   └── i18n/                      # Internationalization config
├── messages/                      # Translation files
│   └── en.json                    # English translations
├── public/                        # Static assets
│   ├── fonts/                     # Custom fonts (Big Shoulders, Iceland)
│   └── img/                       # Project images
└── package.json
```

## 🚀 Getting Started

### Prerequisites
- Node.js 20+ 
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 🎨 Key Components

### ParticleBackground
An animated canvas-based particle system that creates a dynamic background with connecting lines between particles. Features:
- Responsive particle count (100 on mobile, 200 on desktop)
- Smooth animations with collision detection
- Color variations in blue/purple spectrum

### Cart (Project Carousel)
Interactive 3D carousel for displaying projects:
- 3D card transformations with rotation effects
- Smooth navigation with previous/next buttons
- Project counter display
- Category filtering support
- Responsive design

### Container
Reusable container component with multiple variants:
- `container`: Standard modal container
- `profile`: Profile section container
- `projects`: Project display container
- `settings`: Settings panel container

### Form
Contact form with GSAP animations:
- Animated field reveals
- Web3Forms integration
- Form validation
- Success/error feedback

### Categories
Project filtering system with categories:
- All Projects
- Landing Pages
- E-commerce Websites
- Informational
- Games
- Animations

## 🌐 Internationalization

The project uses `next-intl` for internationalization. Currently configured for English, but easily extensible to other languages.

### Adding a New Language

1. Add locale to `src/i18n/routing.ts`:
   ```typescript
   locales: ["en", "ka"], // Will Add Georgian
   ```

2. Create translation file `messages/ka.json` with the same structure as `en.json`

3. Update routing configuration

### Translation Structure
Translations are organized by sections:
- `profile`: Personal information
- `about`: About section content
- `contact`: Contact section
- `projects`: Project descriptions and details

## 🎭 Animations

The portfolio uses GSAP (GreenSock Animation Platform) for smooth, performant animations:

- **Modal Transitions**: Smooth open/close animations for sections
- **Content Reveals**: Staggered text and element animations
- **Form Animations**: Sequential field animations
- **3D Card Effects**: Transform-based carousel animations

### Custom Animation Hook
`useToggleAnimation` hook manages modal state and animation lifecycle:
- Handles opening/closing states
- Manages animation end callbacks
- Prevents animation conflicts

## 📱 Responsive Design

The portfolio is fully responsive with:
- Mobile-optimized particle count
- Responsive typography
- Adaptive layouts for different screen sizes
- Touch-friendly interactions

## 🎯 Projects Showcase

### Featured Projects

1. **Weather App**
   - Technology: Next.js, TypeScript
   - Category: Informational
   - Features: Real-time weather data, 5-day forecast, theme switching

2. **Guess My Number**
   - Technology: React.js, TypeScript
   - Category: Game
   - Features: Logic game with scoring system

Projects can be filtered by category and navigated through an interactive carousel.

## 📧 Contact Form

The contact form uses Web3Forms API for form submissions:
- Name, email, and message fields
- Real-time validation
- Success/error feedback
- Animated form reveals

## ⚙️ Settings

The sidebar includes customizable settings:
- **Sound Settings**: Volume control and sound toggle
- **Graphic Settings**: Visual customization options

## 🎨 Styling

- **SCSS Modules**: Component-scoped styling
- **Custom Fonts**: Big Shoulders and Iceland fonts
- **Color Scheme**: Dark theme with blue/purple accents
- **Hexagon Backgrounds**: Custom hexagon SVG backgrounds for buttons

## 🔧 Development

### Available Scripts

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm start`: Start production server
- `npm run lint`: Run ESLint

### Code Structure

- **TypeScript**: Full type safety throughout the project
- **Component-based**: Modular, reusable components
- **Custom Hooks**: Reusable logic extraction
- **SCSS Modules**: Scoped styling per component

## 📝 License

This project is private and proprietary.

## 👤 Author

**Giorgi Gugunava (Giorgi014)**
- Front-End Developer
- Open for hire
- Specialized in React, TypeScript, and modern web technologies

## 🚧 Future Enhancements

Potential improvements:
- Additional language support
- More project categories
- Enhanced animations
- Blog section
- Dark/light theme toggle
- Performance optimizations

---

Using Next.js and modern web technologies.
