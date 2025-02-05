function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// function animateTimeline() {
//   const timelineItems = document.querySelectorAll('.timeline-item');
  
//   if (timelineItems.length === 0) return;

//   const observer = new IntersectionObserver((entries) => {
//       entries.forEach(entry => {
//           if (entry.isIntersecting) {
//               entry.target.style.opacity = '1';
//               entry.target.style.transform = 'translateY(0)';
//           } else {
//               entry.target.style.opacity = '0';
//               entry.target.style.transform = 'translateY(20px)';
//           }
//       });
//   }, {
//       root: null,
//       rootMargin: '0px',
//       threshold: 0.3
//   });

//   timelineItems.forEach(item => {
//       observer.observe(item);
//   });
// }

function animateTimeline() {
  const timelineItems = document.querySelectorAll('.timeline-item');
  
  if (timelineItems.length === 0) return;

  // Create intersection observer for timeline animations
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
      threshold: 0.3
  });

  // Start observing all timeline items
  timelineItems.forEach(item => {
      observer.observe(item);
  });
}

// Initialize all animations when page loads
function initializeAnimations() {
  animateTimeline();
  
  // Add any other animation initializations here
}

// Call initialization when DOM is ready
document.addEventListener('DOMContentLoaded', initializeAnimations);


