const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

const updateHeaderState = () => {
  const header = document.querySelector('.site-header');

  if (!header) {
    return;
  }

  header.classList.toggle('nav--scrolled', window.scrollY > 24);
};

const initScrollReveal = () => {
  if (prefersReducedMotion.matches || !('IntersectionObserver' in window)) {
    document.querySelectorAll('[data-reveal]').forEach((element) => {
      element.classList.add('is-visible');
    });
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.16,
      rootMargin: '0px 0px -32px 0px'
    }
  );

  document.querySelectorAll('[data-reveal]').forEach((element) => {
    observer.observe(element);
  });
};

const initSmoothScroll = () => {
  document.querySelectorAll('a[href$="#work"], a[href="#work"]').forEach((link) => {
    link.addEventListener('click', (event) => {
      const url = new URL(link.href, window.location.href);
      const isSamePage = url.pathname === window.location.pathname;

      if (!isSamePage) {
        return;
      }

      const target = document.querySelector(url.hash);

      if (!target) {
        return;
      }

      event.preventDefault();
      target.scrollIntoView({ behavior: prefersReducedMotion.matches ? 'auto' : 'smooth' });
    });
  });
};

window.addEventListener('scroll', updateHeaderState, { passive: true });
window.addEventListener('DOMContentLoaded', () => {
  updateHeaderState();
  initSmoothScroll();
  initScrollReveal();
});
