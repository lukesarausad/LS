function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function initializeAnimations() {
  // Select both timeline items and fade-animate elements
  const animatedElements = document.querySelectorAll('.timeline-item, .fade-animate');
  
  if (animatedElements.length === 0) return;

  // Set initial state for all elements
  animatedElements.forEach(element => {
      element.style.opacity = '0';
      element.style.transform = 'translateY(20px)';
      element.style.transition = 'all 0.6s ease-out';
  });

  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              // Fade in when visible
              entry.target.style.opacity = '1';
              entry.target.style.transform = 'translateY(0)';
          } else {
              // Fade out when not visible
              entry.target.style.opacity = '0';
              entry.target.style.transform = 'translateY(20px)';
          }
      });
  }, {
      root: null,
      rootMargin: '0px',
      threshold: 0.2
  });

  // Observe all elements
  animatedElements.forEach(element => {
      observer.observe(element);
  });
}

document.addEventListener('DOMContentLoaded', initializeAnimations);



