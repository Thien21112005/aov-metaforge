/**
 * AOV MetaForge - Application Coordinator & Catalog View
 */

document.addEventListener("DOMContentLoaded", () => {
  // 0. Interface language
  applyStaticI18n();
  initLanguageSwitch();

  // 1. Initialize Core Managers
  window.gachaManager = new GachaManager();
  window.draftManager = new DraftManager();

  // 2. Tab Navigation
  const navTabs = document.querySelectorAll(".nav-tab");
  const tabPanels = document.querySelectorAll(".tab-panel");

  navTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      if (typeof sounds !== "undefined") sounds.playClick();
      navTabs.forEach((other) => {
        other.classList.remove("active");
        other.removeAttribute("aria-current");
      });
      tabPanels.forEach((p) => p.classList.remove("active"));

      tab.classList.add("active");
      tab.setAttribute("aria-current", "page");
      const targetPanel = document.getElementById(tab.dataset.target);
      if (targetPanel) {
        targetPanel.classList.add("active");
        document.dispatchEvent(new CustomEvent("aov:tabchange", { detail: { target: tab.dataset.target } }));
        // A leftover transform would break the fixed hero sheet, so clear it after the fade
        if (window.gsap && !isReducedMotion()) {
          window.gsap.fromTo(
            targetPanel,
            { opacity: 0, y: 8 },
            { opacity: 1, y: 0, duration: 0.25, ease: "power2.out", clearProps: "all" }
          );
        }
      }
    });
  });

  // 3. Sound Toggle Button
  const btnSound = document.getElementById("btn-toggle-sound");
  if (btnSound && typeof sounds !== "undefined") {
    btnSound.classList.toggle("is-on", !sounds.muted);
    btnSound.setAttribute("aria-pressed", String(!sounds.muted));
    btnSound.addEventListener("click", () => {
      sounds.setMuted(!sounds.muted);
      btnSound.classList.toggle("is-on", !sounds.muted);
      btnSound.setAttribute("aria-pressed", String(!sounds.muted));
    });
  }

  // 4. Hero Catalog View (Tab 3)
  initHeroCatalog();

  // 5. Global Hero Detail Modal
  initHeroDetailModal();

});

function initLanguageSwitch() {
  const buttons = document.querySelectorAll(".lang-btn");
  const sync = () => {
    buttons.forEach((btn) => {
      const on = btn.dataset.lang === currentLang;
      btn.classList.toggle("active", on);
      btn.setAttribute("aria-pressed", String(on));
    });
  };
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (typeof sounds !== "undefined") sounds.playClick();
      setLanguage(btn.dataset.lang);
      sync();
    });
  });
  sync();
}

function initHeroCatalog() {
  const container = document.getElementById("catalog-grid");
  const countEl = document.getElementById("catalog-count");
  const searchInput = document.getElementById("catalog-search");
  const laneButtons = document.querySelectorAll(".catalog-filter-btn");
  if (!container) return;

  let laneFilter = "all";

  function render() {
    const search = (searchInput?.value || "").trim().toLowerCase();
    const heroes = HEROES_DATABASE.filter((h) => {
      const matchSearch = !search || h.name.toLowerCase().includes(search) || h.id.toLowerCase().includes(search);
      const matchLane = laneFilter === "all" || h.lane === laneFilter || h.secondary_lane === laneFilter;
      return matchSearch && matchLane;
    }).sort(compareHeroes);

    if (countEl) countEl.textContent = t("catalog.count", { n: heroes.length });

    if (heroes.length === 0) {
      container.innerHTML = `<p class="grid-empty">${t("catalog.empty")}</p>`;
      return;
    }

    container.innerHTML = heroes
      .map((h) => `
        <button class="catalog-card" data-hero-id="${h.id}" aria-label="${t("catalog.open", { name: h.name })}">
          ${heroImage(h, "catalog-img")}
          ${tierMedal(h.tier)}
          <span class="catalog-lane">${LANE_ICONS[h.lane] || ""}</span>
          <span class="catalog-info">
            <span class="catalog-name">${h.name}</span>
            <span class="catalog-role">${h.roles.map(roleName).join(", ")}</span>
          </span>
        </button>
      `)
      .join("");
  }

  container.addEventListener("click", (e) => {
    const card = e.target.closest(".catalog-card");
    if (card) showHeroDetail(findHero(card.dataset.heroId));
  });

  searchInput?.addEventListener("input", render);

  laneButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (typeof sounds !== "undefined") sounds.playClick();
      laneFilter = btn.dataset.lane;
      laneButtons.forEach((b) => {
        b.classList.toggle("active", b === btn);
        b.setAttribute("aria-pressed", String(b === btn));
      });
      render();
    });
  });

  document.addEventListener("aov:langchange", render);
  render();
}

function initHeroDetailModal() {
  const modal = document.getElementById("hero-detail-modal");
  const content = document.getElementById("hero-detail-content");
  if (!modal) return;

  document.getElementById("detail-modal-close")?.addEventListener("click", () => modal.close());

  // A click on the backdrop lands on the dialog element itself
  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.close();
  });

  content?.addEventListener("click", (e) => {
    const chip = e.target.closest(".clickable-chip");
    if (chip) showHeroDetail(findHero(chip.dataset.heroId));
  });

  document.addEventListener("aov:langchange", () => {
    if (modal.open && modal.dataset.heroId) showHeroDetail(findHero(modal.dataset.heroId));
  });
}

function skillTypeLabel(type) {
  const isUlt = /Chiêu cuối/.test(type);
  const base = type.replace(/\s*\(Chiêu cuối\)/, "");
  if (currentLang === "vi") return base;
  if (isUlt) return t("skill.ult");
  return base.replace("Nội tại", "Passive").replace("Chiêu", "Skill");
}

