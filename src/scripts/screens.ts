const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;

function showScreen(name: string) {
  document.querySelectorAll<HTMLElement>(".screen").forEach((s) => {
    s.classList.toggle("active", s.dataset.screen === name);
  });
}

export function initScreens() {
  const splashLogo = document.getElementById("splash-logo");
  const splash = document.querySelector<HTMLElement>('[data-screen="splash"]');
  splash?.addEventListener("click", () => showScreen("menu"));
  splashLogo?.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") showScreen("menu");
  });

  // Header logo on other screens returns to the menu
  document.querySelectorAll<HTMLElement>(".app-header .logo-mark").forEach((logo) => {
    logo.addEventListener("click", () => showScreen("menu"));
  });

  const menuDots = Array.from(document.querySelectorAll<HTMLElement>(".menu-dots .dot"));
  const menuItems = Array.from(document.querySelectorAll<HTMLButtonElement>(".menu-item"));
  menuItems.forEach((item, i) => {
    item.addEventListener("mouseenter", () => {
      menuDots.forEach((d, di) => d.classList.toggle("on", di === i));
    });
    item.addEventListener("click", () => {
      const target = item.dataset.target;
      if (target === "certificates") {
        showScreen("certs");
      } else {
        setViewerCategory(target as "education" | "gamejam");
        showScreen("viewer");
      }
    });
  });

  // --- viewer (education / gamejam) ---
  const viewerScreen = document.querySelector<HTMLElement>('[data-screen="viewer"]');
  const viewerTitle = document.getElementById("viewer-title") as HTMLElement;
  const viewerItems = Array.from(document.querySelectorAll<HTMLElement>(".viewer-item"));
  const projectCards = Array.from(document.querySelectorAll<HTMLButtonElement>(".project-card"));
  let currentCat: "education" | "gamejam" = "education";
  let currentIndex = 0;

  function itemsFor(cat: string) {
    return viewerItems.filter((el) => el.dataset.cat === cat);
  }

  function setViewerMode(mode: "list" | "detail") {
    viewerScreen?.classList.toggle("mode-detail", mode === "detail");
  }

  function setViewerCategory(cat: "education" | "gamejam") {
    currentCat = cat;
    const isEn = document.documentElement.dataset.lang === "en";
    viewerTitle.textContent =
      cat === "education" ? (isEn ? "Projects" : "Projetos") : isEn ? "Game Jams" : "Jogos de Jam";
    projectCards.forEach((card) => {
      card.style.display = card.dataset.cat === cat ? "flex" : "none";
    });
    setViewerMode("list");
  }

  function renderDetail() {
    viewerItems.forEach((el) => {
      const match = el.dataset.cat === currentCat && Number(el.dataset.index) === currentIndex;
      el.classList.toggle("active", match);
    });
  }

  projectCards.forEach((card) => {
    card.addEventListener("click", () => {
      currentIndex = Number(card.dataset.index);
      renderDetail();
      setViewerMode("detail");
    });
  });

  document.getElementById("viewer-prev")?.addEventListener("click", () => {
    const items = itemsFor(currentCat);
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    renderDetail();
  });
  document.getElementById("viewer-next")?.addEventListener("click", () => {
    const items = itemsFor(currentCat);
    currentIndex = (currentIndex + 1) % items.length;
    renderDetail();
  });
  document.getElementById("viewer-back")?.addEventListener("click", () => {
    if (viewerScreen?.classList.contains("mode-detail")) {
      setViewerMode("list");
    } else {
      showScreen("menu");
    }
  });

  // --- certificates coverflow ---
  const certSlides = Array.from(document.querySelectorAll<HTMLElement>(".cert-slide"));
  const certDotsWrap = document.getElementById("cert-dots");
  let certIndex = 0;

  certSlides.forEach((_, i) => {
    const dot = document.createElement("button");
    dot.type = "button";
    dot.setAttribute("aria-label", `Slide ${i + 1}`);
    dot.addEventListener("click", () => {
      certIndex = i;
      renderCerts();
    });
    certDotsWrap?.appendChild(dot);
  });
  const certDots = Array.from(certDotsWrap?.querySelectorAll("button") || []);

  function renderCerts() {
    certSlides.forEach((slide, i) => {
      const diff = i - certIndex;
      const scale = diff === 0 ? 1 : 0.72;
      const opacity = diff === 0 ? 1 : 0.35;
      const x = diff * 210;
      slide.style.transform = `translateX(${x}px) scale(${scale})`;
      slide.style.opacity = String(opacity);
      slide.style.zIndex = diff === 0 ? "2" : "1";
    });
    certDots.forEach((d, i) => d.classList.toggle("on", i === certIndex));
  }
  renderCerts();

  certSlides.forEach((slide, i) => {
    slide.addEventListener("click", (e) => {
      if (i !== certIndex) {
        e.preventDefault();
        certIndex = i;
        renderCerts();
      }
    });
  });

  document.getElementById("certs-back")?.addEventListener("click", () => showScreen("menu"));

  // keyboard nav
  document.addEventListener("keydown", (e) => {
    const active = document.querySelector<HTMLElement>(".screen.active")?.dataset.screen;
    const inDetail = viewerScreen?.classList.contains("mode-detail");
    if (e.key === "Escape") {
      if (active === "viewer" && inDetail) setViewerMode("list");
      else if (active === "viewer" || active === "certs") showScreen("menu");
    }
    if (active === "viewer" && inDetail) {
      if (e.key === "ArrowUp") document.getElementById("viewer-prev")?.click();
      if (e.key === "ArrowDown") document.getElementById("viewer-next")?.click();
    }
    if (active === "certs") {
      if (e.key === "ArrowLeft") {
        certIndex = (certIndex - 1 + certSlides.length) % certSlides.length;
        renderCerts();
      }
      if (e.key === "ArrowRight") {
        certIndex = (certIndex + 1) % certSlides.length;
        renderCerts();
      }
    }
  });

  // language toggle re-renders the viewer title
  document.querySelectorAll<HTMLButtonElement>("[data-lang-btn]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const isEn = btn.dataset.langBtn === "en";
      if (currentCat === "education") {
        viewerTitle.textContent = isEn ? "Projects" : "Projetos";
      } else {
        viewerTitle.textContent = isEn ? "Game Jams" : "Jogos de Jam";
      }
    });
  });

  setViewerCategory("education");
}

export function initHoverGlitch() {
  if (reduced) return;
  const targets = document.querySelectorAll<HTMLElement>(
    ".menu-item, .glitch-target, .btn-back, .logo-mark, .viewer-title"
  );
  targets.forEach((el) => {
    el.addEventListener("mouseenter", () => {
      el.classList.add("glitching");
      setTimeout(() => el.classList.remove("glitching"), 220);
    });
  });
}
