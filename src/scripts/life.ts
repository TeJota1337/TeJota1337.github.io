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

export function initWaveDividers() {
  if (reduced) return;
  const dividers = document.querySelectorAll<SVGSVGElement>(".wave-divider");
  if (!dividers.length) return;

  const smooth = (pts: [number, number][]) => {
    let d = `M${pts[0][0].toFixed(1)},${pts[0][1].toFixed(1)}`;
    for (let i = 0; i < pts.length - 1; i++) {
      const p0 = pts[i - 1] || pts[i];
      const p1 = pts[i];
      const p2 = pts[i + 1];
      const p3 = pts[i + 2] || p2;
      const c1 = [p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6];
      const c2 = [p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6];
      d += ` C${c1[0].toFixed(1)},${c1[1].toFixed(1)} ${c2[0].toFixed(1)},${c2[1].toFixed(1)} ${p2[0].toFixed(1)},${p2[1].toFixed(1)}`;
    }
    return d;
  };

  const active = new Set<SVGSVGElement>();
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) active.add(entry.target as SVGSVGElement);
      else active.delete(entry.target as SVGSVGElement);
    });
  });
  dividers.forEach((d, i) => {
    (d as any)._seed = i * 1.7;
    observer.observe(d);
  });

  let raf = 0;
  const start = performance.now();
  const frame = (now: number) => {
    const t = (now - start) / 1000;
    active.forEach((svg) => {
      const path = svg.querySelector("path");
      if (!path) return;
      const seed = (svg as any)._seed || 0;
      const pts: [number, number][] = [];
      for (let i = 0; i <= 10; i++) {
        const x = i * 100;
        const y = 45 + Math.sin(i * 0.9 + t * 0.7 + seed) * 14 + Math.sin(i * 0.37 - t * 0.5 + seed * 2) * 8;
        pts.push([x, y]);
      }
      path.setAttribute("d", smooth(pts) + " L1000,101 L0,101 Z");
    });
    raf = requestAnimationFrame(frame);
  };
  raf = requestAnimationFrame(frame);
}

export function initTilt() {
  if (reduced || !hoverCapable) return;
  const cards = document.querySelectorAll<HTMLElement>(".project-card");
  cards.forEach((card) => {
    card.style.transformStyle = "preserve-3d";
    card.addEventListener("pointermove", (e) => {
      const r = card.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      card.style.transform = `perspective(700px) rotateX(${py * -6}deg) rotateY(${px * 8}deg)`;
    });
    card.addEventListener("pointerleave", () => {
      card.style.transform = "";
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
