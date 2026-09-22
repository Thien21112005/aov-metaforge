/**
 * AOV MetaForge - Tournament Snake Draft Manager (1-2-2-2-2-1)
 * Enforces strictly coordinated pick turns, interactive slot locking, and seamless picker modal.
 */

class DraftManager {
  constructor() {
    this.lanes = ["top", "jungle", "mid", "ad", "sp"];
    this.firstPickTeam = "blue"; // 'blue' or 'red'
    this.currentStepIndex = 0; // 0 to 5 (corresponding to 6 pick phases)
    this.analyzer = new MetaAnalyzer(this.lanes);

    this.state = {
      blue: {
        bans: [null, null, null, null, null],
        picks: [
          { lane: "top", hero: null, pickOrder: null },
          { lane: "jungle", hero: null, pickOrder: null },
          { lane: "mid", hero: null, pickOrder: null },
          { lane: "ad", hero: null, pickOrder: null },
          { lane: "sp", hero: null, pickOrder: null },
        ],
      },
      red: {
        bans: [null, null, null, null, null],
        picks: [
          { lane: "top", hero: null, pickOrder: null },
          { lane: "jungle", hero: null, pickOrder: null },
          { lane: "mid", hero: null, pickOrder: null },
          { lane: "ad", hero: null, pickOrder: null },
          { lane: "sp", hero: null, pickOrder: null },
        ],
      },
      activeSlot: null,
    };

    this.initElements();
    this.bindEvents();
    this.renderDraftStepper();
    this.renderSlots();
    this.updateAnalysis();
  }

  initElements() {
    this.blueBansEl = document.getElementById("blue-bans");
    this.bluePicksEl = document.getElementById("blue-picks");
    this.redBansEl = document.getElementById("red-bans");
    this.redPicksEl = document.getElementById("red-picks");

    // Stepper & Turn Controller elements
    this.btnBlueFirst = document.getElementById("btn-blue-first");
    this.btnRedFirst = document.getElementById("btn-red-first");
    this.btnTagBlueFirst = document.getElementById("btn-tag-blue-first");
    this.btnTagRedFirst = document.getElementById("btn-tag-red-first");
    this.btnPrevStep = document.getElementById("btn-prev-step");
    this.btnNextStep = document.getElementById("btn-next-step");
    this.stepperTrack = document.getElementById("draft-stepper-track");
    this.currentTurnBanner = document.getElementById("current-turn-banner");

    // Modal
    this.modal = document.getElementById("hero-picker-modal");
    this.modalClose = document.getElementById("modal-close-btn");
    this.modalGrid = document.getElementById("modal-heroes-grid");
    this.modalSearch = document.getElementById("modal-search-input");
    this.modalRoleFilters = document.querySelectorAll(".modal-role-btn");

    this.btnReset = document.getElementById("btn-reset-banpick");
    this.btnQuickMeta = document.getElementById("btn-quick-meta-fill");

    this.analysisContainer = document.getElementById("bp-analysis-content");
    this.blueMetricsEl = document.getElementById("blue-team-metrics");
    this.redMetricsEl = document.getElementById("red-team-metrics");
  }

  getDraftSteps() {
    const t1 = this.firstPickTeam;
    const t2 = t1 === "blue" ? "red" : "blue";
    const name1 = t1 === "blue" ? "ĐỘI XANH" : "ĐỘI ĐỎ";
    const name2 = t2 === "blue" ? "ĐỘI XANH" : "ĐỘI ĐỎ";

    return [
      {
        step: 1,
        team: t1,
        slots: [0], // Top
        count: 1,
        pickOrders: [1],
        label: `${name1} [1]`,
        desc: `${name1} chọn 1 tướng đầu tiên (Đường Caesar / Top)`,
      },
      {
        step: 2,
        team: t2,
        slots: [0, 1], // Top, Jungle
        count: 2,
        pickOrders: [2, 3],
        label: `${name2} [2]`,
        desc: `${name2} chọn chéo 2 tướng (Top & Rừng)`,
      },
      {
        step: 3,
        team: t1,
        slots: [1, 2], // Jungle, Mid
        count: 2,
        pickOrders: [4, 5],
        label: `${name1} [2]`,
        desc: `${name1} chọn chéo 2 tướng (Rừng & Mid)`,
      },
      {
        step: 4,
        team: t2,
        slots: [2, 3], // Mid, AD
        count: 2,
        pickOrders: [6, 7],
        label: `${name2} [2]`,
        desc: `${name2} chọn chéo 2 tướng (Mid & Xạ Thủ)`,
      },
      {
        step: 5,
        team: t1,
        slots: [3, 4], // AD, SP
        count: 2,
        pickOrders: [8, 9],
        label: `${name1} [2]`,
        desc: `${name1} chọn chéo 2 tướng (Xạ Thủ & Trợ Thủ)`,
      },
      {
        step: 6,
        team: t2,
        slots: [4], // SP
        count: 1,
        pickOrders: [10],
        label: `${name2} [1]`,
        desc: `${name2} chốt 1 tướng cuối cùng (Trợ Thủ / Last Pick)`,
      },
    ];
  }

