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
  profileAbout: '/images/profile-about.jpg', // Optional: different photo for about section
  heroImage: 'https://static.prod-images.emergentagent.com/jobs/d3affe26-89f0-47d3-bcc7-7db438d77ea6/images/2cb8049cae8b544692ca0e184b4e3413e2e1e1e2e5d3474534e8246e2b3a72d4.png',
  placeholder: null, // Will show placeholder if image doesn't exist
};

// File paths
export const files = {
  resume: '/files/resume.pdf',
};

// Social links
export const socialLinks = {
  linkedin: 'https://linkedin.com/in/sachetbisi',
  github: 'https://github.com/sacherbisi',
  email: 'sb9229@nyu.edu',
};

// Helper function to check if image exists (returns placeholder if not)
export const getImageSrc = (imagePath, fallback = null) => {
  return imagePath || fallback;
};
