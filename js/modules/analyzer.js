/**
 * AOV MetaForge - AI Meta & Matchup Counter Reasoning Engine
 * Analyzes team synergies, damage profiles, CC ratings, and tactical counter matchups.
 */

class MetaAnalyzer {
  constructor(lanes = ["top", "jungle", "mid", "ad", "sp"]) {
    this.lanes = lanes;
  }

  update(state, usedIds, containerEl, blueMetricsEl, redMetricsEl) {
    if (!containerEl) return;

    const bluePicks = state.blue.picks;
    const redPicks = state.red.picks;

    let counterCardsHtml = "";
    let suggestionCardsHtml = "";

    // S+ Tier Tournament Meta Alerts: Tamyn, Butterfly, Astrid
    const redTamyn = redPicks.find((p) => p.hero?.id === "tamyn");
    const redBf = redPicks.find((p) => p.hero?.id === "butterfly");
    const redAstrid = redPicks.find((p) => p.hero?.id === "astrid");

    if (redBf) {
      counterCardsHtml += `
        <div class="alert-box alert-butterfly">
          <div class="alert-tag">CRITICAL THREAT: BUTTERFLY [S+ TIER]</div>
          <div class="alert-body">
            <div class="alert-title">ĐỐI THỦ ĐÃ CHỌN BUTTERFLY - SÁT THỦ LIÊN HOÀN</div>
            <div class="alert-text">
              Butterfly trong meta hiện tại sở hữu khả năng càn quét cực mạnh nhờ lối lên đồ semi-tank kết hợp cơ chế reset 100% thời gian hồi chiêu khi có điểm hạ gục/phụ tá, đồng thời nhận 35% miễn thương khi kích hoạt chiêu cuối.
              <br/><strong>Chiến thuật khắc chế:</strong> Bắt buộc đội hình phải có khống chế cứng chỉ định (<strong>Aleister, Arum, Omen, Baldum</strong>) hoặc giải hiệu ứng diện rộng từ <strong>Chaugnar</strong>. Toàn đội hạn chế đứng co cụm khi máu thấp để tránh bị làm mồi reset chiêu. Xạ thủ & Pháp sư cần ưu tiên lên sớm <strong>Quả Cầu Băng Sương</strong> hoặc <strong>Giáp Hộ Mệnh</strong> để ngắt chuỗi lao vào!
            </div>
          </div>
        </div>
      `;
    }

    if (redAstrid) {
      counterCardsHtml += `
        <div class="alert-box alert-astrid">
          <div class="alert-tag">META UPDATE: ASTRID [S TIER]</div>
          <div class="alert-body">
            <div class="alert-title">ĐỐI THỦ ĐÃ CHỌN ASTRID - ĐẤU SĨ BẤT TỬ</div>
            <div class="alert-text">
              Astrid vừa được nâng cấp sức mạnh đáng kể tại giải đấu: Chiêu cuối Cự Kiếm duy trì 1.5s miễn nhiễm toàn bộ sát thương và khống chế, chuyển hóa sát thương chuẩn diện rộng khi lượng máu xuống thấp.
              <br/><strong>Chiến thuật khắc chế:</strong> Triển khai xạ thủ có khả năng thả diều và cấu rỉa sát thương chuẩn theo % máu như <strong>Hayate</strong> hoặc <strong>Slimz</strong>. Khi Astrid vung chiêu cuối bất tử, lập tức dùng chiêu lướt hoặc Tốc Biến tản ra khỏi phạm vi hình nón!
            </div>
          </div>
        </div>
      `;
    }

    if (redTamyn) {
      counterCardsHtml += `
        <div class="alert-box alert-tamyn">
          <div class="alert-tag">TOP S+ PRIORITY: TAMYN</div>
          <div class="alert-body">
            <div class="alert-title">ĐỐI THỦ ĐÃ CHỌN TAMYN - SIÊU ĐẤU SĨ TỐC ĐỘ</div>
            <div class="alert-text">
              Tamyn sở hữu cơ chế chuyển đổi 100% tốc chạy thành sát thương bộc phát và hồi phục gấp đôi khi đâm trúng mục tiêu. Chiêu cuối tích trữ 4 lần nạp thương tạo áp lực càn quét cực lớn.
              <br/><strong>Chiến thuật khắc chế:</strong> Bắt buộc triển khai khống chế áp chế hoặc khóa tốc chạy: <strong>Omen</strong> (Sát Vực khóa chặt tốc chạy), <strong>Aleister / Arum</strong> (áp chế không thể giải), <strong>Skud / Baldum</strong>.
              Tất cả các vị trí đỡ đòn cần lên sớm <strong>Khiên Thất Truyền</strong> và <strong>Áo Choàng Băng Giá</strong> để triệt tiêu tốc độ di chuyển, vô hiệu hóa sát thương đâm của Tamyn!
            </div>
          </div>
        </div>
      `;
    }

    // Lane by lane tactical matchup reasoning
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
              ${laneInfo.shortName} • ĐỐI THỦ ĐÃ KHÓA
            </div>
            
            <div class="enemy-header">
              <img class="enemy-avatar" src="${redH.avatar}" alt="${redH.name}" onerror="this.src='https://lienquan.garena.vn/wp-content/uploads/2024/02/favicon.jpg'"/>
              <div class="enemy-info">
                <div class="enemy-title">Địch: <b>${redH.name}</b> <span class="badge-tier-inline tier-${redH.tier.replace("+", "-plus")}">${redH.tier}</span></div>
                <div class="enemy-mechanics">Loại ST: <strong>${redH.damage_type === "magic" ? "Phép" : redH.damage_type === "true_damage" ? "Chuẩn" : "Vật lý"}</strong> | Cơ động: <strong>${redH.mobility}/100</strong></div>
                <div class="enemy-weakness">Điểm yếu: ${redH.weaknesses}</div>
              </div>
            </div>

            <div class="counter-advice">
              <strong>Chiến thuật khắc chế ${redH.name}:</strong> ${redH.counter_tips}
            </div>

            <div class="counter-items-box">
              <span class="counter-items-label">Trang bị khuyến nghị:</span> ${counterItemsHtml}
            </div>

            <div class="counter-picks-row">
              <div class="counter-picks-label">Gợi ý tướng khắc chế cứng (Hard Counter):</div>
              <div class="counter-chips">
                ${counterList
                  .map(
                    (c) => `
                  <div class="counter-chip" onclick="window.draftManager.quickPickHero('blue', ${idx}, '${c.id}')" title="Click để khóa ${c.name} cho Đội Xanh">
                    <img src="${c.avatar}" alt="${c.name}" onerror="this.src='https://lienquan.garena.vn/wp-content/uploads/2024/02/favicon.jpg'"/>
                    <div class="chip-info">
                      <div class="chip-name">${c.name}</div>
                      <div class="chip-sub">Tier ${c.tier}</div>
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
          matchAssessment = `ĐỘI XANH (${blueH.name}) CHIẾM LỢI THẾ ĐÈ ĐƯỜNG RÕ RỆT`;
          tacticalGuide = `Chất tướng của ${blueH.name} khắc chế điểm yếu của ${redH.name}. Hãy chủ động dọn lính trước, đóng băng lính hoặc ép giao tranh khi đối phương sử dụng hụt chiêu thức then chốt.`;
        } else if (redWins && !blueWins) {
          matchClass = "match-red-win";
          matchAssessment = `ĐỘI ĐỎ (${redH.name}) CÓ LỢI THẾ ĐÈ ĐƯỜNG HƠN`;
          tacticalGuide = `${blueH.name} đi kèo dưới so với ${redH.name}. Hãy đánh hòa hoãn, ôm trụ dọn lính an toàn và kêu gọi Rừng hoặc Trợ thủ lên gank hỗ trợ.`;
        } else {
          matchClass = "match-even";
          matchAssessment = `KÈO ĐẤU CÂN BẰNG - QUYẾT ĐỊNH BỞI KỸ NĂNG & KIỂM SOÁT`;
          tacticalGuide = `Hai vị tướng có ngưỡng sức mạnh ngang ngửa. Người chơi nào căn góc kỹ năng chuẩn xác hơn và đọc bản đồ tốt hơn sẽ giành thắng lợi.`;
        }

        counterCardsHtml += `
          <div class="analysis-card matchup-card ${matchClass}">
            <div class="card-lane-badge" style="background:${laneInfo.color}">
              ${laneInfo.shortName} • ĐỐI ĐẦU ĐƯỜNG
            </div>
            
            <div class="matchup-versus">
              <div class="side-hero blue-side">
                <img src="${blueH.avatar}" alt="${blueH.name}" onerror="this.src='https://lienquan.garena.vn/wp-content/uploads/2024/02/favicon.jpg'"/>
                <span>${blueH.name} (${blueH.tier})</span>
              </div>
              <div class="vs-badge">VS</div>
              <div class="side-hero red-side">
                <img src="${redH.avatar}" alt="${redH.name}" onerror="this.src='https://lienquan.garena.vn/wp-content/uploads/2024/02/favicon.jpg'"/>
                <span>${redH.name} (${redH.tier})</span>
              </div>
            </div>

            <div class="matchup-result">${matchAssessment}</div>
            <div class="matchup-guide"><strong>Phân tích chiến thuật:</strong> ${tacticalGuide}</div>
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
            <div class="suggestion-chip" onclick="window.draftManager.quickPickHero('blue', ${idx}, '${topMeta[0].id}')" title="Click để chọn nhanh cho Đội Xanh">
              <span class="sugg-lane">${laneInfo.shortName}:</span>
              <img src="${topMeta[0].avatar}" alt="${topMeta[0].name}" onerror="this.src='https://lienquan.garena.vn/wp-content/uploads/2024/02/favicon.jpg'"/>
              <b>${topMeta[0].name}</b> (${topMeta[0].tier})
            </div>
          `;
        }
      }
    });

    // Team Synergies
    const blueValidHeroes = bluePicks.map((p) => p.hero).filter(Boolean);
    const synergyNotes = [];
    if (blueValidHeroes.some((h) => h.id === "aya")) {
      const bruisers = blueValidHeroes.filter((h) =>
        ["tamyn", "taara", "arthur", "allain", "keera", "yan", "butterfly"].includes(h.id)
      );
      if (bruisers.length > 0) {
        synergyNotes.push(`SIÊU COMBO: <strong>Aya + ${bruisers.map((b) => b.name).join(", ")}</strong> (Càn quét giao tranh tổng đỉnh cao)`);
      } else {
        synergyNotes.push(`GỢI Ý TÁC CHIẾN: Đội Xanh đã có Aya, hãy ưu tiên bổ sung Đấu sĩ càn lướt khỏe như <strong>Tamyn, Taara, Arthur, Butterfly</strong>.`);
      }
    }
    if (blueValidHeroes.some((h) => h.id === "rouie")) {
      synergyNotes.push(`CHIẾN THUẬT BIẾN ẢO: Rouie kết hợp hoàn hảo với các tướng cơ động cao có khả năng tái giao tranh như <strong>Eland'orr, Nakroth, Hayate</strong>.`);
    }

    if (!counterCardsHtml && !suggestionCardsHtml) {
      containerEl.innerHTML = `
        <div class="analysis-placeholder">
          <div class="placeholder-title">HỆ THỐNG PHÂN TÍCH CHIẾN THUẬT REALTIME</div>
          <p>Quy trình cấm chọn luân phiên Snake Draft: <strong>1 tướng &rarr; 2 tướng &rarr; 2 tướng &rarr; 2 tướng &rarr; 2 tướng &rarr; 1 tướng</strong>.</p>
          <p>Hệ thống tự động nhận diện chất tướng đối phương, chỉ ra điểm yếu và đề xuất các lựa chọn khắc chế cứng chuẩn xác theo meta giải đấu!</p>
        </div>
      `;
    } else {
      containerEl.innerHTML = `
        ${suggestionCardsHtml ? `<div class="meta-suggestions-bar"><span class="bar-lbl">Gợi ý Hot Meta Đội Xanh:</span> ${suggestionCardsHtml}</div>` : ""}
        ${synergyNotes.length > 0 ? `<div class="synergy-bar">${synergyNotes.map((s) => `<div>${s}</div>`).join("")}</div>` : ""}
        <div class="counter-cards-list">
          ${counterCardsHtml}
        </div>
      `;
    }

    // Render Metrics Comparison
    if (blueMetricsEl && redMetricsEl) {
      const blueScore = this.calculateTeamScore(bluePicks.map((p) => p.hero));
      const redScore = this.calculateTeamScore(redPicks.map((p) => p.hero));

      blueMetricsEl.innerHTML = this.renderMetricsHtml("ĐỘI XANH", blueScore, "#38bdf8");
      redMetricsEl.innerHTML = this.renderMetricsHtml("ĐỘI ĐỎ", redScore, "#f43f5e");
    }
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
      warnings.push("Thiếu sát thương Phép! Đối thủ sẽ dễ dàng lên toàn bộ giáp vật lý và Khiên Thất Truyền.");
    }
    if (valid.length >= 3 && avgTank < 35) {
      warnings.push("Tuyến trước mỏng manh, thiếu đấu sĩ/đỡ đòn mở giao tranh!");
    }
    if (valid.length >= 3 && avgCC < 45) {
      warnings.push("Thiếu khống chế cứng chỉ định, khó bắt giữ các tướng cơ động như Tamyn, Aoi, Nakroth, Butterfly.");
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
          <span>${teamName}</span>
          <span class="score-count">${score.count}/5 ĐÃ CHỌN</span>
        </div>
        <div class="metric-row">
          <span class="m-label">Cơ cấu ST:</span>
          <div class="m-dual-bar">
            <div class="bar-phys" style="width: ${score.phys}%">VL ${score.phys}%</div>
            <div class="bar-magic" style="width: ${score.magic}%">Phép ${score.magic}%</div>
          </div>
        </div>
        <div class="metric-row">
          <span class="m-label">Khống chế:</span>
          <div class="m-bar"><div class="m-fill" style="width: ${score.cc}%; background: #a855f7"></div></div>
          <span class="m-val">${score.cc}%</span>
        </div>
        <div class="metric-row">
          <span class="m-label">Chống chịu:</span>
          <div class="m-bar"><div class="m-fill" style="width: ${score.tank}%; background: #10b981"></div></div>
          <span class="m-val">${score.tank}%</span>
        </div>
        <div class="metric-row">
          <span class="m-label">Cơ động:</span>
          <div class="m-bar"><div class="m-fill" style="width: ${score.mobility}%; background: #38bdf8"></div></div>
          <span class="m-val">${score.mobility}%</span>
        </div>
        ${
          score.warnings.length > 0
            ? `<div class="team-warnings">${score.warnings.map((w) => `<div class="warning-item">! ${w}</div>`).join("")}</div>`
            : ""
        }
      </div>
    `;
  }
}
