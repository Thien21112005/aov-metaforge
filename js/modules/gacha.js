/**
 * AOV MetaForge - Gacha Module
 * Multi-lane high-speed rolling reels, weighted meta drop rates, and archive history.
 */

class GachaManager {
  constructor() {
    this.isRolling = false;
    this.currentMode = "5"; // "1", "2", "3", "5", "custom"
    this.selectedLaneFor1 = "all"; // for mode 1
    this.activeLanes = ["top", "jungle", "mid", "ad", "sp"];
    this.lastResults = null;
    this.archive = this.loadArchive();

    this.initElements();
    this.bindEvents();
    this.renderReels();
    this.renderResult();
    this.renderArchiveList();
  }

  initElements() {
    this.modeButtons = document.querySelectorAll(".mode-btn");
    this.laneSelect1 = document.getElementById("gacha-lane-select-1");
    this.customLanesPanel = document.getElementById("gacha-custom-lanes");
    this.laneCheckboxes = document.querySelectorAll(".lane-chk");
    this.reelsContainer = document.getElementById("gacha-reels-container");
    this.btnRoll = document.getElementById("btn-roll-gacha");
    this.archiveContainer = document.getElementById("gacha-archive-list");
    this.btnClearArchive = document.getElementById("btn-clear-archive");
    this.resultBanner = document.getElementById("gacha-result-banner");
  }

