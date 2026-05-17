/* ========================== */
/* HAMBURGER MENU             */
/* ========================== */

function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

/* ========================== */
/* DARK MODE TOGGLE           */
/* ========================== */

function toggleTheme() {
  const html = document.documentElement;
  const newTheme = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
}

function initializeTheme() {
  const saved = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (saved) {
    document.documentElement.setAttribute('data-theme', saved);
  } else if (prefersDark) {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
}

/* ========================== */
/* INTRO SCREEN               */
/* ========================== */

function startSite() {
  const intro = document.getElementById('intro-screen');
  const ball = intro.querySelector('.intro-ball');

  ball.classList.add('launching');

  setTimeout(() => {
    intro.classList.add('fading');
  }, 300);

  setTimeout(() => {
    intro.style.display = 'none';
    document.body.style.overflow = '';
  }, 1000);
}

/* ========================== */
/* GOLF SWING TRANSITION      */
/* ========================== */

let isTransitioning = false;

function golfNavigate(targetSection) {
  if (isTransitioning) return;
  isTransitioning = true;

  const overlay    = document.getElementById('golf-transition');
  const swingGroup = document.querySelector('.swing-group');
  const launcher   = document.querySelector('.ball-launcher');
  const ballArc    = document.querySelector('.ball-arc');

  // Show overlay
  overlay.classList.add('active');

  // Slight delay then start swing
  setTimeout(() => {
    swingGroup.classList.add('swinging');
  }, 280);

  // Launch ball just before impact
  setTimeout(() => {
    launcher.classList.add('flying');
    ballArc.classList.add('flying');
  }, 660);

  // Scroll to target mid-flight
  setTimeout(() => {
    const target = document.getElementById(targetSection);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  }, 820);

  // Fade out overlay
  setTimeout(() => {
    overlay.classList.remove('active');
  }, 1750);

  // Full cleanup
  setTimeout(() => {
    swingGroup.classList.remove('swinging');
    launcher.classList.remove('flying');
    ballArc.classList.remove('flying');
    isTransitioning = false;
  }, 2100);
}

/* ========================== */
/* TYPING ANIMATION           */
/* ========================== */

function initializeTypingAnimation() {
  const el = document.querySelector('.typing-text');
  if (!el) return;

  const texts = ['Software Engineer', 'CS Student @ UW', 'DoorDash SWE Intern', 'Golf Enthusiast'];
  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let speed = 100;

  function type() {
    const current = texts[textIndex];

    if (isDeleting) {
      el.textContent = current.substring(0, charIndex - 1);
      charIndex--;
      speed = 50;
    } else {
      el.textContent = current.substring(0, charIndex + 1);
      charIndex++;
      speed = 100;
    }

    if (!isDeleting && charIndex === current.length) {
      speed = 2000;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      textIndex = (textIndex + 1) % texts.length;
      speed = 500;
    }

    setTimeout(type, speed);
  }

  type();
}

/* ========================== */
/* SCROLL FADE ANIMATIONS     */
/* ========================== */

function initializeAnimations() {
  const animated = document.querySelectorAll('.timeline-item, .fade-animate');
  if (!animated.length) return;

  animated.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.6s ease-out';
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      } else {
        entry.target.style.opacity = '0';
        entry.target.style.transform = 'translateY(20px)';
      }
    });
  }, { root: null, rootMargin: '0px', threshold: 0.15 });

  animated.forEach(el => observer.observe(el));
}

/* ========================== */
/* SKILL BARS                 */
/* ========================== */

function initializeSkillBars() {
  document.querySelectorAll('.skill-progress').forEach(bar => {
    const progress = bar.getAttribute('data-progress');
    bar.style.setProperty('--progress', `${progress}%`);
  });
}

/* ========================== */
/* BOOT                       */
/* ========================== */

document.addEventListener('DOMContentLoaded', () => {
  initializeTheme();

  // Lock scroll while intro plays
  document.body.style.overflow = 'hidden';

  initializeAnimations();
  initializeTypingAnimation();
  initializeSkillBars();

  // Pre-set golfer to address position
  const swingGroup = document.querySelector('.swing-group');
  if (swingGroup) swingGroup.style.transform = 'rotate(-42deg)';
});
