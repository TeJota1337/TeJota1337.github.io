import { gsap } from "gsap";

const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;

export function initGate() {
  const gate = document.getElementById("gate");
  const enterBtn = document.getElementById("enter");
  if (!gate || !enterBtn) return;

  if (reduced) {
    gate.classList.add("done");
    playHeroEntrance();
    return;
  }

  document.documentElement.style.overflow = "hidden";

  enterBtn.addEventListener("click", () => {
    gate.classList.add("opening");

    const slashes = document.querySelectorAll<HTMLElement>(".gate-slash");
    gsap.set(slashes, { opacity: 1, xPercent: -120 });
    slashes.forEach((slash, i) => {
      gsap.to(slash, {
        xPercent: 120,
        duration: 0.7,
        delay: 0.1 + i * 0.08,
        ease: "power3.in",
      });
    });

    setTimeout(() => {
      gate.classList.add("done");
      document.documentElement.style.overflow = "";
      playHeroEntrance();
    }, 1150);
  });
}

function playHeroEntrance() {
  gsap.from(".hero-eyebrow", { opacity: 0, x: -30, duration: 0.6, ease: "power3.out", delay: 0.1 });
  gsap.from(".hero h1", { opacity: 0, x: -60, rotate: -2, duration: 0.8, ease: "power3.out", delay: 0.2 });
  gsap.from(".hero .bio.lang-pt, .hero .bio.lang-en", {
    opacity: 0,
    x: 40,
    duration: 0.7,
    ease: "power3.out",
    delay: 0.4,
  });
  gsap.from(".hero-actions", { opacity: 0, y: 20, duration: 0.6, ease: "power3.out", delay: 0.55 });
  gsap.from(".hero-scroll-hint", { opacity: 0, duration: 0.8, delay: 0.9 });
}
