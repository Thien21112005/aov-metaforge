/**
 * AOV MetaForge - Tournament Snake Draft Manager (1-2-2-2-2-1)
 * Enforces coordinated pick turns, slot locking and the board's hero grid.
 */

const DRAFT_STORAGE_KEY = "aov_draft_state";
const DRAFT_TIMER_KEY = "aov_draft_timer";
const TURN_SECONDS = 30;

class DraftManager {
  constructor() {
    this.lanes = ["top", "jungle", "mid", "ad", "sp"];
    this.firstPickTeam = "blue"; // 'blue' or 'red'
    this.currentStepIndex = 0; // 0 to 5 (corresponding to 6 pick phases)
    this.analyzer = new MetaAnalyzer(this.lanes);
    this.state = {
      blue: this.emptyTeam(),
      red: this.emptyTeam(),
      target: null, // Manual target: a ban slot or a filled pick being replaced
    };
    this.laneFilter = "all";
    this.lastTargetKey = null;
    this.lastHeatedStep = 0;
    this.timerEnabled = this.loadTimerSetting();
    this.secondsLeft = TURN_SECONDS;
    this.timerTurnKey = null;

    this.restore();
    this.initElements();
    this.bindEvents();
    this.renderAll();
    this.startTimerLoop();
  }

  emptyTeam() {
    return {
      bans: [null, null, null, null, null],
      picks: this.lanes.map((lane) => ({ lane, hero: null, pickOrder: null })),
    };
  }

  initElements() {
    this.blueBansEl = document.getElementById("blue-bans");
    this.bluePicksEl = document.getElementById("blue-picks");
    this.redBansEl = document.getElementById("red-bans");
    this.redPicksEl = document.getElementById("red-picks");
    this.blueOrderEl = document.getElementById("blue-order");
    this.redOrderEl = document.getElementById("red-order");

    this.btnBlueFirst = document.getElementById("btn-blue-first");
    this.btnRedFirst = document.getElementById("btn-red-first");
    this.btnPrevStep = document.getElementById("btn-prev-step");
    this.btnNextStep = document.getElementById("btn-next-step");
    this.btnTimer = document.getElementById("btn-draft-timer");
    this.btnReset = document.getElementById("btn-reset-banpick");
    this.btnQuickMeta = document.getElementById("btn-quick-meta-fill");

    this.seamEl = document.getElementById("draft-seam");
    this.clockEl = document.getElementById("draft-clock");
    this.turnLineEl = document.getElementById("draft-turn-line");
    this.boardEl = document.getElementById("draft-board");
    this.banBarEl = document.getElementById("draft-ban-bar");

    this.pickerEl = document.getElementById("hero-picker");
    this.pickerTitle = document.getElementById("picker-title");
    this.pickerGrid = document.getElementById("picker-grid");
    this.pickerSearch = document.getElementById("picker-search");
    this.pickerClose = document.getElementById("picker-close");
    this.pickerClear = document.getElementById("picker-clear");
    this.pickerFilters = document.querySelectorAll(".picker-filter");
    this.scrimEl = document.getElementById("picker-scrim");

    this.verdictStripEl = document.getElementById("verdict-strip");
    this.analysisContainer = document.getElementById("bp-analysis-content");
    this.blueMetricsEl = document.getElementById("blue-team-metrics");
    this.redMetricsEl = document.getElementById("red-team-metrics");
  }

  getDraftSteps() {
    const t1 = this.firstPickTeam;
    const t2 = t1 === "blue" ? "red" : "blue";
    return [
      { step: 1, team: t1, slots: [0], count: 1, pickOrders: [1] },
      { step: 2, team: t2, slots: [0, 1], count: 2, pickOrders: [2, 3] },
      { step: 3, team: t1, slots: [1, 2], count: 2, pickOrders: [4, 5] },
      { step: 4, team: t2, slots: [2, 3], count: 2, pickOrders: [6, 7] },
      { step: 5, team: t1, slots: [3, 4], count: 2, pickOrders: [8, 9] },
      { step: 6, team: t2, slots: [4], count: 1, pickOrders: [10] },
    ];
  }

