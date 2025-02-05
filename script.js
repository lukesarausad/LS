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

function initializeFadeAnimations() {
  // Select all elements with fade-animate class
  const fadeElements = document.querySelectorAll('.fade-animate');
  
  if (fadeElements.length === 0) return;

  // Set initial state for all elements
  fadeElements.forEach(element => {
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
              // Optional: fade out when not visible
              // Comment out if you want elements to stay visible after first appearance
              entry.target.style.opacity = '0';
              entry.target.style.transform = 'translateY(20px)';
          }
      });
  }, {
      root: null,
      rootMargin: '0px',
      threshold: 0.2 // Trigger when 20% of the element is visible
  });

  // Observe all fade elements
  fadeElements.forEach(element => {
      observer.observe(element);
  });
}

// Call initialization when DOM is ready
document.addEventListener('DOMContentLoaded', initializeAnimations);
document.addEventListener('DOMContentLoaded', initializeFadeAnimations);


