# Portfolio Assets

This folder contains all your portfolio files and images.

## Folder Structure

```
public/
├── files/
│   └── resume.pdf        ← Your resume (PDF)
│
└── images/
    ├── profile.jpg       ← Main profile photo (Hero section)
    ├── profile-about.jpg ← About section photo (optional, uses profile.jpg if not provided)
    └── projects/         ← Project images (if needed)
        ├── project1.jpg
        └── project2.jpg
```

## How to Update

### 1. Profile Photo
- Add your photo as `images/profile.jpg`
- Recommended size: 800x1000px or similar portrait ratio
- Formats: .jpg, .png, .webp

### 2. Resume
- Add your resume as `files/resume.pdf`
- This will be linked from:
  - Hero page "Resume" button
  - Navigation menu "Resume" link

### 3. Project Images (Optional)
- Add project images to `images/projects/`
- Update `/src/data/mock.js` to include image paths

## Notes
- Images are automatically optimized by the build process
- Use descriptive filenames
- Keep image file sizes reasonable (<500KB for photos)