  getCurrentActiveSlot() {
    const currentStep = this.getDraftSteps()[this.currentStepIndex];
    if (!currentStep) return null;

    // First unfilled slot in this step, strictly top-down
    const index = currentStep.slots.find((s) => !this.state[currentStep.team].picks[s].hero);
    if (index === undefined) return null;

    const posInStep = currentStep.slots.indexOf(index);
    return {
      team: currentStep.team,
      type: "pick",
      index,
      step: currentStep.step,
      pickNumber: currentStep.pickOrders[posInStep],
      lane: this.state[currentStep.team].picks[index].lane,
    };
  }

  /** The slot the hero grid currently fills: a manual choice, or whoever's turn it is. */
  getTarget() {
    return this.state.target || this.getCurrentActiveSlot();
  }

  getTotalPicksCount() {
    return (
      this.state.blue.picks.filter((p) => p.hero).length +
      this.state.red.picks.filter((p) => p.hero).length
    );
  }

  bindEvents() {
    this.btnBlueFirst?.addEventListener("click", () => this.setFirstPickTeam("blue"));
    this.btnRedFirst?.addEventListener("click", () => this.setFirstPickTeam("red"));

    this.btnPrevStep?.addEventListener("click", () => this.goToStep(this.currentStepIndex - 1));
    this.btnNextStep?.addEventListener("click", () => this.goToStep(this.currentStepIndex + 1));

    this.btnTimer?.addEventListener("click", () => {
      if (typeof sounds !== "undefined") sounds.playClick();
      this.timerEnabled = !this.timerEnabled;
      this.saveTimerSetting();
      this.secondsLeft = TURN_SECONDS;
      this.renderClock();
    });

    this.btnReset?.addEventListener("click", () => {
      if (typeof sounds !== "undefined") sounds.playClick();
      if (confirm(t("draft.resetConfirm"))) this.resetAll();
    });

    this.btnQuickMeta?.addEventListener("click", () => {
      if (typeof sounds !== "undefined") sounds.playClick();
      this.quickMetaDemo();
    });

    this.pickerSearch?.addEventListener("input", () => this.renderHeroGrid());
    this.pickerClose?.addEventListener("click", () => this.closeSheet());
    this.pickerClear?.addEventListener("click", () => {
      const target = this.state.target;
      if (!target) return;
      this.clearSlot(target.team, target.type, target.index);
      this.closeSheet();
    });
    this.scrimEl?.addEventListener("click", () => this.closeSheet());

    this.pickerFilters.forEach((btn) => {
      btn.addEventListener("click", () => {
        if (typeof sounds !== "undefined") sounds.playClick();
        this.laneFilter = btn.dataset.lane;
        this.renderHeroGrid();
      });
    });

    // Hero grid: one delegated listener survives every re-render
    this.pickerGrid?.addEventListener("click", (e) => {
      const tile = e.target.closest(".hero-tile");
      if (!tile || tile.disabled) return;
      const hero = findHero(tile.dataset.heroId);
      if (hero) this.selectHero(hero);
    });

    this.analysisContainer?.addEventListener("click", (e) => this.onAnalysisClick(e));

    document.getElementById("verdict-more")?.addEventListener("click", () => {
      document.getElementById("draft-analysis")?.scrollIntoView({
        behavior: isReducedMotion() ? "auto" : "smooth",
      });
    });

    document.addEventListener("keydown", (e) => {
      if (e.key !== "Escape") return;
      if (this.pickerEl?.classList.contains("sheet-open")) {
        this.closeSheet();
      } else if (this.state.target) {
        this.state.target = null;
        this.renderAll();
      }
    });

    document.addEventListener("aov:langchange", () => this.renderAll());
    window.addEventListener("resize", () => this.renderSeam());
    document.addEventListener("aov:tabchange", (e) => {
      if (e.detail.target === "tab-banpick") this.renderSeam();
    });
  }

