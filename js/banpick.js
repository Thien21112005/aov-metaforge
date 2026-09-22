/**
 * Ban/Pick 5v5 Tournament Format & Deep AI Meta/Counter Reasoning Analyzer
 * Features Snake Draft Turn Sequence: 1 - 2 - 2 - 2 - 2 - 1
 */

class BanPickManager {
  constructor() {
    this.lanes = ["top", "jungle", "mid", "ad", "sp"];
    this.firstPickTeam = "blue"; // 'blue' or 'red'
    this.currentStepIndex = 0; // 0 to 5 (corresponding to 6 pick phases)

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
    const name1 = t1 === "blue" ? "Đội Xanh" : "Đội Đỏ";
    const name2 = t2 === "blue" ? "Đội Xanh" : "Đội Đỏ";
    const icon1 = t1 === "blue" ? "🔵" : "🔴";
    const icon2 = t2 === "blue" ? "🔵" : "🔴";

    return [
      {
        step: 1,
        team: t1,
        slots: [0], // Top
        count: 1,
        pickOrders: [1],
        label: `${icon1} ${name1} (1)`,
        desc: `${name1} pick 1 tướng đầu tiên (Đường Caesar / Top)`,
      },
      {
        step: 2,
        team: t2,
        slots: [0, 1], // Top, Jungle
        count: 2,
        pickOrders: [2, 3],
        label: `${icon2} ${name2} (2)`,
        desc: `${name2} pick chéo 2 tướng (Top & Rừng)`,
      },
      {
        step: 3,
        team: t1,
        slots: [1, 2], // Jungle, Mid
        count: 2,
        pickOrders: [4, 5],
        label: `${icon1} ${name1} (2)`,
        desc: `${name1} pick chéo 2 tướng (Rừng & Mid)`,
      },
      {
        step: 4,
        team: t2,
        slots: [2, 3], // Mid, AD
        count: 2,
        pickOrders: [6, 7],
        label: `${icon2} ${name2} (2)`,
        desc: `${name2} pick chéo 2 tướng (Mid & Xạ Thủ)`,
      },
      {
        step: 5,
        team: t1,
        slots: [3, 4], // AD, SP
        count: 2,
        pickOrders: [8, 9],
        label: `${icon1} ${name1} (2)`,
        desc: `${name1} pick chéo 2 tướng cuối (Xạ Thủ & Trợ Thủ)`,
      },
      {
        step: 6,
        team: t2,
        slots: [4], // SP
        count: 1,
        pickOrders: [10],
        label: `${icon2} ${name2} (1)`,
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
    sounds.playWarningSound();
    el.classList.remove("shake-notice");
    void el.offsetWidth; // Force reflow to restart animation
    el.classList.add("shake-notice");

    const steps = this.getDraftSteps();
    const currentStep = steps[this.currentStepIndex];
    const activeSlot = this.getCurrentActiveSlot();
    const teamName = currentStep.team === "blue" ? "Đội Xanh" : "Đội Đỏ";

    if (activeSlot) {
      this.showDraftNotice(
        `⚠️ Vị trí này đang bị vô hiệu hóa! Hiện tại đến lượt ${teamName} chọn vị trí [${activeSlot.laneName}] (Pick #${activeSlot.pickNumber}).`
      );
    } else {
      this.showDraftNotice(
        `⚠️ Vị trí này chưa tới lượt! Vui lòng chọn theo đúng thứ tự lượt pick.`
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
      guideEl.innerHTML = `<span style="color: #dc2626; font-weight: 700; background: #fee2e2; padding: 2px 8px; border-radius: 4px; display: inline-block;">${msg}</span>`;
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
      this.btnTagBlueFirst.innerHTML = team === "blue" ? "👑 First Pick" : "⚔️ Pick Sau";
    }
    if (this.btnTagRedFirst) {
      this.btnTagRedFirst.classList.toggle("active", team === "red");
      this.btnTagRedFirst.innerHTML = team === "red" ? "👑 First Pick" : "⚔️ Pick Sau";
    }

    this.currentStepIndex = 0;
    if (resetIfHasPicks && this.getTotalPicksCount() > 0) {
      this.state.blue.picks.forEach((p) => { p.hero = null; p.pickOrder = null; });
      this.state.red.picks.forEach((p) => { p.hero = null; p.pickOrder = null; });
    }

    sounds.playClick();
    this.renderDraftStepper();
    this.renderSlots();
    this.updateAnalysis();
    this.showDraftNotice(
      `🎯 Đã chọn [${team === "blue" ? "🔵 Đội Xanh" : "🔴 Đội Đỏ"}] là đội PICK TRƯỚC (First Pick)!`
    );
  }

  bindEvents() {
    // First pick team selector in top bar
    if (this.btnBlueFirst) {
      this.btnBlueFirst.addEventListener("click", () => {
        this.setFirstPickTeam("blue");
      });
    }

    if (this.btnRedFirst) {
      this.btnRedFirst.addEventListener("click", () => {
        this.setFirstPickTeam("red");
      });
    }

    // First pick team tag in team headers
    if (this.btnTagBlueFirst) {
      this.btnTagBlueFirst.addEventListener("click", () => {
        this.setFirstPickTeam("blue");
      });
    }

    if (this.btnTagRedFirst) {
      this.btnTagRedFirst.addEventListener("click", () => {
        this.setFirstPickTeam("red");
      });
    }

    if (this.btnPrevStep) {
      this.btnPrevStep.addEventListener("click", () => {
        sounds.playClick();
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
        sounds.playClick();
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
        sounds.playClick();
        this.modalRoleFilters.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        this.renderHeroPickerGrid();
      });
    });

    if (this.btnReset) {
      this.btnReset.addEventListener("click", () => {
        sounds.playClick();
        if (confirm("Đặt lại toàn bộ lượt Cấm & Chọn?")) {
          this.resetAll();
        }
      });
    }

    if (this.btnQuickMeta) {
      this.btnQuickMeta.addEventListener("click", () => {
        sounds.playClick();
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
    // Pro Snake Draft simulation: Blue First
    this.firstPickTeam = "blue";
    this.btnBlueFirst?.classList.add("active");
    this.btnRedFirst?.classList.remove("active");

    // Bans
    this.state.blue.bans = ["aya", "aoi", "hayate", "rouie", "keera"].map((id) =>
      HEROES_DATABASE.find((h) => h.id === id)
    );
    this.state.red.bans = ["liliana", "kaine", "yan", "elsu", "violet"].map((id) =>
      HEROES_DATABASE.find((h) => h.id === id)
    );

    // Lượt 1: Blue pick Florentino (Top)
    this.state.blue.picks[0].hero = HEROES_DATABASE.find((h) => h.id === "florentino");
    this.state.blue.picks[0].pickOrder = "Pick #1";

    // Lượt 2: Red pick 2 chéo: Omen (Top) + Nakroth (Rừng)
    this.state.red.picks[0].hero = HEROES_DATABASE.find((h) => h.id === "omen");
    this.state.red.picks[0].pickOrder = "Pick #2";
    this.state.red.picks[1].hero = HEROES_DATABASE.find((h) => h.id === "nakroth");
    this.state.red.picks[1].pickOrder = "Pick #3";

    // Lượt 3: Blue pick 2 chéo: Butterfly (Rừng - slot 1) + Yue (Mid - slot 2)
    this.state.blue.picks[1].hero = HEROES_DATABASE.find((h) => h.id === "butterfly");
    this.state.blue.picks[1].pickOrder = "Pick #4";
    this.state.blue.picks[2].hero = HEROES_DATABASE.find((h) => h.id === "yue");
    this.state.blue.picks[2].pickOrder = "Pick #5";

    // Lượt 4: Red pick 2 chéo: Iggy (Mid - slot 2) + Stuart (AD - slot 3)
    this.state.red.picks[2].hero = HEROES_DATABASE.find((h) => h.id === "iggy");
    this.state.red.picks[2].pickOrder = "Pick #6";
    this.state.red.picks[3].hero = HEROES_DATABASE.find((h) => h.id === "stuart");
    this.state.red.picks[3].pickOrder = "Pick #7";

    this.currentStepIndex = 4; // At step 5: Blue to pick AD (slot 3) & SP (slot 4)
    sounds.playPickSound();
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
        sounds.playClick();
        this.currentStepIndex = idx;
        this.renderDraftStepper();
        this.renderSlots();
        this.updateAnalysis();
      });
      this.stepperTrack.appendChild(chip);
    });

    // Check if all 10 picks across both teams are complete
    const totalPicksDone = this.getTotalPicksCount();
    const isAllPicksDone = totalPicksDone === 10;

    // Update Turn Banner
    if (this.currentTurnBanner) {
      if (isAllPicksDone) {
        this.currentTurnBanner.style.background = "#f0fdf4";
        this.currentTurnBanner.style.borderColor = "#86efac";
        this.currentTurnBanner.innerHTML = `
          <div class="turn-banner-icon">🏆</div>
          <div class="turn-banner-content">
            <div class="turn-banner-title" style="color: #15803d">
              ĐÃ HOÀN TẤT CẢ 10 LƯỢT CẤM & CHỌN!
            </div>
            <div class="turn-banner-guide" style="color: #166534">
              Cả hai đội đã hoàn thành lượt chọn so le chuẩn meta. Hãy xem cẩm nang phân tích kèo đấu và tỷ lệ cân bằng bên dưới!
            </div>
          </div>
        `;
      } else if (currentStep) {
        const teamColor = currentStep.team === "blue" ? "#2563eb" : "#dc2626";
        const teamBg = currentStep.team === "blue" ? "#eff6ff" : "#fef2f2";
        const teamBorder = currentStep.team === "blue" ? "#bfdbfe" : "#fecaca";
        const teamName = currentStep.team === "blue" ? "Đội Xanh" : "Đội Đỏ";

        this.currentTurnBanner.style.background = teamBg;
        this.currentTurnBanner.style.borderColor = teamBorder;
        this.currentTurnBanner.innerHTML = `
          <div class="turn-banner-icon">${currentStep.team === "blue" ? "🔵" : "🔴"}</div>
          <div class="turn-banner-content">
            <div class="turn-banner-title" style="color: ${teamColor}">
              BƯỚC ${currentStep.step}/6: ${currentStep.desc.toUpperCase()} ${activeSlot ? `— [LƯỢT #${activeSlot.pickNumber}]` : ""}
            </div>
            <div class="turn-banner-guide">
              ${
                activeSlot
                  ? `Đang đến lượt <b>${teamName}</b> chọn vị trí <b>${activeSlot.laneName}</b>! Các vị trí khác tạm thời bị vô hiệu hóa.`
                  : `Đã chọn xong lượt này. Bấm "Lượt tiếp ▶" để chuyển bước tiếp theo.`
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
          <div class="slot-lane-tag" style="background:${laneInfo?.color || "#3b82f6"}">
            ${laneInfo?.icon || ""} ${laneInfo?.shortName || ""}
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
            <div class="slot-lane-tag" style="background:${laneInfo?.color || (team === "blue" ? "#2563eb" : "#dc2626")}">
              ${laneInfo?.icon || ""} ${laneInfo?.shortName || ""}
            </div>
            <div class="slot-empty-icon">👉</div>
            <div class="slot-name">
              <b>Chọn ${laneInfo?.shortName || ""} ${currentPickNumber ? `(Pick #${currentPickNumber})` : ""}</b>
            </div>
          `;
        } else {
          // Disabled / Locked waiting slot
          el.innerHTML = `
            <div class="slot-lane-tag" style="background:${laneInfo?.color || "#64748b"}">
              ${laneInfo?.icon || ""} ${laneInfo?.shortName || ""}
            </div>
            <div class="slot-empty-icon">🔒</div>
            <div class="slot-name">
              <span>${laneInfo?.shortName || index + 1}</span>
              <span class="lock-tag">Chưa tới lượt</span>
            </div>
          `;
        }
      }
    }

    // Cancel / Clear button
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

      // Rewind currentStepIndex to the step that owns this slot
      const steps = this.getDraftSteps();
      const stepIdx = steps.findIndex(
        (s) => s.team === team && s.slots.includes(index)
      );
      if (stepIdx !== -1) {
        this.currentStepIndex = stepIdx;
      }
    }
    sounds.playClick();
    this.renderDraftStepper();
    this.renderSlots();
    this.updateAnalysis();
  }

  openPicker(team, type, index, lane, currentPickNumber = null) {
    this.state.activeSlot = { team, type, index, lane, pickNumber: currentPickNumber };
    sounds.playClick();

    const titleEl = document.getElementById("modal-picker-title");
    const teamName = team === "blue" ? "Đội Xanh (Blue Team)" : "Đội Đỏ (Red Team)";
    const actionName =
      type === "ban"
        ? `LƯỢT CẤM ${index + 1}`
        : `LƯỢT CHỌN ${LANES[lane]?.name ? LANES[lane].name.toUpperCase() : ""} ${
            currentPickNumber ? `[PICK #${currentPickNumber}]` : ""
          }`;
    titleEl.textContent = `${teamName} — ${actionName}`;

    if (lane) {
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
    this.modal.classList.add("open");
  }

  closePicker() {
    this.state.activeSlot = null;
    this.modal.classList.remove("open");
  }

  renderHeroPickerGrid() {
    const usedIds = this.getUsedHeroIds();
    const searchKw = (this.modalSearch?.value || "").trim().toLowerCase();
    const activeFilterBtn = document.querySelector(".modal-role-btn.active");
    const activeLane = activeFilterBtn?.dataset.lane || "all";

    this.modalGrid.innerHTML = "";

    const filtered = HEROES_DATABASE.filter((h) => {
      const matchSearch =
        !searchKw ||
        h.name.toLowerCase().includes(searchKw) ||
        h.id.toLowerCase().includes(searchKw);
      const matchLane =
        activeLane === "all" || h.lane === activeLane || h.secondary_lane === activeLane;
      return matchSearch && matchLane;
    });

    filtered.sort((a, b) => {
      const tierRank = { "S+": 4, S: 3, A: 2, B: 1 };
      return (tierRank[b.tier] || 0) - (tierRank[a.tier] || 0);
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
      sounds.playBanSound();
    } else {
      const orderLabel = pickNumber ? `Pick #${pickNumber}` : `Pick #${this.getTotalPicksCount() + 1}`;
      this.state[team].picks[index].hero = hero;
      this.state[team].picks[index].pickOrder = orderLabel;
      sounds.playPickSound();

      // Check if current draft step is complete to advance
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

    // Check if all slots in this current step are now filled
    const allFilled = currentStep.slots.every(
      (sIdx) => this.state[currentStep.team].picks[sIdx].hero !== null
    );

    if (allFilled && this.currentStepIndex < 5) {
      this.currentStepIndex++;
    }
  }

  /**
   * Deep AI Reasoning Analysis Engine
   */
  updateAnalysis() {
    const bluePicks = this.state.blue.picks;
    const redPicks = this.state.red.picks;
    const usedIds = this.getUsedHeroIds();

    let counterCardsHtml = "";
    let suggestionCardsHtml = "";

    // Special Pro Meta Alerts: Tamyn, Butterfly, Astrid
    const redTamyn = redPicks.find((p) => p.hero?.id === "tamyn");
    const redBf = redPicks.find((p) => p.hero?.id === "butterfly");
    const redAstrid = redPicks.find((p) => p.hero?.id === "astrid");

    if (redBf) {
      counterCardsHtml += `
        <div class="alert-box alert-butterfly" style="background: linear-gradient(135deg, #fdf2f8, #fce7f3); border: 2px solid #ec4899;">
          <div class="alert-icon">🦋</div>
          <div class="alert-body">
            <div class="alert-title" style="color: #9d174d;">CẢNH BÁO SÁT THỦ: ĐỐI THỦ ĐÃ CHỌN BUTTERFLY (S+ TIER GIẢI ĐẤU)!</div>
            <div class="alert-text" style="color: #831843;">
              Butterfly hiện tại đang cực kỳ khủng khiếp với lối lên đồ semi-tank và cơ chế hồi chiêu liên hoàn khi có mạng hạ gục/phụ tá, nhận tới 35% miễn thương khi nhảy chiêu cuối.
              <br/><b>Chiến thuật đối phó:</b> Bắt buộc phải pick <b>Aleister, Arum, Omen</b> hoặc <b>Chaugnar</b>. Toàn đội tuyệt đối không đứng tụm lại khi có đồng đội thấp máu để tránh bị cô nàng chém reset chiêu Pentakill. Xạ thủ/Pháp sư nên lên sớm <b>Quả Cầu Băng Sương</b> hoặc <b>Giáp Hộ Mệnh</b> để ngắt chuỗi combo!
            </div>
          </div>
        </div>
      `;
    }

    if (redAstrid) {
      counterCardsHtml += `
        <div class="alert-box alert-astrid" style="background: linear-gradient(135deg, #fffbeb, #fef3c7); border: 2px solid #f59e0b;">
          <div class="alert-icon">🗡️</div>
          <div class="alert-body">
            <div class="alert-title" style="color: #92400e;">ĐỐI ĐẦU ĐẤU SĨ: ĐỐI THỦ ĐÃ CHỌN ASTRID (S TIER GIẢI ĐẤU)!</div>
            <div class="alert-text" style="color: #78350f;">
              Astrid vừa được cập nhật sức mạnh cực kỳ ổn áp tại các giải đấu: Chiêu cuối Cự Kiếm bất tử 1.5s miễn mọi sát thương và khống chế, gây sát thương chuẩn diện rộng khi thấp máu.
              <br/><b>Chiến thuật đối phó:</b> Tận dụng các xạ thủ có sát thương chuẩn theo % máu như <b>Hayate</b> hoặc <b>Slimz</b> để thả diều từ xa. Khi Astrid vung kiếm bất tử, lập tức dùng chiêu lướt hoặc Tốc Biến tản ra khỏi phạm vi hình nón!
            </div>
          </div>
        </div>
      `;
    }

    if (redTamyn) {
      counterCardsHtml += `
        <div class="alert-box alert-tamyn">
          <div class="alert-icon">⚡</div>
          <div class="alert-body">
            <div class="alert-title">CẢNH BÁO CHIẾN THUẬT: ĐỐI THỦ ĐÃ CHỌN TAMYN (S+ TIER)!</div>
            <div class="alert-text">
              Tamyn sở hữu cơ chế chuyển đổi 100% tốc chạy thành sát thương dồn và hồi phục x2 khi đâm trúng mục tiêu. Chiêu cuối tích trữ 4 lần nạp thương cực kỳ nguy hiểm.
              <br/><b>Chiến thuật đối phó:</b> Bắt buộc phải pick tướng có <b>Khống chế áp chế / khóa tốc chạy</b> như <b>Omen</b> (xích Sát Vực triệt tiêu tốc chạy), <b>Aleister/Arum</b> (trói cứng), hoặc <b>Skud/Baldum</b>.
              Toàn đội cần lên sớm <b>Khiên Thất Truyền</b> và <b>Áo Choàng Băng</b> để làm chậm, biến các đòn đâm của Tamyn thành vô hại!
            </div>
          </div>
        </div>
      `;
    }

    // Lane by lane deep matchup reasoning
    this.lanes.forEach((laneKey, idx) => {
      const laneInfo = LANES[laneKey];
      const blueH = bluePicks[idx].hero;
      const redH = redPicks[idx].hero;

      if (redH && !blueH) {
        const directCounters = HEROES_DATABASE.filter(
          (c) =>
            !usedIds.has(c.id) &&
            (c.lane === laneKey || c.secondary_lane === laneKey) &&
            (redH.countered_by?.includes(c.id) || c.counters?.includes(redH.id))
        );

        const metaAlternates = HEROES_DATABASE.filter(
          (c) =>
            !usedIds.has(c.id) &&
            (c.lane === laneKey || c.secondary_lane === laneKey) &&
            (c.tier === "S+" || c.tier === "S")
        );

        const counterList = [...new Set([...directCounters, ...metaAlternates])].slice(0, 4);

        const counterItemsHtml = (redH.counter_items || ["Khiên Thất Truyền", "Giày Kiên Cường"])
          .map((item) => `<span class="badge-item">${item}</span>`)
          .join(" ");

        counterCardsHtml += `
          <div class="analysis-card enemy-pick-card">
            <div class="card-lane-badge" style="background:${laneInfo.color}">
              ${laneInfo.icon} Đối Đầu ${laneInfo.name}
            </div>
            
            <div class="enemy-header">
              <img class="enemy-avatar" src="${redH.avatar}" alt="${redH.name}"/>
              <div class="enemy-info">
                <div class="enemy-title">Địch đã pick: <b>${redH.name}</b> <span class="badge-tier-inline tier-${redH.tier.replace("+", "-plus")}">${redH.tier}</span></div>
                <div class="enemy-mechanics">⚔️ <b>Loại ST:</b> ${redH.damage_type === "magic" ? "Phép" : redH.damage_type === "true_damage" ? "Sát thương Chuẩn" : "Vật lý"} | <b>Độ cơ động:</b> ${redH.mobility}/100</div>
                <div class="enemy-weakness">⚠️ <b>Điểm yếu chí mạng:</b> ${redH.weaknesses}</div>
              </div>
            </div>

            <div class="counter-advice">
              💡 <b>Cách khắc chế ${redH.name}:</b> ${redH.counter_tips}
            </div>

            <div class="counter-items-box">
              🛡️ <b>Trang bị nên lên để khắc chế:</b> ${counterItemsHtml}
            </div>

            <div class="counter-picks-row">
              <div class="counter-picks-label">Gợi ý Tướng Khắc Chế Cứng (Hard Counter):</div>
              <div class="counter-chips">
                ${counterList
                  .map(
                    (c) => `
                  <div class="counter-chip" onclick="window.bpManager.quickPickHero('blue', ${idx}, '${c.id}')" title="Click để pick ${c.name} cho Đội Xanh">
                    <img src="${c.avatar}" alt="${c.name}"/>
                    <div class="chip-info">
                      <div class="chip-name">${c.name}</div>
                      <div class="chip-sub">Khắc chế (${c.tier})</div>
                    </div>
                    <span class="chip-plus">+</span>
                  </div>
                `
                  )
                  .join("")}
              </div>
            </div>
          </div>
        `;
      } else if (blueH && redH) {
        const blueWins =
          blueH.counters?.includes(redH.id) || redH.countered_by?.includes(blueH.id);
        const redWins =
          redH.counters?.includes(blueH.id) || blueH.countered_by?.includes(redH.id);

        let matchAssessment = "";
        let tacticalGuide = "";
        let matchClass = "match-even";

        if (blueWins && !redWins) {
          matchClass = "match-blue-win";
          matchAssessment = `🔥 ĐỘI XANH (${blueH.name}) CHIẾM LỢI THẾ ĐÈ ĐƯỜNG RÕ RỆT!`;
          tacticalGuide = `Chất tướng của ${blueH.name} khắc chế mạnh vào điểm yếu của ${redH.name}. Hãy chủ động dọn lính trước, đóng băng lính hoặc ép giao tranh khi đối phương sử dụng hụt chiêu thức then chốt.`;
        } else if (redWins && !blueWins) {
          matchClass = "match-red-win";
          matchAssessment = `⚠️ ĐỘI ĐỎ (${redH.name}) CÓ LỢI THẾ HƠN, ĐỘI XANH CẦN CẨN THẬN!`;
          tacticalGuide = `${blueH.name} đi kèo dưới so với ${redH.name}. Hãy đánh hòa hoãn, ôm trụ dọn lính an toàn và kêu gọi Rừng hoặc Trợ thủ lên gank hỗ trợ.`;
        } else {
          matchClass = "match-even";
          matchAssessment = `⚖️ KÈO ĐẤU CÂN BẰNG - QUYẾT ĐỊNH BỞI KỸ NĂNG VÀ DI CHUYỂN!`;
          tacticalGuide = `Hai vị tướng có ngưỡng sức mạnh ngang ngửa. Người chơi nào căn góc kỹ năng chuẩn xác hơn và đọc bản đồ tốt hơn sẽ giành thắng lợi.`;
        }

        counterCardsHtml += `
          <div class="analysis-card matchup-card ${matchClass}">
            <div class="card-lane-badge" style="background:${laneInfo.color}">
              ${laneInfo.icon} Phân Tích Kèo ${laneInfo.name}
            </div>
            
            <div class="matchup-versus">
              <div class="side-hero blue-side">
                <img src="${blueH.avatar}" alt="${blueH.name}"/>
                <span>${blueH.name} (${blueH.tier})</span>
              </div>
              <div class="vs-badge">VS</div>
              <div class="side-hero red-side">
                <img src="${redH.avatar}" alt="${redH.name}"/>
                <span>${redH.name} (${redH.tier})</span>
              </div>
            </div>

            <div class="matchup-result">${matchAssessment}</div>
            <div class="matchup-guide">📖 <b>Chiến thuật đối đầu:</b> ${tacticalGuide}</div>
          </div>
        `;
      } else if (!blueH && !redH) {
        const topMeta = HEROES_DATABASE.filter(
          (c) =>
            !usedIds.has(c.id) &&
            (c.lane === laneKey || c.secondary_lane === laneKey) &&
            (c.tier === "S+" || c.tier === "S")
        ).slice(0, 3);

        if (topMeta.length > 0) {
          suggestionCardsHtml += `
            <div class="suggestion-chip" onclick="window.bpManager.quickPickHero('blue', ${idx}, '${topMeta[0].id}')" title="Click để chọn nhanh cho Đội Xanh">
              <span class="sugg-lane">${laneInfo.icon} ${laneInfo.shortName}:</span>
              <img src="${topMeta[0].avatar}" alt="${topMeta[0].name}"/>
              <b>${topMeta[0].name}</b> (${topMeta[0].tier})
            </div>
          `;
        }
      }
    });

    // Synergies
    const blueValidHeroes = bluePicks.map((p) => p.hero).filter(Boolean);
    const synergyNotes = [];
    if (blueValidHeroes.some((h) => h.id === "aya")) {
      const bruisers = blueValidHeroes.filter((h) =>
        ["tamyn", "taara", "arthur", "allain", "keera", "yan", "butterfly"].includes(h.id)
      );
      if (bruisers.length > 0) {
        synergyNotes.push(`✨ Siêu Combo: <b>Aya + ${bruisers.map((b) => b.name).join(", ")}</b> (Bất tử càn quét giao tranh tổng!)`);
      } else {
        synergyNotes.push(`💡 Gợi ý: Đội Xanh đã có Aya, hãy pick thêm Đấu sĩ càn lướt khỏe như <b>Tamyn, Taara, Arthur, Butterfly</b> để tối ưu hóa sức mạnh!`);
      }
    }
    if (blueValidHeroes.some((h) => h.id === "rouie")) {
      synergyNotes.push(`🚀 Chiến thuật Rouie: Phối hợp hoàn hảo với các tướng cơ động cao có thể ra vào vòng như <b>Eland'orr, Nakroth, Hayate</b>.`);
    }

    if (!counterCardsHtml && !suggestionCardsHtml) {
      this.analysisContainer.innerHTML = `
        <div class="analysis-placeholder">
          <div class="placeholder-icon">🎯</div>
          <div class="placeholder-title">Hệ Thống Phân Tích Cấm / Chọn Sẵn Sàng</div>
          <p>Lần lượt chọn theo thứ tự chéo: <b>1 tướng $\\rightarrow$ 2 tướng $\\rightarrow$ 2 tướng $\\rightarrow$ 2 tướng $\\rightarrow$ 2 tướng $\\rightarrow$ 1 tướng</b>.</p>
          <p>Hệ thống tự động nhận diện chất tướng, chỉ ra điểm yếu và đưa ra các lựa chọn khắc chế cứng theo đúng meta giải đấu!</p>
        </div>
      `;
    } else {
      this.analysisContainer.innerHTML = `
        ${suggestionCardsHtml ? `<div class="meta-suggestions-bar"><span class="bar-lbl">Gợi ý Hot Meta cho Đội Xanh:</span> ${suggestionCardsHtml}</div>` : ""}
        ${synergyNotes.length > 0 ? `<div class="synergy-bar">${synergyNotes.map((s) => `<div>${s}</div>`).join("")}</div>` : ""}
        <div class="counter-cards-list">
          ${counterCardsHtml}
        </div>
      `;
    }

    this.renderTeamMeters();
  }

  renderTeamMeters() {
    const blueScore = this.calculateTeamScore(this.state.blue.picks.map((p) => p.hero));
    const redScore = this.calculateTeamScore(this.state.red.picks.map((p) => p.hero));

    this.blueMetricsEl.innerHTML = this.renderMetricsHtml("Đội Xanh", blueScore, "#2563eb");
    this.redMetricsEl.innerHTML = this.renderMetricsHtml("Đội Đỏ", redScore, "#dc2626");
  }

  calculateTeamScore(heroes) {
    const valid = heroes.filter(Boolean);
    if (valid.length === 0) {
      return { count: 0, phys: 50, magic: 50, cc: 40, tank: 40, mobility: 50, warnings: [] };
    }

    let magicCount = 0;
    let physCount = 0;
    let ccSum = 0;
    let tankSum = 0;
    let mobSum = 0;

    valid.forEach((h) => {
      if (h.damage_type === "magic") magicCount += 1.5;
      else if (h.damage_type === "hybrid") {
        magicCount += 0.8;
        physCount += 0.8;
      } else {
        physCount += 1;
      }

      ccSum += h.cc_rating || 50;
      mobSum += h.mobility || 50;

      const roles = h.roles || [];
      if (roles.includes("Đỡ đòn") || roles.includes("Trợ thủ")) {
        tankSum += 80;
      } else if (roles.includes("Đấu sĩ")) {
        tankSum += 50;
      } else {
        tankSum += 20;
      }
    });

    const totalDmg = magicCount + physCount || 1;
    const magicPct = Math.round((magicCount / totalDmg) * 100);
    const physPct = 100 - magicPct;

    const avgCC = Math.min(100, Math.round(ccSum / valid.length));
    const avgTank = Math.min(100, Math.round(tankSum / valid.length));
    const avgMob = Math.min(100, Math.round(mobSum / valid.length));

    const warnings = [];
    if (valid.length >= 3 && magicCount === 0) {
      warnings.push("Thiếu sát thương Phép! Địch sẽ lên toàn giáp vật lý và Khiên Thất Truyền.");
    }
    if (valid.length >= 3 && avgTank < 35) {
      warnings.push("Đội hình quá mỏng manh, thiếu tanker đỡ đòn mở combat!");
    }
    if (valid.length >= 3 && avgCC < 45) {
      warnings.push("Thiếu khống chế cứng, rất khó bắt các sát thủ/đấu sĩ cơ động như Tamyn, Aoi, Nakroth, Butterfly.");
    }

    return {
      count: valid.length,
      phys: physPct,
      magic: magicPct,
      cc: avgCC,
      tank: avgTank,
      mobility: avgMob,
      warnings,
    };
  }

  renderMetricsHtml(teamName, score, color) {
    return `
      <div class="team-score-card">
        <div class="score-header" style="color: ${color}">
          <b>${teamName} (${score.count}/5 Tướng)</b>
        </div>
        <div class="metric-row">
          <span class="m-label">Cân bằng ST:</span>
          <div class="m-dual-bar">
            <div class="bar-phys" style="width: ${score.phys}%">VL ${score.phys}%</div>
            <div class="bar-magic" style="width: ${score.magic}%">Phép ${score.magic}%</div>
          </div>
        </div>
        <div class="metric-row">
          <span class="m-label">Khống chế (CC):</span>
          <div class="m-bar"><div class="m-fill" style="width: ${score.cc}%; background: #8b5cf6"></div></div>
          <span class="m-val">${score.cc}%</span>
        </div>
        <div class="metric-row">
          <span class="m-label">Chống chịu:</span>
          <div class="m-bar"><div class="m-fill" style="width: ${score.tank}%; background: #10b981"></div></div>
          <span class="m-val">${score.tank}%</span>
        </div>
        <div class="metric-row">
          <span class="m-label">Độ cơ động:</span>
          <div class="m-bar"><div class="m-fill" style="width: ${score.mobility}%; background: #06b6d4"></div></div>
          <span class="m-val">${score.mobility}%</span>
        </div>
        ${
          score.warnings.length > 0
            ? `<div class="team-warnings">${score.warnings.map((w) => `<div>⚠️ ${w}</div>`).join("")}</div>`
            : ""
        }
      </div>
    `;
  }

  quickPickHero(team, pickIndex, heroId) {
    const hero = HEROES_DATABASE.find((h) => h.id === heroId);
    if (!hero) return;

    const totalPicksDone =
      this.state.blue.picks.filter((p) => p.hero).length +
      this.state.red.picks.filter((p) => p.hero).length + 1;

    this.state[team].picks[pickIndex].hero = hero;
    this.state[team].picks[pickIndex].pickOrder = `Lượt ${totalPicksDone}`;
    sounds.playPickSound();

    this.checkAndAdvanceDraftStep();
    this.renderSlots();
    this.updateAnalysis();
  }
}