  getCurrentActiveSlot() {
    const steps = this.getDraftSteps();
    const currentStep = steps[this.currentStepIndex];
    if (!currentStep) return null;

    // Find the first unfilled slot in this step's slots (strictly top-down)
    const activeSlotIndex = currentStep.slots.find(
      (sIdx) => !this.state[currentStep.team].picks[sIdx].hero
    );

    if (activeSlotIndex === undefined) {
      return null;
    }

    const posInStep = currentStep.slots.indexOf(activeSlotIndex);
    const pickNum = currentStep.pickOrders[posInStep];
    const laneKey = this.state[currentStep.team].picks[activeSlotIndex].lane;

    return {
      team: currentStep.team,
      index: activeSlotIndex,
      step: currentStep.step,
      pickNumber: pickNum,
      lane: laneKey,
      laneName: LANES[laneKey]?.name || "Đường",
      shortName: LANES[laneKey]?.shortName || "",
    };
  }

  getTotalPicksCount() {
    return (
      this.state.blue.picks.filter((p) => p.hero).length +
      this.state.red.picks.filter((p) => p.hero).length
    );
  }

  onDisabledSlotClicked(el, team, lane) {
    if (typeof sounds !== "undefined") sounds.playWarningSound();
    el.classList.remove("shake-notice");
    void el.offsetWidth; // Force reflow
    el.classList.add("shake-notice");

    const steps = this.getDraftSteps();
    const currentStep = steps[this.currentStepIndex];
    const activeSlot = this.getCurrentActiveSlot();
    const teamName = currentStep.team === "blue" ? "Đội Xanh" : "Đội Đỏ";

    if (activeSlot) {
      this.showDraftNotice(
        `Vị trí này đang bị khóa! Hiện tại đến lượt ${teamName} chọn vị trí [${activeSlot.laneName}] (Lượt #${activeSlot.pickNumber}).`
      );
    } else {
      this.showDraftNotice(
        `Vị trí này chưa tới lượt! Vui lòng chọn theo đúng thứ tự lượt ban/pick.`
      );
    }
  }

  showDraftNotice(msg) {
    if (!this.currentTurnBanner) return;
    const guideEl = this.currentTurnBanner.querySelector(".turn-banner-guide");
    if (guideEl) {
      if (!this._originalGuideText) {
        this._originalGuideText = guideEl.innerHTML;
      }
      guideEl.innerHTML = `<span class="notice-highlight">${msg}</span>`;
      clearTimeout(this._noticeTimer);
      this._noticeTimer = setTimeout(() => {
        if (this._originalGuideText) {
          guideEl.innerHTML = this._originalGuideText;
          this._originalGuideText = null;
        }
      }, 3500);
    }
  }

