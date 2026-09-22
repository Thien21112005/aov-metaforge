# AOV MetaForge (Liên Quân Mobile Esports Analytics & Gacha Draft)

[![Version](https://img.shields.io/badge/version-2.0.0-blue.svg)](https://github.com/Thien21112005/aov-metaforge)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)
[![Status](https://img.shields.io/badge/status-active-brightgreen.svg)](https://github.com/Thien21112005/aov-metaforge)

Nền tảng Web cao cấp dành cho game thủ & huấn luyện viên **Liên Quân Mobile (Arena of Valor)** với giao diện chuẩn sàn đấu Esports quốc tế, kết hợp 3 phân hệ cốt lõi:

1. **Vòng Quay Gacha Đội Hình & Nhân Phẩm**: Thuật toán mô phỏng gacha đội hình 5v5 theo vị trí, cặp đôi bot AD-SP hoặc bộ 3 Mid-Rừng-SP chuẩn tỷ lệ meta và hiệu ứng dải cuộn reel đa chiều.
2. **Đấu Trường Cấm Chọn Snake Draft (1-2-2-2-2-1)**: Mô phỏng quy trình cấm chọn chuyên nghiệp giải đấu (AOG / AIC / AWC). Tự động khóa vị trí chưa tới lượt, xoay vòng pick chéo theo First Pick (Xanh hoặc Đỏ), tự động loại trừ tướng trùng lặp.
3. **AI Phân Tích Khắc Chế & Cân Bằng Thời Gian Thực**: Đánh giá tương quan lực lượng, sát thương (Vật Lý / Phép), độ cơ động, chỉ số khống chế cứng (CC) và cảnh báo khắc chế trực diện các tướng tâm điểm meta (Tamyn, Astrid, Butterfly, Florentino...).
4. **Bách Khoa Toàn Thư 129+ Vị Tướng**: Tra cứu chi tiết sức mạnh, điểm yếu, trang bị khắc chế cứng và mẹo vận hành.

---

## Cấu Trúc Dự Án

```text
aov-metaforge/
├── assets/
│   ├── images/              # Hình nền cinematic đấu trường & hiệu ứng gacha portal
├── css/
│   └── style.css            # Hệ thống giao diện Dark Luxury Glassmorphism & Neon Glow
├── js/
│   ├── core/
│   │   ├── data.js          # Cơ sở dữ liệu 129+ tướng, Tierlist S+/S/A/B, Counter Matrix
│   │   └── audio.js         # Bộ tổng hợp âm thanh đa tầng Web Audio API không phụ thuộc file mp3
│   ├── modules/
│   │   ├── gacha.js         # Logic vòng quay dải reel, tỷ lệ nhân phẩm & archive lịch sử
│   │   ├── draft.js         # Quản lý lượt Snake Draft 1-2-2-2-2-1 & khóa vị trí luân phiên
│   │   └── analyzer.js      # Hệ thống AI phân tích khắc chế và so sánh chỉ số đội hình
│   └── app.js               # Điều phối ứng dụng, tab navigation & catalog modal
├── index.html               # Single Page Application chuẩn W3C
├── server.py                # Mini HTTP server tích hợp tự động mở trình duyệt
├── run_web.bat              # Phím tắt khởi chạy 1-click trên Windows
├── .gitignore               # Cấu hình bỏ qua tệp hệ thống & bộ nhớ tạm
└── README.md                # Tài liệu dự án
```

---

## Khởi Chạy Nhanh

### Cách 1: Click đúp chuột (Khuyên dùng trên Windows)
* Click đúp vào file **`run_web.bat`** để mở ngay ứng dụng trên trình duyệt web mặc định.

### Cách 2: Khởi chạy qua Python
```bash
python server.py
```
Ứng dụng sẽ tự động mở tại địa chỉ: `http://localhost:8080/index.html`

### Cách 3: Mở trực tiếp file HTML
* Web app hoàn toàn độc lập (100% Client-side), bạn có thể click đúp trực tiếp vào file **`index.html`** hoặc host trên GitHub Pages / Vercel.

---

## Tác Giả & Bản Quyền
* Phát triển bởi **Thien21112005**
* Dữ liệu tham chiếu chuẩn Meta Liên Quân Mobile Garena Vietnam.
