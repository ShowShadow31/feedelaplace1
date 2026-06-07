const SHAPE_CURVE = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none" aria-hidden="true"><path fill="currentColor" d="M615.2,96.7C240.2,97.8,0,18.9,0,0v100h1000V0C1000,19.2,989.8,96,615.2,96.7z"/></svg>`;

const SHAPE_TILT = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2600 131.1" preserveAspectRatio="none" aria-hidden="true">
  <path fill="currentColor" d="M0 0L2600 0 2600 69.1 0 0z"/>
  <path fill="currentColor" style="opacity:0.5" d="M0 0L2600 0 2600 69.1 0 69.1z"/>
  <path fill="currentColor" style="opacity:0.25" d="M2600 0L0 0 0 130.1 2600 69.1z"/>
</svg>`;

const SHAPE_WAVE_BRUSH = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 283.5 27.8" preserveAspectRatio="none" aria-hidden="true">
  <path fill="currentColor" d="M283.5,9.7c0,0-7.3,4.3-14,4.6c-6.8,0.3-12.6,0-20.9-1.5c-11.3-2-33.1-10.1-44.7-5.7 s-12.1,4.6-18,7.4c-6.6,3.2-20,9.6-36.6,9.3C131.6,23.5,99.5,7.2,86.3,8c-1.4,0.1-6.6,0.8-10.5,2c-3.8,1.2-9.4,3.8-17,4.7 c-3.2,0.4-8.3,1.1-14.2,0.9c-1.5-0.1-6.3-0.4-12-1.6c-5.7-1.2-11-3.1-15.8-3.7C6.5,9.2,0,10.8,0,10.8V0h283.5V9.7z"/>
</svg>`;

function injectShapes() {
  document.querySelectorAll("[data-shape-top='curve']").forEach((el) => {
    const wrap = document.createElement("div");
    wrap.className = "shape shape-top shape-curve";
    wrap.innerHTML = SHAPE_CURVE;
    el.prepend(wrap);
  });
  document.querySelectorAll("[data-shape-bottom='curve']").forEach((el) => {
    const wrap = document.createElement("div");
    wrap.className = "shape shape-bottom shape-curve";
    wrap.innerHTML = SHAPE_CURVE;
    el.append(wrap);
  });
  document.querySelectorAll("[data-shape-top='tilt']").forEach((el) => {
    const wrap = document.createElement("div");
    wrap.className = "shape shape-top shape-tilt";
    wrap.innerHTML = SHAPE_TILT;
    el.prepend(wrap);
  });
  document.querySelectorAll("[data-shape-bottom='tilt']").forEach((el) => {
    const wrap = document.createElement("div");
    wrap.className = "shape shape-bottom shape-tilt";
    wrap.innerHTML = SHAPE_TILT;
    el.append(wrap);
  });
  document.querySelectorAll("[data-shape-bottom='wave']").forEach((el) => {
    const wrap = document.createElement("div");
    wrap.className = "shape shape-bottom shape-wave";
    wrap.innerHTML = SHAPE_WAVE_BRUSH;
    el.append(wrap);
  });
}

document.addEventListener("DOMContentLoaded", injectShapes);