  bindEvents() {
    this.modeButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        if (this.isRolling) return;
        if (typeof sounds !== "undefined") sounds.playClick();
        this.modeButtons.forEach((b) => {
          b.classList.toggle("active", b === btn);
          b.setAttribute("aria-pressed", String(b === btn));
        });
        this.currentMode = btn.dataset.mode;
        this.updateActiveLanes();
        this.clearResults();
      });
    });

    this.laneSelect1?.addEventListener("change", (e) => {
      this.selectedLaneFor1 = e.target.value;
      this.updateActiveLanes();
      this.clearResults();
    });

    this.laneCheckboxes.forEach((chk) => {
      chk.addEventListener("change", () => {
        if (this.isRolling) return;
        if (typeof sounds !== "undefined") sounds.playClick();
        if (this.currentMode === "custom") {
          this.updateActiveLanes();
          this.clearResults();
        }
      });
    });

    this.btnRoll?.addEventListener("click", () => this.startRoll());

    this.btnClearArchive?.addEventListener("click", () => {
      if (confirm(t("archive.confirm"))) {
        this.archive = [];
        this.saveArchive();
        this.renderArchiveList();
      }
    });

    this.resultBanner?.addEventListener("click", (e) => {
      if (e.target.closest("#btn-copy-team")) this.copyTeam(e.target.closest("#btn-copy-team"));
    });

    this.reelsContainer?.addEventListener("click", (e) => {
      const opener = e.target.closest(".reel-open");
      if (opener && !this.isRolling) showHeroDetail(findHero(opener.dataset.heroId));
    });

    this.archiveContainer?.addEventListener("click", (e) => {
      const chip = e.target.closest(".archive-hero-chip");
      if (chip) showHeroDetail(findHero(chip.dataset.heroId));
    });

    document.addEventListener("aov:langchange", () => {
      if (!this.isRolling) {
        this.renderRollLabel();
        if (this.lastResults) this.showResults(this.lastResults);
        else this.renderReels();
        this.renderResult();
      }
      this.renderArchiveList();
    });
  }

  updateActiveLanes() {
    if (this.laneSelect1) {
      this.laneSelect1.hidden = this.currentMode !== "1";
    }
    if (this.customLanesPanel) {
      this.customLanesPanel.hidden = this.currentMode !== "custom";
    }

    if (this.currentMode === "custom") {
      const checked = Array.from(this.laneCheckboxes)
        .filter((chk) => chk.checked)
        .map((chk) => chk.value);
      this.activeLanes = checked.length > 0 ? checked : ["top"];
    } else if (this.currentMode === "1") {
      this.activeLanes = [this.selectedLaneFor1 === "all" ? "top" : this.selectedLaneFor1];
    } else if (this.currentMode === "2") {
      this.activeLanes = ["ad", "sp"]; // Cặp Bot
    } else if (this.currentMode === "3") {
      this.activeLanes = ["jungle", "mid", "sp"]; // Bộ ba Mid-Rừng-SP
    } else {
      this.activeLanes = ["top", "jungle", "mid", "ad", "sp"]; // Full team 5v5
    }
  }

  clearResults() {
    this.lastResults = null;
    this.renderReels();
    this.renderResult();
    this.renderRollLabel();
  }

  renderRollLabel(state = this.lastResults ? "again" : "idle") {
    if (!this.btnRoll) return;
    const key = state === "rolling" ? "gacha.rolling" : state === "again" ? "gacha.rollAgain" : "gacha.roll";
    this.btnRoll.textContent = t(key);
  }

  reelFrame(laneKey, index) {
    return `
      <div class="reel-head">
        <span class="reel-lane">${LANE_ICONS[laneKey]}${laneShort(laneKey)}</span>
        <span class="reel-lane-full">${laneName(laneKey)}</span>
      </div>
      <div class="slot-window">
        <div class="slot-strip" id="slot-strip-${index}"></div>
      </div>
    `;
  }

  renderReels() {
    if (!this.reelsContainer) return;
    this.reelsContainer.className = `reels-grid lanes-count-${this.activeLanes.length}`;
    this.reelsContainer.innerHTML = "";

    this.activeLanes.forEach((laneKey, index) => {
      const slotEl = document.createElement("div");
      slotEl.className = "reel-slot";
      slotEl.id = `reel-slot-${index}`;
      slotEl.innerHTML = this.reelFrame(laneKey, index);
      slotEl.querySelector(".slot-strip").innerHTML = `
        <div class="reel-card idle-card">
          <span class="idle-icon">${LANE_ICONS[laneKey]}</span>
          <span class="idle-label">${t("gacha.ready")}</span>
        </div>
      `;
      this.reelsContainer.appendChild(slotEl);
    });
  }

  heroCard(hero) {
    return `
      <div class="reel-card">
        ${heroImage(hero, "reel-img")}
        ${tierMedal(hero.tier)}
        <div class="reel-caption">
          <span class="reel-name">${hero.name}</span>
          <span class="reel-role">${roleName(hero.roles[0]) || ""}</span>
        </div>
      </div>
    `;
  }

  startRoll() {
    if (this.isRolling) return;
    this.isRolling = true;
    this.lastResults = null;
    this.btnRoll.disabled = true;
    this.renderRollLabel("rolling");
    if (typeof sounds !== "undefined") sounds.playClick();
    this.renderReels();
    this.renderResult();

    const rollResults = [];
    const usedHeroIds = new Set();
    const STRIP_COUNT = isReducedMotion() ? 1 : 24;

    this.activeLanes.forEach((laneKey, index) => {
      let candidates = HEROES_DATABASE.filter(
        (h) => (h.lane === laneKey || h.secondary_lane === laneKey) && !usedHeroIds.has(h.id)
      );
      if (candidates.length === 0) {
        candidates = HEROES_DATABASE.filter((h) => !usedHeroIds.has(h.id));
      }

      // Meta weighting
      const weightedCandidates = [];
      candidates.forEach((h) => {
        const weight = h.id === "tamyn" ? 3 : h.tier === "S+" ? 2 : 1;
        for (let w = 0; w < weight; w++) weightedCandidates.push(h);
      });

      const targetHero = weightedCandidates[Math.floor(Math.random() * weightedCandidates.length)];
      usedHeroIds.add(targetHero.id);
      rollResults.push({ lane: laneKey, hero: targetHero });

      const stripEl = document.getElementById(`slot-strip-${index}`);
      if (!stripEl) return;
      stripEl.style.transition = "none";
      stripEl.style.transform = "translateY(0px)";

      const cards = [];
      for (let i = 0; i < STRIP_COUNT - 1; i++) {
        cards.push(candidates[Math.floor(Math.random() * candidates.length)]);
      }
      cards.push(targetHero);
      stripEl.innerHTML = cards.map((h) => this.heroCard(h)).join("");
    });

    let tickInterval = setInterval(() => {
      if (typeof sounds !== "undefined") sounds.playRollTick();
    }, 85);

    const stopDelayBase = isReducedMotion() ? 150 : 1500;
    const stopDelayStep = isReducedMotion() ? 100 : 320;

    this.activeLanes.forEach((_, index) => {
      const slotDelay = stopDelayBase + index * stopDelayStep;
      const stripEl = document.getElementById(`slot-strip-${index}`);
      const cardHeight = stripEl?.parentElement.clientHeight || 0;
      const targetTranslate = -(STRIP_COUNT - 1) * cardHeight;

      setTimeout(() => {
        if (stripEl) {
          stripEl.style.transition = `transform ${slotDelay / 1000}s cubic-bezier(0.12, 0.8, 0.2, 1)`;
          stripEl.style.transform = `translateY(${targetTranslate}px)`;
        }
      }, 50);

      setTimeout(() => {
        this.landReel(index, rollResults[index]);
        if (index === this.activeLanes.length - 1) {
          clearInterval(tickInterval);
          this.onRollComplete(rollResults);
        }
      }, slotDelay + 100);
    });
  }

  landReel(index, result) {
    const slotEl = document.getElementById(`reel-slot-${index}`);
    if (!slotEl || !result) return;
    const { hero } = result;
    const isLegendary = hero.tier === "S+";

    // Drop the spun strip so the landed card follows its window on resize
    const stripEl = slotEl.querySelector(".slot-strip");
    stripEl.style.transition = "none";
    stripEl.style.transform = "none";
    stripEl.innerHTML = this.heroCard(hero);

    slotEl.classList.add("slot-landed");
    slotEl.querySelector(".slot-window").insertAdjacentHTML(
      "beforeend",
      `<button class="reel-open" data-hero-id="${hero.id}" aria-label="${t("gacha.openHero", { name: hero.name })}"></button>`
    );

    if (isLegendary) {
      slotEl.classList.add("legendary-glow");
      if (typeof sounds !== "undefined") sounds.playLegendaryFanfare();
    } else if (typeof sounds !== "undefined") {
      sounds.playCardStop();
    }

    if (window.gsap && !isReducedMotion()) {
      const img = slotEl.querySelector(".reel-img");
      if (isLegendary && img) {
        window.gsap.fromTo(img, { filter: "brightness(1.9)" }, { filter: "brightness(1)", duration: 0.9, ease: "power3.out", clearProps: "filter" });
        window.gsap.fromTo(slotEl.querySelector(".tier-medal"), { scale: 2.2 }, { scale: 1, duration: 0.5, ease: "power3.out", clearProps: "transform" });
      } else {
        window.gsap.fromTo(slotEl, { y: -4 }, { y: 0, duration: 0.22, ease: "power2.out", clearProps: "transform" });
      }
    }
  }

  /** Redraws an already landed team, used when the language changes. */
  showResults(results) {
    this.reelsContainer.innerHTML = "";
    results.forEach((result, index) => {
      const slotEl = document.createElement("div");
      slotEl.className = `reel-slot slot-landed ${result.hero.tier === "S+" ? "legendary-glow is-settled" : ""}`;
      slotEl.id = `reel-slot-${index}`;
      slotEl.innerHTML = this.reelFrame(result.lane, index);
      slotEl.querySelector(".slot-strip").innerHTML = this.heroCard(result.hero);
      slotEl.querySelector(".slot-window").insertAdjacentHTML(
        "beforeend",
        `<button class="reel-open" data-hero-id="${result.hero.id}" aria-label="${t("gacha.openHero", { name: result.hero.name })}"></button>`
      );
      this.reelsContainer.appendChild(slotEl);
    });
  }

  renderResult() {
    if (!this.resultBanner) return;
    const results = this.lastResults;
    if (!results) {
      this.resultBanner.className = "result-line";
      this.resultBanner.innerHTML = `<p class="result-hint">${this.isRolling ? t("gacha.rolling") : t("gacha.hint")}</p>`;
      return;
    }

    const hasTamyn = results.some((r) => r.hero.id === "tamyn");
    const hasSPlus = results.some((r) => r.hero.tier === "S+");
    const key = hasTamyn ? "tamyn" : hasSPlus ? "splus" : "normal";
    this.resultBanner.className = `result-line ${hasTamyn || hasSPlus ? "is-gold" : ""}`;
    this.resultBanner.innerHTML = `
      <div class="result-text">
        <h3>${t(`gacha.result.${key}`)}</h3>
        <p>${t(`gacha.result.${key}Desc`)}</p>
      </div>
      <button class="ctl-btn" id="btn-copy-team">${t("gacha.copy")}</button>
    `;
  }

  copyTeam(button) {
    if (!this.lastResults) return;
    const text = this.lastResults.map((r) => `${laneShort(r.lane)}: ${r.hero.name} (${r.hero.tier})`).join(" | ");
    const done = (key) => {
      button.textContent = t(key);
      setTimeout(() => {
        button.textContent = t("gacha.copy");
      }, 1800);
    };
    if (!navigator.clipboard) {
      done("gacha.copyFail");
      return;
    }
    navigator.clipboard.writeText(`AOV MetaForge: ${text}`).then(
      () => done("gacha.copied"),
      () => done("gacha.copyFail")
    );
  }

  onRollComplete(rollResults) {
    this.isRolling = false;
    this.lastResults = rollResults;
    this.btnRoll.disabled = false;
    this.renderRollLabel("again");
    this.renderResult();

    const hasSpecial = rollResults.some((r) => r.hero.id === "tamyn" || r.hero.tier === "S+");
    this.saveToArchive(rollResults, hasSpecial);
    this.renderArchiveList();
  }

  saveToArchive(rollResults, isSpecial) {
    const record = {
      id: Date.now(),
      time: new Date().toISOString(),
      mode: this.currentMode,
      isSpecial,
      heroes: rollResults.map((r) => ({
        lane: r.lane,
        name: r.hero.name,
        avatar: r.hero.avatar,
        tier: r.hero.tier,
        id: r.hero.id,
      })),
    };

    this.archive.unshift(record);
    if (this.archive.length > 30) this.archive.pop();
    this.saveArchive();
  }

  loadArchive() {
    try {
      const data = localStorage.getItem("aov_gacha_archive");
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  }

  saveArchive() {
    try {
      localStorage.setItem("aov_gacha_archive", JSON.stringify(this.archive));
    } catch (e) {
      console.error(e);
    }
  }

  archiveTime(value) {
    const date = new Date(value);
    // Older records stored an already formatted local string
    if (Number.isNaN(date.getTime())) return value;
    return date.toLocaleString(currentLang === "vi" ? "vi-VN" : "en-GB", { dateStyle: "short", timeStyle: "short" });
  }

  renderArchiveList() {
    if (!this.archiveContainer) return;
    if (this.btnClearArchive) this.btnClearArchive.hidden = this.archive.length === 0;
    if (this.archive.length === 0) {
      this.archiveContainer.innerHTML = `<p class="archive-empty">${t("archive.empty")}</p>`;
      return;
    }

    this.archiveContainer.innerHTML = this.archive
      .map((item) => {
        const heroes = item.heroes
          .map((h) => `
            <button class="archive-hero-chip" data-hero-id="${h.id}" aria-label="${t("gacha.openHero", { name: h.name })}">
              <img class="hero-img chip-img" src="${h.avatar}" alt="" loading="lazy" data-initial="${h.name.charAt(0)}" />
              <span class="chip-text">
                <span class="chip-name">${h.name}</span>
                <span class="chip-lane">${laneShort(h.lane)}</span>
              </span>
              ${tierMedal(h.tier)}
            </button>
          `)
          .join("");
        return `
          <li class="archive-item ${item.isSpecial ? "special-record" : ""}">
            <div class="archive-item-header">
              <span class="archive-mode-tag">${t(`gacha.mode.${item.mode}`)}</span>
              <span class="archive-time">${this.archiveTime(item.time)}</span>
            </div>
            <div class="archive-heroes-row">${heroes}</div>
          </li>
        `;
      })
      .join("");
  }
}
