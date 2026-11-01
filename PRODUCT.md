# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Two audiences, weighted equally by the owner:

- **Rank players** of Liên Quân Mobile (Arena of Valor), mostly Vietnamese, often on a phone, rolling team comps with friends and trying out drafts for fun.
- **Coaches and analysts** on a desktop, rehearsing a tournament draft and reading matchups while it unfolds.

## Product Purpose

A community companion for Liên Quân Mobile. It rolls lane-valid team comps, simulates the tournament snake draft (1-2-2-2-2-1) with counter analysis, and works as a compendium of all 129 heroes with their skills. Success means a player recognises the game immediately and an analyst can run a full draft without leaving the board.

## Positioning

Built around real draft rules and a hand-tuned counter matrix for this game: lane-locked turns, first-pick side, duplicate exclusion, counters and items per hero. The data syncs from Garena through the companion project `aov-scrapecore`.

## Operating Context

Static client-side app: `index.html`, `css/style.css`, vanilla JS in `js/`, GSAP from a CDN. Opens directly from disk or through `server.py`. Hero portraits and skill icons are loaded from `lienquan.garena.vn`. Gacha history persists in `localStorage`.

## Capabilities and Constraints

- Three areas: gacha, ban/pick draft, hero compendium, plus a hero detail view.
- Gacha modes: full team, trio, duo, single hero, custom lanes.
- Draft: 5 bans per team, 10 lane-assigned picks, first-pick switch, sample scenario, reset, lane matchup analysis, team metrics.
- No build step and no framework; keep it that way.
- UI language is switchable between Vietnamese and English through a setting. Hero data in `js/core/data.js` (skills, strengths, counter tips) exists only in Vietnamese and is not translated.
- The counter analysis is rule-based. It must not be presented as AI.

## Brand Commitments

- Name: AOV MetaForge. Existing emblem: `assets/images/aov_metaforge_logo.png`.
- It must feel like it belongs to Liên Quân Mobile (owner's explicit requirement).
- Unofficial community project; Arena of Valor assets belong to Tencent Games and Garena. It must not pass itself off as an official Garena product.

## Evidence on Hand

- 129 heroes with tier, lane, counters, synergies, items, skills: `js/core/data.js`.
- Art: `assets/images/arena_cinematic_bg.jpg`, `assets/images/gacha_portal_core.jpg`.
- Audio: `assets/audio/aov_theme.webm`, `assets/audio/aov_theme.m4a`.
- No testimonials, usage figures, or win-rate statistics exist; do not invent them.

## Product Principles

- The hero is the largest thing on screen when the hero is the point.
- Draft rules stay trustworthy: never let the interface imply a move the rules forbid.
- Speak the player's vocabulary in either language, and use one term per concept.
- Keep the board and the decision visible together.

## Accessibility & Inclusion

Full flows must work by keyboard and on a 390px phone. Respect `prefers-reduced-motion`. Background music stays off until the user opts in.
