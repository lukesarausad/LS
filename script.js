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


// viewer Test


// function animateValue(element, oldValue, newValue) {
//     // Clear previous content
//     element.innerHTML = '';
    
//     // Convert to string and create element for the number
//     const number = newValue.toString();
//     const digitSpan = document.createElement('span');
//     digitSpan.className = 'counter-digit';
//     digitSpan.textContent = number;
    
//     // Add slide-up animation
//     digitSpan.style.transform = 'translateY(20px)';
//     digitSpan.style.opacity = '0';
//     element.appendChild(digitSpan);
    
//     // Trigger animation
//     setTimeout(() => {
//         digitSpan.style.transform = 'translateY(0)';
//         digitSpan.style.opacity = '1';
//     }, 50);
// }

// function initCounter() {
//     const counterElement = document.getElementById('counter');
//     let visitorCount = parseInt(localStorage.getItem('visitorCount') || '0');
    
//     // Animate from previous count to new count
//     animateValue(counterElement, visitorCount, visitorCount + 1);
    
//     // Update stored count
//     localStorage.setItem('visitorCount', (visitorCount + 1).toString());
// }

// // Initialize when page loads
// window.addEventListener('load', initCounter);


// Visitor Counter

// Animation function
function animateValue(element, newValue) {
    element.innerHTML = '';
    
    const number = newValue.toString();
    const digitSpan = document.createElement('span');
    digitSpan.textContent = number;
    
    digitSpan.style.transform = 'translateY(20px)';
    digitSpan.style.opacity = '0';
    element.appendChild(digitSpan);
    
    setTimeout(() => {
        digitSpan.style.transform = 'translateY(0)';
        digitSpan.style.opacity = '1';
    }, 50);
}

// Function to check if we're running locally
function isLocalhost() {
    return window.location.hostname === 'localhost' || 
           window.location.hostname === '127.0.0.1';
}

// Initialize counter
window.addEventListener('load', function() {
    const counterElement = document.getElementById('counter');
    
    if (isLocalhost()) {
        // Local development mode
        let localCount = parseInt(localStorage.getItem('visitorCount') || '0');
        localCount = Math.max(1, localCount + 1); // Ensure minimum of 1
        localStorage.setItem('visitorCount', localCount.toString());
        animateValue(counterElement, localCount);
    } else {
        // Production mode - just show 1
        animateValue(counterElement, "1");
    }
});


document.addEventListener('DOMContentLoaded', initializeAnimations);



