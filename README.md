# Gaël Röthlin - Portfolio Website

![Vue.js](https://img.shields.io/badge/Vue.js-3.2-4FC3F7?logo=vue.js)
![Netlify](https://img.shields.io/badge/Hosted%20on-Netlify-00C7B7)
![License](https://img.shields.io/badge/License-MIT-green)

A modern, interactive portfolio website showcasing my projects, internships, and skills as a full-stack developer and computer science student. Built with Vue 3, featuring a distinctive terminal/blueprint design aesthetic and dynamic GitHub integration.

🌐 **Live Site:** [portfolio](https://portfolio.grothlin.fr)

## Features

- ✨ **Distinctive Design** - Terminal/blueprint themed interface with animated scanlines and grid background
- 🌍 **Bilingual Support** - Full French/English localization using Vue i18n
- 💻 **Dynamic Projects** - Auto-fetches GitHub repositories with built-in caching and fallback strategies
- 📱 **Fully Responsive** - Mobile-friendly design that works seamlessly across all devices
- ⚡ **Fast & Optimized** - Netlify serverless functions, lazy loading, and intelligent caching
- 🔍 **SEO Ready** - Sitemap, robots.txt, and meta tags for search engine visibility
- ♿ **Accessible** - WCAG compliant with keyboard navigation and semantic HTML
- 🎨 **Interactive Animations** - Smooth transitions, hover effects, and animated UI elements

## Tech Stack

### Frontend
- **Vue 3** - Progressive JavaScript framework
- **Vue Router 4** - Client-side routing
- **Vue i18n** - Internationalization (EN/FR)
- **Markdown-it** - Markdown parsing for project descriptions
- **Axios** - HTTP client for API requests

### Backend & Deployment
- **Netlify Functions** - Serverless backend for GitHub API integration
- **Netlify** - Hosting and CI/CD
- **Node.js** - Runtime environment

### Development Tools
- **Babel** - JavaScript transpiler
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Vue CLI** - Build tooling

## Performance Optimizations

- **Code Splitting** - Lazy-loaded routes reduce initial bundle size
- **Client-side Caching** - 24-hour localStorage cache for GitHub projects
- **Server-side Caching** - 1-minute in-memory cache on serverless function
- **Optimized Assets** - Custom fonts loaded efficiently
- **Smooth Scrolling** - CSS `scroll-behavior: smooth` for better UX

## Accessibility

- Semantic HTML structure
- ARIA labels on interactive elements
- Keyboard navigation support (Escape to close modals, Enter for buttons)
- Color contrast compliance
- Screen reader friendly

## Browser Support

- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

Excludes IE 11 (configured in `package.json` browserslist)

---

## Author

**Gaël Röthlin**
- GitHub: [@moonlight58](https://github.com/moonlight58)
- Instagram: [@osiris._25](https://instagram.com/osiris._25)
- Location: Besançon, France

---

Made with ❤️ as part of my Computer Science degree portfolio project.