  onAnalysisClick(e) {
    const chip = e.target.closest("[data-quick-pick]");
    if (!chip) return;
    this.quickPickHero("blue", Number(chip.dataset.pickIndex), chip.dataset.quickPick);
  }

  setFirstPickTeam(team) {
    if (team === this.firstPickTeam) return;
    if (this.getTotalPicksCount() > 0 && !confirm(t("draft.switchConfirm"))) return;

    this.firstPickTeam = team;
    this.currentStepIndex = 0;
    this.state.blue.picks.forEach((p) => { p.hero = null; p.pickOrder = null; });
    this.state.red.picks.forEach((p) => { p.hero = null; p.pickOrder = null; });
    this.state.target = null;

    if (typeof sounds !== "undefined") sounds.playClick();
    this.renderAll();
    this.showDraftNotice(t("draft.firstChanged", { team: teamName(team) }));
  }

  goToStep(index) {
    if (typeof sounds !== "undefined") sounds.playClick();
    if (index < 0 || index > 5) return;
    this.currentStepIndex = index;
    this.state.target = null;
    this.renderAll();
  }

  resetAll() {
    this.state.blue = this.emptyTeam();
    this.state.red = this.emptyTeam();
    this.state.target = null;
    this.currentStepIndex = 0;
    this.renderAll();
  }

  quickMetaDemo() {
    this.firstPickTeam = "blue";
    const heroes = (ids) => ids.map(findHero);

    // Standard high-level tournament bans
    this.state.blue.bans = heroes(["aya", "aoi", "hayate", "rouie", "keera"]);
    this.state.red.bans = heroes(["liliana", "kaine", "yan", "elsu", "violet"]);

    this.state.blue.picks = this.emptyTeam().picks;
    this.state.red.picks = this.emptyTeam().picks;
    const fill = (team, slot, id, order) => {
      this.state[team].picks[slot].hero = findHero(id);
      this.state[team].picks[slot].pickOrder = order;
    };
    fill("blue", 0, "florentino", 1);
    fill("red", 0, "omen", 2);
    fill("red", 1, "nakroth", 3);
    fill("blue", 1, "butterfly", 4);
    fill("blue", 2, "yue", 5);
    fill("red", 2, "iggy", 6);
    fill("red", 3, "stuart", 7);

    this.currentStepIndex = 4; // Step 5: Blue to pick AD & SP
    this.state.target = null;
    if (typeof sounds !== "undefined") sounds.playPickSound();
    this.renderAll();
  }

  getUsage() {
    const usage = new Map();
    ["blue", "red"].forEach((team) => {
      this.state[team].bans.forEach((h) => h && usage.set(h.id, { kind: "ban", team }));
      this.state[team].picks.forEach((p) => p.hero && usage.set(p.hero.id, { kind: "pick", team }));
    });
    return usage;
  }

  getUsedHeroIds() {
    return new Set(this.getUsage().keys());
  }

  // ---------- Rendering ----------

  renderAll() {
    const target = this.getTarget();
    const key = target ? `${target.team}-${target.type}-${target.index}` : "done";
    if (key !== this.lastTargetKey) {
      this.lastTargetKey = key;
      // The grid follows the slot: a lane's pick opens on that lane
      this.laneFilter = target && target.type === "pick" ? target.lane : "all";
      if (this.pickerSearch) this.pickerSearch.value = "";
    }

    this.renderControls();
    this.renderSlots();
    this.renderSeam();
    this.renderTurnLine();
    this.renderClock();
    this.renderHeroGrid();
    this.updateAnalysis();
    this.persist();
  }

