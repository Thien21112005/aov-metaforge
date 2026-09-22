/**
 * AOV MetaForge - Application Coordinator & Catalog View
 */

document.addEventListener("DOMContentLoaded", () => {
  // 1. Initialize Core Managers
  window.gachaManager = new GachaManager();
  window.draftManager = new DraftManager();
  window.bpManager = window.draftManager; // Alias for backward compatibility

  // 2. Tab Navigation
  const navTabs = document.querySelectorAll(".nav-tab");
  const tabPanels = document.querySelectorAll(".tab-panel");

  navTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      if (typeof sounds !== "undefined") sounds.playClick();
      navTabs.forEach((t) => t.classList.remove("active"));
      tabPanels.forEach((p) => p.classList.remove("active"));

      tab.classList.add("active");
      const targetPanel = document.getElementById(tab.dataset.target);
      if (targetPanel) {
        targetPanel.classList.add("active");
        // Animate entrance if GSAP is loaded
        if (window.gsap) {
          window.gsap.fromTo(
            targetPanel,
            { opacity: 0, y: 12 },
            { opacity: 1, y: 0, duration: 0.35, ease: "power2.out" }
          );
        }
      }
    });
  });

  // 3. Sound Toggle Button
  const btnSound = document.getElementById("btn-toggle-sound");
  if (btnSound && typeof sounds !== "undefined") {
    btnSound.addEventListener("click", () => {
      sounds.muted = !sounds.muted;
      btnSound.innerHTML = sounds.muted ? "AUDIO OFF" : "AUDIO ON";
      btnSound.classList.toggle("muted", sounds.muted);
    });
  }

  // 4. Hero Catalog View (Tab 3)
  initHeroCatalog();

  // 5. Global Hero Detail Modal
  initHeroDetailModal();

  // 6. Ambient Kinetic Particles Canvas & Visual FX
  initAmbientParticles();

  // 7. Interactive Specular Button Ripples
  initButtonEffects();
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
          <span class="catalog-lane" style="background:${lane?.color || "#666"}">${lane?.shortName || ""}</span>
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
      if (typeof sounds !== "undefined") sounds.playClick();
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
  if (!hero) return;
  if (typeof sounds !== "undefined") sounds.playClick();
  const modal = document.getElementById("hero-detail-modal");
  const contentEl = document.getElementById("hero-detail-content");
  if (!modal || !contentEl) return;

  const tier = TIERS[hero.tier] || TIERS["A"];
  const lane = LANES[hero.lane];
  const skills = hero.skills || [];

  // Interactive skills section markup
  let skillsHtml = "";
  if (skills.length > 0) {
    const iconsMarkup = skills.map((sk, idx) => `
      <button class="skill-circle-btn ${idx === 0 ? 'active' : ''}" data-skill-idx="${idx}" title="${sk.type}: ${sk.name}">
        <div class="skill-circle-img-wrap">
          <img src="${sk.icon_url}" alt="${sk.name}" onerror="this.src='${hero.avatar}'" />
        </div>
        <span class="skill-circle-label">${sk.type.replace(' (Chiêu cuối)', '')}</span>
      </button>
    `).join("");

    const initialSkill = skills[0];
    skillsHtml = `
      <div class="hero-skills-block">
        <div class="skills-block-header">
          <div class="skills-block-title">
            <span class="skills-spark-icon">⚡</span>
            <span>BỘ KỸ NĂNG CHIẾN ĐẤU (${skills.length} KỸ NĂNG)</span>
          </div>
          <span class="skills-instruction">Nhấp từng chiêu để xem cơ chế & thông số chi tiết</span>
        </div>
        
        <div class="skills-circle-bar" id="detail-skills-bar">
          ${iconsMarkup}
        </div>

        <div class="skill-card-preview" id="detail-skill-preview">
          <div class="skill-preview-header">
            <span class="skill-preview-type">${initialSkill.type}</span>
            <h3 class="skill-preview-name">${initialSkill.name}</h3>
          </div>
          <div class="skill-preview-desc">${(initialSkill.description || 'Chưa có mô tả chi tiết.').replace(/\n/g, '<br/>')}</div>
        </div>
      </div>
    `;
  }

  contentEl.innerHTML = `
    <div class="detail-header">
      <div class="detail-avatar-wrap">
        <img src="${hero.avatar}" alt="${hero.name}" onerror="this.src='https://lienquan.garena.vn/wp-content/uploads/2024/02/favicon.jpg'"/>
        <span class="detail-tier-badge" style="background:${tier.color}">${hero.tier} TIER</span>
      </div>
      <div class="detail-meta">
        <h2>${hero.name}</h2>
        <div class="detail-tags">
          <span class="tag-lane" style="background:${lane?.color}">${lane?.name || ""}</span>
          <span class="tag-role">${hero.roles.join(" • ")}</span>
          ${hero.damage_type ? `<span class="tag-dmg">${hero.damage_type === 'physical' ? 'Sát thương Vật lý' : hero.damage_type === 'magic' ? 'Sát thương Phép' : 'Sát thương Chuẩn'}</span>` : ''}
        </div>
        <div class="detail-stat-meters">
          <div class="stat-meter-item" title="Độ cơ động: ${hero.mobility || 50}/100">
            <span class="stat-label">Cơ động:</span>
            <div class="stat-meter-bar"><div class="stat-meter-fill fill-blue" style="width: ${hero.mobility || 50}%"></div></div>
            <span class="stat-val">${hero.mobility || 50}</span>
          </div>
          <div class="stat-meter-item" title="Khống chế: ${hero.cc_rating || 50}/100">
            <span class="stat-label">Khống chế:</span>
            <div class="stat-meter-bar"><div class="stat-meter-fill fill-gold" style="width: ${hero.cc_rating || 50}%"></div></div>
            <span class="stat-val">${hero.cc_rating || 50}</span>
          </div>
        </div>
        <p class="detail-strengths"><strong>Điểm mạnh:</strong> ${hero.strengths}</p>
        <p class="detail-weaknesses"><strong>Điểm yếu:</strong> ${hero.weaknesses}</p>
      </div>
    </div>

    ${skillsHtml}

    <div class="detail-sections">
      <div class="detail-box">
        <h3>TƯỚNG KHẮC CHẾ ĐƯỢC</h3>
        <div class="chips-container">${(hero.counters || []).map((id) => {
          const c = HEROES_DATABASE.find((h) => h.id === id);
          return c ? `<span class="badge-chip win-chip clickable-chip" data-hero-id="${id}">${c.name}</span>` : "";
        }).join(" ") || "Đa dụng trong nhiều kèo đấu"}</div>
      </div>

      <div class="detail-box">
        <h3>BỊ KHẮC CHẾ BỞI</h3>
        <div class="chips-container">${(hero.countered_by || []).map((id) => {
          const c = HEROES_DATABASE.find((h) => h.id === id);
          return c ? `<span class="badge-chip lose-chip clickable-chip" data-hero-id="${id}">${c.name}</span>` : "";
        }).join(" ") || "Ít bị khắc chế cứng"}</div>
      </div>

      <div class="detail-box">
        <h3>TƯỚNG KẾT HỢP TỐT (SYNERGY)</h3>
        <div class="chips-container">${(hero.synergies || []).map((id) => {
          const c = HEROES_DATABASE.find((h) => h.id === id);
          return c ? `<span class="badge-chip syn-chip clickable-chip" data-hero-id="${id}">${c.name}</span>` : "";
        }).join(" ") || "Phù hợp nhiều đội hình"}</div>
      </div>

      <div class="detail-box full-width">
        <h3>MẸO CHIẾN THUẬT & TRANG BỊ KHẮC CHẾ</h3>
        <p>${hero.counter_tips || "Chú ý kiểm soát bản đồ và giữ vị trí an toàn."}</p>
        ${(hero.counter_items && hero.counter_items.length > 0) ? `
          <div class="counter-items-row">
            <span class="items-label">Trang bị khuyên dùng:</span>
            ${hero.counter_items.map(it => `<span class="item-pill">${it}</span>`).join(" ")}
          </div>
        ` : ''}
      </div>
    </div>
  `;

  // Attach interactive switch logic to skill circles
  if (skills.length > 0) {
    const bar = contentEl.querySelector("#detail-skills-bar");
    const preview = contentEl.querySelector("#detail-skill-preview");
    if (bar && preview) {
      const btns = bar.querySelectorAll(".skill-circle-btn");
      btns.forEach((btn) => {
        btn.addEventListener("click", () => {
          btns.forEach((b) => b.classList.remove("active"));
          btn.classList.add("active");
          if (typeof sounds !== "undefined") sounds.playClick();
          const idx = parseInt(btn.getAttribute("data-skill-idx"), 10);
          const sk = skills[idx];
          if (sk) {
            preview.style.opacity = "0.3";
            preview.style.transform = "translateY(3px)";
            setTimeout(() => {
              preview.innerHTML = `
                <div class="skill-preview-header">
                  <span class="skill-preview-type">${sk.type}</span>
                  <h3 class="skill-preview-name">${sk.name}</h3>
                </div>
                <div class="skill-preview-desc">${(sk.description || 'Chưa có mô tả chi tiết.').replace(/\n/g, '<br/>')}</div>
              `;
              preview.style.opacity = "1";
              preview.style.transform = "translateY(0)";
            }, 100);
          }
        });
      });
    }
  }

  // Allow clicking on counter / synergy chips inside modal to navigate to that hero
  contentEl.querySelectorAll(".clickable-chip").forEach((chip) => {
    chip.addEventListener("click", () => {
      const targetId = chip.getAttribute("data-hero-id");
      const targetHero = HEROES_DATABASE.find((h) => h.id === targetId);
      if (targetHero) showHeroDetail(targetHero);
    });
  });

  modal.classList.add("open");
}

