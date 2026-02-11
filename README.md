# annisabaizan.github.io

> Personal portfolio website built with analytical precision and modular architecture.

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live-success)](https://annisabaizan.github.io)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

## 🎯 Overview

Static portfolio website showcasing projects, technical blog, and professional documentation. Built with **systems thinking** approach, emphasizing **modular CSS architecture**, **reusable components**, and **evidence-based development**.

**Live Site:** [annisabaizan.github.io](https://annisabaizan.github.io)

## 🏗️ Architecture

### Design Principles

- **Modular CSS Architecture**: Global theme system dengan reusable components
- **Component-Based Structure**: Separasi antara layout, theme, dan functionality
- **Mobile-First Responsive**: Optimized untuk semua device sizes
- **Performance-Optimized**: Minimal dependencies, lightweight assets
- **Accessibility**: Semantic HTML, ARIA labels, keyboard navigation support

### Tech Stack

- **HTML5**: Semantic markup
- **CSS3**: Custom properties, Grid, Flexbox
- **Vanilla JavaScript**: Untuk interactivity (no frameworks)
- **GitHub Pages**: Hosting platform

## 📁 Repository Structure

```
annisabaizan.github.io/
│
├── index.html                     # Landing page
├── about.html                     # About page
├── links.html                     # Link-in-bio / contact
├── README.md                      # This file
│
├── assets/                        # Global shared assets
│   ├── css/
│   │   ├── reset.css              # CSS reset
│   │   ├── theme.css              # Global theme variables
│   │   └── components.css         # Reusable UI components
│   ├── js/
│   │   ├── main.js                # Global JavaScript
│   │   └── analytics.js           # Analytics tracking
│   ├── images/
│   │   ├── profile.jpg
│   │   ├── logo.svg
│   │   └── favicon.ico
│   └── fonts/                     # Custom fonts (if any)
│
├── projects/                      # Professional projects
│   ├── index.html                 # Projects directory
│   ├── simkesgi/
│   │   ├── index.html
│   │   ├── presentations/
│   │   ├── docs/
│   │   └── assets/
│   └── workplaceeval/
│       ├── index.html
│       ├── presentations/
│       ├── docs/
│       └── assets/
│
├── events/                        # Event pages (birthdays, weddings)
│   ├── index.html
│   ├── birthdays/
│   ├── weddings/
│   └── templates/
│
├── blog/                          # Technical blog
│   ├── index.html
│   └── posts/
│
├── labs/                          # Code experiments
│   ├── index.html
│   └── experiments/
│
├── docs/                          # Professional documents
│   ├── index.html
│   ├── cv.pdf
│   └── portfolio.pdf
│
└── CNAME                          # Custom domain (optional)
```

## 🎨 CSS Architecture

### Global CSS System

The CSS is organized into three main files for maximum reusability:

#### 1. **reset.css**
- Universal CSS reset
- Browser normalization
- Accessibility defaults

#### 2. **theme.css**
- CSS Custom Properties (variables)
- Color palette (dark theme)
- Typography scale
- Spacing system
- Border radius, shadows, transitions
- Z-index scale

#### 3. **components.css**
- Reusable UI components:
  - Navigation (sticky header)
  - Buttons (primary, secondary, ghost)
  - Cards (clickable, with icons, images)
  - Tags & Badges
  - Hero sections
  - Section layouts
  - Grid systems
  - Footer
  - Utilities
  - Animations

### Design Tokens

```css
/* Color System */
--bg-dark: #0a0a0a
--bg-card: #1a1a1a
--accent-blue: #3b82f6
--accent-cyan: #06b6d4

/* Typography Scale */
--text-xs to --text-7xl
--font-light to --font-extrabold

/* Spacing Scale */
--space-1 to --space-24

/* And more... */
```

### Usage Example

```html
<!-- Link global CSS in every page -->
<link rel="stylesheet" href="../assets/css/reset.css">
<link rel="stylesheet" href="../assets/css/theme.css">
<link rel="stylesheet" href="../assets/css/components.css">

<!-- Use global components -->
<nav class="nav">
  <div class="nav-container">
    <a href="/" class="nav-brand">AB</a>
    <ul class="nav-links">
      <li><a href="/">Home</a></li>
    </ul>
  </div>
</nav>

<section class="hero">
  <div class="hero-content">
    <h1>Title</h1>
  </div>
</section>

<div class="card">
  <h3 class="card-title">Card Title</h3>
  <p class="card-content">Content</p>
</div>
```

## 🚀 Getting Started

### Local Development

1. **Clone the repository:**
```bash
git clone https://github.com/annisabaizan/annisabaizan.github.io.git
cd annisabaizan.github.io
```

2. **Serve locally:**

Using Python:
```bash
python -m http.server 8000
```

Using Node.js:
```bash
npx http-server
```

Using VS Code:
- Install "Live Server" extension
- Right-click on `index.html` → "Open with Live Server"

3. **Open in browser:**
```
http://localhost:8000
```

### Deployment

GitHub Pages automatically deploys from the `main` branch.

**To deploy changes:**
```bash
git add .
git commit -m "Update: description"
git push origin main
```

Changes will be live at `https://annisabaizan.github.io` within minutes.

## 📝 Content Guidelines

### Adding New Pages

1. **Create HTML file** in appropriate directory
2. **Link global CSS:**
```html
<link rel="stylesheet" href="../assets/css/reset.css">
<link rel="stylesheet" href="../assets/css/theme.css">
<link rel="stylesheet" href="../assets/css/components.css">
```
3. **Use global components** from `components.css`
4. **Add page-specific styles** only if needed (in `<style>` tag or separate CSS file)

### Creating New Components

If you need a new reusable component:

1. Add it to `assets/css/components.css`
2. Follow existing naming conventions
3. Make it responsive
4. Test across pages

### Color Coding

- **Primary Accent**: Blue (#3b82f6) - main actions, links
- **Secondary Accent**: Cyan (#06b6d4) - highlights, hover states
- **Success**: Green (#10b981) - completed, active
- **Warning**: Orange (#f59e0b) - in progress, experimental
- **Error**: Red (#ef4444) - errors, critical

## 🎯 Features

- ✅ **Responsive Design** - Mobile, tablet, desktop optimized
- ✅ **Dark Theme** - Consistent dark color scheme
- ✅ **Modular CSS** - Reusable components across pages
- ✅ **Fast Loading** - Optimized assets, no heavy frameworks
- ✅ **SEO Friendly** - Semantic HTML, meta tags
- ✅ **Accessible** - ARIA labels, keyboard navigation
- ✅ **GitHub Pages** - Free hosting, automatic deployment

## 📊 Performance

- **First Contentful Paint**: < 1s
- **Time to Interactive**: < 2s
- **Total Bundle Size**: < 100KB (without images)
- **No External Dependencies**: Pure vanilla stack

## 🔧 Customization

### Changing Theme Colors

Edit `assets/css/theme.css`:

```css
:root {
    --accent-blue: #YOUR_COLOR;
    --accent-cyan: #YOUR_COLOR;
}
```

### Adding Custom Fonts

1. Add font files to `assets/fonts/`
2. Update `theme.css`:
```css
:root {
    --font-primary: 'YourFont', sans-serif;
}
```

### Modifying Components

Edit `assets/css/components.css` to update global component styles.

## 📄 License

MIT License - feel free to use this as a template for your own portfolio.

## 🤝 Contributing

This is a personal portfolio, but suggestions are welcome:

1. Fork the repository
2. Create a feature branch
3. Submit a pull request

## 📞 Contact

- **Website**: [annisabaizan.github.io](https://annisabaizan.github.io)
- **Email**: annisa.baizan@example.com
- **GitHub**: [@annisabaizan](https://github.com/annisabaizan)
- **LinkedIn**: [annisabaizan](https://linkedin.com/in/annisabaizan)

---

**Built with analytical precision** | System Thinker & Developer