  renderControls() {
    this.btnBlueFirst?.classList.toggle("active", this.firstPickTeam === "blue");
    this.btnBlueFirst?.setAttribute("aria-pressed", String(this.firstPickTeam === "blue"));
    this.btnRedFirst?.classList.toggle("active", this.firstPickTeam === "red");
    this.btnRedFirst?.setAttribute("aria-pressed", String(this.firstPickTeam === "red"));
    if (this.btnPrevStep) this.btnPrevStep.disabled = this.currentStepIndex === 0;
    if (this.btnNextStep) this.btnNextStep.disabled = this.currentStepIndex === 5;
    this.btnTimer?.classList.toggle("is-on", this.timerEnabled);
    this.btnTimer?.setAttribute("aria-pressed", String(this.timerEnabled));

    const first = t("draft.firstPick");
    const second = t("draft.secondPick");
    if (this.blueOrderEl) this.blueOrderEl.textContent = this.firstPickTeam === "blue" ? first : second;
    if (this.redOrderEl) this.redOrderEl.textContent = this.firstPickTeam === "red" ? first : second;
  }

  renderSlots() {
    const auto = this.getCurrentActiveSlot();
    const target = this.getTarget();

    [
      ["blue", this.blueBansEl, this.bluePicksEl],
      ["red", this.redBansEl, this.redPicksEl],
    ].forEach(([team, bansEl, picksEl]) => {
      bansEl.innerHTML = "";
      this.state[team].bans.forEach((hero, index) => {
        const isTarget = target?.type === "ban" && target.team === team && target.index === index;
        bansEl.appendChild(this.createBanSlot(team, index, hero, isTarget));
      });

      picksEl.innerHTML = "";
      this.state[team].picks.forEach((pick, index) => {
        const isTurn = !pick.hero && auto?.team === team && auto.index === index;
        const isReplacing =
          this.state.target?.type === "pick" && this.state.target.team === team && this.state.target.index === index;
        picksEl.appendChild(this.createPickSlot(team, index, pick, isTurn, isReplacing, auto));
      });
    });
  }

  createBanSlot(team, index, hero, isTarget) {
    const el = document.createElement("div");
    el.className = `ban-slot ${hero ? "filled" : "empty"} ${isTarget ? "is-target" : ""}`;
    const label = hero
      ? `${t("draft.banSlotLabel", { team: teamName(team), n: index + 1 })}: ${hero.name}`
      : t("draft.banSlotLabel", { team: teamName(team), n: index + 1 });

    el.innerHTML = `
      <button class="ban-main" aria-label="${label}" aria-pressed="${isTarget}">
        ${hero ? heroImage(hero, "ban-img") : `<span class="ban-num">${index + 1}</span>`}
        ${hero ? `<span class="ban-name">${hero.name}</span>` : ""}
      </button>
      ${hero ? `<button class="slot-clear" aria-label="${t("draft.clear", { name: hero.name })}">${UI_ICONS.close}</button>` : ""}
    `;

    el.querySelector(".ban-main").addEventListener("click", () => {
      this.setManualTarget({ team, type: "ban", index, lane: null });
    });
    el.querySelector(".slot-clear")?.addEventListener("click", () => this.clearSlot(team, "ban", index));
    return el;
  }

