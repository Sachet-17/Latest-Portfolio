# Sachet Ranjan Bisi - Portfolio Website

## Original Problem Statement
Build a professional portfolio website for an AI/ML Engineer and Software Development Engineer. The content is sourced from the user's resume, featuring a highly-customized, single-page scrolling application inspired by zunedaalim.com with a unique beige and soft-black color scheme.

## Product Requirements

### Layout & Design
- **Layout:** Single, continuous-scrolling page
- **Color Scheme:** Warm beige (`#F5F1E8`) background for light sections, soft black (`#0F0F0F`) for dark sections
- **Typography:** Large, bold headings; Playfair Display serif font for numbers

### Sections
1. **Navbar:** Hamburger menu with full-screen overlay; typing animation cycling through roles
2. **Hero Section:** Large name title, subtitle, hero image (code/coffee theme), CONTACT and RESUME buttons, ASAP'26 availability badge
3. **Education Section:** Scroll-triggered stacking accordion with unique descriptions per institution
4. **Works Section:** Split into Projects/Experience with floating pill-style tab switcher
5. **About Section:** Skills grid, marquee animation, profile picture with bio
6. **Contact Section:** Styled form on dark background

### Assets
- `hero.jpg` - Code/coffee themed image in hero section
- `profile.jpg` / `profile-about.jpg` - Professional photo in About section
- `resume.pdf` - Linked to Resume button

## What's Been Implemented

### Completed Features (December 2024 - January 2025)
- ✅ Full single-page portfolio with beige/soft-black color scheme
- ✅ Opening "SRB" curtain reveal animation
- ✅ Navbar with typing animation (AI Engineer, ML Engineer, etc.)
- ✅ Hero section with code/coffee image, subtle shadow and vignette overlay
- ✅ Education section with scroll-based stacking accordion and unique descriptions
- ✅ Works section with floating pill tab switcher (React Portal)
- ✅ About section with skills grid, marquee, and profile photo
- ✅ Contact form (UI only - backend not implemented)
- ✅ Scroll progress indicator
- ✅ Back to top button
- ✅ Custom cursor
- ✅ Asset management system (`/frontend/src/config/assets.js`)

### Content Updates (Latest)
- ✅ Hero message: "Open to job opportunities worldwide. Passionate about building polished, reliable, scalable systems and clean UIs."
- ✅ About Me bio updated with NYU graduate info, cloud platforms, LLM work, and personal interests
- ✅ Education descriptions customized for each institution (NYU, UIC, Indus, Seven Hills)
- ✅ Hero image gradient refined with subtle vignette and shadow

## Architecture

```
/app
├── backend/
│   ├── server.py (FastAPI - minimal)
│   └── .env
└── frontend/
    ├── public/
    │   ├── images/ (hero.jpg, profile.jpg, profile-about.jpg)
    │   └── files/ (resume.pdf)
    ├── src/
    │   ├── components/
    │   │   ├── Hero.jsx
    │   │   ├── Navbar.jsx
    │   │   ├── EducationSection.jsx
    │   │   ├── WorksSection.jsx
    │   │   ├── FloatingTabs.jsx (React Portal)
    │   │   ├── AboutSection.jsx
    │   │   ├── Contact.jsx
    │   │   └── ...
    │   ├── config/assets.js
    │   ├── data/mock.js
    │   └── App.js
    └── tailwind.config.js
```

## Backlog

### P1 - Next Up
- [ ] Implement backend for Contact Form (POST /api/contact to MongoDB)
- [ ] Create comprehensive README.md

### P2 - Future
- [ ] Delete unused files (ThemeContext.jsx, ThemeToggle.jsx)
- [ ] Monitor floating tabs stability

## Technical Notes
- Frontend: React, TailwindCSS, react-intersection-observer
- Backend: FastAPI (planned for contact form)
- Database: MongoDB (planned)
- Floating tabs use React Portal to avoid z-index issues