function skillPanelHtml(skill) {
  const description = (skill.description || t("detail.noDesc")).replace(/\n/g, "<br/>");
  return `
    <div class="skill-head">
      <span class="skill-type">${skillTypeLabel(skill.type)}</span>
      <h3 class="skill-name">${skill.name}</h3>
    </div>
    <div class="skill-desc" lang="vi">${description}</div>
  `;
}

function heroChipsHtml(ids, fallback, tone) {
  const chips = (ids || [])
    .map(findHero)
    .filter(Boolean)
    .map((c) => `
      <button class="hero-chip clickable-chip tone-${tone}" data-hero-id="${c.id}">
        ${heroImage(c, "hero-chip-img")}
        <span>${c.name}</span>
      </button>
    `)
    .join("");
  return chips || `<span class="chips-fallback">${fallback}</span>`;
}

function showHeroDetail(hero) {
  if (!hero) return;
  if (typeof sounds !== "undefined") sounds.playClick();
  const modal = document.getElementById("hero-detail-modal");
  const contentEl = document.getElementById("hero-detail-content");
  if (!modal || !contentEl) return;

  const skills = hero.skills || [];
  const dmgKey = hero.damage_type === "magic" ? "magic" : hero.damage_type === "true_damage" ? "true" : "physical";
  const mobility = hero.mobility || 50;
  const cc = hero.cc_rating || 50;
  const note = t("detail.dataNote");

  const skillsHtml = skills.length
    ? `
      <section class="detail-skills">
        <h3 class="detail-heading">${t("detail.skills")}</h3>
        <div class="skill-tabs" role="group" aria-label="${t("detail.skills")}">
          ${skills.map((sk, idx) => `
            <button class="skill-tab ${idx === 0 ? "active" : ""}" data-skill-idx="${idx}" aria-pressed="${idx === 0}">
              <img class="hero-img skill-icon" src="${sk.icon_url}" alt="" data-initial="${idx + 1}" />
              <span class="skill-tab-label">${skillTypeLabel(sk.type)}</span>
            </button>
          `).join("")}
        </div>
        <div class="skill-panel" id="detail-skill-preview" aria-live="polite">${skillPanelHtml(skills[0])}</div>
      </section>
    `
    : "";

  contentEl.innerHTML = `
    <header class="detail-header">
      <div class="detail-portrait">
        ${heroImage(hero, "detail-img")}
        ${tierMedal(hero.tier)}
      </div>
      <div class="detail-meta">
        <h2 id="detail-hero-name">${hero.name}</h2>
        <p class="detail-tags">
          <span class="detail-lane">${LANE_ICONS[hero.lane] || ""}${laneName(hero.lane)}</span>
          <span>${hero.roles.map(roleName).join(", ")}</span>
          <span>${t(`dmg.${dmgKey}`)}</span>
        </p>
        <div class="detail-meters">
          <div class="metric-row">
            <span class="m-label">${t("detail.mobility")}</span>
            <div class="m-bar"><div class="m-fill meter-gilt" style="width:${mobility}%"></div></div>
            <span class="m-val">${mobility}</span>
          </div>
          <div class="metric-row">
            <span class="m-label">${t("detail.cc")}</span>
            <div class="m-bar"><div class="m-fill meter-gilt" style="width:${cc}%"></div></div>
            <span class="m-val">${cc}</span>
          </div>
        </div>
      </div>
    </header>

    ${note ? `<p class="detail-note">${note}</p>` : ""}

    ${hasAuthoredProfile(hero) ? `
      <div class="detail-prose" lang="vi">
        <p><strong>${t("detail.strengths")}:</strong> ${hero.strengths}</p>
        <p><strong>${t("detail.weaknesses")}:</strong> ${hero.weaknesses}</p>
      </div>
    ` : ""}

    ${skillsHtml}

    <section class="detail-relations">
      <div>
        <h3 class="detail-heading">${t("detail.counters")}</h3>
        <div class="hero-chips">${heroChipsHtml(hero.counters, t("detail.noCounters"), "win")}</div>
      </div>
      <div>
        <h3 class="detail-heading">${t("detail.counteredBy")}</h3>
        <div class="hero-chips">${heroChipsHtml(hero.countered_by, t("detail.noCounteredBy"), "lose")}</div>
      </div>
      <div>
        <h3 class="detail-heading">${t("detail.synergies")}</h3>
        <div class="hero-chips">${heroChipsHtml(hero.synergies, t("detail.noSynergies"), "syn")}</div>
      </div>
    </section>

    <section class="detail-tips">
      <h3 class="detail-heading">${t("detail.tips")}</h3>
      <p lang="vi">${hero.counter_tips || t("detail.noTips")}</p>
      ${hero.counter_items?.length ? `
        <p class="row-items"><strong>${t("detail.itemsLabel")}:</strong> ${hero.counter_items.map((it) => `<span class="item-pill">${it}</span>`).join(" ")}</p>
      ` : ""}
    </section>
  `;

  const preview = contentEl.querySelector("#detail-skill-preview");
  const tabs = contentEl.querySelectorAll(".skill-tab");
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((other) => {
        other.classList.toggle("active", other === tab);
        other.setAttribute("aria-pressed", String(other === tab));
      });
      if (typeof sounds !== "undefined") sounds.playClick();
      const skill = skills[Number(tab.dataset.skillIdx)];
      if (skill && preview) preview.innerHTML = skillPanelHtml(skill);
    });
  });

  modal.dataset.heroId = hero.id;
  if (!modal.open) modal.showModal();
  modal.scrollTop = 0;
}
