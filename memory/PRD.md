# Portfolio Website - Sachet Ranjan Bisi

## Original Problem Statement
Build a professional portfolio website for an AI/ML Engineer and Software Development Engineer. The content is sourced from the user's resume (Sachet_Bisi_Resume.pdf).

## Design Requirements (Final)
- **Layout:** Single, continuous-scrolling page inspired by zunedaalim.com
- **Color Scheme:** Warm beige (#F5F1E8) background for light sections, soft black (#0F0F0F) for dark sections
- **Typography:** Large, bold headings with light font weights

## Sections
1. **Hero:** Opening animation with "SRB" initials on dark curtain, name reveal animation, profile photo placeholder
2. **Education:** "Where I studied" heading (same font as hero name), accordion-style stacking where items collapse to show only degree name, last item stays open, dark background
3. **Works:** Tabbed interface (Projects/Experience), separate numbering per tab, beige numbers, informational only (no images)
4. **About:** Bio, photo placeholder, skills marquee, technical skills grid
5. **Contact:** Form on dark background with social links

## Animations Implemented
- Opening curtain reveal animation with "SRB" logo
- Staggered text reveal for hero name
- Stacking scroll animation for education items
- Tab switching with underline animation in Works
- Fade-in transitions for all sections
- Hover effects throughout (lift, translate, color changes)
- Smooth scroll navigation

## Technical Stack
- **Frontend:** React, TailwindCSS, CSS3 animations
- **Backend:** FastAPI (placeholder - not implemented)
- **Database:** MongoDB (planned for contact form)

## What's Been Implemented
- [x] Single-page React portfolio with continuous scroll
- [x] Beige/soft black color scheme
- [x] Opening animation with curtain reveal
- [x] Hero section with name animation
- [x] Education section with stacking items
- [x] Works section with Projects/Experience tabs
- [x] About section with skills
- [x] Contact form (frontend only - MOCKED)
- [x] Responsive design
- [x] Smooth scroll navigation

## What's MOCKED
- Contact form submission (shows toast but doesn't save data)
- All content from mock.js file (no backend data)

## Pending Tasks

### P0 - Image Integration
- User needs to provide profile photo for Hero/About sections
- Project images (optional - currently removed per user request)

### P1 - Backend Contact Form
- Create `/api/contact` endpoint in FastAPI
- Save form submissions to MongoDB
- Connect frontend form to backend API

## File Structure
```
/app
├── backend
│   ├── .env
│   ├── requirements.txt
│   └── server.py
└── frontend
    ├── src
    │   ├── components
    │   │   ├── Hero.jsx (opening animation, name reveal)
    │   │   ├── EducationSection.jsx (stacking animation)
    │   │   ├── WorksSection.jsx (tabbed Projects/Experience)
    │   │   ├── AboutSection.jsx (bio, skills)
    │   │   ├── Contact.jsx (form)
    │   │   ├── Navbar.jsx (menu)
    │   │   └── Footer.jsx
    │   ├── data
    │   │   └── mock.js (all portfolio content)
    │   ├── App.css (animations, styles)
    │   └── App.js
    └── package.json
```

## Last Updated
January 2025 - Implemented all animation refinements as per user request
