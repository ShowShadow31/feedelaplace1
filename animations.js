/**
 * Animations type Elementor : pulse, slideInLeft, fadeIn au scroll
 */
(function () {
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function revealOnScroll() {
    const els = document.querySelectorAll(".animate-on-scroll");
    if (!els.length || prefersReduced) {
      els.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          const delay = parseInt(el.dataset.delay || "0", 10);
          setTimeout(() => {
            el.classList.add("is-visible");
          }, delay);
          io.unobserve(el);
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    els.forEach((el) => io.observe(el));
  }

  function initPulse() {
    document.querySelectorAll(".animate-pulse").forEach((el) => {
      if (!prefersReduced) el.classList.add("pulse-active");
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    revealOnScroll();
    initPulse();
  });
})();