  createPickSlot(team, index, pick, isTurn, isReplacing, auto) {
    const hero = pick.hero;
    const el = document.createElement("div");
    const stateClass = hero ? "filled" : isTurn ? "is-turn" : "locked";
    el.className = `pick-slot ${stateClass} ${isReplacing ? "is-target" : ""}`;
    const lane = pick.lane;

    let body;
    let label;
    if (hero) {
      label = t("draft.slotPick", { team: teamName(team), lane: laneShort(lane), name: hero.name });
      body = `
        ${heroImage(hero, "pick-img")}
        <span class="pick-lane">${LANE_ICONS[lane]}${laneShort(lane)}</span>
        <span class="pick-info">
          <span class="pick-name">${hero.name}</span>
          <span class="pick-role">${hero.roles.map(roleName).join(", ")}</span>
        </span>
        ${tierMedal(hero.tier)}
      `;
    } else if (isTurn) {
      label = t("draft.slotPick", { team: teamName(team), lane: laneShort(lane), name: t("draft.pickNow") });
      body = `
        <span class="pick-lane">${LANE_ICONS[lane]}${laneShort(lane)}</span>
        <span class="pick-info"><span class="pick-name pick-now">${t("draft.pickNow")}</span></span>
      `;
    } else {
      label = t("draft.emptySlot", { lane: laneShort(lane) });
      body = `<span class="pick-lane">${LANE_ICONS[lane]}${laneShort(lane)}</span>`;
    }

    el.innerHTML = `
      <button class="pick-main" aria-label="${label}">${body}</button>
      ${hero ? `<button class="slot-clear" aria-label="${t("draft.clear", { name: hero.name })}">${UI_ICONS.close}</button>` : ""}
    `;

    el.querySelector(".pick-main").addEventListener("click", () => {
      if (hero) {
        this.setManualTarget({ team, type: "pick", index, lane, pickNumber: pick.pickOrder });
      } else if (isTurn) {
        this.state.target = null;
        this.renderAll();
        this.openSheet();
      } else {
        this.onLockedSlotClicked(el, auto);
      }
    });
    el.querySelector(".slot-clear")?.addEventListener("click", () => this.clearSlot(team, "pick", index));
    return el;
  }

  setManualTarget(target) {
    if (typeof sounds !== "undefined") sounds.playClick();
    const current = this.state.target;
    const same =
      current && current.team === target.team && current.type === target.type && current.index === target.index;
    this.state.target = same ? null : target;
    this.renderAll();
    if (!same) this.openSheet();
  }

  onLockedSlotClicked(el, auto) {
    if (typeof sounds !== "undefined") sounds.playWarningSound();
    el.classList.remove("shake-notice");
    void el.offsetWidth; // Restart the animation
    el.classList.add("shake-notice");
    this.showDraftNotice(
      auto
        ? t("draft.locked", { team: teamName(auto.team), lane: laneShort(auto.lane) })
        : t("draft.lockedGeneric")
    );
  }

  showDraftNotice(msg) {
    if (!this.turnLineEl) return;
    this.turnLineEl.textContent = msg;
    this.turnLineEl.classList.add("is-notice");
    clearTimeout(this._noticeTimer);
    this._noticeTimer = setTimeout(() => this.renderTurnLine(), 3500);
  }

  renderTurnLine() {
    if (!this.turnLineEl) return;
    clearTimeout(this._noticeTimer);
    this.turnLineEl.classList.remove("is-notice");
    const auto = this.getCurrentActiveSlot();
    const currentStep = this.getDraftSteps()[this.currentStepIndex];
    if (this.getTotalPicksCount() === 10) {
      this.turnLineEl.textContent = t("draft.complete");
    } else if (auto) {
      this.turnLineEl.textContent = t("draft.turn", {
        n: auto.pickNumber,
        team: teamName(auto.team),
        lane: laneShort(auto.lane),
      });
    } else {
      this.turnLineEl.textContent = t("draft.stepDone", { team: teamName(currentStep.team) });
    }
  }

