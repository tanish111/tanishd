document.addEventListener('DOMContentLoaded', function () {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const links = {
    linkedin: 'https://www.linkedin.com/in/tanish-desai-73161b24a/',
    github: 'https://github.com/tanish111',
    scholar: 'https://scholar.google.com/citations?user=LepFP6UAAAAJ&hl=en',
    resume: 'https://drive.google.com/file/d/1O3mUBuE4jUiXtE_UVTbiCJyGxjH5clRA/view?usp=sharing'
  };

  const setHref = (id, href) => { const el = document.getElementById(id); if (el) el.href = href; };
  setHref('link-linkedin', links.linkedin);
  setHref('link-github', links.github);
  setHref('link-scholar', links.scholar);
  setHref('link-resume', links.resume);
  setHref('link-scholar-inline', links.scholar);
  setHref('link-resume-inline', links.resume);

  const ictai = document.getElementById('ictai-paper');
  if (ictai) ictai.href = links.scholar;

  // Progress Bar Animation
  const progressBar = document.getElementById('progressBar');
  
  if (progressBar) {
    // Set initial progress (you can change this value, e.g., 35 for 35%)
    let currentProgress = 40; // This represents where you are now (ends at second flag)
    
    // Animate progress bar
    const animateProgress = () => {
      progressBar.style.width = currentProgress + '%';
    };
    
    // Start animation after a short delay
    setTimeout(() => {
      animateProgress();
    }, 300);
  }
});
