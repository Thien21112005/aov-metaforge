/**
 * AOV MetaForge - Shared interface helpers: drawn icons, hero portraits, tier medals.
 */

const svgIcon = (paths) =>
  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths}</svg>`;

const LANE_ICONS = {
  top: svgIcon('<path d="M12 3l7 3v5c0 5-3 8-7 10-4-2-7-5-7-10V6z"/>'),
  jungle: svgIcon('<path d="M5 3l14 14M19 3L5 17M3 15l6 6M21 15l-6 6"/>'),
  mid: svgIcon('<path d="M12 3l6 9-6 9-6-9z"/><path d="M6 12h12"/>'),
  ad: svgIcon('<path d="M4 20L20 4M20 4h-6M20 4v6"/><path d="M6 10a8 8 0 0 1 8 8"/>'),
  sp: svgIcon('<path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.5-7 10-7 10z"/>'),
};

const UI_ICONS = {
  close: svgIcon('<path d="M6 6l12 12M18 6L6 18"/>'),
  prev: svgIcon('<path d="M15 5l-7 7 7 7"/>'),
  next: svgIcon('<path d="M9 5l7 7-7 7"/>'),
};

const heroImage = (hero, className = "") =>
  `<img class="hero-img ${className}" src="${hero.avatar}" alt="" loading="lazy" data-initial="${hero.name.charAt(0)}" />`;

const tierClass = (tier) => `tier-${String(tier).replace("+", "plus").toLowerCase()}`;

const tierMedal = (tier) => `<span class="tier-medal ${tierClass(tier)}">${tier}</span>`;

const laneShort = (lane) => t(`short.${lane}`);
const laneName = (lane) => t(`lane.${lane}`);
const roleName = (role) => t(`role.${role}`);
const teamName = (team) => t(`team.${team}`);

function isReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function findHero(id) {
  return HEROES_DATABASE.find((h) => h.id === id) || null;
}

/* A portrait that fails to load becomes the hero's initial on the same tile */
window.addEventListener(
  "error",
  (e) => {
    const img = e.target;
    if (!(img instanceof HTMLImageElement) || !img.classList.contains("hero-img")) return;
    const fallback = document.createElement("span");
    fallback.className = `${img.className} hero-img-fallback`;
    fallback.setAttribute("aria-hidden", "true");
    fallback.textContent = img.dataset.initial || "?";
    img.replaceWith(fallback);
  },
  true
);