  renderSeam() {
    if (!this.seamEl) return;
    const width = this.seamEl.clientWidth;
    if (!width) return; // Tab hidden; drawn again when it opens
    const steps = this.getDraftSteps();
    const height = 44;
    const colWidth = width / steps.length;
    const yFor = (s) => (s.team === "blue" ? 12 : height - 12);
    const xFor = (i) => colWidth * i + colWidth / 2;

    const isDone = (s) => s.slots.every((slot) => this.state[s.team].picks[slot].hero);

    let lines = "";
    for (let i = 1; i < steps.length; i++) {
      const legIsActive = i === this.currentStepIndex && !isDone(steps[i]);
      const legIsDone = isDone(steps[i]) || i < this.currentStepIndex;
      const cls = legIsActive ? "seam-leg is-active" : legIsDone ? "seam-leg is-done" : "seam-leg";
      const heat = legIsActive && this.lastHeatedStep !== i ? "heat" : "";
      lines += `<line class="${cls} ${heat}" pathLength="1" x1="${xFor(i - 1)}" y1="${yFor(steps[i - 1])}" x2="${xFor(i)}" y2="${yFor(steps[i])}" />`;
    }
    this.lastHeatedStep = this.currentStepIndex;

    const nodes = steps
      .map((s, i) => {
        const cls = [
          "seam-node",
          `team-${s.team}`,
          i === this.currentStepIndex ? "active" : "",
          isDone(s) ? "done" : "",
        ].join(" ");
        const label = t("draft.seamStep", { step: s.step, team: teamName(s.team), count: s.count });
        return `<button class="${cls}" data-step="${i}" style="left:${xFor(i)}px;top:${yFor(s)}px" aria-label="${label}" ${i === this.currentStepIndex ? 'aria-current="step"' : ""}>${s.count}</button>`;
      })
      .join("");

    this.seamEl.innerHTML = `<svg width="${width}" height="${height}" aria-hidden="true">${lines}</svg>${nodes}`;
    this.seamEl.querySelectorAll(".seam-node").forEach((node) => {
      node.addEventListener("click", () => this.goToStep(Number(node.dataset.step)));
    });
  }

  renderHeroGrid() {
    if (!this.pickerGrid) return;
    const target = this.getTarget();

    if (this.pickerTitle) {
      if (!target) {
        this.pickerTitle.textContent = t("picker.titleDone");
      } else if (target.type === "ban") {
        this.pickerTitle.textContent = t("picker.titleBan", { team: teamName(target.team), n: target.index + 1 });
      } else if (this.state.target) {
        this.pickerTitle.textContent = t("picker.titleReplace", { team: teamName(target.team), lane: laneShort(target.lane) });
      } else {
        this.pickerTitle.textContent = t("picker.titlePick", { team: teamName(target.team), lane: laneShort(target.lane) });
      }
    }

    if (this.pickerClear) {
      const manual = this.state.target;
      const filled = manual
        ? manual.type === "ban"
          ? this.state[manual.team].bans[manual.index]
          : this.state[manual.team].picks[manual.index].hero
        : null;
      this.pickerClear.hidden = !filled;
      if (filled) this.pickerClear.textContent = t("draft.clear", { name: filled.name });
    }

    this.pickerFilters.forEach((btn) => {
      const on = btn.dataset.lane === this.laneFilter;
      btn.classList.toggle("active", on);
      btn.setAttribute("aria-pressed", String(on));
    });

    const query = (this.pickerSearch?.value || "").toLowerCase().trim();
    const usage = this.getUsage();
    const filtered = HEROES_DATABASE.filter((h) => {
      const matchSearch = !query || h.name.toLowerCase().includes(query) || h.id.toLowerCase().includes(query);
      const matchLane = this.laneFilter === "all" || h.lane === this.laneFilter || h.secondary_lane === this.laneFilter;
      return matchSearch && matchLane;
    }).sort(compareHeroes);

    if (filtered.length === 0) {
      this.pickerGrid.innerHTML = `<p class="grid-empty">${t("picker.empty")}</p>`;
      return;
    }

    this.pickerGrid.innerHTML = filtered
      .map((h) => {
        const used = usage.get(h.id);
        const usedClass = used ? (used.kind === "ban" ? "is-banned" : `is-picked team-${used.team}`) : "";
        const usedLabel = used ? (used.kind === "ban" ? t("draft.banned") : t("draft.picked")) : "";
        const disabled = used || !target ? "disabled" : "";
        return `
          <button class="hero-tile ${usedClass}" data-hero-id="${h.id}" ${disabled} aria-label="${h.name}${usedLabel ? `, ${usedLabel}` : ""}">
            ${heroImage(h, "tile-img")}
            ${tierMedal(h.tier)}
            ${usedLabel ? `<span class="tile-state">${usedLabel}</span>` : ""}
            <span class="tile-name">${h.name}</span>
          </button>
        `;
      })
      .join("");
  }

