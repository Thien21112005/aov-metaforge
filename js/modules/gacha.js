/**
 * AOV MetaForge - Gacha Module
 * Multi-lane high-speed rolling reels, weighted meta drop rates, and archive history.
 */

class GachaManager {
  constructor() {
    this.isRolling = false;
    this.currentMode = "5"; // "1", "2", "3", "5"
    this.selectedLaneFor1 = "all"; // for mode 1
    this.activeLanes = ["top", "jungle", "mid", "ad", "sp"];
    this.archive = this.loadArchive();

    this.initElements();
    this.bindEvents();
    this.renderReels();
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
        this.modeButtons.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        this.currentMode = btn.dataset.mode;
        this.updateActiveLanes();
        this.renderReels();
      });
    });

    if (this.laneSelect1) {
      this.laneSelect1.addEventListener("change", (e) => {
        this.selectedLaneFor1 = e.target.value;
        this.updateActiveLanes();
        this.renderReels();
      });
    }

    this.laneCheckboxes.forEach((chk) => {
      chk.addEventListener("change", () => {
        if (this.isRolling) return;
        if (typeof sounds !== "undefined") sounds.playClick();
        if (this.currentMode === "custom") {
          this.updateActiveLanes();
          this.renderReels();
        }
      });
    });

    if (this.btnRoll) {
      this.btnRoll.addEventListener("click", () => this.startRoll());
    }

    if (this.btnClearArchive) {
      this.btnClearArchive.addEventListener("click", () => {
        if (confirm("Bạn có chắc muốn xóa toàn bộ lịch sử quay gacha không?")) {
          this.archive = [];
          this.saveArchive();
          this.renderArchiveList();
        }
      });
    }
  }

  updateActiveLanes() {
    if (this.laneSelect1) {
      this.laneSelect1.style.display = this.currentMode === "1" ? "inline-block" : "none";
    }
    if (this.customLanesPanel) {
      this.customLanesPanel.style.display = this.currentMode === "custom" ? "flex" : "none";
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

  renderReels() {
    if (!this.reelsContainer) return;
    this.reelsContainer.innerHTML = "";
    this.reelsContainer.className = `reels-grid lanes-count-${this.activeLanes.length}`;

    this.activeLanes.forEach((laneKey, index) => {
      const laneInfo = LANES[laneKey];
      const slotEl = document.createElement("div");
      slotEl.className = "reel-slot";
      slotEl.id = `reel-slot-${index}`;

      slotEl.innerHTML = `
        <div class="slot-header" style="border-top: 3px solid ${laneInfo.color}">
          <span class="lane-name"><span class="lane-icon-sub">${laneInfo.icon}</span> ${laneInfo.shortName.toUpperCase()}</span>
          <span class="lane-badge-sub">${laneInfo.name}</span>
        </div>
        <div class="slot-window">
          <div class="slot-strip" id="slot-strip-${index}">
            <div class="reel-card idle-card">
              <div class="card-avatar placeholder-avatar" style="border-color: ${laneInfo.color}">${laneInfo.icon}</div>
              <div class="card-name">${laneInfo.shortName}</div>
              <div class="card-badge">SẴN SÀNG</div>
            </div>
          </div>
        </div>
        <div class="slot-indicator"></div>
      `;
      this.reelsContainer.appendChild(slotEl);
    });
  }

  startRoll() {
    if (this.isRolling) return;
    this.isRolling = true;
    this.btnRoll.disabled = true;
    this.btnRoll.classList.add("loading");
    this.btnRoll.innerHTML = `<span class="spinner"></span> ĐANG QUAY NHÂN PHẨM...`;
    if (typeof sounds !== "undefined") sounds.playClick();

    if (this.resultBanner) {
      this.resultBanner.classList.remove("show");
    }

    const rollResults = [];
    const usedHeroIds = new Set();
    const CARD_HEIGHT = 120;
    const STRIP_COUNT = 24;

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
      stripEl.innerHTML = "";
      stripEl.style.transition = "none";
      stripEl.style.transform = "translateY(0px)";

      const cardsData = [];
      for (let i = 0; i < STRIP_COUNT - 1; i++) {
        const randomHero = candidates[Math.floor(Math.random() * candidates.length)];
        cardsData.push(randomHero);
      }
      cardsData.push(targetHero);

      cardsData.forEach((h) => {
        const tier = TIERS[h.tier] || TIERS["A"];
        const card = document.createElement("div");
        card.className = `reel-card tier-${h.tier.replace("+", "-plus")}`;
        card.innerHTML = `
          <div class="card-avatar" style="border-color: ${tier.border}">
            <img src="${h.avatar}" alt="${h.name}" onerror="this.src='https://lienquan.garena.vn/wp-content/uploads/2024/02/favicon.jpg'"/>
            <span class="tier-tag" style="background: ${tier.color}">${h.tier}</span>
          </div>
          <div class="card-name">${h.name}</div>
          <div class="card-role">${h.roles[0] || "Đấu sĩ"}</div>
        `;
        stripEl.appendChild(card);
      });
    });

    let tickInterval = setInterval(() => {
      if (typeof sounds !== "undefined") sounds.playRollTick();
    }, 85);

    const stopDelayBase = 1500;
    const stopDelayStep = 320;

    this.activeLanes.forEach((_, index) => {
      const slotDelay = stopDelayBase + index * stopDelayStep;
      const stripEl = document.getElementById(`slot-strip-${index}`);
      const targetTranslate = -(STRIP_COUNT - 1) * CARD_HEIGHT;

      setTimeout(() => {
        if (stripEl) {
          stripEl.style.transition = `transform ${slotDelay / 1000}s cubic-bezier(0.12, 0.8, 0.2, 1)`;
          stripEl.style.transform = `translateY(${targetTranslate}px)`;
        }
      }, 50);

      setTimeout(() => {
        const resultItem = rollResults[index];
        const isLegendary = resultItem?.hero?.tier === "S+";

        const slotEl = document.getElementById(`reel-slot-${index}`);
        if (slotEl) {
          slotEl.classList.add("slot-landed");
          if (isLegendary) {
            slotEl.classList.add("legendary-glow");
            if (typeof sounds !== "undefined") sounds.playLegendaryFanfare();
          } else {
            if (typeof sounds !== "undefined") sounds.playCardStop();
          }
        }

        if (index === this.activeLanes.length - 1) {
          clearInterval(tickInterval);
          this.onRollComplete(rollResults);
        }
      }, slotDelay + 100);
    });
  }

  onRollComplete(rollResults) {
    this.isRolling = false;
    this.btnRoll.disabled = false;
    this.btnRoll.classList.remove("loading");
    this.btnRoll.innerHTML = `QUAY LẠI GACHA`;

    const hasTamyn = rollResults.some((r) => r.hero.id === "tamyn");
    const hasSPlus = rollResults.some((r) => r.hero.tier === "S+");

    let bannerText = "Đội hình hoàn chỉnh chuẩn vị trí sẵn sàng leo rank!";
    let bannerTitle = "ĐỘI HÌNH ĐÃ THIẾT LẬP";

    if (hasTamyn) {
      bannerTitle = "SIÊU QUÁI VẬT META: TAMYN XUẤT HIỆN";
      bannerText = "Tỷ lệ đặc biệt thành công! Tamyn đang là đấu sĩ áp đảo nhất meta hiện tại.";
    } else if (hasSPlus) {
      bannerTitle = "NHÂN PHẨM VÀNG: S+ TIER XUẤT HIỆN";
      bannerText = "Đội hình sở hữu các vị tướng cấp bậc tối cao tại các giải đấu!";
    }

    if (this.resultBanner) {
      this.resultBanner.innerHTML = `
        <div class="banner-title">${bannerTitle}</div>
        <div class="banner-desc">${bannerText}</div>
      `;
      this.resultBanner.classList.add("show");
    }

    this.saveToArchive(rollResults, hasTamyn || hasSPlus);
    this.renderArchiveList();
  }

  saveToArchive(rollResults, isSpecial) {
    const record = {
      id: Date.now(),
      time: new Date().toLocaleString("vi-VN"),
      mode: this.currentMode,
      modeTitle:
        this.currentMode === "5"
          ? "Đội Hình 5v5"
          : this.currentMode === "3"
          ? "Cụm 3 (Mid-Rừng-SP)"
          : this.currentMode === "2"
          ? "Cặp Đôi Rồng (AD-SP)"
          : `Đơn (${LANES[this.activeLanes[0]]?.shortName || "Tự do"})`,
      isSpecial: isSpecial,
      heroes: rollResults.map((r) => ({
        lane: r.lane,
        laneName: LANES[r.lane]?.shortName || r.lane,
        name: r.hero.name,
        avatar: r.hero.avatar,
        tier: r.hero.tier,
        role: r.hero.roles[0] || "",
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

  renderArchiveList() {
    if (!this.archiveContainer) return;
    if (this.archive.length === 0) {
      this.archiveContainer.innerHTML = `
        <div class="archive-empty">
          <div>Chưa có bản ghi nào. Hãy bấm <strong>Bắt Đầu Quay Gacha</strong> để tạo đội hình đầu tiên!</div>
        </div>
      `;
      return;
    }

    this.archiveContainer.innerHTML = "";
    this.archive.forEach((item) => {
      const card = document.createElement("div");
      card.className = `archive-item ${item.isSpecial ? "special-record" : ""}`;
      const heroesHtml = item.heroes
        .map((h) => {
          const tier = TIERS[h.tier] || TIERS["A"];
          return `
            <div class="archive-hero-chip" title="${h.name} (${h.laneName})">
              <img src="${h.avatar}" alt="${h.name}" onerror="this.src='https://lienquan.garena.vn/wp-content/uploads/2024/02/favicon.jpg'"/>
              <span class="chip-lane">${h.laneName}</span>
              <span class="chip-name">${h.name}</span>
              <span class="chip-tier" style="background: ${tier.color}">${h.tier}</span>
            </div>
          `;
        })
        .join("");

      card.innerHTML = `
        <div class="archive-item-header">
          <span class="archive-mode-tag">${item.modeTitle}</span>
          <span class="archive-time">${item.time}</span>
        </div>
        <div class="archive-heroes-row">
          ${heroesHtml}
        </div>
      `;
      this.archiveContainer.appendChild(card);
    });
  }
}
