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
3. **Education Section:** "WHERE I STUDIED/" - Scroll-triggered stacking accordion with unique descriptions per institution
4. **Works Section:** "SELECTED WORKS/" - Split into Projects/Experience with floating pill-style tab switcher
5. **About Section:** Skills grid, marquee animation, profile picture with bio
6. **Contact Section:** Functional form that saves to MongoDB

### Assets
- `hero.jpg` - Code/coffee themed image in hero section
- `profile.jpg` / `profile-about.jpg` - Professional photo in About section
- `resume.pdf` - Linked to Resume button

## What's Been Implemented

### Completed Features (January 2025)
- ✅ Full single-page portfolio with beige/soft-black color scheme
- ✅ Opening "SRB" curtain reveal animation
- ✅ Navbar with typing animation (AI Engineer, ML Engineer, etc.)
- ✅ Hero section with code/coffee image, subtle shadow and vignette overlay
- ✅ Hero message: "Open to job opportunities worldwide. Passionate about building polished, reliable, scalable systems and clean UIs."
- ✅ Education section "WHERE I STUDIED/" with scroll-based stacking accordion and unique descriptions
- ✅ Works section "SELECTED WORKS/" with floating pill tab switcher (React Portal)
- ✅ About section with updated bio (NYU grad, cloud platforms, LLM work, personal interests)
- ✅ **Contact form fully functional** - saves submissions to MongoDB
- ✅ Scroll progress indicator
- ✅ Back to top button
- ✅ Custom cursor
- ✅ Asset management system (`/frontend/src/config/assets.js`)

## Architecture

```
/app
├── backend/
│   ├── server.py (FastAPI with contact form endpoints)
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
    │   │   ├── Contact.jsx (connected to backend)
    │   │   └── ...
    │   ├── config/assets.js
    │   ├── data/mock.js
    │   └── App.js
    └── tailwind.config.js
```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/contact` | Submit contact form (name, email, message) |
| GET | `/api/contacts` | Get all contact submissions (admin) |

## Database Schema

**contacts collection:**
```json
{
  "id": "uuid",
  "name": "string",
  "email": "string", 
  "message": "string",
  "created_at": "datetime"
}
```

## Deployment
- Ready for deployment
- Can be deployed to any hosting platform (Vercel, Netlify, etc.)

## Backlog

### P2 - Future Enhancements
- [ ] Delete unused files (ThemeContext.jsx, ThemeToggle.jsx)
- [ ] Create comprehensive README.md
- [ ] Admin dashboard to view contact submissions
