/* ================================================
   ASSETS CONFIGURATION
   ================================================
   
   This file centralizes all asset paths for easy management.
   
   HOW TO UPDATE YOUR PORTFOLIO:
   
   1. PROFILE PHOTO:
      - Add your photo to: /public/images/profile.jpg (or .png)
      - The Hero and About sections will automatically use it
   
   2. RESUME:
      - Add your resume to: /public/files/resume.pdf
      - The Resume buttons will automatically link to it
   
   3. PROJECT IMAGES (if needed later):
      - Add images to: /public/images/projects/
      - Update the projects array in mock.js with image paths
   
   ================================================ */

// Image paths
export const images = {
  profile: '/images/profile.jpg',
  profileAbout: '/images/profile-about.jpg',
  heroImage: '/images/hero.jpg',
  placeholder: null,
};

// File paths
export const files = {
  resume: '/files/resume.pdf',
};

// Social links
export const socialLinks = {
  linkedin: 'https://linkedin.com/in/sachetbisi',
  github: 'http://github.com/Sachet-17',
  email: 'sb9229@nyu.edu',
};

// Helper function to check if image exists (returns placeholder if not)
export const getImageSrc = (imagePath, fallback = null) => {
  return imagePath || fallback;
};
