# AOV MetaForge

> Competitive Esports Analytics, Snake Draft Simulator & Meta Gacha Portal for Arena of Valor (Liên Quân Mobile).

<p align="left">
  <strong>Language / Ngôn ngữ:</strong>
  <a href="#english">English</a> &bull;
  <a href="#tiếng-việt">Tiếng Việt</a>
</p>

[![Version](https://img.shields.io/badge/version-3.0.0-blue.svg)](https://github.com/Thien21112005/aov-metaforge)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Status: Active](https://img.shields.io/badge/status-active-emerald.svg)](https://github.com/Thien21112005/aov-metaforge)

---

<div id="english"></div>

## English

A modern, high-performance web platform designed for Arena of Valor (Liên Quân Mobile) competitors, analysts, and coaches. Built around a lapis-and-gilt interface, a game-style draft board, a Vietnamese and English interface, and champion data for 129 heroes.

### Table of Contents
- [Core Features](#core-features)
  - [1. Meta Gacha Simulator & Randomizer](#1-meta-gacha-simulator--randomizer)
  - [2. Tournament Snake Draft Arena (1-2-2-2-2-1)](#2-tournament-snake-draft-arena-1-2-2-2-2-1)
  - [3. Rule-Based Matchup Analysis](#3-rule-based-matchup-analysis)
  - [4. Interactive Hero Compendium & 4-Skills Inspector](#4-interactive-hero-compendium--4-skills-inspector)
  - [5. Language, Music & Accessibility](#5-language-music--accessibility)
- [Project Architecture](#project-architecture)
- [Getting Started](#getting-started)
- [Data Provenance & Refresh Guide](#data-provenance--refresh-guide)
- [License & Disclaimer](#license--disclaimer)

---

### Core Features

#### 1. Meta Gacha Simulator & Randomizer
- Multi-lane distribution algorithm allocating valid champions across 5 competitive lanes (Top, Jungle, Mid, AD, SP).
- Supports flexible squad modes: Full Team 5v5, Trio Mid-Jungle-SP, Duo Bot AD-SP, Solo Lane, and Custom Multi-Lane filters.
- Staggered reels land on large portraits, with a gilt sweep for S+ heroes and a result line that never shifts the layout.
- Copy the rolled team as text, or screenshot the result screen.
- Interactive result inspection: Click any landed hero card or archive record to open the detailed skill breakdown modal.

#### 2. Tournament Snake Draft Arena (1-2-2-2-2-1)
- Faithful implementation of official tournament pick/ban sequences (AOG, AIC, AWC).
- Teams flank a central hero grid, so the board stays visible while picking. A seam traces the pick order.
- Automatic turn tracking, first-pick selection (Blue or Red side), a 30-second turn timer you can switch off, and strict duplicate exclusion. Banned heroes stay visible, struck through.
- The draft survives a page reload.
- Lane-by-lane tactical slot assignments and lock-in validation.

#### 3. Rule-Based Matchup Analysis
- One verdict per lane beside the board, with details on demand. The analysis applies rules to the counter data; it is not an AI model.
- Computes team balance across damage types, CC ratings, durability and mobility.
- Direct counter warnings against high-priority meta threats (e.g. Tamyn, Florentino, Aoi, Hayate).
- Synergy notes, counter items, and pick suggestions only for slots the rules allow.

#### 4. Interactive Hero Compendium & 4-Skills Inspector
- Comprehensive dataset of all 129 champions.
- Interactive 4-skills viewer modeled after official Garena Academy portals:
  - Circular skill buttons (Passive, Skill 1, Skill 2, Ultimate).
  - Skill descriptions switch per button. Hero descriptions are available in Vietnamese only.
  - Mobility, CC, and power spike meters.

#### 5. Language, Music & Accessibility
- Switch the interface between Vietnamese and English from the header; the choice is remembered.
- Full flows work by keyboard and on a 390px phone, and reduced-motion settings are honored.
- Integrated background music player featuring the iconic orchestral AOV theme with interactive equalizer visualization and volume controls.
- Web Audio API synthesis for click, roll, fanfare, and stop sound effects.

---

### Project Architecture

```text
aov-metaforge/
├── assets/
│   ├── audio/               # Local AOV theme soundtracks (.webm, .m4a)
│   └── images/              # Official brand emblem and background artwork
├── css/
│   ├── style.css            # Design tokens, app shell, shared controls
│   ├── gacha.css            # Team roll screen
│   ├── draft.css            # Draft board and analysis
│   └── catalog.css          # Hero compendium and hero detail
├── js/
│   ├── core/
│   │   ├── data.js          # Complete 129 champions database with full skill sets & counters
│   │   ├── audio.js         # Web Audio synthesizer and BGM player controller
│   │   ├── i18n.js          # Vietnamese and English interface strings
│   │   └── ui.js            # Shared icons, portraits, tier medals
│   ├── modules/
│   │   ├── analyzer.js      # Rule-based team balance and counter analysis
│   │   ├── draft.js         # Tournament Snake Draft turn logic and slot managers
│   │   └── gacha.js         # Multi-lane reel gacha engine and archive manager
│   └── app.js               # Application coordinator, interactive modal and tab routing
├── index.html               # Semantic, accessible Single Page Application
├── PRODUCT.md               # Product context
├── DESIGN.md                # Design system
├── server.py                # Lightweight local development HTTP server
├── run_web.bat              # Windows 1-click launcher
└── .gitignore               # Ignored temporary and system files
```

---

### Getting Started

#### Method 1: Direct File Launch (Zero Installation)
`aov-metaforge` is a pure 100% client-side web application. Simply open `index.html` in any modern web browser (Google Chrome, Microsoft Edge, Mozilla Firefox, Safari).

#### Method 2: Windows 1-Click Launcher
Double-click `run_web.bat` to launch the local web server and open the application in your default browser.

#### Method 3: Python Development Server
```bash
python server.py
```
The server will start at `http://localhost:8080/index.html`.

---

### Data Provenance & Refresh Guide

All skill parameters, damage values, and base stats are synchronized with official Garena Vietnam Lien Quan Mobile databases through the companion project [`aov-scrapecore`](https://github.com/Thien21112005/aov-scrapecore).

#### How to Refresh or Customize Champion Data
When game updates or balance patches are released:
1. **Live update a single champion from Garena**: In `aov-scrapecore`, run:
   ```bash
   python cli.py --update-skills "Tamyn"
   ```
   *Fetches latest skills and descriptions from Garena and updates `js/core/data.js` within seconds.*
2. **Refresh all 129 champions**: In `aov-scrapecore`, run:
   ```bash
   python sync_metaforge.py --all
   ```
3. **Manual Meta Tuning**: Open `js/core/data.js` and modify `tier` (`S+`, `S`, `A`, `B`), `mobility` (1-100), `cc_rating` (1-100), or `countered_by` / `counters` lists. Changes take effect immediately upon page reload.

---

### License & Disclaimer

Distributed under the [MIT License](LICENSE).

Arena of Valor (Liên Quân Mobile) and all associated assets, champion trademarks, and artwork are intellectual property of **Tencent Games** and **Garena**. This project is built for educational, community analytics, and competitive training purposes.

<p align="right"><a href="#aov-metaforge">Back to Top</a> &bull; <a href="#tiếng-việt">Chuyển sang Tiếng Việt</a></p>

---

<div id="tiếng-việt"></div>
<div id="tieng-viet"></div>

## Tiếng Việt

> Nền tảng Phân Tích Cấm Chọn Giải Đấu, Mô Phỏng Snake Draft & Vòng Quay Gacha Đội Hình Chuẩn Meta Liên Quân Mobile.

Nền tảng Web cao cấp dành cho game thủ, chuyên viên phân tích chiến thuật và ban huấn luyện **Liên Quân Mobile (Arena of Valor)**. Ứng dụng có giao diện men lam và vàng, bàn cấm chọn theo kiểu trong game, chuyển đổi Việt/Anh, cùng dữ liệu của toàn bộ 129 vị tướng.

### Mục Lục
- [Các Phân Hệ Cốt Lõi](#các-phân-hệ-cốt-lõi)
  - [1. Vòng Quay Gacha Đội Hình & Nhân Phẩm](#1-vòng-quay-gacha-đội-hình--nhân-phẩm)
  - [2. Đấu Trường Cấm Chọn Snake Draft (1-2-2-2-2-1)](#2-đấu-trường-cấm-chọn-snake-draft-1-2-2-2-2-1)
  - [3. Phân Tích Kèo Theo Quy Tắc](#3-phân-tích-kèo-theo-quy-tắc)
  - [4. Bách Khoa Toàn Thư & Thanh Chọn 4 Kỹ Năng Tương Tác](#4-bách-khoa-toàn-thư--thanh-chọn-4-kỹ-năng-tương-tác)
  - [5. Ngôn Ngữ, Âm Nhạc & Trợ Năng](#5-ngôn-ngữ-âm-nhạc--trợ-năng)
- [Cấu Trúc Dự Án](#cấu-trúc-dự-án)
- [Hướng Dẫn Sử Dụng](#hướng-dẫn-sử-dụng-1)
- [Nguồn Dữ Liệu & Hướng Dẫn Cập Nhật](#nguồn-dữ-liệu--hướng-dẫn-cập-nhật)
- [Bản Quyền & Tuyên Bố Miễn Trừ](#bản-quyền--tuyên-bố-miễn-trừ)

---

### Các Phân Hệ Cốt Lõi

#### 1. Vòng Quay Gacha Đội Hình & Nhân Phẩm
- Thuật toán phân bổ chuẩn xác theo từng đường thi đấu (Top, Rừng, Mid, AD, Trợ thủ).
- Đa dạng chế độ: Đội hình 5v5 đầy đủ, Bộ 3 Mid-Rừng-SP, Cặp đôi đường Rồng AD-SP, Quay đơn 1 tướng, hoặc Tự chọn đường (Multi-lane).
- Các ô quay dừng lần lượt trên chân dung tướng cỡ lớn, tướng S+ có hiệu ứng viền vàng, và dòng kết quả không làm xô lệch bố cục.
- Chép đội hình dạng chữ hoặc chụp lại màn kết quả.
- **Tương tác 1-Click**: Bấm vào bất kỳ ô tướng vừa quay xong hoặc chip tướng trong Lịch sử quay để mở ngay bảng phân tích chiêu thức.

#### 2. Đấu Trường Cấm Chọn Snake Draft (1-2-2-2-2-1)
- Tái hiện quy trình cấm chọn chuyên nghiệp theo chuẩn thi đấu quốc tế (AOG, AIC, AWC).
- Hai đội ở hai bên, lưới tướng ở giữa nên luôn thấy bàn khi chọn. Một mạch vàng thể hiện thứ tự chọn.
- Tự động luân chuyển lượt, chọn đội đi trước, đồng hồ 30 giây mỗi lượt (tắt được), loại trừ trùng lặp tướng. Tướng bị cấm vẫn hiện và có gạch chéo.
- Tải lại trang vẫn giữ nguyên draft.
- Khóa vị trí chiến thuật và kiểm soát đội hình trực quan.

#### 3. Phân Tích Kèo Theo Quy Tắc
- Mỗi đường một dòng kết luận ngay cạnh bàn, bấm để xem chi tiết. Phần phân tích áp dụng quy tắc lên dữ liệu khắc chế, không phải mô hình AI.
- Đánh giá cán cân đội hình: tỷ lệ sát thương, khống chế, chống chịu và cơ động.
- Cảnh báo trực diện các vị tướng khắc chế tâm điểm meta (Tamyn, Florentino, Aoi, Hayate, v.v.).
- Gợi ý phối hợp, trang bị khắc chế và tướng nên chọn, chỉ cho những ô mà luật cho phép.

#### 4. Bách Khoa Toàn Thư & Thanh Chọn 4 Kỹ Năng Tương Tác
- Cơ sở dữ liệu chuẩn hóa của toàn bộ 129 vị tướng.
- Khung xem kỹ năng tương tác theo chuẩn học viện Garena:
  - Cụm 4 icon tròn kỹ năng (Nội tại, Chiêu 1, Chiêu 2, Chiêu 3/Chiêu cuối).
  - Bấm từng icon để xem mô tả chiêu. Mô tả tướng chỉ có tiếng Việt.
  - Thanh đo độ cơ động và khống chế trực quan.

#### 5. Ngôn Ngữ, Âm Nhạc & Trợ Năng
- Chuyển giao diện Việt/Anh ngay trên header, app nhớ lựa chọn của bạn.
- Dùng trọn vẹn được bằng bàn phím và trên điện thoại 390px, tôn trọng cài đặt giảm chuyển động.
- Trình phát nhạc nền AOV Theme chất lượng cao tích hợp bộ cân bằng sóng nhạc (Equalizer) và thanh trượt âm lượng.
- Bộ tổng hợp âm thanh Web Audio API tái tạo âm click, roll tick, fanfare chiến thắng và card stop chân thực.

---

### Cấu Trúc Dự Án

```text
aov-metaforge/
├── assets/
│   ├── audio/               # Bản nhạc nền AOV chính thức (.webm, .m4a)
│   └── images/              # Logo nhận diện thương hiệu và hình ảnh portal
├── css/
│   ├── style.css            # Design token, khung app, control dùng chung
│   ├── gacha.css            # Màn quay đội hình
│   ├── draft.css            # Bàn cấm chọn và phân tích
│   └── catalog.css          # Danh mục tướng và chi tiết tướng
├── js/
│   ├── core/
│   │   ├── data.js          # Dữ liệu 129 tướng, bộ chiêu thức đầy đủ và ma trận counter
│   │   ├── audio.js         # Bộ tổng hợp Web Audio API và điều khiển BGM
│   │   ├── i18n.js          # Chuỗi giao diện tiếng Việt và tiếng Anh
│   │   └── ui.js            # Icon, chân dung, huy hiệu tier dùng chung
│   ├── modules/
│   │   ├── analyzer.js      # Phân tích cân bằng đội và khắc chế theo quy tắc
│   │   ├── draft.js         # Logic Snake Draft giải đấu và quản lý lượt cấm chọn
│   │   └── gacha.js         # Engine vòng quay reel gacha và lưu trữ lịch sử
│   └── app.js               # Điều phối ứng dụng, modal kỹ năng và điều hướng tab
├── index.html               # Ứng dụng Single Page Application (SPA)
├── PRODUCT.md               # Bối cảnh sản phẩm
├── DESIGN.md                # Hệ thống thiết kế
├── server.py                # Máy chủ HTTP cục bộ tích hợp tự động mở trình duyệt
├── run_web.bat              # Phím tắt khởi chạy 1-click trên Windows
└── .gitignore               # Cấu hình bỏ qua tệp hệ thống & bộ nhớ tạm
```

---

### Hướng Dẫn Sử Dụng

#### Cách 1: Mở trực tiếp (Không cần cài đặt)
`aov-metaforge` là ứng dụng Web thuần Client-side 100%. Bạn chỉ cần mở trực tiếp tệp `index.html` bằng bất kỳ trình duyệt nào (Chrome, Edge, Firefox, Safari).

#### Cách 2: Phím tắt 1-Click trên Windows
Nhấp đúp chuột vào file `run_web.bat` để khởi động máy chủ và tự động mở trang web.

#### Cách 3: Khởi chạy bằng Python
```bash
python server.py
```
Trang web sẽ tự động mở tại địa chỉ: `http://localhost:8080/index.html`.

---

### Nguồn Dữ Liệu & Hướng Dẫn Cập Nhật

Toàn bộ thông số kỹ năng, giá trị sát thương và tỷ lệ tướng được trích xuất và đồng bộ từ cổng thông tin Liên Quân Mobile Garena Việt Nam thông qua công cụ đồng hành [`aov-scrapecore`](https://github.com/Thien21112005/aov-scrapecore).

#### Hướng Dẫn Làm Mới & Chỉnh Sửa Thông Số Tướng
Khi game có bản cập nhật tăng/giảm sức mạnh hoặc đổi meta:
1. **Cập nhật nhanh 1 tướng từ Garena**: Mở terminal trong thư mục `aov-scrapecore` và chạy:
   ```bash
   python cli.py --update-skills "Tamyn"
   ```
   *Tool sẽ bóc tách bài viết mới nhất từ Garena và tự động bơm thẳng vào `js/core/data.js` của web.*
2. **Làm mới toàn bộ 129 tướng**: Trong `aov-scrapecore`, chạy:
   ```bash
   python sync_metaforge.py --all
   ```
3. **Tùy chỉnh thông số Meta thủ công**: Mở trực tiếp file `js/core/data.js` để chỉnh sửa các trường:
   - `tier`: Xếp hạng meta (`S+`, `S`, `A`, `B`).
   - `mobility`: Điểm cơ động (1 - 100).
   - `cc_rating`: Điểm khống chế cứng (1 - 100).
   - `countered_by` / `counters`: Danh sách tướng khắc chế.

---

### Bản Quyền & Tuyên Bố Miễn Trừ

Phát hành theo [Giấy phép MIT](LICENSE).

Arena of Valor (Liên Quân Mobile) cùng toàn bộ hình ảnh và nhãn hiệu liên quan thuộc quyền sở hữu trí tuệ của **Tencent Games** và **Garena**. Dự án này được phát triển hoàn toàn phi thương mại, phục vụ mục đích nghiên cứu, học tập và hỗ trợ cộng đồng.

<p align="right"><a href="#aov-metaforge">Lên đầu trang</a> &bull; <a href="#english">Switch to English</a></p>
