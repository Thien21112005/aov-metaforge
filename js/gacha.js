/**
 * Gacha Module: Multi-lane roll animation, S+ tier fanfare, and Archive History
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
    this.reelsContainer = document.getElementById("gacha-reels-container");
    this.btnRoll = document.getElementById("btn-roll-gacha");
    this.archiveContainer = document.getElementById("gacha-archive-list");
    this.btnClearArchive = document.getElementById("btn-clear-archive");
    this.resultBanner = document.getElementById("gacha-result-banner");
  }

  bindEvents() {
    // Mode switcher
    this.modeButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        if (this.isRolling) return;
        sounds.playClick();
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

    if (this.currentMode === "1") {
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
    this.reelsContainer.innerHTML = "";
    this.reelsContainer.className = `reels-grid lanes-count-${this.activeLanes.length}`;

    this.activeLanes.forEach((laneKey, index) => {
      const laneInfo = LANES[laneKey];
      const slotEl = document.createElement("div");
      slotEl.className = "reel-slot";
      slotEl.id = `reel-slot-${index}`;

      slotEl.innerHTML = `
        <div class="slot-header" style="border-top-color: ${laneInfo.color}">
          <span class="lane-icon">${laneInfo.icon}</span>
          <span class="lane-name">${laneInfo.name}</span>
        </div>
        <div class="slot-window">
          <div class="slot-strip" id="slot-strip-${index}">
            <!-- Default idle preview -->
            <div class="reel-card idle-card">
              <div class="card-avatar placeholder-avatar">${laneInfo.icon}</div>
              <div class="card-name">Sẵn sàng</div>
              <div class="card-badge">Ấn Quay!</div>
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
    this.btnRoll.innerHTML = `<span class="spinner"></span> Đang Quay Nhân Phẩm...`;
    sounds.playClick();

    if (this.resultBanner) {
      this.resultBanner.classList.remove("show");
    }

    const rollResults = [];
    const usedHeroIds = new Set();
    const CARD_HEIGHT = 160; // pixel height of card in strip
    const STRIP_COUNT = 24; // number of cards in strip

    // Prepare each reel
    this.activeLanes.forEach((laneKey, index) => {
      // Find candidate heroes for this lane
      let candidates = HEROES_DATABASE.filter(
        (h) => (h.lane === laneKey || h.secondary_lane === laneKey) && !usedHeroIds.has(h.id)
      );
      if (candidates.length === 0) {
        candidates = HEROES_DATABASE.filter((h) => !usedHeroIds.has(h.id));
      }

      // Special Tamyn weighting for Top/Jungle in current meta
      const weightedCandidates = [];
      candidates.forEach((h) => {
        const weight = h.id === "tamyn" ? 3 : h.tier === "S+" ? 2 : 1;
        for (let w = 0; w < weight; w++) weightedCandidates.push(h);
      });

      // Target winning hero
      const targetHero = weightedCandidates[Math.floor(Math.random() * weightedCandidates.length)];
      usedHeroIds.add(targetHero.id);
      rollResults.push({ lane: laneKey, hero: targetHero });

      // Generate random decoy cards ending with the target hero
      const stripEl = document.getElementById(`slot-strip-${index}`);
      stripEl.innerHTML = "";
      stripEl.style.transition = "none";
      stripEl.style.transform = "translateY(0px)";

      const cardsData = [];
      for (let i = 0; i < STRIP_COUNT - 1; i++) {
        const randomHero = candidates[Math.floor(Math.random() * candidates.length)];
        cardsData.push(randomHero);
      }
      cardsData.push(targetHero); // Target at the bottom

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
          <div class="card-role">${h.roles[0] || "Chiến binh"}</div>
        `;
        stripEl.appendChild(card);
      });
    });

    // Animate spinning
    let tickInterval = setInterval(() => {
      sounds.playRollTick();
    }, 90);

    const stopDelayBase = 1600; // ms
    const stopDelayStep = 350;  // ms per slot

    this.activeLanes.forEach((_, index) => {
      const slotDelay = stopDelayBase + index * stopDelayStep;
      const stripEl = document.getElementById(`slot-strip-${index}`);
      const targetTranslate = -(STRIP_COUNT - 1) * CARD_HEIGHT;

      setTimeout(() => {
        // Trigger smooth ease-out animation
        stripEl.style.transition = `transform ${slotDelay / 1000}s cubic-bezier(0.12, 0.8, 0.2, 1)`;
        stripEl.style.transform = `translateY(${targetTranslate}px)`;
      }, 50);

      // Slot finish event
      setTimeout(() => {
        const resultItem = rollResults[index];
        const isLegendary = resultItem.hero.tier === "S+";

        const slotEl = document.getElementById(`reel-slot-${index}`);
        slotEl.classList.add("slot-landed");
        if (isLegendary) {
          slotEl.classList.add("legendary-glow");
          sounds.playLegendaryFanfare();
        } else {
          sounds.playCardStop();
        }

        // If this is the last slot
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
    this.btnRoll.innerHTML = `🎲 QUAY LẠI GACHA`;

    // Check for S+ Tier / Tamyn
    const hasTamyn = rollResults.some((r) => r.hero.id === "tamyn");
    const hasSPlus = rollResults.some((r) => r.hero.tier === "S+");

    let bannerText = "Chúc bạn leo rank đại thắng với đội hình này!";
    let bannerTitle = "🎉 ĐỘI HÌNH ĐÃ CHỌN!";

    if (hasTamyn) {
      bannerTitle = "🌟 SIÊU QUÁI VẬT META: TAMYN XUẤT HIỆN!";
      bannerText = "Bạn đã gacha trúng Tamyn! Càng chạy nhanh đâm càng thấu trời, auto gánh team trận này!";
    } else if (hasSPlus) {
      bannerTitle = "⭐ NHÂN PHẨM VÀNG: S+ TIER XUẤT HIỆN!";
      bannerText = "Đội hình sở hữu tướng cấp S+ cực hot meta! Sẵn sàng vào quẩy rank thôi!";
    }

    if (this.resultBanner) {
      this.resultBanner.innerHTML = `
        <div class="banner-title">${bannerTitle}</div>
        <div class="banner-desc">${bannerText}</div>
      `;
      this.resultBanner.classList.add("show");
    }

    // Save to Archive
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
          ? "Đội Hình 5v5 Chuẩn Meta"
          : this.currentMode === "3"
          ? "Cụm 3 Tướng (Mid-Rừng-SP)"
          : this.currentMode === "2"
          ? "Cặp Đôi Đường Rồng (AD-SP)"
          : `Tướng Đơn (${LANES[this.activeLanes[0]]?.name || "Ngẫu nhiên"})`,
      isSpecial: isSpecial,
      heroes: rollResults.map((r) => ({
        lane: r.lane,
        laneName: LANES[r.lane]?.shortName || r.lane,
        laneIcon: LANES[r.lane]?.icon || "⚔️",
        name: r.hero.name,
        avatar: r.hero.avatar,
        tier: r.hero.tier,
        role: r.hero.roles[0] || "",
        id: r.hero.id,
      })),
    };

    this.archive.unshift(record);
    if (this.archive.length > 30) this.archive.pop(); // keep latest 30
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
          <div class="empty-icon">📜</div>
          <div>Chưa có lịch sử quay nào. Hãy bấm <b>Bắt Đầu Quay Gacha</b> để tạo đội hình!</div>
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
              <span class="chip-lane">${h.laneIcon}</span>
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