/**
 * Ambient Kinetic Particles Engine
 * GPU-accelerated lightweight particles drifting gently behind the cards
 */
function initAmbientParticles() {
  const canvas = document.getElementById("ambient-particles-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener("resize", () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const colors = [
    "rgba(37, 99, 235, 0.45)",  // Cobalt blue
    "rgba(217, 119, 6, 0.45)",  // Warm gold
    "rgba(16, 185, 129, 0.45)", // Emerald green
    "rgba(99, 102, 241, 0.35)", // Violet indigo
    "rgba(6, 182, 212, 0.4)"    // Cyan
  ];

  const particles = Array.from({ length: 32 }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    radius: Math.random() * 2.8 + 1.2,
    color: colors[Math.floor(Math.random() * colors.length)],
    vx: (Math.random() - 0.5) * 0.35,
    vy: -(Math.random() * 0.45 + 0.15),
    alpha: Math.random() * 0.55 + 0.2,
    pulseSpeed: Math.random() * 0.02 + 0.01,
    phase: Math.random() * Math.PI * 2
  }));

  function animate() {
    ctx.clearRect(0, 0, width, height);

    particles.forEach((p) => {
      p.x += p.vx + Math.sin(p.phase) * 0.2;
      p.y += p.vy;
      p.phase += p.pulseSpeed;
      const currentAlpha = Math.max(0.1, p.alpha + Math.sin(p.phase) * 0.15);

      if (p.y < -10) {
        p.y = height + 10;
        p.x = Math.random() * width;
      }
      if (p.x < -10) p.x = width + 10;
      if (p.x > width + 10) p.x = -10;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = p.color.replace(/[\d\.]+\)$/, `${currentAlpha})`);
      ctx.shadowBlur = p.radius * 3;
      ctx.shadowColor = p.color;
      ctx.fill();
    });

    requestAnimationFrame(animate);
  }

  animate();
}

/**
 * Interactive Button Ripples
 */
function initButtonEffects() {
  document.addEventListener("click", (e) => {
    const btn = e.target.closest(".btn-big-roll, .mode-btn, .nav-tab, .btn-bgm-toggle, .btn-step-nav");
    if (!btn) return;

    const rect = btn.getBoundingClientRect();
    const circle = document.createElement("span");
    const diameter = Math.max(rect.width, rect.height);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${e.clientX - rect.left - radius}px`;
    circle.style.top = `${e.clientY - rect.top - radius}px`;
    circle.classList.add("btn-ripple");

    const existing = btn.querySelector(".btn-ripple");
    if (existing) existing.remove();

    btn.appendChild(circle);
    setTimeout(() => circle.remove(), 600);
  });
}
