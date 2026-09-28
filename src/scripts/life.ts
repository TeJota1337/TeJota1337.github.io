const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
const hoverCapable = matchMedia("(hover: hover)").matches;

export function initFloaters() {
  if (reduced || !hoverCapable) return;
  const hero = document.querySelector<HTMLElement>(".hero");
  const floaters = document.querySelectorAll<HTMLElement>(".floater");
  if (!hero || !floaters.length) return;

  hero.addEventListener("pointermove", (e) => {
    const mx = e.clientX / window.innerWidth - 0.5;
    const my = e.clientY / window.innerHeight - 0.5;
    floaters.forEach((f) => {
      const depth = Number(f.dataset.depth || 1);
      f.style.transform = `translate(${mx * -40 * depth}px, ${my * -30 * depth}px)`;
    });
  });
}

export function initChamberTilt() {
  if (reduced || !hoverCapable) return;
  const plates = document.querySelectorAll<HTMLElement>(".chamber-number");
  plates.forEach((plate) => {
    const chamber = plate.closest<HTMLElement>(".chamber");
    if (!chamber) return;
    chamber.addEventListener("pointermove", (e) => {
      const r = chamber.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      plate.style.transform = `perspective(500px) rotateX(${py * -10}deg) rotateY(${px * 14}deg)`;
    });
    chamber.addEventListener("pointerleave", () => {
      plate.style.transform = "";
    });
  });
}

export function initMagneticButton() {
  if (reduced || !hoverCapable) return;
  const btn = document.getElementById("view-portfolio");
  if (!btn) return;
  const radius = 70;
  document.addEventListener("pointermove", (e) => {
    const r = btn.getBoundingClientRect();
    const cx = r.left + r.width / 2;
    const cy = r.top + r.height / 2;
    const dx = e.clientX - cx;
    const dy = e.clientY - cy;
    const dist = Math.hypot(dx, dy);
    if (dist < radius) {
      const pull = (1 - dist / radius) * 0.35;
      btn.style.transform = `translate(${dx * pull}px, ${dy * pull}px)`;
    } else {
      btn.style.transform = "";
    }
  });
}

export function initGlitch() {
  if (reduced) return;
  const targets = document.querySelectorAll<HTMLElement>(".highlight");
  if (!targets.length) return;
  const tick = () => {
    const el = targets[Math.floor(Math.random() * targets.length)];
    el.classList.add("glitching");
    setTimeout(() => el.classList.remove("glitching"), 220);
    setTimeout(tick, 4000 + Math.random() * 5000);
  };
  setTimeout(tick, 3000);
}
