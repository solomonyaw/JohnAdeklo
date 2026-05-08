document.addEventListener('DOMContentLoaded', () => {
  
  // Audio Player
  const audio = document.getElementById('bg-audio');
  const audioBtn = document.getElementById('audio-toggle');
  let isPlaying = false;

  audioBtn.addEventListener('click', () => {
    if (isPlaying) {
      audio.pause();
      audioBtn.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 5L6 9H2v6h4l5 4V5z"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/></svg>';
    } else {
      audio.play().catch(e => console.log('Autoplay blocked'));
      audioBtn.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>';
    }
    isPlaying = !isPlaying;
  });

  // Reveal animations on scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  // Fireflies generator
  const container = document.getElementById('fireflies-container');
  if (container) {
    for (let i = 0; i < 30; i++) {
        const firefly = document.createElement('div');
        firefly.style.position = 'absolute';
        firefly.style.width = '2px';
        firefly.style.height = '2px';
        firefly.style.backgroundColor = '#f59e0b';
        firefly.style.borderRadius = '50%';
        firefly.style.opacity = '0';
        firefly.style.left = Math.random() * 100 + '%';
        firefly.style.top = Math.random() * 100 + '%';
        firefly.style.boxShadow = '0 0 8px #f59e0b';
        container.appendChild(firefly);
    
        animateFirefly(firefly);
      }
  }

  function animateFirefly(el) {
    const duration = 10000 + Math.random() * 20000;
    const keyframes = [
      { opacity: 0, transform: 'translate(0, 0)' },
      { opacity: 0.4, transform: `translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px)` },
      { opacity: 0.2, transform: `translate(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100}px)` },
      { opacity: 0, transform: `translate(${Math.random() * 300 - 150}px, ${Math.random() * 300 - 150}px)` }
    ];

    el.animate(keyframes, {
      duration: duration,
      iterations: Infinity,
      easing: 'ease-in-out'
    });
  }
  
  // Mobile Nav Toggle
  const mobileToggle = document.getElementById('mobile-nav-toggle');
  const navContainer = document.getElementById('nav-links');
  if (mobileToggle && navContainer) {
    mobileToggle.addEventListener('click', () => {
        navContainer.classList.toggle('nav-active');
    });

    // Close menu when clicking a link
    navContainer.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navContainer.classList.remove('nav-active');
      });
    });
  }
});
