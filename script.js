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

function animateValue(element, newValue) {
    element.innerHTML = '';
    
    const number = newValue.toString();
    const digitSpan = document.createElement('span');
    digitSpan.className = 'counter-digit';
    digitSpan.textContent = number;
    
    digitSpan.style.transform = 'translateY(20px)';
    digitSpan.style.opacity = '0';
    element.appendChild(digitSpan);
    
    setTimeout(() => {
        digitSpan.style.transform = 'translateY(0)';
        digitSpan.style.opacity = '1';
    }, 50);
}

function updateCounter() {
    const counterElement = document.getElementById('counter');
    
    // Create a hidden element to store Counter.dev's count
    const counterValueElement = document.createElement('div');
    counterValueElement.style.display = 'none';
    counterValueElement.className = 'counter-value';
    document.body.appendChild(counterValueElement);

    // Observe changes to the counter value
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.type === 'childList') {
                const count = parseInt(counterValueElement.textContent) || 0;
                if (count > 0) {  // Only animate if we have a valid count
                    animateValue(counterElement, count);
                }
            }
        });
    });

    observer.observe(counterValueElement, {
        childList: true,
        characterData: true,
        subtree: true
    });
}

// Initialize when page loads
window.addEventListener('load', updateCounter);


document.addEventListener('DOMContentLoaded', initializeAnimations);



