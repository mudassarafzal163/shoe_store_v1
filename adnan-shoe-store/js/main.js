/* ══════════════════════════════════════════════════════
   Adnan Shoe Store — main.js
   ══════════════════════════════════════════════════════ */

// ── 1. NAV: shrink on scroll ─────────────────────────
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
});

// ── 2. HAMBURGER MENU ────────────────────────────────
const hamburger  = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});

// Close mobile menu when a link is clicked
document.querySelectorAll('.mob-link').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
  });
});

// ── 3. HERO EMOJI CYCLING ─────────────────────────────
const shoes     = ['👟', '👞', '👠', '👡', '🥿', '👢', '🩴'];
const heroEmoji = document.getElementById('heroEmoji');
let emojiIndex  = 0;

if (heroEmoji) {
  setInterval(() => {
    emojiIndex = (emojiIndex + 1) % shoes.length;
    heroEmoji.style.opacity = '0';
    setTimeout(() => {
      heroEmoji.textContent  = shoes[emojiIndex];
      heroEmoji.style.opacity = '1';
    }, 300);
  }, 2500);
}

// ── 4. SCROLL REVEAL ─────────────────────────────────
const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.12 });

revealElements.forEach(el => revealObserver.observe(el));

// ── 5. SMOOTH ANCHOR LINKS (with nav offset) ─────────
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = navbar.offsetHeight + 16;
      const top    = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});