  setFirstPickTeam(team, resetIfHasPicks = true) {
    this.firstPickTeam = team;

    // Update buttons in top bar
    if (this.btnBlueFirst) {
      this.btnBlueFirst.classList.toggle("active", team === "blue");
    }
    if (this.btnRedFirst) {
      this.btnRedFirst.classList.toggle("active", team === "red");
    }

    // Update header tags on team cards
    if (this.btnTagBlueFirst) {
      this.btnTagBlueFirst.classList.toggle("active", team === "blue");
      this.btnTagBlueFirst.innerHTML = team === "blue" ? "FIRST PICK" : "SECOND PICK";
    }
    if (this.btnTagRedFirst) {
      this.btnTagRedFirst.classList.toggle("active", team === "red");
      this.btnTagRedFirst.innerHTML = team === "red" ? "FIRST PICK" : "SECOND PICK";
    }

    this.currentStepIndex = 0;
    if (resetIfHasPicks && this.getTotalPicksCount() > 0) {
      this.state.blue.picks.forEach((p) => { p.hero = null; p.pickOrder = null; });
      this.state.red.picks.forEach((p) => { p.hero = null; p.pickOrder = null; });
    }

    if (typeof sounds !== "undefined") sounds.playClick();
    this.renderDraftStepper();
    this.renderSlots();
    this.updateAnalysis();
    this.showDraftNotice(
      `Đã chuyển [${team === "blue" ? "Đội Xanh" : "Đội Đỏ"}] thành đội FIRST PICK (chọn trước)!`
    );
  }

  bindEvents() {
    if (this.btnBlueFirst) {
      this.btnBlueFirst.addEventListener("click", () => this.setFirstPickTeam("blue"));
    }
    if (this.btnRedFirst) {
      this.btnRedFirst.addEventListener("click", () => this.setFirstPickTeam("red"));
    }
    if (this.btnTagBlueFirst) {
      this.btnTagBlueFirst.addEventListener("click", () => this.setFirstPickTeam("blue"));
    }
    if (this.btnTagRedFirst) {
      this.btnTagRedFirst.addEventListener("click", () => this.setFirstPickTeam("red"));
    }

    if (this.btnPrevStep) {
      this.btnPrevStep.addEventListener("click", () => {
        if (typeof sounds !== "undefined") sounds.playClick();
        if (this.currentStepIndex > 0) {
          this.currentStepIndex--;
          this.renderDraftStepper();
          this.renderSlots();
          this.updateAnalysis();
        }
      });
    }

    if (this.btnNextStep) {
      this.btnNextStep.addEventListener("click", () => {
        if (typeof sounds !== "undefined") sounds.playClick();
        if (this.currentStepIndex < 5) {
          this.currentStepIndex++;
          this.renderDraftStepper();
          this.renderSlots();
          this.updateAnalysis();
        }
      });
    }

    if (this.modalClose) {
      this.modalClose.addEventListener("click", () => this.closePicker());
    }

    if (this.modal) {
      this.modal.addEventListener("click", (e) => {
        if (e.target === this.modal) this.closePicker();
      });
    }

    if (this.modalSearch) {
      this.modalSearch.addEventListener("input", () => this.renderHeroPickerGrid());
    }

    this.modalRoleFilters.forEach((btn) => {
      btn.addEventListener("click", () => {
        if (typeof sounds !== "undefined") sounds.playClick();
        this.modalRoleFilters.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        this.renderHeroPickerGrid();
      });
    });

    if (this.btnReset) {
      this.btnReset.addEventListener("click", () => {
        if (typeof sounds !== "undefined") sounds.playClick();
        if (confirm("Đặt lại toàn bộ các lượt Cấm & Chọn?")) {
          this.resetAll();
        }
      });
    }

    if (this.btnQuickMeta) {
      this.btnQuickMeta.addEventListener("click", () => {
        if (typeof sounds !== "undefined") sounds.playClick();
        this.quickMetaDemo();
      });
    }
  }

  resetAll() {
    this.state.blue.bans = [null, null, null, null, null];
    this.state.red.bans = [null, null, null, null, null];
    this.state.blue.picks.forEach((p) => { p.hero = null; p.pickOrder = null; });
    this.state.red.picks.forEach((p) => { p.hero = null; p.pickOrder = null; });
    this.currentStepIndex = 0;
    this.renderDraftStepper();
    this.renderSlots();
    this.updateAnalysis();
  }

