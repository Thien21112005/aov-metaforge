# AOV MetaForge

> Competitive Esports Analytics, Snake Draft Simulator & Meta Gacha Portal for Arena of Valor (Liên Quân Mobile).

[English](README.md) | [Tiếng Việt](README.vi.md)

[![Version](https://img.shields.io/badge/version-2.4.0-blue.svg)](https://github.com/Thien21112005/aov-metaforge)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Status: Active](https://img.shields.io/badge/status-active-emerald.svg)](https://github.com/Thien21112005/aov-metaforge)

A modern, high-performance web platform designed for Arena of Valor (Liên Quân Mobile) competitors, analysts, and coaches. Built with high visual density, smooth GSAP animations, native audio engineering, and comprehensive champion data indexed across 129+ heroes.

---

## Core Features

### 1. Meta Gacha Simulator & Randomizer
- Multi-lane distribution algorithm allocating valid champions across 5 competitive lanes (Top, Jungle, Mid, AD, SP).
- Supports flexible squad modes: Full Team 5v5, Trio Mid-Jungle-SP, Duo Bot AD-SP, Solo Lane, and Custom Multi-Lane filters.
- Dynamic reel mechanics powered by hardware-accelerated CSS transforms and GSAP landing bounce animations.
- Interactive result inspection: Click any landed hero card or archive record to open the detailed skill breakdown modal.

### 2. Tournament Snake Draft Arena (1-2-2-2-2-1)
- Faithful implementation of official tournament pick/ban sequences (AOG, AIC, AWC).
- Automatic turn tracking, dynamic first-pick selection (Blue or Red side), and strict duplicate exclusion.
- Lane-by-lane tactical slot assignments and lock-in validation.

### 3. Real-Time Team Synergy & Counter Matrix AI
- Computes tactical team balance across damage types (Physical vs Magic vs True Damage), CC ratings, mobility coefficients, and power spikes.
- Direct counter warnings against high-priority meta threats (e.g. Tamyn, Florentino, Aoi, Hayate).
- Synergy pairing suggestions and itemization counter-measures.

### 4. Interactive Hero Compendium & 4-Skills Inspector
- Comprehensive dataset of all 129 champions.
- Interactive 4-skills viewer modeled after official Garena Academy portals:
  - Circular skill buttons (Passive, Skill 1, Skill 2, Ultimate) with glowing selection rings.
  - Smooth animation transitions between skill mechanisms, damage ratios, and scaling formulas.
  - Mobility, CC, and power spike meters.

### 5. Ambient Visuals & BGM Audio Engine
- Hardware-accelerated 60fps ambient kinetic particle canvas.
- Specular card sheen sweep micro-interactions.
- Integrated background music player featuring the iconic orchestral AOV theme with interactive equalizer visualization and volume controls.
- Web Audio API synthesis for click, roll, fanfare, and stop sound effects.

---

## Project Architecture

```text
aov-metaforge/
├── assets/
│   ├── audio/               # Local AOV theme soundtracks (.webm, .m4a)
│   └── images/              # Official brand emblem and background artwork
├── css/
│   └── style.css            # Bright glassmorphism styling, compact density, responsive rules
├── js/
│   ├── core/
│   │   ├── data.js          # Complete 129 champions database with full skill sets & counters
│   │   └── audio.js         # Web Audio synthesizer and BGM player controller
│   ├── modules/
│   │   ├── analyzer.js      # Team balance algorithms and counter detection matrix
│   │   ├── draft.js         # Tournament Snake Draft turn logic and slot managers
│   │   └── gacha.js         # Multi-lane reel gacha engine and archive manager
│   └── app.js               # Application coordinator, interactive modal and tab routing
├── index.html               # Semantic, accessible Single Page Application
├── server.py                # Lightweight local development HTTP server
├── run_web.bat              # Windows 1-click launcher
└── .gitignore               # Ignored temporary and system files
```

---

## Getting Started

### Method 1: Direct File Launch (Zero Installation)
`aov-metaforge` is a pure 100% client-side web application. Simply open `index.html` in any modern web browser (Google Chrome, Microsoft Edge, Mozilla Firefox, Safari).

### Method 2: Windows 1-Click Launcher
Double-click `run_web.bat` to launch the local web server and open the application in your default browser.

### Method 3: Python Development Server
```bash
python server.py
```
The server will start at `http://localhost:8080/index.html`.

---

## Data Provenance

All skill parameters, damage values, and base stats are synchronized with official Garena Vietnam Lien Quan Mobile databases through the companion project [`aov-scrapecore`](https://github.com/Thien21112005/aov-scrapecore).

---

## License & Disclaimer

Distributed under the [MIT License](LICENSE).

Arena of Valor (Liên Quân Mobile) and all associated assets, champion trademarks, and artwork are intellectual property of **Tencent Games** and **Garena**. This project is built for educational, community analytics, and competitive training purposes.
