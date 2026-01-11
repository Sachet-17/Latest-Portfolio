# Sachet Ranjan Bisi - Portfolio Website

A modern, animated portfolio website for an AI/ML Engineer and Software Developer.

## 🌐 Live Website

**Visit the live portfolio:** [www.iamsrb.com](https://www.iamsrb.com)

## 🌐 Live Features

- **Opening Animation** - Curtain reveal with "SRB" logo
- **Typing Effect** - Rotating roles in navbar (AI Engineer, ML Engineer, Software Developer, Full Stack Enthusiast)
- **Scroll Progress Bar** - Shows reading progress at top
- **Custom Cursor** - Elegant dot + ring cursor on desktop
- **Floating Tabs** - Project/Experience switcher in Works section
- **Back to Top Button** - Quick navigation
- **Smooth Animations** - Throughout all sections

---

## 📁 Project Structure

```
/app
├── backend/                    # FastAPI backend (for future contact form)
│   ├── server.py
│   ├── requirements.txt
│   └── .env
│
└── frontend/                   # React frontend
    ├── public/
    │   ├── images/            # 📸 YOUR IMAGES GO HERE
    │   │   ├── hero.jpg       # Hero section image
    │   │   ├── profile.jpg    # About section photo
    │   │   └── profile-about.jpg (optional)
    │   │
    │   ├── files/             # 📄 YOUR FILES GO HERE
    │   │   └── resume.pdf     # Your resume
    │   │
    │   └── README.md
    │
    ├── src/
    │   ├── components/        # React components
    │   │   ├── Hero.jsx
    │   │   ├── EducationSection.jsx
    │   │   ├── WorksSection.jsx
    │   │   ├── AboutSection.jsx
    │   │   ├── Contact.jsx
    │   │   ├── Navbar.jsx
    │   │   ├── Footer.jsx
    │   │   ├── ScrollProgress.jsx
    │   │   ├── BackToTop.jsx
    │   │   ├── CustomCursor.jsx
    │   │   └── FloatingTabs.jsx
    │   │
    │   ├── config/
    │   │   └── assets.js      # Image & file paths config
    │   │
    │   ├── data/
    │   │   └── mock.js        # 📝 YOUR CONTENT HERE
    │   │
    │   ├── App.js
    │   └── App.css
    │
    └── package.json
```

---

## 🖼️ Adding Your Images

### Step 1: Prepare Your Images

| Image | Location | Recommended Size | Purpose |
|-------|----------|------------------|---------|
| `hero.jpg` | `/public/images/` | 1200x900px | Hero section (right side) |
| `profile.jpg` | `/public/images/` | 800x1000px | About section photo |
| `resume.pdf` | `/public/files/` | - | Downloadable resume |

### Step 2: Upload to GitHub

1. Go to your GitHub repository
2. Navigate to `frontend/public/images/`
3. Click "Add file" → "Upload files"
4. Drop your images and commit

### Step 3: Done!

Images will automatically display on your site after deployment.

---

## 📝 Updating Your Content

All text content is in `/frontend/src/data/mock.js`

### Personal Info
```javascript
export const personalInfo = {
  name: "Sachet Ranjan Bisi",
  email: "sb9229@nyu.edu",
  phone: "+1 (551) 998-3097",
  location: "New York, NY",
  linkedin: "https://linkedin.com/in/sachetbisi",
  github: "https://github.com/sacherbisi"
};
```

### Education
```javascript
export const education = [
  {
    id: 1,
    shortTitle: "NYU",
    degree: "Master of Science in Computer Engineering",
    institution: "New York University",
    location: "New York, NY",
    period: "Sep 2023 – May 2025",
    coursework: ["Machine Learning", "Artificial Intelligence", ...]
  },
  // Add more...
];
```

### Projects
```javascript
export const projects = [
  {
    id: 1,
    title: "Project Name",
    date: "October 2024",
    description: "Short description",
    longDescription: "Detailed description...",
    technologies: ["Python", "React", ...],
    achievements: [
      "Improved X by 25%",
      "Reduced Y by 50%"
    ]
  },
  // Add more...
];
```

### Experience
```javascript
export const experience = [
  {
    id: 1,
    role: "Software Engineer Intern",
    company: "Company Name",
    period: "May 2024 – August 2024",
    description: "Role description...",
    technologies: ["Python", "AWS", ...],
    achievements: [
      "Achieved X",
      "Improved Y by 40%"
    ]
  },
  // Add more...
];
```

### Skills
```javascript
export const skills = {
  languages: ["Python", "SQL", "C++", "Java", ...],
  frameworks: ["React", "Node.js", "Flask", ...],
  concepts: ["DSA", "DBMS", "OOP", ...],
  cloud: ["AWS", "GCP", "Docker", ...],
  tools: ["VS Code", "Git", "Postman", ...]
};
```

---

## 🔗 Updating Links

### Social Links
Edit `/frontend/src/config/assets.js`:

```javascript
export const socialLinks = {
  linkedin: 'https://linkedin.com/in/YOUR_USERNAME',
  github: 'https://github.com/YOUR_USERNAME',
  email: 'your.email@example.com',
};
```

### Resume Link
The resume button links to `/files/resume.pdf`. Just upload your PDF to that location.

---

## 🎨 Color Scheme

The portfolio uses a warm beige and soft black theme:

| Color | Hex | Usage |
|-------|-----|-------|
| Beige (Light) | `#F5F1E8` | Light section backgrounds |
| Soft Black | `#0F0F0F` | Dark section backgrounds, text |
| Accent Gold | `#C5B99A` | Highlights, numbers, active states |
| Gray | Various | Secondary text, borders |

---

## 📱 Sections Overview

1. **Hero** - Name, role typing effect, hero image, CTA buttons
2. **Education** - Accordion-style with stacking animation
3. **Works** - Tabbed Projects/Experience with floating switcher
4. **About** - Skills grid, marquee, bio, profile photo
5. **Contact** - Contact information with email, phone, and social links
6. **Footer** - Copyright and links

---

---

## 🚀 Local Development

```bash
# Frontend
cd frontend
yarn install
yarn start

# Backend (if needed)
cd backend
pip install -r requirements.txt
uvicorn server:app --reload --port 8001
```

---

## 📦 Deployment

The site is deployed on **Vercel** and live at [www.iamsrb.com](https://www.iamsrb.com).

**To deploy to Vercel:**
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Set the **Root Directory** to `frontend`
4. Vercel will auto-detect the React app and deploy

For local build:
```bash
cd frontend
npm install --legacy-peer-deps
npm run build
```

---

## 🛠️ Tech Stack

- **Frontend:** React, TailwindCSS, Framer Motion concepts
- **Deployment:** Vercel
- **Fonts:** System fonts + Playfair Display (for numbers)

---

## 📄 License

Personal portfolio - feel free to use as inspiration for your own!

---

## 👤 Contact

**Sachet Ranjan Bisi**
- Email: sb9229@nyu.edu
- LinkedIn: [sachetbisi](https://linkedin.com/in/sachetbisi)
- GitHub: [sacherbisi](https://github.com/sacherbisi)