  quickMetaDemo() {
    this.firstPickTeam = "blue";
    this.btnBlueFirst?.classList.add("active");
    this.btnRedFirst?.classList.remove("active");

    // Standard high-level tournament bans
    this.state.blue.bans = ["aya", "aoi", "hayate", "rouie", "keera"].map((id) =>
      HEROES_DATABASE.find((h) => h.id === id)
    );
    this.state.red.bans = ["liliana", "kaine", "yan", "elsu", "violet"].map((id) =>
      HEROES_DATABASE.find((h) => h.id === id)
    );

    // Phase 1: Blue pick Florentino (Top)
    this.state.blue.picks[0].hero = HEROES_DATABASE.find((h) => h.id === "florentino");
    this.state.blue.picks[0].pickOrder = "Pick #1";

    // Phase 2: Red pick 2 cross: Omen (Top) + Nakroth (Jungle)
    this.state.red.picks[0].hero = HEROES_DATABASE.find((h) => h.id === "omen");
    this.state.red.picks[0].pickOrder = "Pick #2";
    this.state.red.picks[1].hero = HEROES_DATABASE.find((h) => h.id === "nakroth");
    this.state.red.picks[1].pickOrder = "Pick #3";

    // Phase 3: Blue pick 2 cross: Butterfly (Jungle) + Yue (Mid)
    this.state.blue.picks[1].hero = HEROES_DATABASE.find((h) => h.id === "butterfly");
    this.state.blue.picks[1].pickOrder = "Pick #4";
    this.state.blue.picks[2].hero = HEROES_DATABASE.find((h) => h.id === "yue");
    this.state.blue.picks[2].pickOrder = "Pick #5";

    // Phase 4: Red pick 2 cross: Iggy (Mid) + Stuart (AD)
    this.state.red.picks[2].hero = HEROES_DATABASE.find((h) => h.id === "iggy");
    this.state.red.picks[2].pickOrder = "Pick #6";
    this.state.red.picks[3].hero = HEROES_DATABASE.find((h) => h.id === "stuart");
    this.state.red.picks[3].pickOrder = "Pick #7";

    this.currentStepIndex = 4; // Step 5: Blue to pick AD & SP
    if (typeof sounds !== "undefined") sounds.playPickSound();
    this.renderDraftStepper();
    this.renderSlots();
    this.updateAnalysis();
  }

  getUsedHeroIds() {
    const ids = new Set();
    this.state.blue.bans.forEach((h) => h && ids.add(h.id));
    this.state.blue.picks.forEach((p) => p.hero && ids.add(p.hero.id));
    this.state.red.bans.forEach((h) => h && ids.add(h.id));
    this.state.red.picks.forEach((p) => p.hero && ids.add(p.hero.id));
    return ids;
  }

