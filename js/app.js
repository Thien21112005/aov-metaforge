/**
 * Main Application Coordinator
 */

document.addEventListener("DOMContentLoaded", () => {
  // 1. Initialize Managers
  window.gachaManager = new GachaManager();
  window.bpManager = new BanPickManager();

  // 2. Tab Navigation
  const navTabs = document.querySelectorAll(".nav-tab");
  const tabPanels = document.querySelectorAll(".tab-panel");

  navTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      sounds.playClick();
      navTabs.forEach((t) => t.classList.remove("active"));
      tabPanels.forEach((p) => p.classList.remove("active"));

      tab.classList.add("active");
      const targetPanel = document.getElementById(tab.dataset.target);
      if (targetPanel) {
        targetPanel.classList.add("active");
      }
    });
  });

  // 3. Sound Toggle Button
  const btnSound = document.getElementById("btn-toggle-sound");
  if (btnSound) {
    btnSound.addEventListener("click", () => {
      sounds.muted = !sounds.muted;
      btnSound.innerHTML = sounds.muted ? "🔇 Đã Tắt Âm" : "🔊 Bật Âm";
      btnSound.classList.toggle("muted", sounds.muted);
    });
  }

  // 4. Hero Catalog View (Tab 3)
  initHeroCatalog();

  // 5. Global Hero Detail Modal
  initHeroDetailModal();
});

function initHeroCatalog() {
  const container = document.getElementById("catalog-grid");
  const searchInput = document.getElementById("catalog-search");
  const roleButtons = document.querySelectorAll(".catalog-filter-btn");
  if (!container) return;

  function render(filterLane = "all", search = "") {
    container.innerHTML = "";
    const filtered = HEROES_DATABASE.filter((h) => {
      const matchSearch =
        !search ||
        h.name.toLowerCase().includes(search.toLowerCase()) ||
        h.id.toLowerCase().includes(search.toLowerCase());
      const matchLane =
        filterLane === "all" || h.lane === filterLane || h.secondary_lane === filterLane;
      return matchSearch && matchLane;
    });

    filtered.forEach((h) => {
      const tier = TIERS[h.tier] || TIERS["A"];
      const lane = LANES[h.lane];
      const card = document.createElement("div");
      card.className = `catalog-card tier-${h.tier.replace("+", "-plus")}`;
      card.innerHTML = `
        <div class="catalog-avatar">
          <img src="${h.avatar}" alt="${h.name}" onerror="this.src='https://lienquan.garena.vn/wp-content/uploads/2024/02/favicon.jpg'"/>
          <span class="catalog-tier" style="background:${tier.color}">${h.tier}</span>
          <span class="catalog-lane" style="background:${lane?.color || "#666"}">${lane?.icon} ${lane?.shortName}</span>
        </div>
        <div class="catalog-info">
          <div class="catalog-name">${h.name}</div>
          <div class="catalog-role">${h.roles.join(", ")}</div>
        </div>
      `;
      card.addEventListener("click", () => {
        showHeroDetail(h);
      });
      container.appendChild(card);
    });
  }

  render();

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      const activeBtn = document.querySelector(".catalog-filter-btn.active");
      render(activeBtn?.dataset.lane || "all", e.target.value.trim());
    });
  }

  roleButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      sounds.playClick();
      roleButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      render(btn.dataset.lane, searchInput?.value.trim() || "");
    });
  });
}

function initHeroDetailModal() {
  const modal = document.getElementById("hero-detail-modal");
  const closeBtn = document.getElementById("detail-modal-close");
  if (!modal) return;

  if (closeBtn) {
    closeBtn.addEventListener("click", () => modal.classList.remove("open"));
  }
  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.classList.remove("open");
  });
}

function showHeroDetail(hero) {
  sounds.playClick();
  const modal = document.getElementById("hero-detail-modal");
  const contentEl = document.getElementById("hero-detail-content");
  if (!modal || !contentEl) return;

  const tier = TIERS[hero.tier] || TIERS["A"];
  const lane = LANES[hero.lane];

  contentEl.innerHTML = `
    <div class="detail-header">
      <div class="detail-avatar-wrap">
        <img src="${hero.avatar}" alt="${hero.name}" onerror="this.src='https://lienquan.garena.vn/wp-content/uploads/2024/02/favicon.jpg'"/>
        <span class="detail-tier-badge" style="background:${tier.color}">${hero.tier} TIER</span>
      </div>
      <div class="detail-meta">
        <h2>${hero.name}</h2>
        <div class="detail-tags">
          <span class="tag-lane" style="background:${lane?.color}">${lane?.icon} ${lane?.name}</span>
          <span class="tag-role">${hero.roles.join(" • ")}</span>
        </div>
        <p class="detail-strengths">💪 <b>Điểm mạnh:</b> ${hero.strengths}</p>
        <p class="detail-weaknesses">⚠️ <b>Điểm yếu:</b> ${hero.weaknesses}</p>
      </div>
    </div>

    <div class="detail-sections">
      <div class="detail-box">
        <h3>🛡️ Tướng Khắc Chế Được:</h3>
        <p>${(hero.counters || []).map((id) => {
          const c = HEROES_DATABASE.find((h) => h.id === id);
          return c ? `<span class="badge-chip win-chip">${c.name}</span>` : "";
        }).join(" ") || "Đa dụng trong nhiều kèo đấu"}</p>
      </div>

      <div class="detail-box">
        <h3>⚔️ Bị Khắc Chế Bởi:</h3>
        <p>${(hero.countered_by || []).map((id) => {
          const c = HEROES_DATABASE.find((h) => h.id === id);
          return c ? `<span class="badge-chip lose-chip">${c.name}</span>` : "";
        }).join(" ") || "Ít bị khắc chế cứng"}</p>
      </div>

      <div class="detail-box">
        <h3>🤝 Hợp Đi Chung Với (Synergy):</h3>
        <p>${(hero.synergies || []).map((id) => {
          const c = HEROES_DATABASE.find((h) => h.id === id);
          return c ? `<span class="badge-chip syn-chip">${c.name}</span>` : "";
        }).join(" ") || "Phù hợp nhiều đội hình"}</p>
      </div>

      <div class="detail-box full-width">
        <h3>💡 Mẹo Chiến Thuật:</h3>
        <p>${hero.counter_tips || "Chú ý kiểm soát bản đồ và giữ vị trí an toàn."}</p>
      </div>
    </div>
  `;

  modal.classList.add("open");
}
