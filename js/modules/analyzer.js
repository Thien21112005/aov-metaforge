/**
 * AOV MetaForge - Rule-based matchup and counter analysis
 * Reads team picks against the counter matrix in data.js.
 */

class MetaAnalyzer {
  constructor(lanes = ["top", "jungle", "mid", "ad", "sp"]) {
    this.lanes = lanes;
  }

  /** Renders the full analysis and returns the short verdicts shown beside the board. */
  update(state, usedIds, containerEl, blueMetricsEl, redMetricsEl) {
    if (!containerEl) return [];

    const bluePicks = state.blue.picks;
    const redPicks = state.red.picks;
    const summary = [];
    let alertsHtml = "";
    let lanesHtml = "";
    let suggestionHtml = "";

    // Priority threats on the enemy side
    ["butterfly", "astrid", "tamyn"].forEach((id) => {
      if (!redPicks.some((p) => p.hero?.id === id)) return;
      const hero = findHero(id);
      alertsHtml += `
        <details class="analysis-row alert-row">
          <summary>
            ${heroImage(hero, "row-img")}
            <span class="row-head"><b>${t(`alert.${id}.tag`)}</b><span>${t(`alert.${id}.short`)}</span></span>
          </summary>
          <div class="row-body">${t(`alert.${id}.body`)}</div>
        </details>
      `;
      summary.push({ tone: "alert", title: t(`alert.${id}.tag`), sub: t(`alert.${id}.short`) });
    });

    this.lanes.forEach((laneKey, idx) => {
      const blueH = bluePicks[idx].hero;
      const redH = redPicks[idx].hero;

      if (redH && !blueH) {
        lanesHtml += this.enemyRow(laneKey, idx, redH, usedIds);
      } else if (blueH && redH) {
        const row = this.matchupRow(laneKey, blueH, redH);
        lanesHtml += row.html;
        summary.push(row.summary);
      } else if (!blueH && !redH) {
        const topMeta = HEROES_DATABASE.find(
          (c) =>
            !usedIds.has(c.id) &&
            (c.lane === laneKey || c.secondary_lane === laneKey) &&
            (c.tier === "S+" || c.tier === "S")
        );
        if (topMeta) {
          suggestionHtml += `
            <button class="counter-chip" data-quick-pick="${topMeta.id}" data-pick-index="${idx}" aria-label="${t("analysis.lockFor", { name: topMeta.name })}">
              ${heroImage(topMeta, "chip-img")}
              <span class="chip-name">${topMeta.name}</span>
              <span class="chip-lane">${laneShort(laneKey)}</span>
            </button>
          `;
        }
      }
    });

    const synergyNotes = this.synergyNotes(bluePicks.map((p) => p.hero).filter(Boolean));

    if (!alertsHtml && !lanesHtml && !suggestionHtml) {
      containerEl.innerHTML = `<p class="analysis-empty">${t("analysis.empty")}</p>`;
    } else {
      containerEl.innerHTML = `
        ${suggestionHtml ? `<div class="suggest-bar"><span class="bar-label">${t("analysis.suggest")}</span><div class="counter-chips">${suggestionHtml}</div></div>` : ""}
        ${synergyNotes.map((note) => `<p class="synergy-note">${note}</p>`).join("")}
        <div class="analysis-rows">${alertsHtml}${lanesHtml}</div>
      `;
    }

    if (blueMetricsEl && redMetricsEl) {
      blueMetricsEl.innerHTML = this.renderMetricsHtml("blue", this.calculateTeamScore(bluePicks.map((p) => p.hero)));
      redMetricsEl.innerHTML = this.renderMetricsHtml("red", this.calculateTeamScore(redPicks.map((p) => p.hero)));
    }

    return summary.slice(0, 3);
  }

  enemyRow(laneKey, idx, redH, usedIds) {
    const inLane = (c) => !usedIds.has(c.id) && (c.lane === laneKey || c.secondary_lane === laneKey);
    const direct = HEROES_DATABASE.filter(
      (c) => inLane(c) && (redH.countered_by?.includes(c.id) || c.counters?.includes(redH.id))
    );
    const meta = HEROES_DATABASE.filter((c) => inLane(c) && (c.tier === "S+" || c.tier === "S"));
    const counterList = [...new Set([...direct, ...meta])].slice(0, 4);
    const items = redH.counter_items || [];
    const dmg = redH.damage_type === "magic" ? "magic" : redH.damage_type === "true_damage" ? "true" : "physical";

    return `
      <details class="analysis-row enemy-row">
        <summary>
          <span class="row-lane">${LANE_ICONS[laneKey]}${laneShort(laneKey)}</span>
          ${heroImage(redH, "row-img")}
          <span class="row-head">
            <b>${t("analysis.enemyLocked", { name: redH.name })}</b>
            <span>${t("analysis.dmgLine", { dmg: t(`dmg.${dmg}`), mob: redH.mobility })}</span>
          </span>
          ${tierMedal(redH.tier)}
        </summary>
        <div class="row-body">
          <p><strong>${t("analysis.weakness")}:</strong> ${redH.weaknesses}</p>
          <p><strong>${t("analysis.counterTitle", { name: redH.name })}:</strong> ${redH.counter_tips}</p>
          ${items.length ? `<p class="row-items"><strong>${t("analysis.items")}:</strong> ${items.map((i) => `<span class="item-pill">${i}</span>`).join(" ")}</p>` : ""}
          ${counterList.length ? `
            <p class="bar-label">${t("analysis.counterPicks")}</p>
            <div class="counter-chips">
              ${counterList.map((c) => `
                <button class="counter-chip" data-quick-pick="${c.id}" data-pick-index="${idx}" aria-label="${t("analysis.lockFor", { name: c.name })}">
                  ${heroImage(c, "chip-img")}
                  <span class="chip-name">${c.name}</span>
                  ${tierMedal(c.tier)}
                </button>
              `).join("")}
            </div>
          ` : ""}
        </div>
      </details>
    `;
  }

