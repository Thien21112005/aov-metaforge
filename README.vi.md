# AOV MetaForge

> Nền tảng Phân Tích Cấm Chọn Giải Đấu, Mô Phỏng Snake Draft & Vòng Quay Gacha Đội Hình Chuẩn Meta Liên Quân Mobile.

[English](README.md) | [Tiếng Việt](README.vi.md)

[![Phiên bản](https://img.shields.io/badge/version-2.4.0-blue.svg)](https://github.com/Thien21112005/aov-metaforge)
[![Giấy phép](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Trạng thái](https://img.shields.io/badge/status-active-emerald.svg)](https://github.com/Thien21112005/aov-metaforge)

Nền tảng Web cao cấp dành cho game thủ, chuyên viên phân tích chiến thuật và ban huấn luyện **Liên Quân Mobile (Arena of Valor)**. Ứng dụng kết hợp mật độ hiển thị tinh gọn (Compact Density chuẩn Ant Design), hiệu ứng chuyển động GSAP mượt mà, hệ thống âm thanh BGM & SFX tích hợp, cùng cơ sở dữ liệu chi tiết của toàn bộ 129+ vị tướng.

---

## Các Phân Hệ Cốt Lõi

### 1. Vòng Quay Gacha Đội Hình & Nhân Phẩm
- Thuật toán phân bổ chuẩn xác theo từng đường thi đấu (Top, Rừng, Mid, AD, Trợ thủ).
- Đa dạng chế độ: Đội hình 5v5 đầy đủ, Bộ 3 Mid-Rừng-SP, Cặp đôi đường Rồng AD-SP, Quay đơn 1 tướng, hoặc Tự chọn đường (Multi-lane).
- Hiệu ứng cuộn dải slot gia tốc phần cứng kết hợp hiệu ứng nổ nảy (Landing Bounce) khi dừng quay.
- **Tương tác 1-Click**: Bấm vào bất kỳ ô tướng vừa quay xong hoặc chip tướng trong Lịch sử quay để mở ngay bảng phân tích chiêu thức.

### 2. Đấu Trường Cấm Chọn Snake Draft (1-2-2-2-2-1)
- Tái hiện quy trình cấm chọn chuyên nghiệp theo chuẩn thi đấu quốc tế (AOG, AIC, AWC).
- Tự động luân chuyển lượt chọn, hỗ trợ First Pick (Đội Xanh hoặc Đội Đỏ), loại trừ trùng lặp tướng.
- Khóa vị trí chiến thuật và kiểm soát đội hình trực quan.

### 3. AI Phân Tích Tương Quan & Ma Trận Khắc Chế
- Tự động đánh giá cán cân sức mạnh: Tỷ lệ sát thương (Vật Lý / Phép / Chuẩn), chỉ số cơ động, điểm số khống chế cứng (CC) và giai đoạn tỏa sáng (Power Spike).
- Cảnh báo trực diện các vị tướng khắc chế tâm điểm meta (Tamyn, Florentino, Aoi, Hayate, v.v.).
- Đưa ra khuyến nghị phối hợp đồng đội (Synergy) và danh sách trang bị khắc chế tối ưu.

### 4. Bách Khoa Toàn Thư & Thanh Chọn 4 Kỹ Năng Tương Tác
- Cơ sở dữ liệu chuẩn hóa của toàn bộ 129 vị tướng.
- Khung xem kỹ năng tương tác theo chuẩn học viện Garena:
  - Cụm 4 icon tròn kỹ năng (Nội tại, Chiêu 1, Chiêu 2, Chiêu 3/Chiêu cuối) với vòng sáng hoàng kim khi chọn.
  - Chuyển đổi mượt mà mô tả chi tiết cơ chế, tỷ lệ sát thương, thời gian hồi chiêu.
  - Thanh đo độ cơ động và khống chế trực quan.

### 5. Sân Khấu Chuyển Động & Âm Thanh eSports
- Nền hạt sáng động học (Ambient Kinetic Particles) 60fps trên GPU Canvas.
- Hiệu ứng quét sáng ánh kim (Sheen Sweep) khi rê chuột qua các thẻ bài.
- Trình phát nhạc nền AOV Theme chất lượng cao tích hợp bộ cân bằng sóng nhạc (Equalizer) và thanh trượt âm lượng.
- Bộ tổng hợp âm thanh Web Audio API tái tạo âm click, roll tick, fanfare chiến thắng và card stop chân thực.

---

## Cấu Trúc Dự Án

```text
aov-metaforge/
├── assets/
│   ├── audio/               # Bản nhạc nền AOV chính thức (.webm, .m4a)
│   └── images/              # Logo nhận diện thương hiệu và hình ảnh portal
├── css/
│   └── style.css            # Giao diện Bright Glassmorphism, mật độ compact, responsive
├── js/
│   ├── core/
│   │   ├── data.js          # Dữ liệu 129 tướng, bộ chiêu thức đầy đủ và ma trận counter
│   │   └── audio.js         # Bộ tổng hợp Web Audio API và điều khiển BGM
│   ├── modules/
│   │   ├── analyzer.js      # Thuật toán AI phân tích tương quan và khắc chế
│   │   ├── draft.js         # Logic Snake Draft giải đấu và quản lý lượt cấm chọn
│   │   └── gacha.js         # Engine vòng quay reel gacha và lưu trữ lịch sử
│   └── app.js               # Điều phối ứng dụng, modal kỹ năng và điều hướng tab
├── index.html               # Ứng dụng Single Page Application (SPA)
├── server.py                # Máy chủ HTTP cục bộ tích hợp tự động mở trình duyệt
├── run_web.bat              # Phím tắt khởi chạy 1-click trên Windows
└── .gitignore               # Cấu hình bỏ qua tệp hệ thống & bộ nhớ tạm
```

---

## Hướng Dẫn Sử Dụng

### Cách 1: Mở trực tiếp (Không cần cài đặt)
`aov-metaforge` là ứng dụng Web thuần Client-side 100%. Bạn chỉ cần mở trực tiếp tệp `index.html` bằng bất kỳ trình duyệt nào (Chrome, Edge, Firefox, Safari).

### Cách 2: Phím tắt 1-Click trên Windows
Nhấp đúp chuột vào file `run_web.bat` để khởi động máy chủ và tự động mở trang web.

### Cách 3: Khởi chạy bằng Python
```bash
python server.py
```
Trang web sẽ tự động mở tại địa chỉ: `http://localhost:8080/index.html`.

---

## Nguồn Dữ Liệu

Toàn bộ thông số kỹ năng, giá trị sát thương và tỷ lệ tướng được trích xuất và đồng bộ từ cổng thông tin Liên Quân Mobile Garena Việt Nam thông qua công cụ đồng hành [`aov-scrapecore`](https://github.com/Thien21112005/aov-scrapecore).

---

## Bản Quyền & Tuyên Bố Miễn Trừ

Phát hành theo [Giấy phép MIT](LICENSE).

Arena of Valor (Liên Quân Mobile) cùng toàn bộ hình ảnh và nhãn hiệu liên quan thuộc quyền sở hữu trí tuệ của **Tencent Games** và **Garena**. Dự án này được phát triển hoàn toàn phi thương mại, phục vụ mục đích nghiên cứu, học tập và hỗ trợ cộng đồng.
