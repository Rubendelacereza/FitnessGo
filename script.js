document.addEventListener('DOMContentLoaded', () => {
  // You can add more JavaScript functionality here
  console.log('DOM fully loaded and parsed');
});

//fitness.html
// Add smooth scrolling to buttons
document.querySelectorAll('button').forEach(button => {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    const target = e.target.getAttribute('href');
    if (target) {
      document.querySelector(target).scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Add parallax effect to hero section
window.addEventListener('scroll', () => {
  const hero = document.querySelector('.hero');
  const scrolled = window.pageYOffset;
  hero.style.transform = `translateY(${scrolled * 0.5}px)`;
});

// Add intersection observer for animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, {
  threshold: 0.1
});

document.querySelectorAll('.card, .testimonial').forEach(element => {
  element.style.opacity = '0';
  element.style.transform = 'translateY(20px)';
  observer.observe(element);
});

console.log('JavaScript is active.');