  matchupRow(laneKey, blueH, redH) {
    const blueWins = blueH.counters?.includes(redH.id) || redH.countered_by?.includes(blueH.id);
    const redWins = redH.counters?.includes(blueH.id) || blueH.countered_by?.includes(redH.id);
    const names = { blue: blueH.name, red: redH.name };

    let tone = "even";
    let verdict = t("analysis.even");
    let guide = t("analysis.evenGuide");
    if (blueWins && !redWins) {
      tone = "blue";
      verdict = t("analysis.blueWin");
      guide = t("analysis.blueGuide", names);
    } else if (redWins && !blueWins) {
      tone = "red";
      verdict = t("analysis.redWin");
      guide = t("analysis.redGuide", names);
    }

    const pairing = `${blueH.name} ${t("analysis.vs")} ${redH.name}`;
    return {
      summary: { tone, title: `${laneShort(laneKey)}: ${verdict}`, sub: pairing },
      html: `
        <details class="analysis-row match-row tone-${tone}">
          <summary>
            <span class="row-lane">${LANE_ICONS[laneKey]}${laneShort(laneKey)}</span>
            ${heroImage(blueH, "row-img side-blue")}
            ${heroImage(redH, "row-img side-red")}
            <span class="row-head"><b>${verdict}</b><span>${pairing}</span></span>
          </summary>
          <div class="row-body">${guide}</div>
        </details>
      `,
    };
  }

  synergyNotes(blueHeroes) {
    const notes = [];
    if (blueHeroes.some((h) => h.id === "aya")) {
      const bruisers = blueHeroes.filter((h) =>
        ["tamyn", "taara", "arthur", "allain", "keera", "yan", "butterfly"].includes(h.id)
      );
      notes.push(
        bruisers.length > 0
          ? t("synergy.ayaCombo", { names: bruisers.map((b) => b.name).join(", ") })
          : t("synergy.ayaHint")
      );
    }
    if (blueHeroes.some((h) => h.id === "rouie")) notes.push(t("synergy.rouie"));
    return notes;
  }

  calculateTeamScore(heroes) {
    const valid = heroes.filter(Boolean);
    if (valid.length === 0) return { count: 0, warnings: [] };

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
    const avgCC = Math.min(100, Math.round(ccSum / valid.length));
    const avgTank = Math.min(100, Math.round(tankSum / valid.length));
    const avgMob = Math.min(100, Math.round(mobSum / valid.length));

    const warnings = [];
    if (valid.length >= 3 && magicCount === 0) warnings.push(t("warn.noMagic"));
    if (valid.length >= 3 && avgTank < 35) warnings.push(t("warn.thinFront"));
    if (valid.length >= 3 && avgCC < 45) warnings.push(t("warn.lowCc"));

    return {
      count: valid.length,
      phys: 100 - magicPct,
      magic: magicPct,
      cc: avgCC,
      tank: avgTank,
      mobility: avgMob,
      warnings,
    };
  }

  renderMetricsHtml(team, score) {
    const head = `
      <div class="score-header">
        <h3 class="team-${team}-text">${teamName(team)}</h3>
        <span class="score-count">${t("metric.count", { n: score.count })}</span>
      </div>
    `;
    if (score.count === 0) {
      return `<div class="team-score-card">${head}<p class="score-empty">${t("metric.empty")}</p></div>`;
    }

    const bar = (labelKey, value) => `
      <div class="metric-row">
        <span class="m-label">${t(labelKey)}</span>
        <div class="m-bar"><div class="m-fill team-${team}-fill" style="width:${value}%"></div></div>
        <span class="m-val">${value}</span>
      </div>
    `;

    return `
      <div class="team-score-card">
        ${head}
        <div class="metric-row">
          <span class="m-label">${t("metric.dmg")}</span>
          <div class="m-dual-bar">
            ${score.phys ? `<span class="bar-phys" style="width:${score.phys}%">${score.phys >= 25 ? `${t("metric.physShort")} ${score.phys}%` : ""}</span>` : ""}
            ${score.magic ? `<span class="bar-magic" style="width:${score.magic}%">${score.magic >= 25 ? `${t("metric.magicShort")} ${score.magic}%` : ""}</span>` : ""}
          </div>
        </div>
        ${bar("metric.cc", score.cc)}
        ${bar("metric.tank", score.tank)}
        ${bar("metric.mobility", score.mobility)}
        ${score.warnings.length ? `<ul class="team-warnings">${score.warnings.map((w) => `<li>${w}</li>`).join("")}</ul>` : ""}
      </div>
    `;
  }
}