  // ---------- Sheet on narrow screens ----------

  isSheetMode() {
    return window.matchMedia("(max-width: 900px)").matches;
  }

  openSheet() {
    if (!this.isSheetMode() || !this.getTarget() || !this.pickerEl) return;
    this.pickerEl.classList.add("sheet-open");
    this.scrimEl?.classList.add("open");
    this.setBackgroundInert(true);
    this.pickerClose?.focus();
  }

  closeSheet() {
    if (!this.pickerEl?.classList.contains("sheet-open")) return;
    this.pickerEl.classList.remove("sheet-open");
    this.scrimEl?.classList.remove("open");
    this.setBackgroundInert(false);
    if (this.state.target) {
      this.state.target = null;
      this.renderAll();
    }
  }

  setBackgroundInert(inert) {
    [this.banBarEl, document.querySelector(".draft-toolbar"), ...document.querySelectorAll(".team-rail"), this.seamEl, this.verdictStripEl, document.getElementById("draft-analysis"), document.querySelector(".app-header")]
      .forEach((el) => {
        if (el) el.inert = inert;
      });
  }

  // ---------- Actions ----------

  clearSlot(team, type, index) {
    if (type === "ban") {
      this.state[team].bans[index] = null;
    } else {
      this.state[team].picks[index].hero = null;
      this.state[team].picks[index].pickOrder = null;

      const steps = this.getDraftSteps();
      const stepIdx = steps.findIndex((s) => s.team === team && s.slots.includes(index));
      if (stepIdx !== -1 && stepIdx < this.currentStepIndex) {
        this.currentStepIndex = stepIdx;
      }
    }
    this.state.target = null;
    if (typeof sounds !== "undefined") sounds.playClick();
    this.renderAll();
  }

  selectHero(hero) {
    const target = this.getTarget();
    if (!target) return;
    const { team, type, index, pickNumber } = target;

    if (type === "ban") {
      this.state[team].bans[index] = hero;
      if (typeof sounds !== "undefined") sounds.playBanSound();
    } else {
      this.state[team].picks[index].hero = hero;
      this.state[team].picks[index].pickOrder = pickNumber;
      if (typeof sounds !== "undefined") sounds.playPickSound();
      this.checkAndAdvanceDraftStep();
    }

    this.state.target = null;
    this.secondsLeft = TURN_SECONDS;
    if (this.pickerEl?.classList.contains("sheet-open")) this.closeSheet();
    this.renderAll();
    this.flashSlot(team, type, index);
  }

  flashSlot(team, type, index) {
    if (isReducedMotion() || !window.gsap) return;
    const container = type === "ban"
      ? (team === "blue" ? this.blueBansEl : this.redBansEl)
      : (team === "blue" ? this.bluePicksEl : this.redPicksEl);
    const slot = container?.children[index];
    if (!slot) return;
    window.gsap.fromTo(
      slot,
      { filter: "brightness(1.7)" },
      { filter: "brightness(1)", duration: 0.5, ease: "power3.out", clearProps: "filter" }
    );
  }

  checkAndAdvanceDraftStep() {
    const currentStep = this.getDraftSteps()[this.currentStepIndex];
    if (!currentStep) return;
    const allFilled = currentStep.slots.every((s) => this.state[currentStep.team].picks[s].hero !== null);
    if (allFilled && this.currentStepIndex < 5) this.currentStepIndex++;
  }

  /** Counter chips only lock in on the turn the rules allow. */
  quickPickHero(team, pickIndex, heroId) {
    const hero = findHero(heroId);
    const auto = this.getCurrentActiveSlot();
    if (!hero) return;
    if (!auto || auto.team !== team || auto.index !== pickIndex) {
      if (typeof sounds !== "undefined") sounds.playWarningSound();
      this.showDraftNotice(t("analysis.notYourTurn"));
      return;
    }
    this.state.target = null;
    this.selectHero(hero);
  }

