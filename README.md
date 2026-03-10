# 🌿 JS Products — Ceylon Spices

A modern, responsive web application for **JS Products**, a premium Ceylon cinnamon and pepper spice business based in Deiyandara, Matara, Sri Lanka. Built with React, Vite, Tailwind CSS, and Framer Motion.

![Version](https://img.shields.io/badge/version-1.0.0-orange)
![React](https://img.shields.io/badge/React-18.3.1-blue)
![Vite](https://img.shields.io/badge/Vite-6.0.5-purple)
![Tailwind](https://img.shields.io/badge/TailwindCSS-3.4.17-cyan)

---

## 📋 Table of Contents

- [Introduction](#-introduction)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Development](#development)
  - [Production Build](#production-build)
  - [Preview Build](#preview-build)
- [Application Flow](#-application-flow)
- [Pages & Components](#-pages--components)
- [Theme System](#-theme-system)
- [Internationalization (i18n)](#-internationalization-i18n)
- [SEO](#-seo)
- [Deployment](#-deployment)
- [Environment & Configuration](#-environment--configuration)
- [Browser Support](#-browser-support)
- [License](#-license)

---

## 🌟 Introduction

**JS Products** is a family-owned spice business specializing in authentic Ceylon cinnamon and pepper, sourced directly from the southern hills of Sri Lanka. This website serves as their digital storefront — showcasing their premium product range, company story, and providing easy contact options including WhatsApp integration.

The site is designed to deliver a **world-class user experience** with smooth animations, adaptive theming (light/dark/system), bilingual support (English/Sinhala), and full mobile responsiveness.

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| **Multi-Page SPA** | 4 distinct pages with client-side routing and animated transitions |
| **Dark / Light / System Theme** | Three-way theme toggle with localStorage persistence and flash prevention |
| **Bilingual (EN / සිං)** | Full English and Sinhala translations with proper Sinhala font rendering |
| **Framer Motion Animations** | Page transitions, scroll-triggered reveals, creative mobile menu with clip-path animation |
| **Google Maps Integration** | Interactive embedded map with grayscale-to-color hover effect |
| **WhatsApp Floating Button** | One-tap WhatsApp contact with animated entrance |
| **Responsive Design** | Fully responsive from mobile (320px) to large desktop (1920px+) |
| **SEO Optimized** | Meta tags, Open Graph, Twitter Cards, JSON-LD structured data, sitemap, robots.txt |
| **Scroll-Aware Navbar** | Transparent on top, glass-morphism on scroll with adaptive text colors |
| **Creative Mobile Menu** | Full-screen overlay with circle clip-path reveal, dedicated close button, theme-adaptive colors |
| **Custom Scrollbar** | Themed scrollbar matching the spice color palette |

---

## 🛠 Tech Stack

### Core

| Technology | Version | Purpose |
|-----------|---------|---------|
| [React](https://react.dev) | 18.3.1 | UI component library |
| [Vite](https://vite.dev) | 6.0.5 | Build tool & dev server |
| [Tailwind CSS](https://tailwindcss.com) | 3.4.17 | Utility-first CSS framework |
| [Framer Motion](https://motion.dev) | 12.35.2 | Animation library |
| [React Router DOM](https://reactrouter.com) | 7.13.1 | Client-side routing |
| [Lucide React](https://lucide.dev) | 0.468.0 | Icon library |

### Dev Dependencies

| Tool | Purpose |
|------|---------|
| @vitejs/plugin-react | React Fast Refresh + JSX transform |
| PostCSS | CSS processing pipeline |
| Autoprefixer | Vendor prefix automation |

### Fonts (Google Fonts)

| Font | Usage |
|------|-------|
| **Playfair Display** | Headings & display text |
| **Inter** | Body text & UI elements |
| **Noto Sans Sinhala** | Sinhala language text |

---

## 📁 Project Structure

```
jsproduct/
├── public/                          # Static assets (served as-is)
│   ├── product/                     # Product images (.webp)
│   │   ├── ceylonCinnamonSticks.webp
│   │   ├── cinnamonPowder.webp
│   │   ├── cinnamonBarkOil.webp
│   │   ├── blackPepper.webp
│   │   ├── whitePepper.webp
│   │   └── pepperPowder.webp
│   ├── hero-img.webp                # Hero section main image
│   ├── herobg-img.webp              # Hero background image
│   ├── cinnamonProcessing.webp      # Cinnamon processing photo
│   ├── pepperVines.webp             # Pepper vines photo
│   ├── spiceGarden.webp             # Spice garden photo (About)
│   ├── spiceProcessing.webp         # Spice processing photo (About)
│   ├── farmWorker.jpg               # Farm worker photo (About)
│   ├── spicesFlat.jpg               # Flat-lay spices photo
│   ├── spicesBowl.jpg               # Spices in bowl photo
│   ├── woodTexture.jpg              # Wood texture background
│   ├── logo.jpeg                    # Company logo
│   ├── favicon.ico                  # Favicon (ICO)
│   ├── favicon.png                  # Favicon (PNG)
│   ├── favicon.svg                  # Favicon (SVG)
│   ├── robots.txt                   # Search engine crawl rules
│   └── sitemap.xml                  # XML sitemap for SEO
│
├── src/                             # Source code
│   ├── components/                  # Reusable UI components
│   │   ├── Navbar.jsx               # Navigation bar + mobile menu
│   │   ├── Hero.jsx                 # Hero section component
│   │   ├── Products.jsx             # Featured products grid
│   │   ├── About.jsx                # About preview section
│   │   ├── Contact.jsx              # Contact preview section
│   │   ├── Footer.jsx               # Site footer
│   │   ├── WhatsAppButton.jsx       # Floating WhatsApp CTA
│   │   └── PageTransition.jsx       # Page transition wrapper
│   │
│   ├── pages/                       # Route-level page components
│   │   ├── HomePage.jsx             # Home page (Hero + Products + CTA)
│   │   ├── ProductsPage.jsx         # Full product catalog (6 products)
│   │   ├── AboutPage.jsx            # Company story, timeline, values
│   │   └── ContactPage.jsx          # Contact form, info, Google Maps
│   │
│   ├── context/                     # React Context providers
│   │   ├── ThemeContext.jsx          # Dark/Light/System theme management
│   │   └── LanguageContext.jsx       # EN/SI language switching
│   │
│   ├── hooks/                       # Custom React hooks
│   │   └── useScrollAnimation.js    # Intersection Observer scroll reveal
│   │
│   ├── i18n/                        # Internationalization
│   │   └── translations.js          # EN + SI translation strings
│   │
│   ├── constants/                   # App constants
│   │   └── images.js                # Centralized image path definitions
│   │
│   ├── App.jsx                      # Root app with routing & providers
│   ├── main.jsx                     # React entry point
│   └── index.css                    # Global styles, Tailwind directives
│
├── index.html                       # HTML entry (SEO meta, fonts, favicon)
├── tailwind.config.js               # Tailwind custom theme config
├── postcss.config.js                # PostCSS plugins
├── vite.config.js                   # Vite build configuration
├── vercel.json                      # Vercel SPA rewrite config
├── package.json                     # Dependencies & scripts
└── README.md                        # This file
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** >= 18.0.0
- **npm** >= 9.0.0 (comes with Node.js)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/jsproduct.git
   cd jsproduct
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

### Development

Start the development server with hot module replacement (HMR):

```bash
npm run dev
```

This will start the Vite dev server. Open the URL shown in the terminal (typically `http://localhost:5173`).

**Dev server features:**
- ⚡ Instant hot module replacement
- 🔄 Auto-refresh on file changes
- 📦 On-demand module compilation
- 🗺 Source maps for debugging

### Production Build

Create an optimized production build:

```bash
npm run build
```

Output is generated in the `dist/` folder:
- `dist/index.html` — Entry HTML
- `dist/assets/index-*.css` — Minified CSS (~70 KB, ~10 KB gzip)
- `dist/assets/index-*.js` — Minified JS (~388 KB, ~118 KB gzip)

### Preview Build

Preview the production build locally:

```bash
npm run preview
```

This serves the `dist/` folder on a local server (typically `http://localhost:4173`).

---

## 🔄 Application Flow

```
┌─────────────────────────────────────────────────────────┐
│                      index.html                          │
│  • SEO meta tags, Open Graph, JSON-LD                   │
│  • Google Fonts (Playfair, Inter, Noto Sans Sinhala)    │
│  • Theme flash-prevention inline script                  │
│  • Favicon (ico/png/svg)                                │
└────────────────────┬────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────┐
│                     main.jsx                             │
│  • React 18 createRoot                                  │
│  • BrowserRouter wrapping                               │
│  • Renders <App />                                      │
└────────────────────┬────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────┐
│                      App.jsx                             │
│  ┌───────────────────────────────────────────────────┐  │
│  │  ThemeProvider (dark/light/system)                 │  │
│  │  ┌───────────────────────────────────────────────┐│  │
│  │  │  LanguageProvider (EN/SI)                     ││  │
│  │  │  ┌───────────────────────────────────────────┐││  │
│  │  │  │  AppContent                               │││  │
│  │  │  │  ├── <Navbar />                          │││  │
│  │  │  │  ├── <ScrollToTop />                     │││  │
│  │  │  │  ├── <AnimatePresence>                   │││  │
│  │  │  │  │   └── <Routes>                        │││  │
│  │  │  │  │       ├── / → <HomePage />            │││  │
│  │  │  │  │       ├── /products → <ProductsPage />│││  │
│  │  │  │  │       ├── /about → <AboutPage />      │││  │
│  │  │  │  │       └── /contact → <ContactPage />  │││  │
│  │  │  │  ├── <Footer />                          │││  │
│  │  │  │  └── <WhatsAppButton />                  │││  │
│  │  │  └───────────────────────────────────────────┘││  │
│  │  └───────────────────────────────────────────────┘│  │
│  └───────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────┘
```

### User Flow

1. **Landing** → User arrives at the home page with a full-screen hero section featuring animated product images and a gradient overlay.

2. **Navigation** → Desktop users see a horizontal nav bar; mobile users get a hamburger icon that reveals a full-screen animated menu with clip-path circle transition.

3. **Scrolling** → As the user scrolls, the navbar transitions from transparent to a glass-morphism backdrop with theme-appropriate text colors. Sections animate into view using scroll-triggered Intersection Observer hooks.

4. **Products** → The products page displays 6 spice products (Ceylon Cinnamon Sticks, Cinnamon Powder, Black Pepper, White Pepper, Pepper Powder, Cinnamon Bark Oil) in an animated grid with hover effects.

5. **About** → Company story with timeline, values section, and team imagery. Warm gradient backgrounds and staggered animations.

6. **Contact** → Contact information cards, a contact form, and an interactive Google Maps embed (grayscale with color on hover) showing the Deiyandara, Matara location.

7. **WhatsApp** → A floating WhatsApp button is always visible in the bottom-right corner for instant contact.

8. **Theme/Language** → Users can switch between Light / Dark / System themes and English / Sinhala languages at any time from the navbar controls.

---

## 📄 Pages & Components

### Pages

| Page | Route | Description |
|------|-------|-------------|
| **HomePage** | `/` | Hero section, featured products grid, "Why Choose Us" section, CTA banner |
| **ProductsPage** | `/products` | Full 6-product catalog with detailed cards, hover animations, category badges |
| **AboutPage** | `/about` | Company story, history timeline, core values with icons |
| **ContactPage** | `/contact` | Contact info cards, message form, interactive Google Maps (Deiyandara, Matara) |

### Shared Components

| Component | Description |
|-----------|-------------|
| **Navbar** | Fixed top nav with scroll-aware styling, desktop links, language toggle, theme dropdown, animated mobile hamburger/close menu |
| **Footer** | Site footer with company info, quick links, contact details, social links |
| **WhatsAppButton** | Floating bottom-right button that links to WhatsApp (94724696559) with pulse animation |
| **PageTransition** | Framer Motion wrapper for smooth page enter/exit animations |

### Context Providers

| Context | Description |
|---------|-------------|
| **ThemeContext** | Manages `light` / `dark` / `system` theme. Persists to localStorage. Applies `dark` class to `<html>`. Includes flash-prevention logic. |
| **LanguageContext** | Manages `en` / `si` language. Sets `lang` attribute on `<html>`. Provides `t()` translation function and `isSinhala` boolean. |

### Custom Hooks

| Hook | Description |
|------|-------------|
| **useScrollAnimation** | Uses Intersection Observer API to detect when elements enter the viewport and trigger CSS/Framer animations |

---

## 🎨 Theme System

The app supports three theme modes:

| Mode | Behavior |
|------|----------|
| **Light** | Warm cream/spice backgrounds, dark text, amber accents |
| **Dark** | Deep pepper/black backgrounds, light text, golden spice accents |
| **System** | Follows the user's OS `prefers-color-scheme` setting |

### How It Works

1. **Flash Prevention** — An inline script in `index.html` reads localStorage before React loads and applies the `dark` class immediately, preventing a white flash on dark-themed page loads.

2. **ThemeContext** — React context manages the theme state, syncs with localStorage, and listens for system preference changes via `matchMedia`.

3. **Tailwind `darkMode: 'class'`** — All components use Tailwind's `dark:` variant for theme-specific styles.

### Color Palette

| Name | Range | Usage |
|------|-------|-------|
| **Spice** (Amber) | 50–950 | Primary accent — buttons, highlights, active states |
| **Cinnamon** (Warm Red) | 50–900 | Secondary accent — gradients, decorative elements |
| **Pepper** (Neutral) | 50–950 | Text, backgrounds, borders, cards |

---

## 🌐 Internationalization (i18n)

The app supports two languages:

| Language | Code | Font |
|----------|------|------|
| English | `en` | Inter |
| සිංහල (Sinhala) | `si` | Noto Sans Sinhala |

### How It Works

- **LanguageContext** provides a `t(key)` function that looks up translation strings from `src/i18n/translations.js`.
- Switching language sets `<html lang="en|si">` and adds a `lang-si` class for CSS targeting.
- Sinhala text has special CSS: `font-size: 14px` on `html[lang="si"]` and `line-height: 1.6` to prevent text clipping.
- All UI text (nav links, headings, descriptions, buttons, form labels) is translated.

### Toggle

The language toggle button in the navbar shows:
- `සිං` when in English mode (click to switch to Sinhala)
- `EN` when in Sinhala mode (click to switch to English)

---

## 🔍 SEO

### Implementation

| Feature | File | Details |
|---------|------|---------|
| Meta Tags | `index.html` | Title, description, keywords, author, theme-color |
| Open Graph | `index.html` | og:title, og:description, og:image, og:url, og:type |
| Twitter Cards | `index.html` | twitter:card, twitter:title, twitter:description |
| JSON-LD | `index.html` | LocalBusiness schema with address, geo coordinates, hours, phone |
| Sitemap | `public/sitemap.xml` | All 4 routes with lastmod, changefreq, priority |
| Robots | `public/robots.txt` | Allow all crawlers, sitemap reference |
| Favicon | `index.html` | ICO, PNG (32x32), SVG formats |

### Structured Data (JSON-LD)

```json
{
  "@type": "LocalBusiness",
  "name": "JS Products - Ceylon Spices",
  "address": "Deiyandara, Matara, Southern Province, Sri Lanka",
  "geo": { "latitude": 6.1525698, "longitude": 80.6028554 },
  "telephone": "+94775553108"
}
```

---

## 🚢 Deployment

### Vercel (Recommended)

The project includes a `vercel.json` with SPA rewrite rules.

1. **Install Vercel CLI** (optional):
   ```bash
   npm i -g vercel
   ```

2. **Deploy**:
   ```bash
   vercel
   ```

   Or connect your GitHub repository to [vercel.com](https://vercel.com) for automatic deployments on push.

3. **Configuration** — The `vercel.json` handles SPA routing:
   ```json
   {
     "rewrites": [
       { "source": "/(.*)", "destination": "/" }
     ]
   }
   ```

### Other Platforms

For **Netlify**, create a `_redirects` file in `public/`:
```
/*    /index.html   200
```

For **GitHub Pages**, use a 404.html redirect strategy or `gh-pages` with HashRouter.

For any static hosting, upload the contents of the `dist/` folder after running `npm run build`.

---

## ⚙ Environment & Configuration

### Key Config Files

| File | Purpose |
|------|---------|
| `vite.config.js` | Vite build config with React plugin |
| `tailwind.config.js` | Custom colors (spice/cinnamon/pepper), fonts, animations, dark mode |
| `postcss.config.js` | PostCSS pipeline (Tailwind + Autoprefixer) |
| `vercel.json` | Vercel SPA rewrite rules |
| `package.json` | Dependencies, scripts (`dev`, `build`, `preview`) |

### NPM Scripts

| Script | Command | Description |
|--------|---------|-------------|
| `dev` | `vite` | Start development server with HMR |
| `build` | `vite build` | Create production build in `dist/` |
| `preview` | `vite preview` | Serve production build locally |

---

## 🌐 Browser Support

| Browser | Supported |
|---------|-----------|
| Chrome 90+ | ✅ |
| Firefox 90+ | ✅ |
| Safari 14+ | ✅ |
| Edge 90+ | ✅ |
| Mobile Chrome | ✅ |
| Mobile Safari | ✅ |

---

## 📝 License

This project is private and proprietary to **JS Products**.

---

## 📞 Contact

**JS Products**
- 📍 Deiyandara, Matara, Southern Province, Sri Lanka
- 📞 +94 77 555 3108
- 💬 [WhatsApp](https://wa.me/94724696559)
