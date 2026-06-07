document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".tri-carousel").forEach((carousel) => {
    const track = carousel.querySelector(".tri-carousel-track");
    const slides = carousel.querySelectorAll(".tri-carousel-slide");
    const prev = carousel.querySelector(".tri-carousel-btn.prev");
    const next = carousel.querySelector(".tri-carousel-btn.next");
    if (!track || slides.length < 2) return;

    let index = 0;
    const update = () => {
      track.style.transform = `translateX(-${index * 100}%)`;
    };

    prev?.addEventListener("click", () => {
      index = (index - 1 + slides.length) % slides.length;
      update();
    });

    next?.addEventListener("click", () => {
      index = (index + 1) % slides.length;
      update();
    });

    setInterval(() => {
      index = (index + 1) % slides.length;
      update();
    }, 4000);
  });
});