  updateAnalysis() {
    const summary = this.analyzer.update(
      this.state,
      this.getUsedHeroIds(),
      this.analysisContainer,
      this.blueMetricsEl,
      this.redMetricsEl
    );
    this.renderVerdictStrip(summary);
  }

  renderVerdictStrip(summary) {
    const list = document.getElementById("verdict-list");
    if (!list) return;
    list.innerHTML = summary.length
      ? summary.map((item) => `<li class="verdict tone-${item.tone}"><b>${item.title}</b><span>${item.sub}</span></li>`).join("")
      : `<li class="verdict"><span>${t("analysis.empty")}</span></li>`;
  }

  // ---------- Turn timer ----------

  loadTimerSetting() {
    try {
      return localStorage.getItem(DRAFT_TIMER_KEY) !== "0";
    } catch {
      return true;
    }
  }

  saveTimerSetting() {
    try {
      localStorage.setItem(DRAFT_TIMER_KEY, this.timerEnabled ? "1" : "0");
    } catch {
      /* Choice lasts for this visit only */
    }
    this.renderControls();
  }

  startTimerLoop() {
    setInterval(() => {
      const panelOpen = document.getElementById("tab-banpick")?.classList.contains("active");
      if (!panelOpen || !this.timerEnabled || document.hidden) return;
      const auto = this.getCurrentActiveSlot();
      if (!auto || this.getTotalPicksCount() === 10) return;
      if (this.secondsLeft > 0) {
        this.secondsLeft--;
        this.renderClock();
      }
    }, 1000);
  }

  renderClock() {
    if (!this.clockEl) return;
    const auto = this.getCurrentActiveSlot();
    const turnKey = auto ? `${auto.team}-${auto.index}` : "none";
    if (turnKey !== this.timerTurnKey) {
      this.timerTurnKey = turnKey;
      this.secondsLeft = TURN_SECONDS;
    }

    const over = this.timerEnabled && auto && this.secondsLeft === 0;
    this.clockEl.classList.toggle("is-low", !!auto && this.timerEnabled && this.secondsLeft <= 5);
    if (!auto || !this.timerEnabled) {
      this.clockEl.textContent = `${this.getTotalPicksCount()}/10`;
    } else if (over) {
      this.clockEl.textContent = t("draft.timeUp");
    } else {
      this.clockEl.textContent = `0:${String(this.secondsLeft).padStart(2, "0")}`;
    }
  }

  // ---------- Persistence: ids only, so refreshed hero data always wins ----------

  persist() {
    const serialize = (team) => ({
      bans: this.state[team].bans.map((h) => h?.id || null),
      picks: this.state[team].picks.map((p) => ({ id: p.hero?.id || null, order: p.pickOrder })),
    });
    try {
      localStorage.setItem(
        DRAFT_STORAGE_KEY,
        JSON.stringify({
          firstPickTeam: this.firstPickTeam,
          currentStepIndex: this.currentStepIndex,
          blue: serialize("blue"),
          red: serialize("red"),
        })
      );
    } catch {
      /* Draft lasts for this visit only */
    }
  }

  restore() {
    let saved = null;
    try {
      saved = JSON.parse(localStorage.getItem(DRAFT_STORAGE_KEY));
    } catch {
      return;
    }
    if (!saved) return;
    if (saved.firstPickTeam === "red") this.firstPickTeam = "red";
    if (Number.isInteger(saved.currentStepIndex) && saved.currentStepIndex >= 0 && saved.currentStepIndex <= 5) {
      this.currentStepIndex = saved.currentStepIndex;
    }
    ["blue", "red"].forEach((team) => {
      (saved[team]?.bans || []).slice(0, 5).forEach((id, i) => {
        this.state[team].bans[i] = id ? findHero(id) : null;
      });
      (saved[team]?.picks || []).slice(0, 5).forEach((p, i) => {
        this.state[team].picks[i].hero = p?.id ? findHero(p.id) : null;
        this.state[team].picks[i].pickOrder = p?.order ?? null;
      });
    });
  }
}
