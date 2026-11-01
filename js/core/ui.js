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

const heroImage = (hero, className = "", eager = false) =>
  `<img class="hero-img ${className}" src="${hero.avatar}" alt="" ${eager ? "" : 'loading="lazy"'} data-initial="${hero.name.charAt(0)}" />`;

const tierClass = (tier) => `tier-${String(tier).replace("+", "plus").toLowerCase()}`;

const tierMedal = (tier) => `
  <span class="tier-medal ${tierClass(tier)}">
    <svg viewBox="0 0 36 24" preserveAspectRatio="none" aria-hidden="true">
      <polygon class="facet-light" points="8,0 28,0 36,12 30,12 25,5 11,5 6,12 0,12" />
      <polygon class="facet-dark" points="0,12 6,12 11,19 25,19 30,12 36,12 28,24 8,24" />
      <polygon class="facet-plate" points="11,5 25,5 30,12 25,19 11,19 6,12" />
    </svg>
    <span class="medal-text">${tier}</span>
  </span>`;

const laneShort = (lane) => t(`short.${lane}`);
const laneName = (lane) => t(`lane.${lane}`);
const roleName = (role) => {
  const label = t(`role.${role}`);
  return label === `role.${role}` ? role : label;
};
const teamName = (team) => t(`team.${team}`);

function isReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/** About 100 heroes still carry placeholder text from the data sync; don't feature it. */
function hasAuthoredProfile(hero) {
  return !/^Tướng vị trí \S+, bộ kỹ năng cân bằng/.test(hero.strengths || "");
}

function findHero(id) {
  return HEROES_DATABASE.find((h) => h.id === id) || null;
}

const TIER_ORDER = { "S+": 0, S: 1, A: 2, B: 3 };

/** Strongest first, then by name, in every hero grid. */
function compareHeroes(a, b) {
  return (TIER_ORDER[a.tier] ?? 9) - (TIER_ORDER[b.tier] ?? 9) || a.name.localeCompare(b.name);
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
