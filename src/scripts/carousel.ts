import EmblaCarousel from "embla-carousel";

export function initCarousels() {
  const roots = document.querySelectorAll<HTMLElement>("[data-embla]");

  roots.forEach((root) => {
    const viewport = root.querySelector<HTMLElement>(".embla__viewport");
    const slides = Array.from(root.querySelectorAll<HTMLElement>(".embla__slide"));
    if (!viewport || slides.length === 0) return;

    const emblaApi = EmblaCarousel(viewport, {
      align: "center",
      loop: false,
      skipSnaps: false,
      dragFree: false,
    });

    const dotsContainer = root.querySelector<HTMLElement>("[data-embla-dots]");
    const dots: HTMLButtonElement[] = [];
    if (dotsContainer) {
      emblaApi.scrollSnapList().forEach((_, index) => {
        const dot = document.createElement("button");
        dot.type = "button";
        dot.className = "embla__dot";
        dot.setAttribute("aria-label", `Slide ${index + 1}`);
        dot.addEventListener("click", () => emblaApi.scrollTo(index));
        dotsContainer.appendChild(dot);
        dots.push(dot);
      });
    }

    const updateDots = () => {
      const selected = emblaApi.selectedScrollSnap();
      dots.forEach((dot, i) => dot.setAttribute("aria-current", String(i === selected)));
    };

    const tweenScale = () => {
      const progress = emblaApi.scrollProgress();
      const snaps = emblaApi.scrollSnapList();
      snaps.forEach((snap, i) => {
        const diff = snap - progress;
        const scale = Math.max(0.72, 1 - Math.abs(diff) * 2.6);
        const opacity = Math.max(0.35, 1 - Math.abs(diff) * 2.4);
        const slide = slides[i];
        if (slide) {
          slide.style.transform = `scale(${scale})`;
          slide.style.opacity = String(opacity);
        }
      });
    };

    emblaApi.on("scroll", tweenScale);
    emblaApi.on("reInit", () => {
      tweenScale();
      updateDots();
    });
    emblaApi.on("select", updateDots);
    tweenScale();
    updateDots();

    root.querySelector("[data-embla-prev]")?.addEventListener("click", () => emblaApi.scrollPrev());
    root.querySelector("[data-embla-next]")?.addEventListener("click", () => emblaApi.scrollNext());
  });
}