  renderDraftStepper() {
    if (!this.stepperTrack) return;
    const steps = this.getDraftSteps();
    const currentStep = steps[this.currentStepIndex];
    const activeSlot = this.getCurrentActiveSlot();

    this.stepperTrack.innerHTML = "";
    steps.forEach((s, idx) => {
      const chip = document.createElement("div");
      const isCurrent = idx === this.currentStepIndex;
      const isPast = idx < this.currentStepIndex;
      chip.className = `draft-step-chip ${s.team}-step ${isCurrent ? "active" : ""} ${isPast ? "completed" : ""}`;
      chip.innerHTML = `
        <span class="step-num">${s.step}</span>
        <span class="step-txt">${s.label}</span>
      `;
      chip.addEventListener("click", () => {
        if (typeof sounds !== "undefined") sounds.playClick();
        this.currentStepIndex = idx;
        this.renderDraftStepper();
        this.renderSlots();
        this.updateAnalysis();
      });
      this.stepperTrack.appendChild(chip);
    });

    const totalPicksDone = this.getTotalPicksCount();
    const isAllPicksDone = totalPicksDone === 10;

    if (this.currentTurnBanner) {
      if (isAllPicksDone) {
        this.currentTurnBanner.className = "current-turn-banner banner-complete";
        this.currentTurnBanner.innerHTML = `
          <div class="turn-banner-tag">HOÀN TẤT</div>
          <div class="turn-banner-content">
            <div class="turn-banner-title">HOÀN THÀNH 10 LƯỢT CẤM & CHỌN!</div>
            <div class="turn-banner-guide">
              Cả hai đội đã hoàn tất đội hình Snake Draft. Xem cẩm nang so sánh lực lượng và tỷ lệ cân bằng bên dưới.
            </div>
          </div>
        `;
      } else if (currentStep) {
        const teamClass = currentStep.team === "blue" ? "banner-blue" : "banner-red";
        const teamName = currentStep.team === "blue" ? "ĐỘI XANH" : "ĐỘI ĐỎ";

        this.currentTurnBanner.className = `current-turn-banner ${teamClass}`;
        this.currentTurnBanner.innerHTML = `
          <div class="turn-banner-tag">BƯỚC ${currentStep.step}/6</div>
          <div class="turn-banner-content">
            <div class="turn-banner-title">
              ${currentStep.desc.toUpperCase()} ${activeSlot ? `— [LƯỢT #${activeSlot.pickNumber}]` : ""}
            </div>
            <div class="turn-banner-guide">
              ${
                activeSlot
                  ? `Đang đến lượt <strong>${teamName}</strong> chọn vị trí <strong>${activeSlot.laneName}</strong>. Các vị trí khác tạm thời bị khóa theo luật giải đấu.`
                  : `Đã hoàn tất chọn trong lượt này. Chọn "Lượt tiếp" để chuyển sang bước kế tiếp.`
              }
            </div>
          </div>
        `;
      }
    }
  }

  renderSlots() {
    const activeSlot = this.getCurrentActiveSlot();

    // Blue Bans
    this.blueBansEl.innerHTML = "";
    this.state.blue.bans.forEach((hero, idx) => {
      this.blueBansEl.appendChild(this.createSlotElement("blue", "ban", idx, hero));
    });

    // Red Bans
    this.redBansEl.innerHTML = "";
    this.state.red.bans.forEach((hero, idx) => {
      this.redBansEl.appendChild(this.createSlotElement("red", "ban", idx, hero));
    });

    // Blue Picks
    this.bluePicksEl.innerHTML = "";
    this.state.blue.picks.forEach((p, idx) => {
      const hero = p.hero;
      const isCurrentTurn = !hero && activeSlot && activeSlot.team === "blue" && activeSlot.index === idx;
      const isDisabled = !hero && !isCurrentTurn;

      this.bluePicksEl.appendChild(
        this.createSlotElement(
          "blue",
          "pick",
          idx,
          hero,
          p.lane,
          isCurrentTurn,
          isDisabled,
          p.pickOrder,
          isCurrentTurn ? activeSlot.pickNumber : null
        )
      );
    });

    // Red Picks
    this.redPicksEl.innerHTML = "";
    this.state.red.picks.forEach((p, idx) => {
      const hero = p.hero;
      const isCurrentTurn = !hero && activeSlot && activeSlot.team === "red" && activeSlot.index === idx;
      const isDisabled = !hero && !isCurrentTurn;

      this.redPicksEl.appendChild(
        this.createSlotElement(
          "red",
          "pick",
          idx,
          hero,
          p.lane,
          isCurrentTurn,
          isDisabled,
          p.pickOrder,
          isCurrentTurn ? activeSlot.pickNumber : null
        )
      );
    });
  }

  createSlotElement(
    team,
    type,
    index,
    hero,
    lane = null,
    isActiveTurn = false,
    isDisabled = false,
    pickOrder = null,
    currentPickNumber = null
  ) {
    const el = document.createElement("div");
    el.className = `bp-slot slot-${team} slot-${type} ${hero ? "filled" : "empty"} ${
      isActiveTurn ? "slot-active-turn" : ""
    } ${isDisabled ? "slot-disabled" : ""}`;
    const laneInfo = lane ? LANES[lane] : null;

    if (type === "ban") {
      if (hero) {
        el.innerHTML = `
          <div class="ban-card-inner">
            <img class="ban-hero-img" src="${hero.avatar}" alt="${hero.name}" onerror="this.src='https://lienquan.garena.vn/wp-content/uploads/2024/02/favicon.jpg'"/>
            <div class="ban-gradient-mask"></div>
            <div class="ban-top-badge">CẤM</div>
            <div class="ban-name-tag">${hero.name}</div>
            <button class="btn-clear-slot-ban" title="Hủy Cấm">×</button>
          </div>
        `;
      } else {
        el.innerHTML = `
          <div class="ban-empty-wrap">
            <span class="ban-empty-lbl">CẤM ${index + 1}</span>
          </div>
        `;
      }
    } else {
      // Pick slot
      if (hero) {
        el.innerHTML = `
          <div class="slot-lane-tag" style="background:${laneInfo?.color || "#38bdf8"}">
            ${laneInfo?.shortName || ""}
          </div>
          <div class="slot-avatar">
            <img src="${hero.avatar}" alt="${hero.name}" onerror="this.src='https://lienquan.garena.vn/wp-content/uploads/2024/02/favicon.jpg'"/>
            <span class="slot-tier-badge tier-${hero.tier.replace("+", "-plus")}">${hero.tier}</span>
          </div>
          <div class="slot-details">
            <div class="slot-hero-name">${hero.name} ${pickOrder ? `<span class="pick-order-tag">${pickOrder}</span>` : ""}</div>
            <div class="slot-hero-role">${hero.roles.join(", ")}</div>
          </div>
          <button class="btn-clear-slot" title="Hủy Chọn">×</button>
        `;
      } else {
        if (isActiveTurn) {
          el.innerHTML = `
            <div class="slot-lane-tag" style="background:${laneInfo?.color || (team === "blue" ? "#38bdf8" : "#f43f5e")}">
              ${laneInfo?.shortName || ""}
            </div>
            <div class="slot-empty-icon">ACTIVE</div>
            <div class="slot-name">
              <strong>Chọn ${laneInfo?.shortName || ""} ${currentPickNumber ? `(#${currentPickNumber})` : ""}</strong>
            </div>
          `;
        } else {
          el.innerHTML = `
            <div class="slot-lane-tag slot-lane-muted">
              ${laneInfo?.shortName || ""}
            </div>
            <div class="slot-empty-icon">LOCKED</div>
            <div class="slot-name">
              <span>${laneInfo?.shortName || index + 1}</span>
              <span class="lock-tag">Chưa tới lượt</span>
            </div>
          `;
        }
      }
    }

    const btnClear = el.querySelector(".btn-clear-slot, .btn-clear-slot-ban");
    if (btnClear) {
      btnClear.addEventListener("click", (e) => {
        e.stopPropagation();
        this.clearSlot(team, type, index);
      });
    }

    if (isDisabled) {
      el.addEventListener("click", () => {
        this.onDisabledSlotClicked(el, team, lane);
      });
    } else {
      el.addEventListener("click", () => {
        this.openPicker(team, type, index, lane, currentPickNumber || 1);
      });
    }

    return el;
  }

  clearSlot(team, type, index) {
    if (type === "ban") {
      this.state[team].bans[index] = null;
    } else {
      this.state[team].picks[index].hero = null;
      this.state[team].picks[index].pickOrder = null;

      const steps = this.getDraftSteps();
      const stepIdx = steps.findIndex(
        (s) => s.team === team && s.slots.includes(index)
      );
      if (stepIdx !== -1 && stepIdx < this.currentStepIndex) {
        this.currentStepIndex = stepIdx;
      }
    }
    if (typeof sounds !== "undefined") sounds.playClick();
    this.renderDraftStepper();
    this.renderSlots();
    this.updateAnalysis();
  }

  openPicker(team, type, index, lane = null, pickNumber = null) {
    if (typeof sounds !== "undefined") sounds.playClick();
    this.state.activeSlot = { team, type, index, lane, pickNumber };

    const modalTitle = document.getElementById("modal-picker-title");
    if (modalTitle) {
      const teamText = team === "blue" ? "Đội Xanh" : "Đội Đỏ";
      const laneInfo = lane ? LANES[lane] : null;
      if (type === "ban") {
        modalTitle.textContent = `${teamText}: Chọn Tướng CẤM (${index + 1}/5)`;
      } else {
        modalTitle.textContent = `${teamText}: Chọn Tướng [${laneInfo?.shortName || ""}] (Lượt #${pickNumber || ""})`;
      }
    }

    // Default filter to slot's lane
    if (lane && type === "pick") {
      this.modalRoleFilters.forEach((b) => {
        b.classList.toggle("active", b.dataset.lane === lane);
      });
    } else {
      this.modalRoleFilters.forEach((b) => {
        b.classList.toggle("active", b.dataset.lane === "all");
      });
    }

    if (this.modalSearch) this.modalSearch.value = "";
    this.renderHeroPickerGrid();

    if (this.modal) {
      this.modal.classList.add("open");
      setTimeout(() => this.modalSearch?.focus(), 100);
    }
  }

  closePicker() {
    if (this.modal) this.modal.classList.remove("open");
    this.state.activeSlot = null;
  }

  renderHeroPickerGrid() {
    if (!this.modalGrid) return;
    this.modalGrid.innerHTML = "";

    const activeFilter =
      document.querySelector(".modal-role-btn.active")?.dataset.lane || "all";
    const searchQuery = (this.modalSearch?.value || "").toLowerCase().trim();
    const usedIds = this.getUsedHeroIds();

    const filtered = HEROES_DATABASE.filter((h) => {
      const matchSearch =
        !searchQuery ||
        h.name.toLowerCase().includes(searchQuery) ||
        h.id.toLowerCase().includes(searchQuery);

      const matchLane =
        activeFilter === "all" ||
        h.lane === activeFilter ||
        h.secondary_lane === activeFilter;

      return matchSearch && matchLane;
    });

    filtered.forEach((h) => {
      const isUsed = usedIds.has(h.id);
      const card = document.createElement("div");
      card.className = `picker-hero-card ${isUsed ? "disabled" : ""}`;

      const tier = TIERS[h.tier] || TIERS["A"];
      card.innerHTML = `
        <div class="picker-avatar">
          <img src="${h.avatar}" alt="${h.name}" onerror="this.src='https://lienquan.garena.vn/wp-content/uploads/2024/02/favicon.jpg'"/>
          <span class="picker-tier-tag" style="background:${tier.color}">${h.tier}</span>
          ${isUsed ? '<div class="used-badge">Đã Chọn/Cấm</div>' : ""}
        </div>
        <div class="picker-name">${h.name}</div>
        <div class="picker-lane">${LANES[h.lane]?.shortName || ""}</div>
      `;

      if (!isUsed) {
        card.addEventListener("click", () => {
          this.selectHeroForActiveSlot(h);
        });
      }

      this.modalGrid.appendChild(card);
    });
  }

  selectHeroForActiveSlot(hero) {
    if (!this.state.activeSlot) return;
    const { team, type, index, pickNumber } = this.state.activeSlot;

    if (type === "ban") {
      this.state[team].bans[index] = hero;
      if (typeof sounds !== "undefined") sounds.playBanSound();
    } else {
      const orderLabel = pickNumber ? `Pick #${pickNumber}` : `Pick #${this.getTotalPicksCount() + 1}`;
      this.state[team].picks[index].hero = hero;
      this.state[team].picks[index].pickOrder = orderLabel;
      if (typeof sounds !== "undefined") sounds.playPickSound();

      this.checkAndAdvanceDraftStep();
    }

    this.closePicker();
    this.renderDraftStepper();
    this.renderSlots();
    this.updateAnalysis();
  }

  checkAndAdvanceDraftStep() {
    const steps = this.getDraftSteps();
    const currentStep = steps[this.currentStepIndex];
    if (!currentStep) return;

    const allFilled = currentStep.slots.every(
      (sIdx) => this.state[currentStep.team].picks[sIdx].hero !== null
    );

    if (allFilled && this.currentStepIndex < 5) {
      this.currentStepIndex++;
    }
  }

  quickPickHero(team, pickIndex, heroId) {
    const hero = HEROES_DATABASE.find((h) => h.id === heroId);
    if (!hero) return;

    const totalPicksDone =
      this.state.blue.picks.filter((p) => p.hero).length +
      this.state.red.picks.filter((p) => p.hero).length + 1;

    this.state[team].picks[pickIndex].hero = hero;
    this.state[team].picks[pickIndex].pickOrder = `Pick #${totalPicksDone}`;
    if (typeof sounds !== "undefined") sounds.playPickSound();

    this.checkAndAdvanceDraftStep();
    this.renderSlots();
    this.updateAnalysis();
  }

  updateAnalysis() {
    const usedIds = this.getUsedHeroIds();
    this.analyzer.update(
      this.state,
      usedIds,
      this.analysisContainer,
      this.blueMetricsEl,
      this.redMetricsEl
    );
  }
}
