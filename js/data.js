// CƠ SỞ DỮ LIỆU CHUẨN META TOÀN BỘ 129+ VỊ TƯỚNG LIÊN QUÂN MOBILE
const HEROES_DATABASE = [
  {
    "lane": "top",
    "secondary_lane": "jungle",
    "tier": "S+",
    "damage_type": "physical",
    "mobility": 98,
    "cc_rating": 45,
    "power_spike": "mid-late",
    "strengths": "Đấu sĩ S+ số 1 meta hiện tại. Toàn bộ tốc chạy chuyển hóa thành sát thương dồn cực lớn. Đâm trúng mục tiêu hồi phục x2 máu và giảm 1s hồi chiêu toàn bộ kỹ năng. Chiêu cuối tích trữ tới 4 lần gọi thương, dồn sát thương bùng nổ tầm xa và nạp đòn đâm tức thì.",
    "weaknesses": "Cực kỳ sợ khống chế cứng chỉ định (không thể di chuyển để lấy tốc chạy chuyển thành dame). Hướng đâm phụ thuộc 100% vào Joystick di chuyển nên người chơi cần kỹ năng cao.",
    "countered_by": [
      "omen",
      "aleister",
      "arum",
      "baldum",
      "skud"
    ],
    "counters": [
      "florentino",
      "ryoma",
      "yena",
      "allain",
      "valhein",
      "arthur",
      "taara"
    ],
    "synergies": [
      "aya",
      "helen",
      "rouie",
      "krizzix",
      "teemee",
      "chaugnar"
    ],
    "counter_tips": "LÊN NGAY Khiên Thất Truyền và Áo Choàng Băng để triệt tiêu tốc chạy (khiến đòn đâm mất sạch dame). Dùng Omen xích Sát Vực hoặc Aleister/Arum trói áp chế cứng ngay khi Tamyn lao vào.",
    "counter_items": [
      "Khiên Thất Truyền",
      "Áo Choàng Băng Giá",
      "Sách Truy Hồn",
      "Đao Truy Hồn"
    ],
    "id": "tamyn",
    "name": "Tamyn",
    "avatar": "https://lienquan.garena.vn/wp-content/uploads/2026/07/SeaTalk_IMG_20260722_163230-1.jpg",
    "roles": [
      "Đấu sĩ"
    ]
  },
  {
    "id": "flowborn-2",
    "name": "Flowborn",
    "avatar": "https://lienquan.garena.vn/wp-content/uploads/2026/04/IMG-SQR-0200x0200-080148-2.jpg",
    "roles": [
      "Pháp sư"
    ],
    "lane": "mid",
    "secondary_lane": null,
    "tier": "A",
    "damage_type": "magic",
    "mobility": 55,
    "cc_rating": 75,
    "power_spike": "mid",
    "strengths": "Tướng vị trí MID, bộ kỹ năng cân bằng, có khả năng tạo đột biến giao tranh tốt khi phối hợp cùng đồng đội.",
    "weaknesses": "Cần giữ vị trí cẩn thận, dễ bị bắt lẻ khi thiếu tầm nhìn hoặc khi hết chiêu thức tẩu thoát.",
    "countered_by": [
      "aleister",
      "omen",
      "arum"
    ],
    "counters": [
      "valhein"
    ],
    "synergies": [
      "thane",
      "krizzix",
      "aya"
    ],
    "counter_tips": "Chú ý lượng trang bị của Flowborn. Sử dụng khống chế cứng chỉ định để bắt trong combat tổng.",
    "counter_items": [
      "Huân Chương Troy",
      "Quả Cầu Băng Sương"
    ]
  },
  {
    "id": "flowborn",
    "name": "Flowborn",
    "avatar": "https://lienquan.garena.vn/wp-content/uploads/2026/04/IMG-SQR-0200x0200-080150-ket-thuc.jpg",
    "roles": [
      "Xạ thủ"
    ],
    "lane": "ad",
    "secondary_lane": null,
    "tier": "A",
    "damage_type": "physical",
    "mobility": 60,
    "cc_rating": 40,
    "power_spike": "mid",
    "strengths": "Tướng vị trí AD, bộ kỹ năng cân bằng, có khả năng tạo đột biến giao tranh tốt khi phối hợp cùng đồng đội.",
    "weaknesses": "Cần giữ vị trí cẩn thận, dễ bị bắt lẻ khi thiếu tầm nhìn hoặc khi hết chiêu thức tẩu thoát.",
    "countered_by": [
      "aleister",
      "omen",
      "arum"
    ],
    "counters": [
      "valhein"
    ],
    "synergies": [
      "thane",
      "krizzix",
      "aya"
    ],
    "counter_tips": "Chú ý lượng trang bị của Flowborn. Sử dụng khống chế cứng chỉ định để bắt trong combat tổng.",
    "counter_items": [
      "Giáp Gai",
      "Khiên Thất Truyền"
    ]
  },
  {
    "id": "dyadia",
    "name": "Dyadia",
    "avatar": "https://lienquan.garena.vn/wp-content/uploads/2026/01/SeaTalk_IMG_20260119_104427.jpg",
    "roles": [
      "Trợ thủ"
    ],
    "lane": "sp",
    "secondary_lane": null,
    "tier": "S",
    "damage_type": "magic",
    "mobility": 70,
    "cc_rating": 80,
    "power_spike": "mid",
    "strengths": "Tướng vị trí SP, bộ kỹ năng cân bằng, có khả năng tạo đột biến giao tranh tốt khi phối hợp cùng đồng đội.",
    "weaknesses": "Cần giữ vị trí cẩn thận, dễ bị bắt lẻ khi thiếu tầm nhìn hoặc khi hết chiêu thức tẩu thoát.",
    "countered_by": [
      "aleister",
      "omen",
      "arum"
    ],
    "counters": [
      "valhein"
    ],
    "synergies": [
      "thane",
      "krizzix",
      "aya"
    ],
    "counter_tips": "Chú ý lượng trang bị của Dyadia. Sử dụng khống chế cứng chỉ định để bắt trong combat tổng.",
    "counter_items": [
      "Sách Truy Hồn",
      "Đao Truy Hồn"
    ]
  },
  {
    "id": "11596",
    "name": "Edras",
    "avatar": "https://lienquan.garena.vn/wp-content/uploads/2025/10/edrashead-2.jpg",
    "roles": [
      "Đấu sĩ"
    ],
    "lane": "top",
    "secondary_lane": "jungle",
    "tier": "A",
    "damage_type": "physical",
    "mobility": 70,
    "cc_rating": 65,
    "power_spike": "mid",
    "strengths": "Tướng vị trí TOP, bộ kỹ năng cân bằng, có khả năng tạo đột biến giao tranh tốt khi phối hợp cùng đồng đội.",
    "weaknesses": "Cần giữ vị trí cẩn thận, dễ bị bắt lẻ khi thiếu tầm nhìn hoặc khi hết chiêu thức tẩu thoát.",
    "countered_by": [
      "aleister",
      "omen",
      "arum"
    ],
    "counters": [
      "valhein"
    ],
    "synergies": [
      "thane",
      "krizzix",
      "aya"
    ],
    "counter_tips": "Chú ý lượng trang bị của Edras. Sử dụng khống chế cứng chỉ định để bắt trong combat tổng.",
    "counter_items": [
      "Áo Choàng Băng Giá",
      "Khiên Thất Truyền"
    ]
  },
  {
    "id": "goverra",
    "name": "Goverra",
    "avatar": "https://lienquan.garena.vn/wp-content/uploads/2025/07/goverra-1.jpg",
    "roles": [
      "Pháp sư"
    ],
    "lane": "top",
    "secondary_lane": null,
    "tier": "S",
    "damage_type": "physical",
    "mobility": 75,
    "cc_rating": 75,
    "power_spike": "mid",
    "strengths": "Tướng vị trí TOP, bộ kỹ năng cân bằng, có khả năng tạo đột biến giao tranh tốt khi phối hợp cùng đồng đội.",
    "weaknesses": "Cần giữ vị trí cẩn thận, dễ bị bắt lẻ khi thiếu tầm nhìn hoặc khi hết chiêu thức tẩu thoát.",
    "countered_by": [
      "aleister",
      "omen",
      "arum"
    ],
    "counters": [
      "valhein"
    ],
    "synergies": [
      "thane",
      "krizzix",
      "aya"
    ],
    "counter_tips": "Chú ý lượng trang bị của Goverra. Sử dụng khống chế cứng chỉ định để bắt trong combat tổng.",
    "counter_items": [
      "Huân Chương Troy",
      "Quả Cầu Băng Sương"
    ]
  },
  {
    "id": "heino",
    "name": "Heino",
    "avatar": "https://lienquan.garena.vn/wp-content/uploads/2025/04/heino-2.jpg",
    "roles": [
      "Pháp sư"
    ],
    "lane": "mid",
    "secondary_lane": null,
    "tier": "S",
    "damage_type": "magic",
    "mobility": 70,
    "cc_rating": 75,
    "power_spike": "mid",
    "strengths": "Tướng vị trí MID, bộ kỹ năng cân bằng, có khả năng tạo đột biến giao tranh tốt khi phối hợp cùng đồng đội.",
    "weaknesses": "Cần giữ vị trí cẩn thận, dễ bị bắt lẻ khi thiếu tầm nhìn hoặc khi hết chiêu thức tẩu thoát.",
    "countered_by": [
      "aleister",
      "omen",
      "arum"
    ],
    "counters": [
      "valhein"
    ],
    "synergies": [
      "thane",
      "krizzix",
      "aya"
    ],
    "counter_tips": "Chú ý lượng trang bị của Heino. Sử dụng khống chế cứng chỉ định để bắt trong combat tổng.",
    "counter_items": [
      "Huân Chương Troy",
      "Quả Cầu Băng Sương"
    ]
  },
  {
    "id": "billow",
    "name": "Billow",
    "avatar": "https://lienquan.garena.vn/wp-content/uploads/2025/01/59900-2.jpg",
    "roles": [
      "Sát thủ"
    ],
    "lane": "jungle",
    "secondary_lane": null,
    "tier": "A",
    "damage_type": "physical",
    "mobility": 85,
    "cc_rating": 55,
    "power_spike": "mid",
    "strengths": "Tướng vị trí JUNGLE, bộ kỹ năng cân bằng, có khả năng tạo đột biến giao tranh tốt khi phối hợp cùng đồng đội.",
    "weaknesses": "Cần giữ vị trí cẩn thận, dễ bị bắt lẻ khi thiếu tầm nhìn hoặc khi hết chiêu thức tẩu thoát.",
    "countered_by": [
      "aleister",
      "omen",
      "arum"
    ],
    "counters": [
      "valhein"
    ],
    "synergies": [
      "thane",
      "krizzix",
      "aya"
    ],
    "counter_tips": "Chú ý lượng trang bị của Billow. Sử dụng khống chế cứng chỉ định để bắt trong combat tổng.",
    "counter_items": [
      "Giáp Hộ Mệnh",
      "Áo Choàng Băng Giá"
    ]
  },
  {
    "id": "bolt-baron",
    "name": "Bolt Baron",
    "avatar": "https://lienquan.garena.vn/wp-content/uploads/2024/11/bolt-baron-225.jpg",
    "roles": [
      "Pháp sư"
    ],
    "lane": "mid",
    "secondary_lane": null,
    "tier": "A",
    "damage_type": "magic",
    "mobility": 55,
    "cc_rating": 75,
    "power_spike": "mid",
    "strengths": "Tướng vị trí MID, bộ kỹ năng cân bằng, có khả năng tạo đột biến giao tranh tốt khi phối hợp cùng đồng đội.",
    "weaknesses": "Cần giữ vị trí cẩn thận, dễ bị bắt lẻ khi thiếu tầm nhìn hoặc khi hết chiêu thức tẩu thoát.",
    "countered_by": [
      "aleister",
      "omen",
      "arum"
    ],
    "counters": [
      "valhein"
    ],
    "synergies": [
      "thane",
      "krizzix",
      "aya"
    ],
    "counter_tips": "Chú ý lượng trang bị của Bolt Baron. Sử dụng khống chế cứng chỉ định để bắt trong combat tổng.",
    "counter_items": [
      "Huân Chương Troy",
      "Quả Cầu Băng Sương"
    ]
  },
  {
    "id": "biron",
    "name": "Biron",
    "avatar": "https://lienquan.garena.vn/wp-content/uploads/2024/10/biron-artwork-1.jpg",
    "roles": [
      "Đấu sĩ"
    ],
    "lane": "top",
    "secondary_lane": "jungle",
    "tier": "S",
    "damage_type": "physical",
    "mobility": 75,
    "cc_rating": 65,
    "power_spike": "mid",
    "strengths": "Tướng vị trí TOP, bộ kỹ năng cân bằng, có khả năng tạo đột biến giao tranh tốt khi phối hợp cùng đồng đội.",
    "weaknesses": "Cần giữ vị trí cẩn thận, dễ bị bắt lẻ khi thiếu tầm nhìn hoặc khi hết chiêu thức tẩu thoát.",
    "countered_by": [
      "aleister",
      "omen",
      "arum"
    ],
    "counters": [
      "valhein"
    ],
    "synergies": [
      "thane",
      "krizzix",
      "aya"
    ],
    "counter_tips": "Chú ý lượng trang bị của Biron. Sử dụng khống chế cứng chỉ định để bắt trong combat tổng.",
    "counter_items": [
      "Áo Choàng Băng Giá",
      "Khiên Thất Truyền"
    ]
  },
  {
    "id": "dolia",
    "name": "Dolia",
    "avatar": "https://lienquan.garena.vn/wp-content/uploads/2024/07/15900s.jpg",
    "roles": [
      "Trợ thủ"
    ],
    "lane": "sp",
    "secondary_lane": null,
    "tier": "A",
    "damage_type": "magic",
    "mobility": 60,
    "cc_rating": 80,
    "power_spike": "mid",
    "strengths": "Tướng vị trí SP, bộ kỹ năng cân bằng, có khả năng tạo đột biến giao tranh tốt khi phối hợp cùng đồng đội.",
    "weaknesses": "Cần giữ vị trí cẩn thận, dễ bị bắt lẻ khi thiếu tầm nhìn hoặc khi hết chiêu thức tẩu thoát.",
    "countered_by": [
      "aleister",
      "omen",
      "arum"
    ],
    "counters": [
      "valhein"
    ],
    "synergies": [
      "thane",
      "krizzix",
      "aya"
    ],
    "counter_tips": "Chú ý lượng trang bị của Dolia. Sử dụng khống chế cứng chỉ định để bắt trong combat tổng.",
    "counter_items": [
      "Sách Truy Hồn",
      "Đao Truy Hồn"
    ]
  },
  {
    "id": "charlotte",
    "name": "Charlotte",
    "avatar": "https://lienquan.garena.vn/wp-content/uploads/2024/07/20600s.jpg",
    "roles": [
      "Đấu sĩ"
    ],
    "lane": "top",
    "secondary_lane": "jungle",
    "tier": "S",
    "damage_type": "physical",
    "mobility": 75,
    "cc_rating": 65,
    "power_spike": "mid",
    "strengths": "Tướng vị trí TOP, bộ kỹ năng cân bằng, có khả năng tạo đột biến giao tranh tốt khi phối hợp cùng đồng đội.",
    "weaknesses": "Cần giữ vị trí cẩn thận, dễ bị bắt lẻ khi thiếu tầm nhìn hoặc khi hết chiêu thức tẩu thoát.",
    "countered_by": [
      "aleister",
      "omen",
      "arum"
    ],
    "counters": [
      "valhein"
    ],
    "synergies": [
      "thane",
      "krizzix",
      "aya"
    ],
    "counter_tips": "Chú ý lượng trang bị của Charlotte. Sử dụng khống chế cứng chỉ định để bắt trong combat tổng.",
    "counter_items": [
      "Áo Choàng Băng Giá",
      "Khiên Thất Truyền"
    ]
  },
  {
    "id": "tachi",
    "name": "Tachi",
    "avatar": "https://lienquan.garena.vn/wp-content/uploads/2024/05/ea94a6f76e867283974c8ced9d3aa2c5658d3150230cf1.jpg",
    "roles": [
      "Đấu sĩ"
    ],
    "lane": "top",
    "secondary_lane": "jungle",
    "tier": "A",
    "damage_type": "physical",
    "mobility": 70,
    "cc_rating": 65,
    "power_spike": "mid",
    "strengths": "Tướng vị trí TOP, bộ kỹ năng cân bằng, có khả năng tạo đột biến giao tranh tốt khi phối hợp cùng đồng đội.",
    "weaknesses": "Cần giữ vị trí cẩn thận, dễ bị bắt lẻ khi thiếu tầm nhìn hoặc khi hết chiêu thức tẩu thoát.",
    "countered_by": [
      "aleister",
      "omen",
      "arum"
    ],
    "counters": [
      "valhein"
    ],
    "synergies": [
      "thane",
      "krizzix",
      "aya"
    ],
    "counter_tips": "Chú ý lượng trang bị của Tachi. Sử dụng khống chế cứng chỉ định để bắt trong combat tổng.",
    "counter_items": [
      "Áo Choàng Băng Giá",
      "Khiên Thất Truyền"
    ]
  },
  {
    "id": "dirak",
    "name": "Dirak",
    "avatar": "https://lienquan.garena.vn/wp-content/uploads/2024/05/ab0b68ebd2e8df3116d91231ec0e55fc5e16e1f05c8701-1.jpg",
    "roles": [
      "Pháp sư"
    ],
    "lane": "mid",
    "secondary_lane": null,
    "tier": "A",
    "damage_type": "magic",
    "mobility": 55,
    "cc_rating": 75,
    "power_spike": "mid",
    "strengths": "Tướng vị trí MID, bộ kỹ năng cân bằng, có khả năng tạo đột biến giao tranh tốt khi phối hợp cùng đồng đội.",
    "weaknesses": "Cần giữ vị trí cẩn thận, dễ bị bắt lẻ khi thiếu tầm nhìn hoặc khi hết chiêu thức tẩu thoát.",
    "countered_by": [
      "aleister",
      "omen",
      "arum"
    ],
    "counters": [
      "valhein"
    ],
    "synergies": [
      "thane",
      "krizzix",
      "aya"
    ],
    "counter_tips": "Chú ý lượng trang bị của Dirak. Sử dụng khống chế cứng chỉ định để bắt trong combat tổng.",
    "counter_items": [
      "Huân Chương Troy",
      "Quả Cầu Băng Sương"
    ]
  },
  {
    "id": "qi",
    "name": "Qi",
    "avatar": "https://lienquan.garena.vn/wp-content/uploads/2024/05/6da178e8a2c2871aeb856bec0f669ccd5d5684e01acd31.jpg",
    "roles": [
      "Đấu sĩ"
    ],
    "lane": "top",
    "secondary_lane": "jungle",
    "tier": "A",
    "damage_type": "physical",
    "mobility": 70,
    "cc_rating": 65,
    "power_spike": "mid",
    "strengths": "Tướng vị trí TOP, bộ kỹ năng cân bằng, có khả năng tạo đột biến giao tranh tốt khi phối hợp cùng đồng đội.",
    "weaknesses": "Cần giữ vị trí cẩn thận, dễ bị bắt lẻ khi thiếu tầm nhìn hoặc khi hết chiêu thức tẩu thoát.",
    "countered_by": [
      "aleister",
      "omen",
      "arum"
    ],
    "counters": [
      "valhein"
    ],
    "synergies": [
      "thane",
      "krizzix",
      "aya"
    ],
    "counter_tips": "Chú ý lượng trang bị của Qi. Sử dụng khống chế cứng chỉ định để bắt trong combat tổng.",
    "counter_items": [
      "Áo Choàng Băng Giá",
      "Khiên Thất Truyền"
    ]
  },
  {
    "id": "erin",
    "name": "Erin",
    "avatar": "https://lienquan.garena.vn/wp-content/uploads/2024/05/a1d3b1c36a643cb6d58c704139a2c24d65af7afac34cb1.jpg",
    "roles": [
      "Xạ thủ"
    ],
    "lane": "ad",
    "secondary_lane": null,
    "tier": "A",
    "damage_type": "physical",
    "mobility": 60,
    "cc_rating": 40,
    "power_spike": "mid",
    "strengths": "Tướng vị trí AD, bộ kỹ năng cân bằng, có khả năng tạo đột biến giao tranh tốt khi phối hợp cùng đồng đội.",
    "weaknesses": "Cần giữ vị trí cẩn thận, dễ bị bắt lẻ khi thiếu tầm nhìn hoặc khi hết chiêu thức tẩu thoát.",
    "countered_by": [
      "aleister",
      "omen",
      "arum"
    ],
    "counters": [
      "valhein"
    ],
    "synergies": [
      "thane",
      "krizzix",
      "aya"
    ],
    "counter_tips": "Chú ý lượng trang bị của Erin. Sử dụng khống chế cứng chỉ định để bắt trong combat tổng.",
    "counter_items": [
      "Giáp Gai",
      "Khiên Thất Truyền"
    ]
  },
  {
    "id": "ming",
    "name": "Ming",
    "avatar": "https://lienquan.garena.vn/wp-content/uploads/2024/05/58ba051be8f5ab56c0ea840ceb29c489658d529e847cf1.jpg",
    "roles": [
      "Trợ thủ"
    ],
    "lane": "sp",
    "secondary_lane": null,
    "tier": "A",
    "damage_type": "magic",
    "mobility": 60,
    "cc_rating": 80,
    "power_spike": "mid",
    "strengths": "Tướng vị trí SP, bộ kỹ năng cân bằng, có khả năng tạo đột biến giao tranh tốt khi phối hợp cùng đồng đội.",
    "weaknesses": "Cần giữ vị trí cẩn thận, dễ bị bắt lẻ khi thiếu tầm nhìn hoặc khi hết chiêu thức tẩu thoát.",
    "countered_by": [
      "aleister",
      "omen",
      "arum"
    ],
    "counters": [
      "valhein"
    ],
    "synergies": [
      "thane",
      "krizzix",
      "aya"
    ],
    "counter_tips": "Chú ý lượng trang bị của Ming. Sử dụng khống chế cứng chỉ định để bắt trong combat tổng.",
    "counter_items": [
      "Sách Truy Hồn",
      "Đao Truy Hồn"
    ]
  },
  {
    "id": "bijan",
    "name": "Bijan",
    "avatar": "https://lienquan.garena.vn/wp-content/uploads/2024/05/856d30cb10953b9480dce5c5470bf81c658d50d87305a1.jpg",
    "roles": [
      "Đấu sĩ"
    ],
    "lane": "top",
    "secondary_lane": "jungle",
    "tier": "A",
    "damage_type": "physical",
    "mobility": 70,
    "cc_rating": 65,
    "power_spike": "mid",
    "strengths": "Tướng vị trí TOP, bộ kỹ năng cân bằng, có khả năng tạo đột biến giao tranh tốt khi phối hợp cùng đồng đội.",
    "weaknesses": "Cần giữ vị trí cẩn thận, dễ bị bắt lẻ khi thiếu tầm nhìn hoặc khi hết chiêu thức tẩu thoát.",
    "countered_by": [
      "aleister",
      "omen",
      "arum"
    ],
    "counters": [
      "valhein"
    ],
    "synergies": [
      "thane",
      "krizzix",
      "aya"
    ],
    "counter_tips": "Chú ý lượng trang bị của Bijan. Sử dụng khống chế cứng chỉ định để bắt trong combat tổng.",
    "counter_items": [
      "Áo Choàng Băng Giá",
      "Khiên Thất Truyền"
    ]
  },
  {
    "id": "bonnie",
    "name": "Bonnie",
    "avatar": "https://lienquan.garena.vn/wp-content/uploads/2024/05/a2ed1b1815df9c719e4f9b4be5eb3a74658d4cd7d3ef61.jpg",
    "roles": [
      "Pháp sư"
    ],
    "lane": "mid",
    "secondary_lane": null,
    "tier": "A",
    "damage_type": "magic",
    "mobility": 55,
    "cc_rating": 75,
    "power_spike": "mid",
    "strengths": "Tướng vị trí MID, bộ kỹ năng cân bằng, có khả năng tạo đột biến giao tranh tốt khi phối hợp cùng đồng đội.",
    "weaknesses": "Cần giữ vị trí cẩn thận, dễ bị bắt lẻ khi thiếu tầm nhìn hoặc khi hết chiêu thức tẩu thoát.",
    "countered_by": [
      "aleister",
      "omen",
      "arum"
    ],
    "counters": [
      "valhein"
    ],
    "synergies": [
      "thane",
      "krizzix",
      "aya"
    ],
    "counter_tips": "Chú ý lượng trang bị của Bonnie. Sử dụng khống chế cứng chỉ định để bắt trong combat tổng.",
    "counter_items": [
      "Huân Chương Troy",
      "Quả Cầu Băng Sương"
    ]
  },
  {
    "id": "teeri",
    "name": "Teeri",
    "avatar": "https://lienquan.garena.vn/wp-content/uploads/2024/05/3499773a79087475e48194e0fd02e27d658d428c2cbe51.jpg",
    "roles": [
      "Xạ thủ"
    ],
    "lane": "ad",
    "secondary_lane": null,
    "tier": "A",
    "damage_type": "physical",
    "mobility": 60,
    "cc_rating": 40,
    "power_spike": "mid",
    "strengths": "Tướng vị trí AD, bộ kỹ năng cân bằng, có khả năng tạo đột biến giao tranh tốt khi phối hợp cùng đồng đội.",
    "weaknesses": "Cần giữ vị trí cẩn thận, dễ bị bắt lẻ khi thiếu tầm nhìn hoặc khi hết chiêu thức tẩu thoát.",
    "countered_by": [
      "aleister",
      "omen",
      "arum"
    ],
    "counters": [
      "valhein"
    ],
    "synergies": [
      "thane",
      "krizzix",
      "aya"
    ],
    "counter_tips": "Chú ý lượng trang bị của Teeri. Sử dụng khống chế cứng chỉ định để bắt trong combat tổng.",
    "counter_items": [
      "Giáp Gai",
      "Khiên Thất Truyền"
    ]
  },
  {
    "lane": "mid",
    "secondary_lane": null,
    "tier": "S",
    "damage_type": "magic",
    "mobility": 50,
    "cc_rating": 55,
    "power_spike": "mid-late",
    "strengths": "Tầm xả chiêu xa nhất trong các pháp sư, lượng sát thương nhân 4 tại giao điểm cắt hồng tâm có thể tiễn xạ thủ đối phương lên bảng đếm số từ trong bóng tối.",
    "weaknesses": "Cực kỳ mỏng manh, không có chiêu lướt né giao tranh ngoài cú đẩy lùi ngắn từ chiêu cuối.",
    "countered_by": [
      "aoi",
      "nakroth",
      "kaine",
      "keera",
      "zuka",
      "tamyn"
    ],
    "counters": [
      "natalya",
      "krixi",
      "yorn",
      "telannas",
      "valhein"
    ],
    "synergies": [
      "grakk",
      "krizzix",
      "baldum",
      "omen"
    ],
    "counter_tips": "Di chuyển ziczac để né tâm cắt của chiêu 1 và chiêu 2. Luôn cử sát thủ bọc hậu luồn ra sau lưng đội hình địch để bắt Yue.",
    "counter_items": [
      "Huân Chương Troy",
      "Quả Cầu Băng Sương"
    ],
    "id": "yue",
    "name": "Yue",
    "avatar": "https://lienquan.garena.vn/wp-content/uploads/2024/05/3ee26051086fee856dc6df74811e9e35658d4142ce14c1.jpg",
    "roles": [
      "Pháp sư"
    ]
  },
  {
    "lane": "jungle",
    "secondary_lane": "top",
    "tier": "S",
    "damage_type": "physical",
    "mobility": 88,
    "cc_rating": 70,
    "power_spike": "late",
    "strengths": "Càng về cuối trận càng đạt ngưỡng sức mạnh vô địch. Chiêu cuối mở khóa cường hóa kỹ năng liên tục, nhận miễn thương, hồi máu và lướt không ngừng nghỉ.",
    "weaknesses": "Giai đoạn đầu trận (trước cấp 8 và 12) khá yếu ớt, cần nhiều trang bị để phát huy sức mạnh.",
    "countered_by": [
      "florentino",
      "omen",
      "aleister",
      "arum",
      "tamyn"
    ],
    "counters": [
      "nakroth",
      "zuka",
      "ryoma",
      "valhein",
      "murad"
    ],
    "synergies": [
      "aya",
      "helen",
      "zip",
      "krizzix",
      "teemee"
    ],
    "counter_tips": "Ép rừng và kết thúc trận đấu trước phút thứ 12 - 15, tuyệt đối không kéo dài trận đấu để Yan đạt ngưỡng trang bị tối thượng.",
    "counter_items": [
      "Khiên Thất Truyền",
      "Đao Truy Hồn",
      "Áo Choàng Băng Giá"
    ],
    "id": "yan",
    "name": "Yan",
    "avatar": "https://lienquan.garena.vn/wp-content/uploads/2024/05/f9471319a98fac8dce266dc86cd1efea658d4042ae0051.jpg",
    "roles": [
      "Đấu sĩ"
    ]
  },
  {
    "lane": "sp",
    "secondary_lane": "mid",
    "tier": "S+",
    "damage_type": "magic",
    "mobility": 95,
    "cc_rating": 85,
    "power_spike": "mid-late",
    "strengths": "Trợ thủ cấm chọn gắt gao nhất rank cao. Ký sinh lên đồng đội không thể bị chọn làm mục tiêu, liên tục tạo khiên ảo khổng lồ. Chiêu cuối Khúc Nhạc Rừng Sâu biến toàn bộ kẻ địch xung quanh thành thú nhỏ ngắt mọi combo.",
    "weaknesses": "Bản thân không thể lấy thân mình check bụi như các tướng đỡ đòn. Nếu đồng đội đi cùng bị hạ gục thì Aya rơi xuống đất cực kỳ yếu ớt.",
    "countered_by": [
      "chaugnar",
      "aleister",
      "arum"
    ],
    "counters": [
      "florentino",
      "nakroth",
      "aoi",
      "murad",
      "zuka"
    ],
    "synergies": [
      "tamyn",
      "taara",
      "arthur",
      "allain",
      "keera",
      "yan"
    ],
    "counter_tips": "BẮT BUỘC pick Chaugnar để hóa giải toàn bộ hiệu ứng biến thú diện rộng của Aya. Hạ gục vật chủ mang Aya trên đầu trước bằng sát thương chuẩn (Hayate, Florentino).",
    "counter_items": [
      "Sách Truy Hồn",
      "Đao Truy Hồn",
      "Mặt Nạ Berith"
    ],
    "id": "aya",
    "name": "Aya",
    "avatar": "https://lienquan.garena.vn/wp-content/uploads/2024/05/d4510fa53f153c5e259543597c96bb88658d3efcbcd0f1.jpg",
    "roles": [
      "Trợ thủ"
    ]
  },
  {
    "lane": "jungle",
    "secondary_lane": null,
    "tier": "S+",
    "damage_type": "physical",
    "mobility": 99,
    "cc_rating": 70,
    "power_spike": "early-mid",
    "strengths": "Cơ động số 1 game với khả năng đu dây qua 2-3 bức tường. Dồn sát thương đơn mục tiêu cực khủng khiếp, chiêu cuối Long Trảm không thể bị chọn làm mục tiêu và tẩu thoát an toàn.",
    "weaknesses": "Đòi hỏi căn góc đu dây chính xác tuyệt đối. Đu hụt dây vào tường sẽ tự cô lập bản thân. Rất sợ các tướng khống chế cứng chỉ định.",
    "countered_by": [
      "aleister",
      "arum",
      "omen",
      "baldum",
      "skud"
    ],
    "counters": [
      "yorn",
      "telannas",
      "krixi",
      "veera",
      "laville",
      "natalya"
    ],
    "synergies": [
      "krizzix",
      "thane",
      "aya",
      "lumburr",
      "helen"
    ],
    "counter_tips": "Đứng xa các góc tường khi giao tranh để Aoi không có điểm móc dây. Lên sớm Giáp Hộ Mệnh hoặc Quả Cầu Băng Sương để né combo Long Trảm.",
    "counter_items": [
      "Quả Cầu Băng Sương",
      "Giáp Thống Khổ",
      "Huân Chương Troy"
    ],
    "id": "aoi",
    "name": "Aoi",
    "avatar": "https://lienquan.garena.vn/wp-content/uploads/2024/05/f1db425eba8ea88e5d4d8427c1706bcf6100183de1cc11.jpeg",
    "roles": [
      "Sát thủ"
    ]
  },
  {
    "lane": "mid",
    "secondary_lane": null,
    "tier": "S",
    "damage_type": "magic",
    "mobility": 60,
    "cc_rating": 60,
    "power_spike": "all",
    "strengths": "Dọn lính siêu tốc với chiêu 1 spam liên tục, chiêu cuối Hỏa Bạo tầm bắn bao quát toàn bản đồ giúp ép góc, kết liễu và lấy tầm nhìn cực đỉnh.",
    "weaknesses": "Kém cơ động, không thể vượt địa hình tường, rất dễ bị sát thủ cơ động cao bắt lẻ.",
    "countered_by": [
      "kaine",
      "aoi",
      "nakroth",
      "keera",
      "zuka"
    ],
    "counters": [
      "valhein",
      "yorn",
      "telannas",
      "arthur",
      "dieu-thuyen"
    ],
    "synergies": [
      "rouie",
      "krizzix",
      "thane",
      "baldum"
    ],
    "counter_tips": "Pick sát thủ tàng hình (Kaine) hoặc cơ động cao (Aoi, Nakroth) để ép giao tranh thẳng vào vị trí của Iggy từ phía sau.",
    "counter_items": [
      "Huân Chương Troy",
      "Giày Kiên Cường"
    ],
    "id": "iggy",
    "name": "Iggy",
    "avatar": "https://lienquan.garena.vn/wp-content/uploads/2024/05/b4563fbfd5756caeea04b7ef488ee39f60fffd803e9ab1.jpeg",
    "roles": [
      "Pháp sư"
    ]
  },
  {
    "id": "bright",
    "name": "Bright",
    "avatar": "https://lienquan.garena.vn/wp-content/uploads/2024/05/0045a9d59dc140647f4fa67b446c732c5fc55919650441.jpg",
    "roles": [
      "Xạ thủ"
    ],
    "lane": "ad",
    "secondary_lane": null,
    "tier": "A",
    "damage_type": "physical",
    "mobility": 60,
    "cc_rating": 40,
    "power_spike": "mid",
    "strengths": "Tướng vị trí AD, bộ kỹ năng cân bằng, có khả năng tạo đột biến giao tranh tốt khi phối hợp cùng đồng đội.",
    "weaknesses": "Cần giữ vị trí cẩn thận, dễ bị bắt lẻ khi thiếu tầm nhìn hoặc khi hết chiêu thức tẩu thoát.",
    "countered_by": [
      "aleister",
      "omen",
      "arum"
    ],
    "counters": [
      "valhein"
    ],
    "synergies": [
      "thane",
      "krizzix",
      "aya"
    ],
    "counter_tips": "Chú ý lượng trang bị của Bright. Sử dụng khống chế cứng chỉ định để bắt trong combat tổng.",
    "counter_items": [
      "Giáp Gai",
      "Khiên Thất Truyền"
    ]
  },
  {
    "id": "lorion",
    "name": "Lorion",
    "avatar": "https://lienquan.garena.vn/wp-content/uploads/2024/05/dab2c45af3206cd0ac30b450357aa8ce5fc5264d71f451.jpg",
    "roles": [
      "Pháp sư"
    ],
    "lane": "mid",
    "secondary_lane": null,
    "tier": "A",
    "damage_type": "magic",
    "mobility": 55,
    "cc_rating": 75,
    "power_spike": "mid",
    "strengths": "Tướng vị trí MID, bộ kỹ năng cân bằng, có khả năng tạo đột biến giao tranh tốt khi phối hợp cùng đồng đội.",
    "weaknesses": "Cần giữ vị trí cẩn thận, dễ bị bắt lẻ khi thiếu tầm nhìn hoặc khi hết chiêu thức tẩu thoát.",
    "countered_by": [
      "aleister",
      "omen",
      "arum"
    ],
    "counters": [
      "valhein"
    ],
    "synergies": [
      "thane",
      "krizzix",
      "aya"
    ],
    "counter_tips": "Chú ý lượng trang bị của Lorion. Sử dụng khống chế cứng chỉ định để bắt trong combat tổng.",
    "counter_items": [
      "Huân Chương Troy",
      "Quả Cầu Băng Sương"
    ]
  },
  {
    "id": "dextra",
    "name": "Dextra",
    "avatar": "https://lienquan.garena.vn/wp-content/uploads/2024/05/38f3158929eb4b95500db65559e52d525fc5244a521d11.jpg",
    "roles": [
      "Đấu sĩ"
    ],
    "lane": "top",
    "secondary_lane": "jungle",
    "tier": "A",
    "damage_type": "physical",
    "mobility": 70,
    "cc_rating": 65,
    "power_spike": "mid",
    "strengths": "Tướng vị trí TOP, bộ kỹ năng cân bằng, có khả năng tạo đột biến giao tranh tốt khi phối hợp cùng đồng đội.",
    "weaknesses": "Cần giữ vị trí cẩn thận, dễ bị bắt lẻ khi thiếu tầm nhìn hoặc khi hết chiêu thức tẩu thoát.",
    "countered_by": [
      "aleister",
      "omen",
      "arum"
    ],
    "counters": [
      "valhein"
    ],
    "synergies": [
      "thane",
      "krizzix",
      "aya"
    ],
    "counter_tips": "Chú ý lượng trang bị của Dextra. Sử dụng khống chế cứng chỉ định để bắt trong combat tổng.",
    "counter_items": [
      "Áo Choàng Băng Giá",
      "Khiên Thất Truyền"
    ]
  },
  {
    "id": "sinestrea",
    "name": "Sinestrea",
    "avatar": "https://lienquan.garena.vn/wp-content/uploads/2024/05/680ef284724e077237f33cfc2d8fa72d5fa194bad60f31.jpg",
    "roles": [
      "Sát thủ"
    ],
    "lane": "jungle",
    "secondary_lane": null,
    "tier": "A",
    "damage_type": "physical",
    "mobility": 85,
    "cc_rating": 55,
    "power_spike": "mid",
    "strengths": "Tướng vị trí JUNGLE, bộ kỹ năng cân bằng, có khả năng tạo đột biến giao tranh tốt khi phối hợp cùng đồng đội.",
    "weaknesses": "Cần giữ vị trí cẩn thận, dễ bị bắt lẻ khi thiếu tầm nhìn hoặc khi hết chiêu thức tẩu thoát.",
    "countered_by": [
      "aleister",
      "omen",
      "arum"
    ],
    "counters": [
      "valhein"
    ],
    "synergies": [
      "thane",
      "krizzix",
      "aya"
    ],
    "counter_tips": "Chú ý lượng trang bị của Sinestrea. Sử dụng khống chế cứng chỉ định để bắt trong combat tổng.",
    "counter_items": [
      "Giáp Hộ Mệnh",
      "Áo Choàng Băng Giá"
    ]
  },
  {
    "id": "thorne",
    "name": "Thorne",
    "avatar": "https://lienquan.garena.vn/wp-content/uploads/2024/05/dd8031b80a4fc5978cdd4886a65a6eb35f5070fd5d0221.jpg",
    "roles": [
      "Xạ thủ"
    ],
    "lane": "ad",
    "secondary_lane": null,
    "tier": "A",
    "damage_type": "physical",
    "mobility": 75,
    "cc_rating": 40,
    "power_spike": "mid",
    "strengths": "Tướng vị trí AD, bộ kỹ năng cân bằng, có khả năng tạo đột biến giao tranh tốt khi phối hợp cùng đồng đội.",
    "weaknesses": "Cần giữ vị trí cẩn thận, dễ bị bắt lẻ khi thiếu tầm nhìn hoặc khi hết chiêu thức tẩu thoát.",
    "countered_by": [
      "aleister",
      "omen",
      "arum"
    ],
    "counters": [
      "valhein"
    ],
    "synergies": [
      "thane",
      "krizzix",
      "aya"
    ],
    "counter_tips": "Chú ý lượng trang bị của Thorne. Sử dụng khống chế cứng chỉ định để bắt trong combat tổng.",
    "counter_items": [
      "Giáp Gai",
      "Khiên Thất Truyền"
    ]
  },
  {
    "id": "allain",
    "name": "Allain",
    "avatar": "https://lienquan.garena.vn/wp-content/uploads/2024/05/3aa1f0f335f87801117dbfa1d69b072b5ef1f1c297fe21.jpg",
    "roles": [
      "Đấu sĩ"
    ],
    "lane": "top",
    "secondary_lane": "jungle",
    "tier": "A",
    "damage_type": "physical",
    "mobility": 70,
    "cc_rating": 65,
    "power_spike": "mid",
    "strengths": "Tướng vị trí TOP, bộ kỹ năng cân bằng, có khả năng tạo đột biến giao tranh tốt khi phối hợp cùng đồng đội.",
    "weaknesses": "Cần giữ vị trí cẩn thận, dễ bị bắt lẻ khi thiếu tầm nhìn hoặc khi hết chiêu thức tẩu thoát.",
    "countered_by": [
      "aleister",
      "omen",
      "arum"
    ],
    "counters": [
      "valhein"
    ],
    "synergies": [
      "thane",
      "krizzix",
      "aya"
    ],
    "counter_tips": "Chú ý lượng trang bị của Allain. Sử dụng khống chế cứng chỉ định để bắt trong combat tổng.",
    "counter_items": [
      "Áo Choàng Băng Giá",
      "Khiên Thất Truyền"
    ]
  },
  {
    "id": "zata",
    "name": "Zata",
    "avatar": "https://lienquan.garena.vn/wp-content/uploads/2024/05/fcd5c439a7cc37896ab98d568b662bec5ec66637da75d1.jpg",
    "roles": [
      "Pháp sư"
    ],
    "lane": "mid",
    "secondary_lane": null,
    "tier": "A",
    "damage_type": "magic",
    "mobility": 80,
    "cc_rating": 75,
    "power_spike": "mid",
    "strengths": "Tướng vị trí MID, bộ kỹ năng cân bằng, có khả năng tạo đột biến giao tranh tốt khi phối hợp cùng đồng đội.",
    "weaknesses": "Cần giữ vị trí cẩn thận, dễ bị bắt lẻ khi thiếu tầm nhìn hoặc khi hết chiêu thức tẩu thoát.",
    "countered_by": [
      "aleister",
      "omen",
      "arum"
    ],
    "counters": [
      "valhein"
    ],
    "synergies": [
      "thane",
      "krizzix",
      "aya"
    ],
    "counter_tips": "Chú ý lượng trang bị của Zata. Sử dụng khống chế cứng chỉ định để bắt trong combat tổng.",
    "counter_items": [
      "Huân Chương Troy",
      "Quả Cầu Băng Sương"
    ]
  },
  {
    "lane": "sp",
    "secondary_lane": "mid",
    "tier": "S+",
    "damage_type": "magic",
    "mobility": 80,
    "cc_rating": 80,
    "power_spike": "all",
    "strengths": "Trùm chiến thuật di chuyển: đặt vòng biến về hồ máu hồi đầy 100% cây máu tức thì, sau đó mở chiêu cuối triệu hồi toàn bộ 5 thành viên quay lại chiến trường lập tức. Đẩy trụ và out-macro cực mạnh.",
    "weaknesses": "Yêu cầu đồng đội có sự giao tiếp và hiểu ý cực cao. Nếu đồng đội không biết tận dụng vòng về thì Rouie mất hơn nửa sức mạnh.",
    "countered_by": [
      "baldum",
      "grakk",
      "omen",
      "chaugnar",
      "thane"
    ],
    "counters": [
      "natalya",
      "dieu-thuyen",
      "arthur",
      "krixi"
    ],
    "synergies": [
      "elandorr",
      "nakroth",
      "murad",
      "hayate",
      "capheny"
    ],
    "counter_tips": "Dùng các chiêu hất văng (Thane, Baldum, Grakk) đẩy tướng địch ra khỏi vòng biến về. Cắm mắt kiểm soát quanh khu vực vòng chiêu cuối của Rouie.",
    "counter_items": [
      "Giày Kiên Cường",
      "Huân Chương Troy"
    ],
    "id": "rouie",
    "name": "Rouie",
    "avatar": "https://lienquan.garena.vn/wp-content/uploads/2024/05/7f7ce6b3593a8ea52de5fa3be55469f85eb1402d093b71.jpg",
    "roles": [
      "Trợ thủ"
    ]
  },
  {
    "id": "laville",
    "name": "Laville",
    "avatar": "https://lienquan.garena.vn/wp-content/uploads/2024/05/c30059d2dc46ed31b72a4b02aa9e61f75eb136829228d1.jpg",
    "roles": [
      "Xạ thủ"
    ],
    "lane": "ad",
    "secondary_lane": null,
    "tier": "A",
    "damage_type": "physical",
    "mobility": 60,
    "cc_rating": 40,
    "power_spike": "mid",
    "strengths": "Tướng vị trí AD, bộ kỹ năng cân bằng, có khả năng tạo đột biến giao tranh tốt khi phối hợp cùng đồng đội.",
    "weaknesses": "Cần giữ vị trí cẩn thận, dễ bị bắt lẻ khi thiếu tầm nhìn hoặc khi hết chiêu thức tẩu thoát.",
    "countered_by": [
      "aleister",
      "omen",
      "arum"
    ],
    "counters": [
      "valhein"
    ],
    "synergies": [
      "thane",
      "krizzix",
      "aya"
    ],
    "counter_tips": "Chú ý lượng trang bị của Laville. Sử dụng khống chế cứng chỉ định để bắt trong combat tổng.",
    "counter_items": [
      "Giáp Gai",
      "Khiên Thất Truyền"
    ]
  },
  {
    "id": "paine",
    "name": "Paine",
    "avatar": "https://lienquan.garena.vn/wp-content/uploads/2024/05/47861c6d53d72d0dbea2d1dba0b0e0365e8ade6f180931.jpg",
    "roles": [
      "Sát thủ"
    ],
    "lane": "jungle",
    "secondary_lane": null,
    "tier": "A",
    "damage_type": "physical",
    "mobility": 85,
    "cc_rating": 55,
    "power_spike": "mid",
    "strengths": "Tướng vị trí JUNGLE, bộ kỹ năng cân bằng, có khả năng tạo đột biến giao tranh tốt khi phối hợp cùng đồng đội.",
    "weaknesses": "Cần giữ vị trí cẩn thận, dễ bị bắt lẻ khi thiếu tầm nhìn hoặc khi hết chiêu thức tẩu thoát.",
    "countered_by": [
      "aleister",
      "omen",
      "arum"
    ],
    "counters": [
      "valhein"
    ],
    "synergies": [
      "thane",
      "krizzix",
      "aya"
    ],
    "counter_tips": "Chú ý lượng trang bị của Paine. Sử dụng khống chế cứng chỉ định để bắt trong combat tổng.",
    "counter_items": [
      "Giáp Hộ Mệnh",
      "Áo Choàng Băng Giá"
    ]
  },
  {
    "id": "ata",
    "name": "Ata",
    "avatar": "https://lienquan.garena.vn/wp-content/uploads/2024/05/71f7a36c0dd250ce0affeffcf14360f45e57c0420b4b61.jpg",
    "roles": [
      "Đấu sĩ"
    ],
    "lane": "top",
    "secondary_lane": "jungle",
    "tier": "A",
    "damage_type": "physical",
    "mobility": 70,
    "cc_rating": 65,
    "power_spike": "mid",
    "strengths": "Tướng vị trí TOP, bộ kỹ năng cân bằng, có khả năng tạo đột biến giao tranh tốt khi phối hợp cùng đồng đội.",
    "weaknesses": "Cần giữ vị trí cẩn thận, dễ bị bắt lẻ khi thiếu tầm nhìn hoặc khi hết chiêu thức tẩu thoát.",
    "countered_by": [
      "aleister",
      "omen",
      "arum"
    ],
    "counters": [
      "valhein"
    ],
    "synergies": [
      "thane",
      "krizzix",
      "aya"
    ],
    "counter_tips": "Chú ý lượng trang bị của Ata. Sử dụng khống chế cứng chỉ định để bắt trong combat tổng.",
    "counter_items": [
      "Áo Choàng Băng Giá",
      "Khiên Thất Truyền"
    ]
  },
  {
    "lane": "jungle",
    "secondary_lane": "mid",
    "tier": "S+",
    "damage_type": "magic",
    "mobility": 90,
    "cc_rating": 60,
    "power_spike": "mid-late",
    "strengths": "Chiêu cuối cho phép đi xuyên qua mọi địa hình tường trên bản đồ và tăng tốc chạy tối đa. Sát thương phép dồn chết chủ lực trong 0.5s, chiêu 2 phân thân tam giác không thể chọn làm mục tiêu.",
    "weaknesses": "Tầm đánh ngắn, dễ bị các tướng chống chịu đứng che chắn cản đường.",
    "countered_by": [
      "aleister",
      "arum",
      "omen",
      "toro",
      "chaugnar"
    ],
    "counters": [
      "valhein",
      "yorn",
      "telannas",
      "violet",
      "krixi"
    ],
    "synergies": [
      "aya",
      "krizzix",
      "rouie",
      "thane"
    ],
    "counter_tips": "Lên Huân Chương Troy sớm từ món đồ thứ 3. Di chuyển đi chung đội hình, tránh đi lẻ trong rừng khi Keera đang bật chiêu cuối.",
    "counter_items": [
      "Huân Chương Troy",
      "Quả Cầu Băng Sương",
      "Gươm U Hồn"
    ],
    "id": "keera",
    "name": "Keera",
    "avatar": "https://lienquan.garena.vn/wp-content/uploads/2024/05/8491520381ab2a66489a6c5e1ec98e785e452a5c9fd3c1.jpg",
    "roles": [
      "Sát thủ"
    ]
  },
  {
    "id": "ishar",
    "name": "Ishar",
    "avatar": "https://lienquan.garena.vn/wp-content/uploads/2024/05/1009dcdfe78de2f6bc7fbdaea21cabc05df2198341d451.jpg",
    "roles": [
      "Pháp sư"
    ],
    "lane": "mid",
    "secondary_lane": null,
    "tier": "A",
    "damage_type": "magic",
    "mobility": 55,
    "cc_rating": 75,
    "power_spike": "mid",
    "strengths": "Tướng vị trí MID, bộ kỹ năng cân bằng, có khả năng tạo đột biến giao tranh tốt khi phối hợp cùng đồng đội.",
    "weaknesses": "Cần giữ vị trí cẩn thận, dễ bị bắt lẻ khi thiếu tầm nhìn hoặc khi hết chiêu thức tẩu thoát.",
    "countered_by": [
      "aleister",
      "omen",
      "arum"
    ],
    "counters": [
      "valhein"
    ],
    "synergies": [
      "thane",
      "krizzix",
      "aya"
    ],
    "counter_tips": "Chú ý lượng trang bị của Ishar. Sử dụng khống chế cứng chỉ định để bắt trong combat tổng.",
    "counter_items": [
      "Huân Chương Troy",
      "Quả Cầu Băng Sương"
    ]
  },
  {
    "id": "elandorr",
    "name": "Eland’orr",
    "avatar": "https://lienquan.garena.vn/wp-content/uploads/2024/05/060f8e35db2f7fb1be51d7e5bdd1724a5db174d49d9de1.jpg",
    "roles": [
      "Xạ thủ"
    ],
    "lane": "ad",
    "secondary_lane": null,
    "tier": "A",
    "damage_type": "physical",
    "mobility": 60,
    "cc_rating": 40,
    "power_spike": "mid",
    "strengths": "Tướng vị trí AD, bộ kỹ năng cân bằng, có khả năng tạo đột biến giao tranh tốt khi phối hợp cùng đồng đội.",
    "weaknesses": "Cần giữ vị trí cẩn thận, dễ bị bắt lẻ khi thiếu tầm nhìn hoặc khi hết chiêu thức tẩu thoát.",
    "countered_by": [
      "aleister",
      "omen",
      "arum"
    ],
    "counters": [
      "valhein"
    ],
    "synergies": [
      "thane",
      "krizzix",
      "aya"
    ],
    "counter_tips": "Chú ý lượng trang bị của Eland’orr. Sử dụng khống chế cứng chỉ định để bắt trong combat tổng.",
    "counter_items": [
      "Giáp Gai",
      "Khiên Thất Truyền"
    ]
  },
  {
    "id": "krizzix",
    "name": "Krizzix",
    "avatar": "https://lienquan.garena.vn/wp-content/uploads/2024/05/a7e49f01ef9804d479cb6537a9b51dee5db6c75c945151.png",
    "roles": [
      "Trợ thủ"
    ],
    "lane": "sp",
    "secondary_lane": null,
    "tier": "A",
    "damage_type": "magic",
    "mobility": 60,
    "cc_rating": 80,
    "power_spike": "mid",
    "strengths": "Tướng vị trí SP, bộ kỹ năng cân bằng, có khả năng tạo đột biến giao tranh tốt khi phối hợp cùng đồng đội.",
    "weaknesses": "Cần giữ vị trí cẩn thận, dễ bị bắt lẻ khi thiếu tầm nhìn hoặc khi hết chiêu thức tẩu thoát.",
    "countered_by": [
      "aleister",
      "omen",
      "arum"
    ],
    "counters": [
      "valhein"
    ],
    "synergies": [
      "thane",
      "krizzix",
      "aya"
    ],
    "counter_tips": "Chú ý lượng trang bị của Krizzix. Sử dụng khống chế cứng chỉ định để bắt trong combat tổng.",
    "counter_items": [
      "Sách Truy Hồn",
      "Đao Truy Hồn"
    ]
  },
  {
    "id": "volkath",
    "name": "Volkath",
    "avatar": "https://lienquan.garena.vn/wp-content/uploads/2024/05/219b09a656af5274629409109ea2802d5d9472fe58bd81.jpg",
    "roles": [
      "Đấu sĩ"
    ],
    "lane": "top",
    "secondary_lane": "jungle",
    "tier": "A",
    "damage_type": "physical",
    "mobility": 70,
    "cc_rating": 65,
    "power_spike": "mid",
    "strengths": "Tướng vị trí TOP, bộ kỹ năng cân bằng, có khả năng tạo đột biến giao tranh tốt khi phối hợp cùng đồng đội.",
    "weaknesses": "Cần giữ vị trí cẩn thận, dễ bị bắt lẻ khi thiếu tầm nhìn hoặc khi hết chiêu thức tẩu thoát.",
    "countered_by": [
      "aleister",
      "omen",
      "arum"
    ],
    "counters": [
      "valhein"
    ],
    "synergies": [
      "thane",
      "krizzix",
      "aya"
    ],
    "counter_tips": "Chú ý lượng trang bị của Volkath. Sử dụng khống chế cứng chỉ định để bắt trong combat tổng.",
    "counter_items": [
      "Áo Choàng Băng Giá",
      "Khiên Thất Truyền"
    ]
  },
  {
    "id": "celica",
    "name": "Celica",
    "avatar": "https://lienquan.garena.vn/wp-content/uploads/2024/05/194741793e21d4392965d4d63515e78b5d6fa738d07e61.jpg",
    "roles": [
      "Xạ thủ"
    ],
    "lane": "ad",
    "secondary_lane": null,
    "tier": "A",
    "damage_type": "physical",
    "mobility": 60,
    "cc_rating": 40,
    "power_spike": "mid",
    "strengths": "Tướng vị trí AD, bộ kỹ năng cân bằng, có khả năng tạo đột biến giao tranh tốt khi phối hợp cùng đồng đội.",
    "weaknesses": "Cần giữ vị trí cẩn thận, dễ bị bắt lẻ khi thiếu tầm nhìn hoặc khi hết chiêu thức tẩu thoát.",
    "countered_by": [
      "aleister",
      "omen",
      "arum"
    ],
    "counters": [
      "valhein"
    ],
    "synergies": [
      "thane",
      "krizzix",
      "aya"
    ],
    "counter_tips": "Chú ý lượng trang bị của Celica. Sử dụng khống chế cứng chỉ định để bắt trong combat tổng.",
    "counter_items": [
      "Giáp Gai",
      "Khiên Thất Truyền"
    ]
  },
  {
    "id": "zip",
    "name": "Zip",
    "avatar": "https://lienquan.garena.vn/wp-content/uploads/2024/05/e0f8f382d1be41adc8947bf1b849479b5d3823c7418f71.jpg",
    "roles": [
      "Trợ thủ"
    ],
    "lane": "sp",
    "secondary_lane": null,
    "tier": "A",
    "damage_type": "magic",
    "mobility": 60,
    "cc_rating": 80,
    "power_spike": "mid",
    "strengths": "Tướng vị trí SP, bộ kỹ năng cân bằng, có khả năng tạo đột biến giao tranh tốt khi phối hợp cùng đồng đội.",
    "weaknesses": "Cần giữ vị trí cẩn thận, dễ bị bắt lẻ khi thiếu tầm nhìn hoặc khi hết chiêu thức tẩu thoát.",
    "countered_by": [
      "aleister",
      "omen",
      "arum"
    ],
    "counters": [
      "valhein"
    ],
    "synergies": [
      "thane",
      "krizzix",
      "aya"
    ],
    "counter_tips": "Chú ý lượng trang bị của Zip. Sử dụng khống chế cứng chỉ định để bắt trong combat tổng.",
    "counter_items": [
      "Sách Truy Hồn",
      "Đao Truy Hồn"
    ]
  },
  {
    "id": "enzo",
    "name": "Enzo",
    "avatar": "https://lienquan.garena.vn/wp-content/uploads/2024/05/81d7c827262287ce87639f3bfa048f5a5d149a6d571091.jpg",
    "roles": [
      "Sát thủ"
    ],
    "lane": "jungle",
    "secondary_lane": null,
    "tier": "A",
    "damage_type": "physical",
    "mobility": 85,
    "cc_rating": 55,
    "power_spike": "mid",
    "strengths": "Tướng vị trí JUNGLE, bộ kỹ năng cân bằng, có khả năng tạo đột biến giao tranh tốt khi phối hợp cùng đồng đội.",
    "weaknesses": "Cần giữ vị trí cẩn thận, dễ bị bắt lẻ khi thiếu tầm nhìn hoặc khi hết chiêu thức tẩu thoát.",
    "countered_by": [
      "aleister",
      "omen",
      "arum"
    ],
    "counters": [
      "valhein"
    ],
    "synergies": [
      "thane",
      "krizzix",
      "aya"
    ],
    "counter_tips": "Chú ý lượng trang bị của Enzo. Sử dụng khống chế cứng chỉ định để bắt trong combat tổng.",
    "counter_items": [
      "Giáp Hộ Mệnh",
      "Áo Choàng Băng Giá"
    ]
  },
  {
    "id": "yena",
    "name": "Yena",
    "avatar": "https://lienquan.garena.vn/wp-content/uploads/2024/05/61fa157164bf9d99e65bf40b802fb5745cfe1cd72c4671.jpg",
    "roles": [
      "Đấu sĩ"
    ],
    "lane": "top",
    "secondary_lane": "jungle",
    "tier": "A",
    "damage_type": "physical",
    "mobility": 70,
    "cc_rating": 65,
    "power_spike": "mid",
    "strengths": "Tướng vị trí TOP, bộ kỹ năng cân bằng, có khả năng tạo đột biến giao tranh tốt khi phối hợp cùng đồng đội.",
    "weaknesses": "Cần giữ vị trí cẩn thận, dễ bị bắt lẻ khi thiếu tầm nhìn hoặc khi hết chiêu thức tẩu thoát.",
    "countered_by": [
      "aleister",
      "omen",
      "arum"
    ],
    "counters": [
      "valhein"
    ],
    "synergies": [
      "thane",
      "krizzix",
      "aya"
    ],
    "counter_tips": "Chú ý lượng trang bị của Yena. Sử dụng khống chế cứng chỉ định để bắt trong combat tổng.",
    "counter_items": [
      "Áo Choàng Băng Giá",
      "Khiên Thất Truyền"
    ]
  },
  {
    "id": "errol",
    "name": "Errol",
    "avatar": "https://lienquan.garena.vn/wp-content/uploads/2024/05/5067bb53ba6435e11cc8777645d8de115cc136a9ca3b31.jpg",
    "roles": [
      "Đấu sĩ"
    ],
    "lane": "top",
    "secondary_lane": "jungle",
    "tier": "A",
    "damage_type": "physical",
    "mobility": 70,
    "cc_rating": 65,
    "power_spike": "mid",
    "strengths": "Tướng vị trí TOP, bộ kỹ năng cân bằng, có khả năng tạo đột biến giao tranh tốt khi phối hợp cùng đồng đội.",
    "weaknesses": "Cần giữ vị trí cẩn thận, dễ bị bắt lẻ khi thiếu tầm nhìn hoặc khi hết chiêu thức tẩu thoát.",
    "countered_by": [
      "aleister",
      "omen",
      "arum"
    ],
    "counters": [
      "valhein"
    ],
    "synergies": [
      "thane",
      "krizzix",
      "aya"
    ],
    "counter_tips": "Chú ý lượng trang bị của Errol. Sử dụng khống chế cứng chỉ định để bắt trong combat tổng.",
    "counter_items": [
      "Áo Choàng Băng Giá",
      "Khiên Thất Truyền"
    ]
  },
  {
    "id": "capheny",
    "name": "Capheny",
    "avatar": "https://lienquan.garena.vn/wp-content/uploads/2024/05/5c3212f3d7a6f95ad04a309d4d1f340a5ca5c222bda911.jpg",
    "roles": [
      "Xạ thủ"
    ],
    "lane": "ad",
    "secondary_lane": null,
    "tier": "A",
    "damage_type": "physical",
    "mobility": 75,
    "cc_rating": 40,
    "power_spike": "mid",
    "strengths": "Tướng vị trí AD, bộ kỹ năng cân bằng, có khả năng tạo đột biến giao tranh tốt khi phối hợp cùng đồng đội.",
    "weaknesses": "Cần giữ vị trí cẩn thận, dễ bị bắt lẻ khi thiếu tầm nhìn hoặc khi hết chiêu thức tẩu thoát.",
    "countered_by": [
      "aleister",
      "omen",
      "arum"
    ],
    "counters": [
      "valhein"
    ],
    "synergies": [
      "thane",
      "krizzix",
      "aya"
    ],
    "counter_tips": "Chú ý lượng trang bị của Capheny. Sử dụng khống chế cứng chỉ định để bắt trong combat tổng.",
    "counter_items": [
      "Giáp Gai",
      "Khiên Thất Truyền"
    ]
  },
  {
    "lane": "ad",
    "secondary_lane": null,
    "tier": "S+",
    "damage_type": "true_damage",
    "mobility": 90,
    "cc_rating": 40,
    "power_spike": "mid-late",
    "strengths": "Xạ thủ số 1 khắc chế tanker với nội tại sát thương chuẩn có thể chí mạng. 2 lần lướt cực kỳ cơ động, nội tại tự phát hiện kẻ địch tàng hình quanh mình. Chiêu cuối Bão Phi Tiêu có thể quét sạch giao tranh.",
    "weaknesses": "Cần đủ mốc tốc đánh (75% / 150%) để tối đa hóa số lượng phi tiêu. Chiêu cuối lao vào rất dễ bị ngắt bởi khống chế cứng.",
    "countered_by": [
      "valhein",
      "stuart",
      "aleister",
      "arum",
      "kaine"
    ],
    "counters": [
      "omen",
      "arthur",
      "taara",
      "toro",
      "baldum",
      "cresht",
      "thane"
    ],
    "synergies": [
      "krizzix",
      "lumburr",
      "rouie",
      "zip",
      "chaugnar"
    ],
    "counter_tips": "Pick Valhein hoặc Stuart để đè nát Hayate ở giai đoạn đi đường đầu trận. Trong combat, giữ lại 1 chiêu khống chế cứng để lập tức ngắt Bão Phi Tiêu khi hắn lao vào.",
    "counter_items": [
      "Khiên Thất Truyền",
      "Giáp Thống Khổ",
      "Áo Choàng Băng Giá"
    ],
    "id": "hayate",
    "name": "Hayate",
    "avatar": "https://lienquan.garena.vn/wp-content/uploads/2024/05/02c8e3d1db8ee8f32913b478884f33e05c8f254a7686f1.jpg",
    "roles": [
      "Xạ thủ"
    ]
  },
  {
    "id": "darcy",
    "name": "D’Arcy",
    "avatar": "https://lienquan.garena.vn/wp-content/uploads/2024/05/903191ed8212c2c6c91f1f6f0a677a565c6102d8ecf4a1.jpg",
    "roles": [
      "Pháp sư"
    ],
    "lane": "mid",
    "secondary_lane": null,
    "tier": "A",
    "damage_type": "magic",
    "mobility": 55,
    "cc_rating": 75,
    "power_spike": "mid",
    "strengths": "Tướng vị trí MID, bộ kỹ năng cân bằng, có khả năng tạo đột biến giao tranh tốt khi phối hợp cùng đồng đội.",
    "weaknesses": "Cần giữ vị trí cẩn thận, dễ bị bắt lẻ khi thiếu tầm nhìn hoặc khi hết chiêu thức tẩu thoát.",
    "countered_by": [
      "aleister",
      "omen",
      "arum"
    ],
    "counters": [
      "valhein"
    ],
    "synergies": [
      "thane",
      "krizzix",
      "aya"
    ],
    "counter_tips": "Chú ý lượng trang bị của D’Arcy. Sử dụng khống chế cứng chỉ định để bắt trong combat tổng.",
    "counter_items": [
      "Huân Chương Troy",
      "Quả Cầu Băng Sương"
    ]
  },
  {
    "id": "veres",
    "name": "Veres",
    "avatar": "https://lienquan.garena.vn/wp-content/uploads/2024/05/46c5f246040b9e750779aa41ffcbeaa15c3f06d63ce241.jpg",
    "roles": [
      "Đấu sĩ"
    ],
    "lane": "top",
    "secondary_lane": "jungle",
    "tier": "A",
    "damage_type": "physical",
    "mobility": 70,
    "cc_rating": 65,
    "power_spike": "mid",
    "strengths": "Tướng vị trí TOP, bộ kỹ năng cân bằng, có khả năng tạo đột biến giao tranh tốt khi phối hợp cùng đồng đội.",
    "weaknesses": "Cần giữ vị trí cẩn thận, dễ bị bắt lẻ khi thiếu tầm nhìn hoặc khi hết chiêu thức tẩu thoát.",
    "countered_by": [
      "aleister",
      "omen",
      "arum"
    ],
    "counters": [
      "valhein"
    ],
    "synergies": [
      "thane",
      "krizzix",
      "aya"
    ],
    "counter_tips": "Chú ý lượng trang bị của Veres. Sử dụng khống chế cứng chỉ định để bắt trong combat tổng.",
    "counter_items": [
      "Áo Choàng Băng Giá",
      "Khiên Thất Truyền"
    ]
  },
  {
    "lane": "top",
    "secondary_lane": null,
    "tier": "S+",
    "damage_type": "true_damage",
    "mobility": 90,
    "cc_rating": 60,
    "power_spike": "all",
    "strengths": "Kỹ năng cá nhân đỉnh cao nhất đường Tà thần. Sát thương chuẩn theo % máu tối đa, hồi máu liên tục, miễn nhiễm khống chế khi bật Quyết Đấu (Ulti). Có thể 1 cân 2, cân 3 nếu nhặt hoa chuẩn.",
    "weaknesses": "Yêu cầu kỹ năng cực cao, nhặt hoa hụt là mất toàn bộ sát thương và độ cơ động. Rất sợ các tướng có khống chế áp chế không thể hóa giải.",
    "countered_by": [
      "arum",
      "aleister",
      "omen",
      "tamyn",
      "valhein"
    ],
    "counters": [
      "arthur",
      "maloch",
      "taara",
      "roxie",
      "toro",
      "cresht"
    ],
    "synergies": [
      "aya",
      "krizzix",
      "alice",
      "zip",
      "helen"
    ],
    "counter_tips": "Tránh solo 1v1 đầu trận trong phạm vi nhặt hoa của hắn. Pick Arum hoặc Aleister trói chặt khi hắn vừa mở Quyết Đấu để đồng đội dồn dame hạ gục.",
    "counter_items": [
      "Sách Truy Hồn",
      "Đao Truy Hồn",
      "Áo Choàng Băng Giá"
    ],
    "id": "florentino",
    "name": "Florentino",
    "avatar": "https://lienquan.garena.vn/wp-content/uploads/2024/05/9527c1cbad1c0656d0a4adf1dcec38e35c25f62d77d671.jpg",
    "roles": [
      "Đấu sĩ"
    ]
  },
  {
    "id": "sephera",
    "name": "Sephera",
    "avatar": "https://lienquan.garena.vn/wp-content/uploads/2024/05/eef053fb25793d536185559e8bf5a82d5c132caaa102e1.jpg",
    "roles": [
      "Trợ thủ"
    ],
    "lane": "sp",
    "secondary_lane": null,
    "tier": "A",
    "damage_type": "magic",
    "mobility": 60,
    "cc_rating": 80,
    "power_spike": "mid",
    "strengths": "Tướng vị trí SP, bộ kỹ năng cân bằng, có khả năng tạo đột biến giao tranh tốt khi phối hợp cùng đồng đội.",
    "weaknesses": "Cần giữ vị trí cẩn thận, dễ bị bắt lẻ khi thiếu tầm nhìn hoặc khi hết chiêu thức tẩu thoát.",
    "countered_by": [
      "aleister",
      "omen",
      "arum"
    ],
    "counters": [
      "valhein"
    ],
    "synergies": [
      "thane",
      "krizzix",
      "aya"
    ],
    "counter_tips": "Chú ý lượng trang bị của Sephera. Sử dụng khống chế cứng chỉ định để bắt trong combat tổng.",
    "counter_items": [
      "Sách Truy Hồn",
      "Đao Truy Hồn"
    ]
  },
  {
    "id": "quillen",
    "name": "Quillen",
    "avatar": "https://lienquan.garena.vn/wp-content/uploads/2024/05/f6004ed060dcff380fc5b13574986bbc5bf778bc905561.jpg",
    "roles": [
      "Sát thủ"
    ],
    "lane": "jungle",
    "secondary_lane": null,
    "tier": "A",
    "damage_type": "physical",
    "mobility": 85,
    "cc_rating": 55,
    "power_spike": "mid",
    "strengths": "Tướng vị trí JUNGLE, bộ kỹ năng cân bằng, có khả năng tạo đột biến giao tranh tốt khi phối hợp cùng đồng đội.",
    "weaknesses": "Cần giữ vị trí cẩn thận, dễ bị bắt lẻ khi thiếu tầm nhìn hoặc khi hết chiêu thức tẩu thoát.",
    "countered_by": [
      "aleister",
      "omen",
      "arum"
    ],
    "counters": [
      "valhein"
    ],
    "synergies": [
      "thane",
      "krizzix",
      "aya"
    ],
    "counter_tips": "Chú ý lượng trang bị của Quillen. Sử dụng khống chế cứng chỉ định để bắt trong combat tổng.",
    "counter_items": [
      "Giáp Hộ Mệnh",
      "Áo Choàng Băng Giá"
    ]
  },
  {
    "id": "wiro",
    "name": "Wiro",
    "avatar": "https://lienquan.garena.vn/wp-content/uploads/2024/05/61015ea8f83c0a833833297bb927ccd35be3c4834cd261.jpg",
    "roles": [
      "Đỡ đòn"
    ],
    "lane": "sp",
    "secondary_lane": "top",
    "tier": "A",
    "damage_type": "physical",
    "mobility": 50,
    "cc_rating": 85,
    "power_spike": "mid",
    "strengths": "Tướng vị trí SP, bộ kỹ năng cân bằng, có khả năng tạo đột biến giao tranh tốt khi phối hợp cùng đồng đội.",
    "weaknesses": "Cần giữ vị trí cẩn thận, dễ bị bắt lẻ khi thiếu tầm nhìn hoặc khi hết chiêu thức tẩu thoát.",
    "countered_by": [
      "aleister",
      "omen",
      "arum"
    ],
    "counters": [
      "valhein"
    ],
    "synergies": [
      "thane",
      "krizzix",
      "aya"
    ],
    "counter_tips": "Chú ý lượng trang bị của Wiro. Sử dụng khống chế cứng chỉ định để bắt trong combat tổng.",
    "counter_items": [
      "Mặt Nạ Berith",
      "Thương Khung Kiếm"
    ]
  },
  {
    "id": "richter",
    "name": "Richter",
    "avatar": "https://lienquan.garena.vn/wp-content/uploads/2024/05/e6e08d2cc322676442cf420e4aefb6d85bd7d7620754b1.jpg",
    "roles": [
      "Đấu sĩ"
    ],
    "lane": "top",
    "secondary_lane": "jungle",
    "tier": "A",
    "damage_type": "physical",
    "mobility": 70,
    "cc_rating": 65,
    "power_spike": "mid",
    "strengths": "Tướng vị trí TOP, bộ kỹ năng cân bằng, có khả năng tạo đột biến giao tranh tốt khi phối hợp cùng đồng đội.",
    "weaknesses": "Cần giữ vị trí cẩn thận, dễ bị bắt lẻ khi thiếu tầm nhìn hoặc khi hết chiêu thức tẩu thoát.",
    "countered_by": [
      "aleister",
      "omen",
      "arum"
    ],
    "counters": [
      "valhein"
    ],
    "synergies": [
      "thane",
      "krizzix",
      "aya"
    ],
    "counter_tips": "Chú ý lượng trang bị của Richter. Sử dụng khống chế cứng chỉ định để bắt trong combat tổng.",
    "counter_items": [
      "Áo Choàng Băng Giá",
      "Khiên Thất Truyền"
    ]
  },
  {
    "lane": "ad",
    "secondary_lane": "mid",
    "tier": "S",
    "damage_type": "physical",
    "mobility": 75,
    "cc_rating": 50,
    "power_spike": "early-mid",
    "strengths": "Cấu rỉa tầm siêu xa với sát thương vật lý khổng lồ từ chiêu 2 Viễn Trình Kích. Cắm mắt kiểm soát tầm nhìn toàn bộ các bụi rậm chống gank tuyệt đối.",
    "weaknesses": "Không thể gây sát thương chí mạng, độ hiệu quả phụ thuộc hoàn toàn vào tỷ lệ ngắm bắn trúng của người chơi.",
    "countered_by": [
      "max",
      "kaine",
      "aoi",
      "nakroth",
      "florentino"
    ],
    "counters": [
      "valhein",
      "yorn",
      "natalya",
      "krixi"
    ],
    "synergies": [
      "grakk",
      "krizzix",
      "rouie",
      "yue"
    ],
    "counter_tips": "Tích cực dẫm phá mắt của Elsu. Di chuyển liên tục để khiến hắn khó ngắm bắn tâm đỏ.",
    "counter_items": [
      "Khiên Thất Truyền",
      "Giáp Gai",
      "Giáp Thống Khổ"
    ],
    "id": "elsu",
    "name": "Elsu",
    "avatar": "https://lienquan.garena.vn/wp-content/uploads/2024/05/449789489494c0f108a3db5db3098e585bc98d17e666b1.jpg",
    "roles": [
      "Xạ thủ"
    ]
  },
  {
    "id": "ybneth",
    "name": "Y’bneth",
    "avatar": "https://lienquan.garena.vn/wp-content/uploads/2024/05/173809566ede28d1fee0731e43a1912c5b98deb97c82f1.jpg",
    "roles": [
      "Đỡ đòn"
    ],
    "lane": "sp",
    "secondary_lane": "top",
    "tier": "A",
    "damage_type": "physical",
    "mobility": 50,
    "cc_rating": 85,
    "power_spike": "mid",
    "strengths": "Tướng vị trí SP, bộ kỹ năng cân bằng, có khả năng tạo đột biến giao tranh tốt khi phối hợp cùng đồng đội.",
    "weaknesses": "Cần giữ vị trí cẩn thận, dễ bị bắt lẻ khi thiếu tầm nhìn hoặc khi hết chiêu thức tẩu thoát.",
    "countered_by": [
      "aleister",
      "omen",
      "arum"
    ],
    "counters": [
      "valhein"
    ],
    "synergies": [
      "thane",
      "krizzix",
      "aya"
    ],
    "counter_tips": "Chú ý lượng trang bị của Y’bneth. Sử dụng khống chế cứng chỉ định để bắt trong combat tổng.",
    "counter_items": [
      "Mặt Nạ Berith",
      "Thương Khung Kiếm"
    ]
  },
  {
    "id": "amily",
    "name": "Amily",
    "avatar": "https://lienquan.garena.vn/wp-content/uploads/2024/05/65b8d8e674af00ee4ecbb4030e8fac385b88ea13824d31.jpg",
    "roles": [
      "Đấu sĩ"
    ],
    "lane": "top",
    "secondary_lane": "jungle",
    "tier": "A",
    "damage_type": "physical",
    "mobility": 70,
    "cc_rating": 65,
    "power_spike": "mid",
    "strengths": "Tướng vị trí TOP, bộ kỹ năng cân bằng, có khả năng tạo đột biến giao tranh tốt khi phối hợp cùng đồng đội.",
    "weaknesses": "Cần giữ vị trí cẩn thận, dễ bị bắt lẻ khi thiếu tầm nhìn hoặc khi hết chiêu thức tẩu thoát.",
    "countered_by": [
      "aleister",
      "omen",
      "arum"
    ],
    "counters": [
      "valhein"
    ],
    "synergies": [
      "thane",
      "krizzix",
      "aya"
    ],
    "counter_tips": "Chú ý lượng trang bị của Amily. Sử dụng khống chế cứng chỉ định để bắt trong combat tổng.",
    "counter_items": [
      "Áo Choàng Băng Giá",
      "Khiên Thất Truyền"
    ]
  },
  {
    "id": "annette",
    "name": "Annette",
    "avatar": "https://lienquan.garena.vn/wp-content/uploads/2024/05/17f4f562b9121128b4aff9e7b41644185f041e77964551.jpg",
    "roles": [
      "Trợ thủ"
    ],
    "lane": "sp",
    "secondary_lane": null,
    "tier": "A",
    "damage_type": "magic",
    "mobility": 60,
    "cc_rating": 80,
    "power_spike": "mid",
    "strengths": "Tướng vị trí SP, bộ kỹ năng cân bằng, có khả năng tạo đột biến giao tranh tốt khi phối hợp cùng đồng đội.",
    "weaknesses": "Cần giữ vị trí cẩn thận, dễ bị bắt lẻ khi thiếu tầm nhìn hoặc khi hết chiêu thức tẩu thoát.",
    "countered_by": [
      "aleister",
      "omen",
      "arum"
    ],
    "counters": [
      "valhein"
    ],
    "synergies": [
      "thane",
      "krizzix",
      "aya"
    ],
    "counter_tips": "Chú ý lượng trang bị của Annette. Sử dụng khống chế cứng chỉ định để bắt trong combat tổng.",
    "counter_items": [
      "Sách Truy Hồn",
      "Đao Truy Hồn"
    ]
  },
  {
    "lane": "sp",
    "secondary_lane": "top",
    "tier": "S",
    "damage_type": "physical",
    "mobility": 60,
    "cc_rating": 90,
    "power_spike": "all",
    "strengths": "Lượng giáp vật lý nội tại cực dày. Chiêu 1 hất ngược mục tiêu qua đầu, chiêu cuối Địa Giam úp mộ chôn cứng mục tiêu 3 giây thay đổi hoàn toàn cục diện combat.",
    "weaknesses": "Chiêu cuối rơi có độ trễ, đối thủ có thể dùng Tốc Biến hoặc chiêu lướt né ra khỏi phạm vi.",
    "countered_by": [
      "hayate",
      "florentino",
      "chaugnar"
    ],
    "counters": [
      "tamyn",
      "nakroth",
      "aoi",
      "kaine",
      "valhein"
    ],
    "synergies": [
      "yue",
      "iggy",
      "liliana",
      "hayate"
    ],
    "counter_tips": "Pick Chaugnar để giải Địa Giam ngay khi rơi xuống, hoặc cầm Tốc Biến né ra khỏi vòng tròn mộ.",
    "counter_items": [
      "Giày Kiên Cường",
      "Mặt Nạ Berith"
    ],
    "id": "baldum",
    "name": "Baldum",
    "avatar": "https://lienquan.garena.vn/wp-content/uploads/2024/05/e751e70db18557783c2d23c9e5383e095b6bb947482b11.jpg",
    "roles": [
      "Đỡ đòn"
    ]
  },
  {
    "id": "roxie",
    "name": "Roxie",
    "avatar": "https://lienquan.garena.vn/wp-content/uploads/2024/05/51400-1.jpg",
    "roles": [
      "Đấu sĩ"
    ],
    "lane": "top",
    "secondary_lane": "jungle",
    "tier": "A",
    "damage_type": "physical",
    "mobility": 70,
    "cc_rating": 65,
    "power_spike": "mid",
    "strengths": "Tướng vị trí TOP, bộ kỹ năng cân bằng, có khả năng tạo đột biến giao tranh tốt khi phối hợp cùng đồng đội.",
    "weaknesses": "Cần giữ vị trí cẩn thận, dễ bị bắt lẻ khi thiếu tầm nhìn hoặc khi hết chiêu thức tẩu thoát.",
    "countered_by": [
      "aleister",
      "omen",
      "arum"
    ],
    "counters": [
      "valhein"
    ],
    "synergies": [
      "thane",
      "krizzix",
      "aya"
    ],
    "counter_tips": "Chú ý lượng trang bị của Roxie. Sử dụng khống chế cứng chỉ định để bắt trong combat tổng.",
    "counter_items": [
      "Áo Choàng Băng Giá",
      "Khiên Thất Truyền"
    ]
  },
  {
    "id": "marja",
    "name": "Marja",
    "avatar": "https://lienquan.garena.vn/wp-content/uploads/2024/05/1303e95b29e784888ae02d97848aed775b2b84e0372771.jpg",
    "roles": [
      "Pháp sư"
    ],
    "lane": "mid",
    "secondary_lane": null,
    "tier": "A",
    "damage_type": "magic",
    "mobility": 55,
    "cc_rating": 75,
    "power_spike": "mid",
    "strengths": "Tướng vị trí MID, bộ kỹ năng cân bằng, có khả năng tạo đột biến giao tranh tốt khi phối hợp cùng đồng đội.",
    "weaknesses": "Cần giữ vị trí cẩn thận, dễ bị bắt lẻ khi thiếu tầm nhìn hoặc khi hết chiêu thức tẩu thoát.",
    "countered_by": [
      "aleister",
      "omen",
      "arum"
    ],
    "counters": [
      "valhein"
    ],
    "synergies": [
      "thane",
      "krizzix",
      "aya"
    ],
    "counter_tips": "Chú ý lượng trang bị của Marja. Sử dụng khống chế cứng chỉ định để bắt trong combat tổng.",
    "counter_items": [
      "Huân Chương Troy",
      "Quả Cầu Băng Sương"
    ]
  },
  {
    "id": "rourke",
    "name": "Rourke",
    "avatar": "https://lienquan.garena.vn/wp-content/uploads/2024/05/749d47479eb9744d656b5e7c59f213555b1914bf90d291.jpg",
    "roles": [
      "Đấu sĩ"
    ],
    "lane": "top",
    "secondary_lane": "jungle",
    "tier": "A",
    "damage_type": "physical",
    "mobility": 70,
    "cc_rating": 65,
    "power_spike": "mid",
    "strengths": "Tướng vị trí TOP, bộ kỹ năng cân bằng, có khả năng tạo đột biến giao tranh tốt khi phối hợp cùng đồng đội.",
    "weaknesses": "Cần giữ vị trí cẩn thận, dễ bị bắt lẻ khi thiếu tầm nhìn hoặc khi hết chiêu thức tẩu thoát.",
    "countered_by": [
      "aleister",
      "omen",
      "arum"
    ],
    "counters": [
      "valhein"
    ],
    "synergies": [
      "thane",
      "krizzix",
      "aya"
    ],
    "counter_tips": "Chú ý lượng trang bị của Rourke. Sử dụng khống chế cứng chỉ định để bắt trong combat tổng.",
    "counter_items": [
      "Áo Choàng Băng Giá",
      "Khiên Thất Truyền"
    ]
  },
  {
    "id": "arum",
    "name": "Arum",
    "avatar": "https://lienquan.garena.vn/wp-content/uploads/2024/05/7faf7c96faeb8721b936e323becb57265afea9c3c8b281.jpg",
    "roles": [
      "Đỡ đòn"
    ],
    "lane": "sp",
    "secondary_lane": "top",
    "tier": "A",
    "damage_type": "physical",
    "mobility": 50,
    "cc_rating": 85,
    "power_spike": "mid",
    "strengths": "Tướng vị trí SP, bộ kỹ năng cân bằng, có khả năng tạo đột biến giao tranh tốt khi phối hợp cùng đồng đội.",
    "weaknesses": "Cần giữ vị trí cẩn thận, dễ bị bắt lẻ khi thiếu tầm nhìn hoặc khi hết chiêu thức tẩu thoát.",
    "countered_by": [
      "aleister",
      "omen",
      "arum"
    ],
    "counters": [
      "valhein"
    ],
    "synergies": [
      "thane",
      "krizzix",
      "aya"
    ],
    "counter_tips": "Chú ý lượng trang bị của Arum. Sử dụng khống chế cứng chỉ định để bắt trong combat tổng.",
    "counter_items": [
      "Mặt Nạ Berith",
      "Thương Khung Kiếm"
    ]
  },
  {
    "id": "wisp",
    "name": "Wisp",
    "avatar": "https://lienquan.garena.vn/wp-content/uploads/2024/05/f3a7fe63c79a26ea789064ea3361781f5aec0b6084aa01.jpg",
    "roles": [
      "Xạ thủ"
    ],
    "lane": "ad",
    "secondary_lane": null,
    "tier": "A",
    "damage_type": "physical",
    "mobility": 60,
    "cc_rating": 40,
    "power_spike": "mid",
    "strengths": "Tướng vị trí AD, bộ kỹ năng cân bằng, có khả năng tạo đột biến giao tranh tốt khi phối hợp cùng đồng đội.",
    "weaknesses": "Cần giữ vị trí cẩn thận, dễ bị bắt lẻ khi thiếu tầm nhìn hoặc khi hết chiêu thức tẩu thoát.",
    "countered_by": [
      "aleister",
      "omen",
      "arum"
    ],
    "counters": [
      "valhein"
    ],
    "synergies": [
      "thane",
      "krizzix",
      "aya"
    ],
    "counter_tips": "Chú ý lượng trang bị của Wisp. Sử dụng khống chế cứng chỉ định để bắt trong combat tổng.",
    "counter_items": [
      "Giáp Gai",
      "Khiên Thất Truyền"
    ]
  },
  {
    "id": "the-flash",
    "name": "The Flash",
    "avatar": "https://lienquan.garena.vn/wp-content/uploads/2024/05/dbb8d783c711cc0d2961e72cc8ed122c5ad9685dd58c11.jpg",
    "roles": [
      "Pháp sư"
    ],
    "lane": "mid",
    "secondary_lane": null,
    "tier": "A",
    "damage_type": "magic",
    "mobility": 55,
    "cc_rating": 75,
    "power_spike": "mid",
    "strengths": "Tướng vị trí MID, bộ kỹ năng cân bằng, có khả năng tạo đột biến giao tranh tốt khi phối hợp cùng đồng đội.",
    "weaknesses": "Cần giữ vị trí cẩn thận, dễ bị bắt lẻ khi thiếu tầm nhìn hoặc khi hết chiêu thức tẩu thoát.",
    "countered_by": [
      "aleister",
      "omen",
      "arum"
    ],
    "counters": [
      "valhein"
    ],
    "synergies": [
      "thane",
      "krizzix",
      "aya"
    ],
    "counter_tips": "Chú ý lượng trang bị của The Flash. Sử dụng khống chế cứng chỉ định để bắt trong combat tổng.",
    "counter_items": [
      "Huân Chương Troy",
      "Quả Cầu Băng Sương"
    ]
  },
  {
    "id": "max",
    "name": "Max",
    "avatar": "https://lienquan.garena.vn/wp-content/uploads/2024/05/18000_B52-1.jpg",
    "roles": [
      "Đỡ đòn"
    ],
    "lane": "sp",
    "secondary_lane": "top",
    "tier": "A",
    "damage_type": "physical",
    "mobility": 50,
    "cc_rating": 85,
    "power_spike": "mid",
    "strengths": "Tướng vị trí SP, bộ kỹ năng cân bằng, có khả năng tạo đột biến giao tranh tốt khi phối hợp cùng đồng đội.",
    "weaknesses": "Cần giữ vị trí cẩn thận, dễ bị bắt lẻ khi thiếu tầm nhìn hoặc khi hết chiêu thức tẩu thoát.",
    "countered_by": [
      "aleister",
      "omen",
      "arum"
    ],
    "counters": [
      "valhein"
    ],
    "synergies": [
      "thane",
      "krizzix",
      "aya"
    ],
    "counter_tips": "Chú ý lượng trang bị của Max. Sử dụng khống chế cứng chỉ định để bắt trong combat tổng.",
    "counter_items": [
      "Mặt Nạ Berith",
      "Thương Khung Kiếm"
    ]
  },
  {
    "lane": "mid",
    "secondary_lane": null,
    "tier": "S+",
    "damage_type": "magic",
    "mobility": 85,
    "cc_rating": 75,
    "power_spike": "all",
    "strengths": "Pháp sư hoàn hảo nhất game với 6 chiêu thức biến ảo giữa dạng Người và Hồ Ly. Cấu rỉa tầm xa siêu mạnh, sốc sát thương cận chiến cực bùng nổ, không thể bị chọn làm mục tiêu khi chuyển dạng.",
    "weaknesses": "Bộ kỹ năng nhiều chiêu định hướng cần độ chính xác cao. Dạng người máu mỏng dễ bị sát thủ bắt nếu giữ vị trí kém.",
    "countered_by": [
      "aleister",
      "kaine",
      "aoi",
      "tulen",
      "keera"
    ],
    "counters": [
      "krixi",
      "natalya",
      "dieu-thuyen",
      "veera",
      "ilumia"
    ],
    "synergies": [
      "nakroth",
      "aoi",
      "thane",
      "lumburr",
      "grakk"
    ],
    "counter_tips": "Né đạn linh lực dạng hồ ly và chiêu 1 cấu rỉa. Khi Liliana vừa dùng chiêu lướt chuyển dạng, lập tức áp sát dồn sát thương vì lúc đó cô nàng tạm thời mất cơ động.",
    "counter_items": [
      "Huân Chương Troy",
      "Nham Thạch",
      "Giày Kiên Cường"
    ],
    "id": "liliana",
    "name": "Liliana",
    "avatar": "https://lienquan.garena.vn/wp-content/uploads/2024/05/28b06811cb721a8ecb28d6a1db401e745a9fd3a39ae401.jpg",
    "roles": [
      "Pháp sư"
    ]
  },
  {
    "lane": "mid",
    "secondary_lane": "jungle",
    "tier": "S",
    "damage_type": "magic",
    "mobility": 85,
    "cc_rating": 45,
    "power_spike": "early-mid",
    "strengths": "Khả năng lăn cầu tuyết cực mạnh. Nội tại sét giật liên hoàn, chiêu cuối Lôi Quang kết liễu kẻ địch thấp máu sẽ hồi lại 80% thời gian hồi chiêu và kích hoạt nội tại ngay lập tức.",
    "weaknesses": "Rất sợ đối phương có tanker đứng chắn đường đạn Lôi Quang hoặc đối phương lên nhiều đồ kháng phép.",
    "countered_by": [
      "liliana",
      "kaine",
      "hayate",
      "toro",
      "cresht"
    ],
    "counters": [
      "veera",
      "natalya",
      "dieu-thuyen",
      "krixi"
    ],
    "synergies": [
      "grakk",
      "thane",
      "krizzix",
      "aya"
    ],
    "counter_tips": "Đỡ đòn và Trợ thủ luôn chủ động đứng chắn trước mặt đồng đội thấp máu để cản tia Lôi Quang của Tulen.",
    "counter_items": [
      "Huân Chương Troy",
      "Huy Chương Troy",
      "Nham Thạch"
    ],
    "id": "tulen",
    "name": "Tulen",
    "avatar": "https://lienquan.garena.vn/wp-content/uploads/2024/05/07210c9e529faa7766ba324bd86b75165a81722f3eab81.jpg",
    "roles": [
      "Pháp sư"
    ]
  },
  {
    "lane": "top",
    "secondary_lane": "sp",
    "tier": "S",
    "damage_type": "true_damage",
    "mobility": 50,
    "cc_rating": 85,
    "power_spike": "mid-late",
    "strengths": "Khắc tinh hàng đầu của các đấu sĩ cơ động và sát thủ. Chiêu 2 miễn thương tới 70% và phản đòn đánh thường kèm làm chậm. Chiêu cuối Sát Vực xích cứng mục tiêu 5 giây không thể chạy thoát.",
    "weaknesses": "Thiếu độ cơ động vượt địa hình tường, tầm đánh ngắn, rất sợ bị thả diều bởi các tướng tầm xa xả sát thương chuẩn.",
    "countered_by": [
      "hayate",
      "florentino",
      "ryoma",
      "yue",
      "liliana",
      "valhein"
    ],
    "counters": [
      "tamyn",
      "nakroth",
      "aoi",
      "murad",
      "zuka",
      "airi",
      "keera"
    ],
    "synergies": [
      "krizzix",
      "rouie",
      "grakk",
      "tulen",
      "liliana"
    ],
    "counter_tips": "Thả diều từ xa, tuyệt đối không đứng lại trao đổi chiêu thức khi Omen đang bật chiêu 2 đỏ người (miễn thương 70%). Đẩy lính rồi đảo đường hỗ trợ đồng đội.",
    "counter_items": [
      "Thương Khung Kiếm",
      "Mặt Nạ Berith",
      "Trượng Băng"
    ],
    "id": "omen",
    "name": "Omen",
    "avatar": "https://lienquan.garena.vn/wp-content/uploads/2024/05/00a78d4f7222a428cd06b45252f88a565a73df2c56ad81.jpg",
    "roles": [
      "Đấu sĩ"
    ]
  },
  {
    "id": "lindis",
    "name": "Lindis",
    "avatar": "https://lienquan.garena.vn/wp-content/uploads/2024/05/4b2928793044600d4ca60ec95fb31f205a73d88927ca01.jpg",
    "roles": [
      "Xạ thủ"
    ],
    "lane": "ad",
    "secondary_lane": null,
    "tier": "A",
    "damage_type": "physical",
    "mobility": 60,
    "cc_rating": 40,
    "power_spike": "mid",
    "strengths": "Tướng vị trí AD, bộ kỹ năng cân bằng, có khả năng tạo đột biến giao tranh tốt khi phối hợp cùng đồng đội.",
    "weaknesses": "Cần giữ vị trí cẩn thận, dễ bị bắt lẻ khi thiếu tầm nhìn hoặc khi hết chiêu thức tẩu thoát.",
    "countered_by": [
      "aleister",
      "omen",
      "arum"
    ],
    "counters": [
      "valhein"
    ],
    "synergies": [
      "thane",
      "krizzix",
      "aya"
    ],
    "counter_tips": "Chú ý lượng trang bị của Lindis. Sử dụng khống chế cứng chỉ định để bắt trong combat tổng.",
    "counter_items": [
      "Giáp Gai",
      "Khiên Thất Truyền"
    ]
  },
  {
    "id": "teemee",
    "name": "TeeMee",
    "avatar": "https://lienquan.garena.vn/wp-content/uploads/2024/05/d048143eef92ff2734c99f53b46e19db5a4dabef8a0fe1.jpg",
    "roles": [
      "Trợ thủ"
    ],
    "lane": "sp",
    "secondary_lane": null,
    "tier": "A",
    "damage_type": "magic",
    "mobility": 60,
    "cc_rating": 80,
    "power_spike": "mid",
    "strengths": "Tướng vị trí SP, bộ kỹ năng cân bằng, có khả năng tạo đột biến giao tranh tốt khi phối hợp cùng đồng đội.",
    "weaknesses": "Cần giữ vị trí cẩn thận, dễ bị bắt lẻ khi thiếu tầm nhìn hoặc khi hết chiêu thức tẩu thoát.",
    "countered_by": [
      "aleister",
      "omen",
      "arum"
    ],
    "counters": [
      "valhein"
    ],
    "synergies": [
      "thane",
      "krizzix",
      "aya"
    ],
    "counter_tips": "Chú ý lượng trang bị của TeeMee. Sử dụng khống chế cứng chỉ định để bắt trong combat tổng.",
    "counter_items": [
      "Sách Truy Hồn",
      "Đao Truy Hồn"
    ]
  },
  {
    "id": "moren",
    "name": "Moren",
    "avatar": "https://lienquan.garena.vn/wp-content/uploads/2024/05/acqqwc-1.jpg",
    "roles": [
      "Xạ thủ"
    ],
    "lane": "ad",
    "secondary_lane": null,
    "tier": "A",
    "damage_type": "physical",
    "mobility": 60,
    "cc_rating": 40,
    "power_spike": "mid",
    "strengths": "Tướng vị trí AD, bộ kỹ năng cân bằng, có khả năng tạo đột biến giao tranh tốt khi phối hợp cùng đồng đội.",
    "weaknesses": "Cần giữ vị trí cẩn thận, dễ bị bắt lẻ khi thiếu tầm nhìn hoặc khi hết chiêu thức tẩu thoát.",
    "countered_by": [
      "aleister",
      "omen",
      "arum"
    ],
    "counters": [
      "valhein"
    ],
    "synergies": [
      "thane",
      "krizzix",
      "aya"
    ],
    "counter_tips": "Chú ý lượng trang bị của Moren. Sử dụng khống chế cứng chỉ định để bắt trong combat tổng.",
    "counter_items": [
      "Giáp Gai",
      "Khiên Thất Truyền"
    ]
  },
  {
    "id": "kilgroth",
    "name": "Kil’Groth",
    "avatar": "https://lienquan.garena.vn/wp-content/uploads/2024/05/4dd76a3f07965ade3c71b89874b64b935a29291ca4a111.gif",
    "roles": [
      "Đấu sĩ"
    ],
    "lane": "top",
    "secondary_lane": "jungle",
    "tier": "A",
    "damage_type": "physical",
    "mobility": 70,
    "cc_rating": 65,
    "power_spike": "mid",
    "strengths": "Tướng vị trí TOP, bộ kỹ năng cân bằng, có khả năng tạo đột biến giao tranh tốt khi phối hợp cùng đồng đội.",
    "weaknesses": "Cần giữ vị trí cẩn thận, dễ bị bắt lẻ khi thiếu tầm nhìn hoặc khi hết chiêu thức tẩu thoát.",
    "countered_by": [
      "aleister",
      "omen",
      "arum"
    ],
    "counters": [
      "valhein"
    ],
    "synergies": [
      "thane",
      "krizzix",
      "aya"
    ],
    "counter_tips": "Chú ý lượng trang bị của Kil’Groth. Sử dụng khống chế cứng chỉ định để bắt trong combat tổng.",
    "counter_items": [
      "Áo Choàng Băng Giá",
      "Khiên Thất Truyền"
    ]
  },
  {
    "id": "xeniel",
    "name": "Xeniel",
    "avatar": "https://lienquan.garena.vn/wp-content/uploads/2024/05/a56369ce162e24700689527a54d89b755a179e8628f391.jpg",
    "roles": [
      "Trợ thủ"
    ],
    "lane": "sp",
    "secondary_lane": null,
    "tier": "A",
    "damage_type": "magic",
    "mobility": 60,
    "cc_rating": 80,
    "power_spike": "mid",
    "strengths": "Tướng vị trí SP, bộ kỹ năng cân bằng, có khả năng tạo đột biến giao tranh tốt khi phối hợp cùng đồng đội.",
    "weaknesses": "Cần giữ vị trí cẩn thận, dễ bị bắt lẻ khi thiếu tầm nhìn hoặc khi hết chiêu thức tẩu thoát.",
    "countered_by": [
      "aleister",
      "omen",
      "arum"
    ],
    "counters": [
      "valhein"
    ],
    "synergies": [
      "thane",
      "krizzix",
      "aya"
    ],
    "counter_tips": "Chú ý lượng trang bị của Xeniel. Sử dụng khống chế cứng chỉ định để bắt trong combat tổng.",
    "counter_items": [
      "Sách Truy Hồn",
      "Đao Truy Hồn"
    ]
  },
  {
    "id": "wonder-woman",
    "name": "Wonder Woman",
    "avatar": "https://lienquan.garena.vn/wp-content/uploads/2024/05/108ae03944a6aa1eb4313a2baa64efcd5a0e6c1551db11.jpg",
    "roles": [
      "Đấu sĩ"
    ],
    "lane": "top",
    "secondary_lane": "jungle",
    "tier": "A",
    "damage_type": "physical",
    "mobility": 70,
    "cc_rating": 65,
    "power_spike": "mid",
    "strengths": "Tướng vị trí TOP, bộ kỹ năng cân bằng, có khả năng tạo đột biến giao tranh tốt khi phối hợp cùng đồng đội.",
    "weaknesses": "Cần giữ vị trí cẩn thận, dễ bị bắt lẻ khi thiếu tầm nhìn hoặc khi hết chiêu thức tẩu thoát.",
    "countered_by": [
      "aleister",
      "omen",
      "arum"
    ],
    "counters": [
      "valhein"
    ],
    "synergies": [
      "thane",
      "krizzix",
      "aya"
    ],
    "counter_tips": "Chú ý lượng trang bị của Wonder Woman. Sử dụng khống chế cứng chỉ định để bắt trong combat tổng.",
    "counter_items": [
      "Áo Choàng Băng Giá",
      "Khiên Thất Truyền"
    ]
  },
  {
    "id": "superman",
    "name": "Superman",
    "avatar": "https://lienquan.garena.vn/wp-content/uploads/2024/05/3310a88f1a679a6940e2f6e0da287c415a02b6ac709e01.jpg",
    "roles": [
      "Đấu sĩ"
    ],
    "lane": "top",
    "secondary_lane": "jungle",
    "tier": "A",
    "damage_type": "physical",
    "mobility": 70,
    "cc_rating": 65,
    "power_spike": "mid",
    "strengths": "Tướng vị trí TOP, bộ kỹ năng cân bằng, có khả năng tạo đột biến giao tranh tốt khi phối hợp cùng đồng đội.",
    "weaknesses": "Cần giữ vị trí cẩn thận, dễ bị bắt lẻ khi thiếu tầm nhìn hoặc khi hết chiêu thức tẩu thoát.",
    "countered_by": [
      "aleister",
      "omen",
      "arum"
    ],
    "counters": [
      "valhein"
    ],
    "synergies": [
      "thane",
      "krizzix",
      "aya"
    ],
    "counter_tips": "Chú ý lượng trang bị của Superman. Sử dụng khống chế cứng chỉ định để bắt trong combat tổng.",
    "counter_items": [
      "Áo Choàng Băng Giá",
      "Khiên Thất Truyền"
    ]
  },
  {
    "id": "telannas",
    "name": "Tel’Annas",
    "avatar": "https://lienquan.garena.vn/wp-content/uploads/2024/05/5064b1bbcb8dcac94f88292537d6c35459e96577aa90c1.jpg",
    "roles": [
      "Xạ thủ"
    ],
    "lane": "ad",
    "secondary_lane": null,
    "tier": "A",
    "damage_type": "physical",
    "mobility": 60,
    "cc_rating": 40,
    "power_spike": "mid",
    "strengths": "Tướng vị trí AD, bộ kỹ năng cân bằng, có khả năng tạo đột biến giao tranh tốt khi phối hợp cùng đồng đội.",
    "weaknesses": "Cần giữ vị trí cẩn thận, dễ bị bắt lẻ khi thiếu tầm nhìn hoặc khi hết chiêu thức tẩu thoát.",
    "countered_by": [
      "aleister",
      "omen",
      "arum"
    ],
    "counters": [
      "valhein"
    ],
    "synergies": [
      "thane",
      "krizzix",
      "aya"
    ],
    "counter_tips": "Chú ý lượng trang bị của Tel’Annas. Sử dụng khống chế cứng chỉ định để bắt trong combat tổng.",
    "counter_items": [
      "Giáp Gai",
      "Khiên Thất Truyền"
    ]
  },
  {
    "id": "astrid",
    "name": "Astrid",
    "avatar": "https://lienquan.garena.vn/wp-content/uploads/2024/05/91a969152f4340611e12e4eeb96a9aa259e021a48fbe91.jpg",
    "roles": [
      "Đấu sĩ"
    ],
    "lane": "top",
    "secondary_lane": "jungle",
    "tier": "S",
    "damage_type": "true_damage",
    "mobility": 75,
    "cc_rating": 75,
    "power_spike": "mid-late",
    "strengths": "Đấu sĩ giải đấu đang trở lại cực kỳ mạnh mẽ sau các đợt tối ưu. Chiêu cuối Cự Kiếm miễn nhiễm 100% mọi sát thương và khống chế (bất tử 1.5s), gây sát thương chuẩn và làm choáng diện rộng khi máu thấp. Nội tại Kiếm Tâm liên tục nạp lá chắn khi đánh thường, chiêu 2 lướt trừ giáp đối thủ và tăng mạnh tốc đánh.",
    "weaknesses": "Tầm đánh tay ngắn, dễ bị các xạ thủ cơ động cao thả diều. Chiêu cuối có thời gian vung kiếm ngắn có thể bị đối thủ Tốc Biến né ra ngoài.",
    "countered_by": [
      "hayate",
      "slimz",
      "florentino",
      "yue",
      "liliana"
    ],
    "counters": [
      "tamyn",
      "florentino",
      "allain",
      "arthur",
      "taara",
      "maloch",
      "skud"
    ],
    "synergies": [
      "aya",
      "helen",
      "krizzix",
      "alice",
      "rouie"
    ],
    "counter_tips": "Khi Astrid bật chiêu cuối vung kiếm bất tử, lập tức tản ra hoặc lướt né khỏi vùng quét hình nón. Pick các tướng thả diều sát thương theo % máu (Hayate, Slimz).",
    "counter_items": [
      "Khiên Thất Truyền",
      "Áo Choàng Băng Giá",
      "Mặt Nạ Berith"
    ]
  },
  {
    "id": "ryoma",
    "name": "Ryoma",
    "avatar": "https://lienquan.garena.vn/wp-content/uploads/2024/05/2f3fe854b98e664415c024a1e9f0396259d9b9ddb39921.jpg",
    "roles": [
      "Đấu sĩ"
    ],
    "lane": "top",
    "secondary_lane": "jungle",
    "tier": "A",
    "damage_type": "physical",
    "mobility": 70,
    "cc_rating": 65,
    "power_spike": "mid",
    "strengths": "Tướng vị trí TOP, bộ kỹ năng cân bằng, có khả năng tạo đột biến giao tranh tốt khi phối hợp cùng đồng đội.",
    "weaknesses": "Cần giữ vị trí cẩn thận, dễ bị bắt lẻ khi thiếu tầm nhìn hoặc khi hết chiêu thức tẩu thoát.",
    "countered_by": [
      "aleister",
      "omen",
      "arum"
    ],
    "counters": [
      "valhein"
    ],
    "synergies": [
      "thane",
      "krizzix",
      "aya"
    ],
    "counter_tips": "Chú ý lượng trang bị của Ryoma. Sử dụng khống chế cứng chỉ định để bắt trong combat tổng.",
    "counter_items": [
      "Áo Choàng Băng Giá",
      "Khiên Thất Truyền"
    ]
  },
  {
    "lane": "ad",
    "secondary_lane": "mid",
    "tier": "S+",
    "damage_type": "physical",
    "mobility": 80,
    "cc_rating": 65,
    "power_spike": "early-mid",
    "strengths": "Chiêu 2 Bật Nhảy Tự Do giúp miễn nhiễm 100% sát thương vật lý và tăng mạnh tốc chạy trong 2 giây. Chiêu 1 cấu rỉa xa, chiêu cuối đạp vào mặt địch làm choáng và giật lùi an toàn, sốc chết sát thủ vật lý.",
    "weaknesses": "Chiêu 2 hoàn toàn không kháng được sát thương phép. Rất sợ các pháp sư sốc dame tầm xa hoặc sát thủ phép.",
    "countered_by": [
      "liliana",
      "yue",
      "keera",
      "tulen",
      "krixi",
      "zill"
    ],
    "counters": [
      "hayate",
      "valhein",
      "nakroth",
      "murad",
      "zuka",
      "airi"
    ],
    "synergies": [
      "krizzix",
      "thane",
      "lumburr",
      "helen"
    ],
    "counter_tips": "Sử dụng các pháp sư dồn dame phép (Liliana, Yue, Tulen) để sốc chết Stuart ngay cả khi hắn đang bật chiêu 2 miễn nhiễm vật lý.",
    "counter_items": [
      "Huân Chương Troy",
      "Quả Cầu Băng Sương",
      "Giáp Gai"
    ],
    "id": "stuart",
    "name": "Stuart",
    "avatar": "https://lienquan.garena.vn/wp-content/uploads/2024/05/aaba7b63f6e2f5577fbb3465925c8026658d3d704767f1.jpg",
    "roles": [
      "Xạ thủ"
    ]
  },
  {
    "id": "arduin",
    "name": "Arduin",
    "avatar": "https://lienquan.garena.vn/wp-content/uploads/2024/05/8ac7305489de39cfaa10eb13f5a7824559bb7d0c7f2cc1.jpg",
    "roles": [
      "Đấu sĩ"
    ],
    "lane": "top",
    "secondary_lane": "jungle",
    "tier": "A",
    "damage_type": "physical",
    "mobility": 70,
    "cc_rating": 65,
    "power_spike": "mid",
    "strengths": "Tướng vị trí TOP, bộ kỹ năng cân bằng, có khả năng tạo đột biến giao tranh tốt khi phối hợp cùng đồng đội.",
    "weaknesses": "Cần giữ vị trí cẩn thận, dễ bị bắt lẻ khi thiếu tầm nhìn hoặc khi hết chiêu thức tẩu thoát.",
    "countered_by": [
      "aleister",
      "omen",
      "arum"
    ],
    "counters": [
      "valhein"
    ],
    "synergies": [
      "thane",
      "krizzix",
      "aya"
    ],
    "counter_tips": "Chú ý lượng trang bị của Arduin. Sử dụng khống chế cứng chỉ định để bắt trong combat tổng.",
    "counter_items": [
      "Áo Choàng Băng Giá",
      "Khiên Thất Truyền"
    ]
  },
  {
    "id": "zill",
    "name": "Zill",
    "avatar": "https://lienquan.garena.vn/wp-content/uploads/2024/05/b1a6c37ad9558ac5767e25ded5b6fcf759966ca7c1d431.jpg",
    "roles": [
      "Pháp sư"
    ],
    "lane": "mid",
    "secondary_lane": null,
    "tier": "A",
    "damage_type": "magic",
    "mobility": 55,
    "cc_rating": 75,
    "power_spike": "mid",
    "strengths": "Tướng vị trí MID, bộ kỹ năng cân bằng, có khả năng tạo đột biến giao tranh tốt khi phối hợp cùng đồng đội.",
    "weaknesses": "Cần giữ vị trí cẩn thận, dễ bị bắt lẻ khi thiếu tầm nhìn hoặc khi hết chiêu thức tẩu thoát.",
    "countered_by": [
      "aleister",
      "omen",
      "arum"
    ],
    "counters": [
      "valhein"
    ],
    "synergies": [
      "thane",
      "krizzix",
      "aya"
    ],
    "counter_tips": "Chú ý lượng trang bị của Zill. Sử dụng khống chế cứng chỉ định để bắt trong combat tổng.",
    "counter_items": [
      "Huân Chương Troy",
      "Quả Cầu Băng Sương"
    ]
  },
  {
    "id": "murad",
    "name": "Murad",
    "avatar": "https://lienquan.garena.vn/wp-content/uploads/2024/05/7dba55e7f433ab78ac6bd2cdfeec13495983e122346461.jpg",
    "roles": [
      "Sát thủ"
    ],
    "lane": "jungle",
    "secondary_lane": null,
    "tier": "A",
    "damage_type": "physical",
    "mobility": 85,
    "cc_rating": 55,
    "power_spike": "mid",
    "strengths": "Tướng vị trí JUNGLE, bộ kỹ năng cân bằng, có khả năng tạo đột biến giao tranh tốt khi phối hợp cùng đồng đội.",
    "weaknesses": "Cần giữ vị trí cẩn thận, dễ bị bắt lẻ khi thiếu tầm nhìn hoặc khi hết chiêu thức tẩu thoát.",
    "countered_by": [
      "aleister",
      "omen",
      "arum"
    ],
    "counters": [
      "valhein"
    ],
    "synergies": [
      "thane",
      "krizzix",
      "aya"
    ],
    "counter_tips": "Chú ý lượng trang bị của Murad. Sử dụng khống chế cứng chỉ định để bắt trong combat tổng.",
    "counter_items": [
      "Giáp Hộ Mệnh",
      "Áo Choàng Băng Giá"
    ]
  },
  {
    "id": "ignis",
    "name": "Ignis",
    "avatar": "https://lienquan.garena.vn/wp-content/uploads/2024/05/a2c0e8ef7742c926f9bb10fbab12b03d5970da7009dc11.jpg",
    "roles": [
      "Pháp sư"
    ],
    "lane": "mid",
    "secondary_lane": null,
    "tier": "A",
    "damage_type": "magic",
    "mobility": 55,
    "cc_rating": 75,
    "power_spike": "mid",
    "strengths": "Tướng vị trí MID, bộ kỹ năng cân bằng, có khả năng tạo đột biến giao tranh tốt khi phối hợp cùng đồng đội.",
    "weaknesses": "Cần giữ vị trí cẩn thận, dễ bị bắt lẻ khi thiếu tầm nhìn hoặc khi hết chiêu thức tẩu thoát.",
    "countered_by": [
      "aleister",
      "omen",
      "arum"
    ],
    "counters": [
      "valhein"
    ],
    "synergies": [
      "thane",
      "krizzix",
      "aya"
    ],
    "counter_tips": "Chú ý lượng trang bị của Ignis. Sử dụng khống chế cứng chỉ định để bắt trong combat tổng.",
    "counter_items": [
      "Huân Chương Troy",
      "Quả Cầu Băng Sương"
    ]
  },
  {
    "id": "zuka",
    "name": "Zuka",
    "avatar": "https://lienquan.garena.vn/wp-content/uploads/2024/05/d5166c51f37b444810f2ae3df056920d5c4938c59a4821.jpg",
    "roles": [
      "Đấu sĩ"
    ],
    "lane": "top",
    "secondary_lane": "jungle",
    "tier": "A",
    "damage_type": "physical",
    "mobility": 70,
    "cc_rating": 65,
    "power_spike": "mid",
    "strengths": "Tướng vị trí TOP, bộ kỹ năng cân bằng, có khả năng tạo đột biến giao tranh tốt khi phối hợp cùng đồng đội.",
    "weaknesses": "Cần giữ vị trí cẩn thận, dễ bị bắt lẻ khi thiếu tầm nhìn hoặc khi hết chiêu thức tẩu thoát.",
    "countered_by": [
      "aleister",
      "omen",
      "arum"
    ],
    "counters": [
      "valhein"
    ],
    "synergies": [
      "thane",
      "krizzix",
      "aya"
    ],
    "counter_tips": "Chú ý lượng trang bị của Zuka. Sử dụng khống chế cứng chỉ định để bắt trong combat tổng.",
    "counter_items": [
      "Áo Choàng Băng Giá",
      "Khiên Thất Truyền"
    ]
  },
  {
    "id": "airi",
    "name": "Airi",
    "avatar": "https://lienquan.garena.vn/wp-content/uploads/2024/05/04999ff87145b9005694ffd78e1530a660017059a8fc11.jpg",
    "roles": [
      "Sát thủ"
    ],
    "lane": "jungle",
    "secondary_lane": null,
    "tier": "A",
    "damage_type": "physical",
    "mobility": 85,
    "cc_rating": 55,
    "power_spike": "mid",
    "strengths": "Tướng vị trí JUNGLE, bộ kỹ năng cân bằng, có khả năng tạo đột biến giao tranh tốt khi phối hợp cùng đồng đội.",
    "weaknesses": "Cần giữ vị trí cẩn thận, dễ bị bắt lẻ khi thiếu tầm nhìn hoặc khi hết chiêu thức tẩu thoát.",
    "countered_by": [
      "aleister",
      "omen",
      "arum"
    ],
    "counters": [
      "valhein"
    ],
    "synergies": [
      "thane",
      "krizzix",
      "aya"
    ],
    "counter_tips": "Chú ý lượng trang bị của Airi. Sử dụng khống chế cứng chỉ định để bắt trong combat tổng.",
    "counter_items": [
      "Giáp Hộ Mệnh",
      "Áo Choàng Băng Giá"
    ]
  },
  {
    "lane": "jungle",
    "secondary_lane": "sp",
    "tier": "S",
    "damage_type": "physical",
    "mobility": 85,
    "cc_rating": 70,
    "power_spike": "early-mid",
    "strengths": "Nội tại tàng hình liên tục toàn trận đấu, tạo áp lực tâm lý kinh hoàng lên mọi đường. Sát thương sốc 1 combo kết liễu xạ thủ/pháp sư trong 1 giây.",
    "weaknesses": "Về late game đối phương lên đồ phụ trợ Mắt Soi và đi chung đội hình thì Kaine rất khó tìm góc lao vào.",
    "countered_by": [
      "hayate",
      "max",
      "elsu",
      "lumburr",
      "toro"
    ],
    "counters": [
      "yorn",
      "telannas",
      "krixi",
      "natalya",
      "yue"
    ],
    "synergies": [
      "omen",
      "richter",
      "liliana",
      "tulen"
    ],
    "counter_tips": "Trợ thủ bắt buộc phải lên Phụ trợ Mắt Soi Tàng Hình (Ma Nhãn). Xạ thủ và Pháp sư luôn đi sát bên cạnh Trợ thủ đỡ đòn.",
    "counter_items": [
      "Phụ trợ Ma Nhãn (Mắt Soi)",
      "Giáp Thống Khổ",
      "Quả Cầu Băng Sương"
    ],
    "id": "kaine",
    "name": "Kaine",
    "avatar": "https://lienquan.garena.vn/wp-content/uploads/2024/05/bb649e26633a61d78f7147d56c0828c6658d3bb600ae01.jpg",
    "roles": [
      "Sát thủ"
    ]
  },
  {
    "id": "lauriel",
    "name": "Lauriel",
    "avatar": "https://lienquan.garena.vn/wp-content/uploads/2024/05/18d4327ac2e366a736a060be082bbbef5943917dab8d81.jpg",
    "roles": [
      "Pháp sư"
    ],
    "lane": "mid",
    "secondary_lane": null,
    "tier": "A",
    "damage_type": "magic",
    "mobility": 80,
    "cc_rating": 75,
    "power_spike": "mid",
    "strengths": "Tướng vị trí MID, bộ kỹ năng cân bằng, có khả năng tạo đột biến giao tranh tốt khi phối hợp cùng đồng đội.",
    "weaknesses": "Cần giữ vị trí cẩn thận, dễ bị bắt lẻ khi thiếu tầm nhìn hoặc khi hết chiêu thức tẩu thoát.",
    "countered_by": [
      "aleister",
      "omen",
      "arum"
    ],
    "counters": [
      "valhein"
    ],
    "synergies": [
      "thane",
      "krizzix",
      "aya"
    ],
    "counter_tips": "Chú ý lượng trang bị của Lauriel. Sử dụng khống chế cứng chỉ định để bắt trong combat tổng.",
    "counter_items": [
      "Huân Chương Troy",
      "Quả Cầu Băng Sương"
    ]
  },
  {
    "id": "raz",
    "name": "Raz",
    "avatar": "https://lienquan.garena.vn/wp-content/uploads/2024/05/6b79035779ab9195c76d91b3f2e7ca79591e6857831601.jpg",
    "roles": [
      "Pháp sư"
    ],
    "lane": "mid",
    "secondary_lane": null,
    "tier": "A",
    "damage_type": "magic",
    "mobility": 80,
    "cc_rating": 75,
    "power_spike": "mid",
    "strengths": "Tướng vị trí MID, bộ kỹ năng cân bằng, có khả năng tạo đột biến giao tranh tốt khi phối hợp cùng đồng đội.",
    "weaknesses": "Cần giữ vị trí cẩn thận, dễ bị bắt lẻ khi thiếu tầm nhìn hoặc khi hết chiêu thức tẩu thoát.",
    "countered_by": [
      "aleister",
      "omen",
      "arum"
    ],
    "counters": [
      "valhein"
    ],
    "synergies": [
      "thane",
      "krizzix",
      "aya"
    ],
    "counter_tips": "Chú ý lượng trang bị của Raz. Sử dụng khống chế cứng chỉ định để bắt trong combat tổng.",
    "counter_items": [
      "Huân Chương Troy",
      "Quả Cầu Băng Sương"
    ]
  },
  {
    "lane": "top",
    "secondary_lane": "jungle",
    "tier": "S",
    "damage_type": "magic",
    "mobility": 70,
    "cc_rating": 80,
    "power_spike": "mid-late",
    "strengths": "Lượng máu tối đa khổng lồ nhất Liên Quân (dễ dàng đạt hơn 20,000 máu). Càng nhiều máu đấm càng đau, chiêu 2 tích lực 1 đấm có thể bốc hơi 70% cây máu của chủ lực.",
    "weaknesses": "Rất sợ bị thả diều bởi các xạ thủ có sát thương theo % máu (Hayate, Slimz, Yorn).",
    "countered_by": [
      "hayate",
      "florentino",
      "allain",
      "slimz"
    ],
    "counters": [
      "tamyn",
      "nakroth",
      "aoi",
      "kaine",
      "murad"
    ],
    "synergies": [
      "liliana",
      "yue",
      "krizzix",
      "aya"
    ],
    "counter_tips": "Pick Hayate hoặc Slimz bắn theo % máu tối đa. Lên Mặt Nạ Berith cho pháp sư để đốt máu Skud liên tục.",
    "counter_items": [
      "Mặt Nạ Berith",
      "Thương Longinus",
      "Kiếm Muramasa"
    ],
    "id": "skud",
    "name": "Skud",
    "avatar": "https://lienquan.garena.vn/wp-content/uploads/2024/05/2b128ebef47ab5a8a2ae9d3db754cd585ee5e21149f621.jpg",
    "roles": [
      "Đấu sĩ"
    ]
  },
  {
    "id": "preyta",
    "name": "Preyta",
    "avatar": "https://lienquan.garena.vn/wp-content/uploads/2024/05/f2f8893606262e7c0547c4f47f670995590bf38eabfc81.jpg",
    "roles": [
      "Pháp sư"
    ],
    "lane": "mid",
    "secondary_lane": null,
    "tier": "A",
    "damage_type": "magic",
    "mobility": 55,
    "cc_rating": 75,
    "power_spike": "mid",
    "strengths": "Tướng vị trí MID, bộ kỹ năng cân bằng, có khả năng tạo đột biến giao tranh tốt khi phối hợp cùng đồng đội.",
    "weaknesses": "Cần giữ vị trí cẩn thận, dễ bị bắt lẻ khi thiếu tầm nhìn hoặc khi hết chiêu thức tẩu thoát.",
    "countered_by": [
      "aleister",
      "omen",
      "arum"
    ],
    "counters": [
      "valhein"
    ],
    "synergies": [
      "thane",
      "krizzix",
      "aya"
    ],
    "counter_tips": "Chú ý lượng trang bị của Preyta. Sử dụng khống chế cứng chỉ định để bắt trong combat tổng.",
    "counter_items": [
      "Huân Chương Troy",
      "Quả Cầu Băng Sương"
    ]
  },
  {
    "id": "ilumia",
    "name": "Ilumia",
    "avatar": "https://lienquan.garena.vn/wp-content/uploads/2024/05/7ae8bcd437d0787c9f3bb9aa54907ede5ef5e858aff141.jpg",
    "roles": [
      "Pháp sư"
    ],
    "lane": "mid",
    "secondary_lane": null,
    "tier": "A",
    "damage_type": "magic",
    "mobility": 55,
    "cc_rating": 75,
    "power_spike": "mid",
    "strengths": "Tướng vị trí MID, bộ kỹ năng cân bằng, có khả năng tạo đột biến giao tranh tốt khi phối hợp cùng đồng đội.",
    "weaknesses": "Cần giữ vị trí cẩn thận, dễ bị bắt lẻ khi thiếu tầm nhìn hoặc khi hết chiêu thức tẩu thoát.",
    "countered_by": [
      "aleister",
      "omen",
      "arum"
    ],
    "counters": [
      "valhein"
    ],
    "synergies": [
      "thane",
      "krizzix",
      "aya"
    ],
    "counter_tips": "Chú ý lượng trang bị của Ilumia. Sử dụng khống chế cứng chỉ định để bắt trong combat tổng.",
    "counter_items": [
      "Huân Chương Troy",
      "Quả Cầu Băng Sương"
    ]
  },
  {
    "id": "slimz",
    "name": "Slimz",
    "avatar": "https://lienquan.garena.vn/wp-content/uploads/2024/05/122fe2fc229ca42dcbe6946db07ccd435b345a87702a11.png",
    "roles": [
      "Xạ thủ"
    ],
    "lane": "ad",
    "secondary_lane": null,
    "tier": "A",
    "damage_type": "physical",
    "mobility": 75,
    "cc_rating": 40,
    "power_spike": "mid",
    "strengths": "Tướng vị trí AD, bộ kỹ năng cân bằng, có khả năng tạo đột biến giao tranh tốt khi phối hợp cùng đồng đội.",
    "weaknesses": "Cần giữ vị trí cẩn thận, dễ bị bắt lẻ khi thiếu tầm nhìn hoặc khi hết chiêu thức tẩu thoát.",
    "countered_by": [
      "aleister",
      "omen",
      "arum"
    ],
    "counters": [
      "valhein"
    ],
    "synergies": [
      "thane",
      "krizzix",
      "aya"
    ],
    "counter_tips": "Chú ý lượng trang bị của Slimz. Sử dụng khống chế cứng chỉ định để bắt trong combat tổng.",
    "counter_items": [
      "Giáp Gai",
      "Khiên Thất Truyền"
    ]
  },
  {
    "id": "arthur",
    "name": "Arthur",
    "avatar": "https://lienquan.garena.vn/wp-content/uploads/2024/06/Honeyview_Arthur_111-e1718875297358.jpg",
    "roles": [
      "Đấu sĩ"
    ],
    "lane": "top",
    "secondary_lane": "jungle",
    "tier": "A",
    "damage_type": "physical",
    "mobility": 70,
    "cc_rating": 65,
    "power_spike": "mid",
    "strengths": "Tướng vị trí TOP, bộ kỹ năng cân bằng, có khả năng tạo đột biến giao tranh tốt khi phối hợp cùng đồng đội.",
    "weaknesses": "Cần giữ vị trí cẩn thận, dễ bị bắt lẻ khi thiếu tầm nhìn hoặc khi hết chiêu thức tẩu thoát.",
    "countered_by": [
      "aleister",
      "omen",
      "arum"
    ],
    "counters": [
      "valhein"
    ],
    "synergies": [
      "thane",
      "krizzix",
      "aya"
    ],
    "counter_tips": "Chú ý lượng trang bị của Arthur. Sử dụng khống chế cứng chỉ định để bắt trong combat tổng.",
    "counter_items": [
      "Áo Choàng Băng Giá",
      "Khiên Thất Truyền"
    ]
  },
  {
    "lane": "jungle",
    "secondary_lane": null,
    "tier": "S",
    "damage_type": "physical",
    "mobility": 85,
    "cc_rating": 50,
    "power_spike": "early-mid",
    "strengths": "Chiêu cuối đập xuống gây lượng sát thương vật lý bùng nổ theo % máu tối đa, one-shot chủ lực chỉ với 1 nhịp dậm và cắn.",
    "weaknesses": "Lao vào tầm gần không có chiêu tẩu thoát nếu đập trượt hoặc đối thủ có Giáp Hộ Mệnh / Quả Cầu Băng Sương.",
    "countered_by": [
      "aleister",
      "arum",
      "omen",
      "stuart",
      "toro"
    ],
    "counters": [
      "krixi",
      "yorn",
      "telannas",
      "natalya",
      "veera"
    ],
    "synergies": [
      "krizzix",
      "thane",
      "aya",
      "lumburr"
    ],
    "counter_tips": "Lên sớm Quả Cầu Băng Sương hoặc Giáp Hộ Mệnh. Khi thấy bọ bay trên đầu, lập tức Tốc Biến hoặc bật miễn thương né cú dậm.",
    "counter_items": [
      "Quả Cầu Băng Sương",
      "Giáp Hộ Mệnh",
      "Khiên Huyền Thoại"
    ],
    "id": "kriknak",
    "name": "Kriknak",
    "avatar": "https://lienquan.garena.vn/wp-content/uploads/2024/05/0dac2ca73eb28c03de2e43f85e868df458e710b5baeb41.png",
    "roles": [
      "Sát thủ"
    ]
  },
  {
    "id": "ngo-khong",
    "name": "Ngộ Không",
    "avatar": "https://lienquan.garena.vn/wp-content/uploads/2024/05/aea009bf921dd684d19ee76c0c1441215ef5c39d1bd6b1.jpg",
    "roles": [
      "Sát thủ"
    ],
    "lane": "jungle",
    "secondary_lane": null,
    "tier": "A",
    "damage_type": "physical",
    "mobility": 85,
    "cc_rating": 55,
    "power_spike": "mid",
    "strengths": "Tướng vị trí JUNGLE, bộ kỹ năng cân bằng, có khả năng tạo đột biến giao tranh tốt khi phối hợp cùng đồng đội.",
    "weaknesses": "Cần giữ vị trí cẩn thận, dễ bị bắt lẻ khi thiếu tầm nhìn hoặc khi hết chiêu thức tẩu thoát.",
    "countered_by": [
      "aleister",
      "omen",
      "arum"
    ],
    "counters": [
      "valhein"
    ],
    "synergies": [
      "thane",
      "krizzix",
      "aya"
    ],
    "counter_tips": "Chú ý lượng trang bị của Ngộ Không. Sử dụng khống chế cứng chỉ định để bắt trong combat tổng.",
    "counter_items": [
      "Giáp Hộ Mệnh",
      "Áo Choàng Băng Giá"
    ]
  },
  {
    "id": "maloch",
    "name": "Maloch",
    "avatar": "https://lienquan.garena.vn/wp-content/uploads/2024/05/752c4c954aa4a8f05a1b0be72aa5dc895c0def4d435aa1.jpg",
    "roles": [
      "Đấu sĩ"
    ],
    "lane": "top",
    "secondary_lane": "jungle",
    "tier": "A",
    "damage_type": "physical",
    "mobility": 70,
    "cc_rating": 65,
    "power_spike": "mid",
    "strengths": "Tướng vị trí TOP, bộ kỹ năng cân bằng, có khả năng tạo đột biến giao tranh tốt khi phối hợp cùng đồng đội.",
    "weaknesses": "Cần giữ vị trí cẩn thận, dễ bị bắt lẻ khi thiếu tầm nhìn hoặc khi hết chiêu thức tẩu thoát.",
    "countered_by": [
      "aleister",
      "omen",
      "arum"
    ],
    "counters": [
      "valhein"
    ],
    "synergies": [
      "thane",
      "krizzix",
      "aya"
    ],
    "counter_tips": "Chú ý lượng trang bị của Maloch. Sử dụng khống chế cứng chỉ định để bắt trong combat tổng.",
    "counter_items": [
      "Áo Choàng Băng Giá",
      "Khiên Thất Truyền"
    ]
  },
  {
    "lane": "sp",
    "secondary_lane": null,
    "tier": "S",
    "damage_type": "magic",
    "mobility": 70,
    "cc_rating": 75,
    "power_spike": "all",
    "strengths": "Hồi phục máu liên tục và diện rộng mạnh nhất game. Buff lượng giáp ảo cực lớn và tăng kháng hiệu ứng cho đồng đội xung quanh. Chiêu 2 nảy chim khống chế làm choáng nhiều mục tiêu.",
    "weaknesses": "Rất sợ toàn đội đối phương lên sớm trang bị giảm hồi máu (Sách Truy Hồn / Đao Truy Hồn).",
    "countered_by": [
      "florentino",
      "hayate",
      "tulen",
      "tamyn"
    ],
    "counters": [
      "krixi",
      "valhein",
      "natalya"
    ],
    "synergies": [
      "valhein",
      "capheny",
      "tamyn",
      "florentino",
      "allain"
    ],
    "counter_tips": "Toàn đội BẮT BUỘC phải lên Sách Truy Hồn (pháp sư) hoặc Đao Truy Hồn (đấu sĩ/xạ thủ) từ món trang bị thứ 2 hoặc 3.",
    "counter_items": [
      "Sách Truy Hồn",
      "Đao Truy Hồn"
    ],
    "id": "helen",
    "name": "Helen",
    "avatar": "https://lienquan.garena.vn/wp-content/uploads/2024/05/e645dfa331fa48d593b33352e1f8030e636e1b3e19b951.jpg",
    "roles": [
      "Trợ thủ"
    ]
  },
  {
    "id": "jinna",
    "name": "Jinna",
    "avatar": "https://lienquan.garena.vn/wp-content/uploads/2024/05/f3b0dc924b34f76c9265adb57758817a5b752794c417a1.jpg",
    "roles": [
      "Pháp sư"
    ],
    "lane": "mid",
    "secondary_lane": null,
    "tier": "A",
    "damage_type": "magic",
    "mobility": 55,
    "cc_rating": 75,
    "power_spike": "mid",
    "strengths": "Tướng vị trí MID, bộ kỹ năng cân bằng, có khả năng tạo đột biến giao tranh tốt khi phối hợp cùng đồng đội.",
    "weaknesses": "Cần giữ vị trí cẩn thận, dễ bị bắt lẻ khi thiếu tầm nhìn hoặc khi hết chiêu thức tẩu thoát.",
    "countered_by": [
      "aleister",
      "omen",
      "arum"
    ],
    "counters": [
      "valhein"
    ],
    "synergies": [
      "thane",
      "krizzix",
      "aya"
    ],
    "counter_tips": "Chú ý lượng trang bị của Jinna. Sử dụng khống chế cứng chỉ định để bắt trong combat tổng.",
    "counter_items": [
      "Huân Chương Troy",
      "Quả Cầu Băng Sương"
    ]
  },
  {
    "id": "cresht",
    "name": "Cresht",
    "avatar": "https://lienquan.garena.vn/wp-content/uploads/2024/05/04b0a1140d89b8ef0cd4a655753bbb895c4938662bc9f1.jpg",
    "roles": [
      "Đỡ đòn"
    ],
    "lane": "sp",
    "secondary_lane": "top",
    "tier": "A",
    "damage_type": "physical",
    "mobility": 50,
    "cc_rating": 85,
    "power_spike": "mid",
    "strengths": "Tướng vị trí SP, bộ kỹ năng cân bằng, có khả năng tạo đột biến giao tranh tốt khi phối hợp cùng đồng đội.",
    "weaknesses": "Cần giữ vị trí cẩn thận, dễ bị bắt lẻ khi thiếu tầm nhìn hoặc khi hết chiêu thức tẩu thoát.",
    "countered_by": [
      "aleister",
      "omen",
      "arum"
    ],
    "counters": [
      "valhein"
    ],
    "synergies": [
      "thane",
      "krizzix",
      "aya"
    ],
    "counter_tips": "Chú ý lượng trang bị của Cresht. Sử dụng khống chế cứng chỉ định để bắt trong combat tổng.",
    "counter_items": [
      "Mặt Nạ Berith",
      "Thương Khung Kiếm"
    ]
  },
  {
    "id": "natalya",
    "name": "Natalya",
    "avatar": "https://lienquan.garena.vn/wp-content/uploads/2024/05/a450850337d6a5d19250b1d1e39692f15eccc530c915e1.jpg",
    "roles": [
      "Pháp sư"
    ],
    "lane": "mid",
    "secondary_lane": null,
    "tier": "A",
    "damage_type": "magic",
    "mobility": 55,
    "cc_rating": 75,
    "power_spike": "mid",
    "strengths": "Tướng vị trí MID, bộ kỹ năng cân bằng, có khả năng tạo đột biến giao tranh tốt khi phối hợp cùng đồng đội.",
    "weaknesses": "Cần giữ vị trí cẩn thận, dễ bị bắt lẻ khi thiếu tầm nhìn hoặc khi hết chiêu thức tẩu thoát.",
    "countered_by": [
      "aleister",
      "omen",
      "arum"
    ],
    "counters": [
      "valhein"
    ],
    "synergies": [
      "thane",
      "krizzix",
      "aya"
    ],
    "counter_tips": "Chú ý lượng trang bị của Natalya. Sử dụng khống chế cứng chỉ định để bắt trong combat tổng.",
    "counter_items": [
      "Huân Chương Troy",
      "Quả Cầu Băng Sương"
    ]
  },
  {
    "id": "lumburr",
    "name": "Lumburr",
    "avatar": "https://lienquan.garena.vn/wp-content/uploads/2024/05/119dc57d5a3a59b520b93a42301ffb135e7dedbf1c28a1.jpg",
    "roles": [
      "Đỡ đòn"
    ],
    "lane": "sp",
    "secondary_lane": "top",
    "tier": "A",
    "damage_type": "physical",
    "mobility": 50,
    "cc_rating": 85,
    "power_spike": "mid",
    "strengths": "Tướng vị trí SP, bộ kỹ năng cân bằng, có khả năng tạo đột biến giao tranh tốt khi phối hợp cùng đồng đội.",
    "weaknesses": "Cần giữ vị trí cẩn thận, dễ bị bắt lẻ khi thiếu tầm nhìn hoặc khi hết chiêu thức tẩu thoát.",
    "countered_by": [
      "aleister",
      "omen",
      "arum"
    ],
    "counters": [
      "valhein"
    ],
    "synergies": [
      "thane",
      "krizzix",
      "aya"
    ],
    "counter_tips": "Chú ý lượng trang bị của Lumburr. Sử dụng khống chế cứng chỉ định để bắt trong combat tổng.",
    "counter_items": [
      "Mặt Nạ Berith",
      "Thương Khung Kiếm"
    ]
  },
  {
    "id": "fennik",
    "name": "Fennik",
    "avatar": "https://lienquan.garena.vn/wp-content/uploads/2024/05/ab3f51a9731ffa085fd56a87139b8a775860e26837e191.jpg",
    "roles": [
      "Xạ thủ"
    ],
    "lane": "ad",
    "secondary_lane": null,
    "tier": "A",
    "damage_type": "physical",
    "mobility": 60,
    "cc_rating": 40,
    "power_spike": "mid",
    "strengths": "Tướng vị trí AD, bộ kỹ năng cân bằng, có khả năng tạo đột biến giao tranh tốt khi phối hợp cùng đồng đội.",
    "weaknesses": "Cần giữ vị trí cẩn thận, dễ bị bắt lẻ khi thiếu tầm nhìn hoặc khi hết chiêu thức tẩu thoát.",
    "countered_by": [
      "aleister",
      "omen",
      "arum"
    ],
    "counters": [
      "valhein"
    ],
    "synergies": [
      "thane",
      "krizzix",
      "aya"
    ],
    "counter_tips": "Chú ý lượng trang bị của Fennik. Sử dụng khống chế cứng chỉ định để bắt trong combat tổng.",
    "counter_items": [
      "Giáp Gai",
      "Khiên Thất Truyền"
    ]
  },
  {
    "id": "aleister",
    "name": "Aleister",
    "avatar": "https://lienquan.garena.vn/wp-content/uploads/2024/05/15600.jpg",
    "roles": [
      "Pháp sư"
    ],
    "lane": "mid",
    "secondary_lane": null,
    "tier": "A",
    "damage_type": "magic",
    "mobility": 55,
    "cc_rating": 75,
    "power_spike": "mid",
    "strengths": "Tướng vị trí MID, bộ kỹ năng cân bằng, có khả năng tạo đột biến giao tranh tốt khi phối hợp cùng đồng đội.",
    "weaknesses": "Cần giữ vị trí cẩn thận, dễ bị bắt lẻ khi thiếu tầm nhìn hoặc khi hết chiêu thức tẩu thoát.",
    "countered_by": [
      "aleister",
      "omen",
      "arum"
    ],
    "counters": [
      "valhein"
    ],
    "synergies": [
      "thane",
      "krizzix",
      "aya"
    ],
    "counter_tips": "Chú ý lượng trang bị của Aleister. Sử dụng khống chế cứng chỉ định để bắt trong combat tổng.",
    "counter_items": [
      "Huân Chương Troy",
      "Quả Cầu Băng Sương"
    ]
  },
  {
    "id": "grakk",
    "name": "Grakk",
    "avatar": "https://lienquan.garena.vn/wp-content/uploads/2024/05/040403525e2882c0e3a6794c31976c89585357ba19a351.png",
    "roles": [
      "Khác"
    ],
    "lane": "top",
    "secondary_lane": null,
    "tier": "A",
    "damage_type": "physical",
    "mobility": 65,
    "cc_rating": 60,
    "power_spike": "mid",
    "strengths": "Tướng vị trí TOP, bộ kỹ năng cân bằng, có khả năng tạo đột biến giao tranh tốt khi phối hợp cùng đồng đội.",
    "weaknesses": "Cần giữ vị trí cẩn thận, dễ bị bắt lẻ khi thiếu tầm nhìn hoặc khi hết chiêu thức tẩu thoát.",
    "countered_by": [
      "aleister",
      "omen",
      "arum"
    ],
    "counters": [
      "valhein"
    ],
    "synergies": [
      "thane",
      "krizzix",
      "aya"
    ],
    "counter_tips": "Chú ý lượng trang bị của Grakk. Sử dụng khống chế cứng chỉ định để bắt trong combat tổng.",
    "counter_items": [
      "Giày Kiên Cường",
      "Huân Chương Troy"
    ]
  },
  {
    "lane": "jungle",
    "secondary_lane": null,
    "tier": "S",
    "damage_type": "physical",
    "mobility": 98,
    "cc_rating": 75,
    "power_spike": "early-mid",
    "strengths": "3 kỹ năng lướt vượt mọi địa hình với thời gian hồi chiêu siêu ngắn. Khả năng cướp bùa, đảo gank và đẩy trộm công trình bậc thầy.",
    "weaknesses": "Lượng máu rất mỏng, rơi vào tình trạng bị khống chế cứng chỉ định là bốc hơi ngay lập tức.",
    "countered_by": [
      "omen",
      "aleister",
      "arum",
      "skud",
      "baldum",
      "stuart"
    ],
    "counters": [
      "krixi",
      "yorn",
      "telannas",
      "natalya",
      "dieu-thuyen"
    ],
    "synergies": [
      "krizzix",
      "lumburr",
      "aya",
      "thane"
    ],
    "counter_tips": "Giữ chiêu khống chế chỉ định (Aleister, Arum) chờ Nakroth lao vào. Sang cướp rừng từ sớm để hắn không đạt cấp 4 đúng tiến độ.",
    "counter_items": [
      "Áo Choàng Băng Giá",
      "Khiên Thất Truyền",
      "Giáp Gai"
    ],
    "id": "nakroth",
    "name": "Nakroth",
    "avatar": "https://lienquan.garena.vn/wp-content/uploads/2024/05/c7b840bdacd7e5a8b83af72ccd9ca1815ec64fdc5ffeb1.jpg",
    "roles": [
      "Sát thủ"
    ]
  },
  {
    "id": "taara",
    "name": "Taara",
    "avatar": "https://lienquan.garena.vn/wp-content/uploads/2024/05/f69423f533b12cbcd8ab15a7127e1e445e79e0b77e4ec1.jpg",
    "roles": [
      "Đỡ đòn"
    ],
    "lane": "sp",
    "secondary_lane": "top",
    "tier": "A",
    "damage_type": "physical",
    "mobility": 50,
    "cc_rating": 85,
    "power_spike": "mid",
    "strengths": "Tướng vị trí SP, bộ kỹ năng cân bằng, có khả năng tạo đột biến giao tranh tốt khi phối hợp cùng đồng đội.",
    "weaknesses": "Cần giữ vị trí cẩn thận, dễ bị bắt lẻ khi thiếu tầm nhìn hoặc khi hết chiêu thức tẩu thoát.",
    "countered_by": [
      "aleister",
      "omen",
      "arum"
    ],
    "counters": [
      "valhein"
    ],
    "synergies": [
      "thane",
      "krizzix",
      "aya"
    ],
    "counter_tips": "Chú ý lượng trang bị của Taara. Sử dụng khống chế cứng chỉ định để bắt trong combat tổng.",
    "counter_items": [
      "Mặt Nạ Berith",
      "Thương Khung Kiếm"
    ]
  },
  {
    "lane": "sp",
    "secondary_lane": null,
    "tier": "S",
    "damage_type": "physical",
    "mobility": 55,
    "cc_rating": 85,
    "power_spike": "all",
    "strengths": "Bao cát di động trâu bậc nhất Liên Quân Mobile: Toàn bộ kỹ năng khi tung ra đều được miễn nhiễm 100% mọi hiệu ứng khống chế và giảm mạnh sát thương gánh chịu.",
    "weaknesses": "Rất sợ sát thương chuẩn và các xạ thủ cơ động bắn theo % máu (Hayate, Slimz).",
    "countered_by": [
      "hayate",
      "florentino",
      "allain",
      "slimz"
    ],
    "counters": [
      "kaine",
      "nakroth",
      "aoi",
      "kriknak"
    ],
    "synergies": [
      "liliana",
      "yue",
      "violet",
      "capheny"
    ],
    "counter_tips": "Đừng dồn kỹ năng khống chế vào Toro khi hắn đang dậm chiêu. Bỏ qua Toro và vòng ra sau bắt thẳng vào Xạ thủ/Pháp sư đối phương.",
    "counter_items": [
      "Mặt Nạ Berith",
      "Thương Khung Kiếm"
    ],
    "id": "toro",
    "name": "Toro",
    "avatar": "https://lienquan.garena.vn/wp-content/uploads/2024/05/ffd2c29391b67831e97a0b16534a65d45ef5921c2bcb41.jpg",
    "roles": [
      "Đỡ đòn"
    ]
  },
  {
    "id": "yorn",
    "name": "Yorn",
    "avatar": "https://lienquan.garena.vn/wp-content/uploads/2024/05/44086d0bc26a170b21038a7cbf9413365c4938b95b2f91.jpg",
    "roles": [
      "Xạ thủ"
    ],
    "lane": "ad",
    "secondary_lane": null,
    "tier": "A",
    "damage_type": "physical",
    "mobility": 60,
    "cc_rating": 40,
    "power_spike": "mid",
    "strengths": "Tướng vị trí AD, bộ kỹ năng cân bằng, có khả năng tạo đột biến giao tranh tốt khi phối hợp cùng đồng đội.",
    "weaknesses": "Cần giữ vị trí cẩn thận, dễ bị bắt lẻ khi thiếu tầm nhìn hoặc khi hết chiêu thức tẩu thoát.",
    "countered_by": [
      "aleister",
      "omen",
      "arum"
    ],
    "counters": [
      "valhein"
    ],
    "synergies": [
      "thane",
      "krizzix",
      "aya"
    ],
    "counter_tips": "Chú ý lượng trang bị của Yorn. Sử dụng khống chế cứng chỉ định để bắt trong combat tổng.",
    "counter_items": [
      "Giáp Gai",
      "Khiên Thất Truyền"
    ]
  },
  {
    "id": "gildur",
    "name": "Gildur",
    "avatar": "https://lienquan.garena.vn/wp-content/uploads/2024/05/10800_B40-1.jpg",
    "roles": [
      "Khác"
    ],
    "lane": "top",
    "secondary_lane": null,
    "tier": "A",
    "damage_type": "physical",
    "mobility": 65,
    "cc_rating": 60,
    "power_spike": "mid",
    "strengths": "Tướng vị trí TOP, bộ kỹ năng cân bằng, có khả năng tạo đột biến giao tranh tốt khi phối hợp cùng đồng đội.",
    "weaknesses": "Cần giữ vị trí cẩn thận, dễ bị bắt lẻ khi thiếu tầm nhìn hoặc khi hết chiêu thức tẩu thoát.",
    "countered_by": [
      "aleister",
      "omen",
      "arum"
    ],
    "counters": [
      "valhein"
    ],
    "synergies": [
      "thane",
      "krizzix",
      "aya"
    ],
    "counter_tips": "Chú ý lượng trang bị của Gildur. Sử dụng khống chế cứng chỉ định để bắt trong combat tổng.",
    "counter_items": [
      "Giày Kiên Cường",
      "Huân Chương Troy"
    ]
  },
  {
    "id": "alice",
    "name": "Alice",
    "avatar": "https://lienquan.garena.vn/wp-content/uploads/2024/05/b9dd8e24c0fbad107475f6e31f5e36365847d373da15b1.png",
    "roles": [
      "Trợ thủ"
    ],
    "lane": "sp",
    "secondary_lane": null,
    "tier": "A",
    "damage_type": "magic",
    "mobility": 60,
    "cc_rating": 80,
    "power_spike": "mid",
    "strengths": "Tướng vị trí SP, bộ kỹ năng cân bằng, có khả năng tạo đột biến giao tranh tốt khi phối hợp cùng đồng đội.",
    "weaknesses": "Cần giữ vị trí cẩn thận, dễ bị bắt lẻ khi thiếu tầm nhìn hoặc khi hết chiêu thức tẩu thoát.",
    "countered_by": [
      "aleister",
      "omen",
      "arum"
    ],
    "counters": [
      "valhein"
    ],
    "synergies": [
      "thane",
      "krizzix",
      "aya"
    ],
    "counter_tips": "Chú ý lượng trang bị của Alice. Sử dụng khống chế cứng chỉ định để bắt trong combat tổng.",
    "counter_items": [
      "Sách Truy Hồn",
      "Đao Truy Hồn"
    ]
  },
  {
    "id": "azzenka",
    "name": "Azzen’Ka",
    "avatar": "https://lienquan.garena.vn/wp-content/uploads/2024/05/12700_B51-1.jpg",
    "roles": [
      "Pháp sư"
    ],
    "lane": "mid",
    "secondary_lane": null,
    "tier": "A",
    "damage_type": "magic",
    "mobility": 55,
    "cc_rating": 75,
    "power_spike": "mid",
    "strengths": "Tướng vị trí MID, bộ kỹ năng cân bằng, có khả năng tạo đột biến giao tranh tốt khi phối hợp cùng đồng đội.",
    "weaknesses": "Cần giữ vị trí cẩn thận, dễ bị bắt lẻ khi thiếu tầm nhìn hoặc khi hết chiêu thức tẩu thoát.",
    "countered_by": [
      "aleister",
      "omen",
      "arum"
    ],
    "counters": [
      "valhein"
    ],
    "synergies": [
      "thane",
      "krizzix",
      "aya"
    ],
    "counter_tips": "Chú ý lượng trang bị của Azzen’Ka. Sử dụng khống chế cứng chỉ định để bắt trong combat tổng.",
    "counter_items": [
      "Huân Chương Troy",
      "Quả Cầu Băng Sương"
    ]
  },
  {
    "id": "ormarr",
    "name": "Ormarr",
    "avatar": "https://lienquan.garena.vn/wp-content/uploads/2024/05/fd2a04f2b129ef58988f2d311eac83e45b6d0919e7d901.jpg",
    "roles": [
      "Đấu sĩ"
    ],
    "lane": "top",
    "secondary_lane": "jungle",
    "tier": "A",
    "damage_type": "physical",
    "mobility": 70,
    "cc_rating": 65,
    "power_spike": "mid",
    "strengths": "Tướng vị trí TOP, bộ kỹ năng cân bằng, có khả năng tạo đột biến giao tranh tốt khi phối hợp cùng đồng đội.",
    "weaknesses": "Cần giữ vị trí cẩn thận, dễ bị bắt lẻ khi thiếu tầm nhìn hoặc khi hết chiêu thức tẩu thoát.",
    "countered_by": [
      "aleister",
      "omen",
      "arum"
    ],
    "counters": [
      "valhein"
    ],
    "synergies": [
      "thane",
      "krizzix",
      "aya"
    ],
    "counter_tips": "Chú ý lượng trang bị của Ormarr. Sử dụng khống chế cứng chỉ định để bắt trong combat tổng.",
    "counter_items": [
      "Áo Choàng Băng Giá",
      "Khiên Thất Truyền"
    ]
  },
  {
    "id": "butterfly",
    "name": "Butterfly",
    "avatar": "https://lienquan.garena.vn/wp-content/uploads/2024/05/769a9fe6cb9b9725127a094bb6dd36545f0ed6543592e1.jpg",
    "roles": [
      "Sát thủ"
    ],
    "lane": "jungle",
    "secondary_lane": "top",
    "tier": "S+",
    "damage_type": "physical",
    "mobility": 88,
    "cc_rating": 60,
    "power_spike": "all",
    "strengths": "Quái vật rừng giải đấu và rank cao cực hot hiện tại. Cơ chế hồi chiêu liên hoàn khi hạ gục/phụ tá, chiêu cuối Ám Sát áp sát mục tiêu thấp máu nhất nhận tới 35% miễn thương và miễn làm chậm. Lối lên đồ đấu sĩ semi-tank giúp Butterfly vừa trâu bò vừa chém reset chiêu quét sạch cả đội hình (Pentakill) trong 3 giây.",
    "weaknesses": "Cực sợ khống chế cứng chỉ định (Aleister, Arum, Omen). Nếu nhảy vào mà không dứt điểm được mục tiêu để kích hoạt làm mới chiêu thì sẽ bị cô lập.",
    "countered_by": [
      "aleister",
      "arum",
      "omen",
      "stuart",
      "toro",
      "chaugnar"
    ],
    "counters": [
      "yorn",
      "telannas",
      "krixi",
      "natalya",
      "valhein",
      "nakroth",
      "murad",
      "violet"
    ],
    "synergies": [
      "aya",
      "krizzix",
      "helen",
      "thane",
      "rouie"
    ],
    "counter_tips": "Bắt buộc giữ chiêu khống chế cứng (Aleister, Arum, Omen) để khóa chết Butterfly ngay khi cô nàng vừa nhảy chiêu cuối vào. Tuyệt đối không đứng tụm lại khi có đồng đội thấp máu.",
    "counter_items": [
      "Quả Cầu Băng Sương",
      "Giáp Hộ Mệnh",
      "Khiên Thất Truyền",
      "Giáp Thống Khổ"
    ]
  },
  {
    "lane": "ad",
    "secondary_lane": "jungle",
    "tier": "S",
    "damage_type": "physical",
    "mobility": 80,
    "cc_rating": 45,
    "power_spike": "mid-late",
    "strengths": "Lộn bắn Đạn Xuyên Thấu cấu rỉa tầm cực xa, ép trụ và bào máu đối thủ siêu thốn. Late game chỉ cần 1 phát bắn cường hóa chí mạng là đối phương mất hơn nửa cây máu.",
    "weaknesses": "Đầu trận cần thời gian farm trang bị. Lộn bắn sai vị trí sẽ tự đưa mình vào tầm khống chế của địch.",
    "countered_by": [
      "kaine",
      "aoi",
      "nakroth",
      "zuka",
      "tamyn"
    ],
    "counters": [
      "valhein",
      "telannas",
      "yorn",
      "hayate"
    ],
    "synergies": [
      "thane",
      "lumburr",
      "helen",
      "teemee"
    ],
    "counter_tips": "Canh thời điểm Violet vừa lộn bắn xong (lúc chưa hồi lại chiêu 1) để lao vào áp sát dồn sát thương.",
    "counter_items": [
      "Giáp Gai",
      "Khiên Thất Truyền",
      "Áo Choàng Băng Giá"
    ],
    "id": "violet",
    "name": "Violet",
    "avatar": "https://lienquan.garena.vn/wp-content/uploads/2024/05/f91d8c95b3b0c11c6fe5b8ac20e48cbd5d25650254d571.jpg",
    "roles": [
      "Xạ thủ"
    ]
  },
  {
    "lane": "sp",
    "secondary_lane": "mid",
    "tier": "S",
    "damage_type": "magic",
    "mobility": 75,
    "cc_rating": 60,
    "power_spike": "all",
    "strengths": "Khắc tinh tối thượng của mọi đội hình khống chế cứng: Chiêu cuối Hóa Giải giải toàn bộ hiệu ứng khống chế cho toàn đội, tăng tốc chạy và miễn thương trong 3 giây.",
    "weaknesses": "Không có kỹ năng khống chế cứng chủ động (choáng, hất tung) để mở combat bắt lẻ.",
    "countered_by": [
      "hayate",
      "florentino",
      "allain"
    ],
    "counters": [
      "aya",
      "dieu-thuyen",
      "grakk",
      "baldum",
      "alice",
      "omen"
    ],
    "synergies": [
      "tamyn",
      "hayate",
      "capheny",
      "tulen"
    ],
    "counter_tips": "Dụ Chaugnar dùng chiêu cuối trước bằng các chiêu cấu rỉa khống chế nhẹ, sau đó mới dồn combo khống chế chính vào chủ lực.",
    "counter_items": [
      "Sách Truy Hồn",
      "Đao Truy Hồn"
    ],
    "id": "chaugnar",
    "name": "Chaugnar",
    "avatar": "https://lienquan.garena.vn/wp-content/uploads/2024/05/3eb3c69cef807c5706a98cc4b799619b5b3456990e6501.jpg",
    "roles": [
      "Trợ thủ"
    ]
  },
  {
    "id": "dieu-thuyen",
    "name": "Điêu Thuyền",
    "avatar": "https://lienquan.garena.vn/wp-content/uploads/2024/05/d93ee5059a95c391548419e69b6b9d1a5d2564f4eba891.jpg",
    "roles": [
      "Pháp sư"
    ],
    "lane": "mid",
    "secondary_lane": null,
    "tier": "A",
    "damage_type": "magic",
    "mobility": 55,
    "cc_rating": 75,
    "power_spike": "mid",
    "strengths": "Tướng vị trí MID, bộ kỹ năng cân bằng, có khả năng tạo đột biến giao tranh tốt khi phối hợp cùng đồng đội.",
    "weaknesses": "Cần giữ vị trí cẩn thận, dễ bị bắt lẻ khi thiếu tầm nhìn hoặc khi hết chiêu thức tẩu thoát.",
    "countered_by": [
      "aleister",
      "omen",
      "arum"
    ],
    "counters": [
      "valhein"
    ],
    "synergies": [
      "thane",
      "krizzix",
      "aya"
    ],
    "counter_tips": "Chú ý lượng trang bị của Điêu Thuyền. Sử dụng khống chế cứng chỉ định để bắt trong combat tổng.",
    "counter_items": [
      "Huân Chương Troy",
      "Quả Cầu Băng Sương"
    ]
  },
  {
    "id": "zephys",
    "name": "Zephys",
    "avatar": "https://lienquan.garena.vn/wp-content/uploads/2024/05/zephys-1.jpg",
    "roles": [
      "Đấu sĩ"
    ],
    "lane": "top",
    "secondary_lane": "jungle",
    "tier": "A",
    "damage_type": "physical",
    "mobility": 70,
    "cc_rating": 65,
    "power_spike": "mid",
    "strengths": "Tướng vị trí TOP, bộ kỹ năng cân bằng, có khả năng tạo đột biến giao tranh tốt khi phối hợp cùng đồng đội.",
    "weaknesses": "Cần giữ vị trí cẩn thận, dễ bị bắt lẻ khi thiếu tầm nhìn hoặc khi hết chiêu thức tẩu thoát.",
    "countered_by": [
      "aleister",
      "omen",
      "arum"
    ],
    "counters": [
      "valhein"
    ],
    "synergies": [
      "thane",
      "krizzix",
      "aya"
    ],
    "counter_tips": "Chú ý lượng trang bị của Zephys. Sử dụng khống chế cứng chỉ định để bắt trong combat tổng.",
    "counter_items": [
      "Áo Choàng Băng Giá",
      "Khiên Thất Truyền"
    ]
  },
  {
    "id": "kahlii",
    "name": "Kahlii",
    "avatar": "https://lienquan.garena.vn/wp-content/uploads/2024/05/fe313975ef498b33a7bf995a05d6f8b75847d42a599181.png",
    "roles": [
      "Pháp sư"
    ],
    "lane": "mid",
    "secondary_lane": null,
    "tier": "A",
    "damage_type": "magic",
    "mobility": 55,
    "cc_rating": 75,
    "power_spike": "mid",
    "strengths": "Tướng vị trí MID, bộ kỹ năng cân bằng, có khả năng tạo đột biến giao tranh tốt khi phối hợp cùng đồng đội.",
    "weaknesses": "Cần giữ vị trí cẩn thận, dễ bị bắt lẻ khi thiếu tầm nhìn hoặc khi hết chiêu thức tẩu thoát.",
    "countered_by": [
      "aleister",
      "omen",
      "arum"
    ],
    "counters": [
      "valhein"
    ],
    "synergies": [
      "thane",
      "krizzix",
      "aya"
    ],
    "counter_tips": "Chú ý lượng trang bị của Kahlii. Sử dụng khống chế cứng chỉ định để bắt trong combat tổng.",
    "counter_items": [
      "Huân Chương Troy",
      "Quả Cầu Băng Sương"
    ]
  },
  {
    "id": "omega",
    "name": "Omega",
    "avatar": "https://lienquan.garena.vn/wp-content/uploads/2024/05/cb7b811e7978882aefac079de6c93daf5fbcc5716f8ad1.jpg",
    "roles": [
      "Đỡ đòn"
    ],
    "lane": "sp",
    "secondary_lane": "top",
    "tier": "A",
    "damage_type": "physical",
    "mobility": 50,
    "cc_rating": 85,
    "power_spike": "mid",
    "strengths": "Tướng vị trí SP, bộ kỹ năng cân bằng, có khả năng tạo đột biến giao tranh tốt khi phối hợp cùng đồng đội.",
    "weaknesses": "Cần giữ vị trí cẩn thận, dễ bị bắt lẻ khi thiếu tầm nhìn hoặc khi hết chiêu thức tẩu thoát.",
    "countered_by": [
      "aleister",
      "omen",
      "arum"
    ],
    "counters": [
      "valhein"
    ],
    "synergies": [
      "thane",
      "krizzix",
      "aya"
    ],
    "counter_tips": "Chú ý lượng trang bị của Omega. Sử dụng khống chế cứng chỉ định để bắt trong combat tổng.",
    "counter_items": [
      "Mặt Nạ Berith",
      "Thương Khung Kiếm"
    ]
  },
  {
    "id": "trieu-van",
    "name": "Triệu Vân",
    "avatar": "https://lienquan.garena.vn/wp-content/uploads/2024/05/d7088075d6e144e11f476782718320865d256521539c41.jpg",
    "roles": [
      "Đấu sĩ"
    ],
    "lane": "top",
    "secondary_lane": "jungle",
    "tier": "A",
    "damage_type": "physical",
    "mobility": 70,
    "cc_rating": 65,
    "power_spike": "mid",
    "strengths": "Tướng vị trí TOP, bộ kỹ năng cân bằng, có khả năng tạo đột biến giao tranh tốt khi phối hợp cùng đồng đội.",
    "weaknesses": "Cần giữ vị trí cẩn thận, dễ bị bắt lẻ khi thiếu tầm nhìn hoặc khi hết chiêu thức tẩu thoát.",
    "countered_by": [
      "aleister",
      "omen",
      "arum"
    ],
    "counters": [
      "valhein"
    ],
    "synergies": [
      "thane",
      "krizzix",
      "aya"
    ],
    "counter_tips": "Chú ý lượng trang bị của Triệu Vân. Sử dụng khống chế cứng chỉ định để bắt trong combat tổng.",
    "counter_items": [
      "Áo Choàng Băng Giá",
      "Khiên Thất Truyền"
    ]
  },
  {
    "id": "mganga",
    "name": "Mganga",
    "avatar": "https://lienquan.garena.vn/wp-content/uploads/2024/05/053654897539713c86a745376bc8e8125d25652cf33f01.jpg",
    "roles": [
      "Pháp sư"
    ],
    "lane": "mid",
    "secondary_lane": null,
    "tier": "A",
    "damage_type": "magic",
    "mobility": 55,
    "cc_rating": 75,
    "power_spike": "mid",
    "strengths": "Tướng vị trí MID, bộ kỹ năng cân bằng, có khả năng tạo đột biến giao tranh tốt khi phối hợp cùng đồng đội.",
    "weaknesses": "Cần giữ vị trí cẩn thận, dễ bị bắt lẻ khi thiếu tầm nhìn hoặc khi hết chiêu thức tẩu thoát.",
    "countered_by": [
      "aleister",
      "omen",
      "arum"
    ],
    "counters": [
      "valhein"
    ],
    "synergies": [
      "thane",
      "krizzix",
      "aya"
    ],
    "counter_tips": "Chú ý lượng trang bị của Mganga. Sử dụng khống chế cứng chỉ định để bắt trong combat tổng.",
    "counter_items": [
      "Huân Chương Troy",
      "Quả Cầu Băng Sương"
    ]
  },
  {
    "lane": "mid",
    "secondary_lane": null,
    "tier": "S",
    "damage_type": "magic",
    "mobility": 65,
    "cc_rating": 80,
    "power_spike": "all",
    "strengths": "Pháp sư truyền thống chuẩn mực: dễ chơi, chiêu 2 hất tung khống chế cứng, chiêu 1 bướm lượn cấu rỉa xa, chiêu cuối xả mưa sao băng tăng mạnh tốc chạy.",
    "weaknesses": "Không có chiêu lướt vượt địa hình, mỏng manh trước các sát thủ cơ động.",
    "countered_by": [
      "nakroth",
      "aoi",
      "kaine",
      "murad",
      "zuka"
    ],
    "counters": [
      "valhein",
      "arthur",
      "dieu-thuyen",
      "veera"
    ],
    "synergies": [
      "grakk",
      "thane",
      "lumburr",
      "baldum"
    ],
    "counter_tips": "Lên Quả Cầu Băng Sương để câu giờ khi bị áp sát. Luôn giữ vị trí an toàn phía sau tanker.",
    "counter_items": [
      "Huân Chương Troy",
      "Giày Kiên Cường"
    ],
    "id": "krixi",
    "name": "Krixi",
    "avatar": "https://lienquan.garena.vn/wp-content/uploads/2024/05/7f04b1fd7f0520dd1ccbd1caad6faf1a5847d3f72e85b1.png",
    "roles": [
      "Pháp sư"
    ]
  },
  {
    "id": "mina",
    "name": "Mina",
    "avatar": "https://lienquan.garena.vn/wp-content/uploads/2024/05/09d93eb47007482254115f99686694d25847d3e83fdf41.png",
    "roles": [
      "Đỡ đòn"
    ],
    "lane": "sp",
    "secondary_lane": "top",
    "tier": "A",
    "damage_type": "physical",
    "mobility": 50,
    "cc_rating": 85,
    "power_spike": "mid",
    "strengths": "Tướng vị trí SP, bộ kỹ năng cân bằng, có khả năng tạo đột biến giao tranh tốt khi phối hợp cùng đồng đội.",
    "weaknesses": "Cần giữ vị trí cẩn thận, dễ bị bắt lẻ khi thiếu tầm nhìn hoặc khi hết chiêu thức tẩu thoát.",
    "countered_by": [
      "aleister",
      "omen",
      "arum"
    ],
    "counters": [
      "valhein"
    ],
    "synergies": [
      "thane",
      "krizzix",
      "aya"
    ],
    "counter_tips": "Chú ý lượng trang bị của Mina. Sử dụng khống chế cứng chỉ định để bắt trong combat tổng.",
    "counter_items": [
      "Mặt Nạ Berith",
      "Thương Khung Kiếm"
    ]
  },
  {
    "id": "lu-bo",
    "name": "Lữ Bố",
    "avatar": "https://lienquan.garena.vn/wp-content/uploads/2024/05/ecbf2434edb2b16cc0d5b286a88ab4335d2565110472b1.jpg",
    "roles": [
      "Đấu sĩ"
    ],
    "lane": "top",
    "secondary_lane": "jungle",
    "tier": "A",
    "damage_type": "physical",
    "mobility": 70,
    "cc_rating": 65,
    "power_spike": "mid",
    "strengths": "Tướng vị trí TOP, bộ kỹ năng cân bằng, có khả năng tạo đột biến giao tranh tốt khi phối hợp cùng đồng đội.",
    "weaknesses": "Cần giữ vị trí cẩn thận, dễ bị bắt lẻ khi thiếu tầm nhìn hoặc khi hết chiêu thức tẩu thoát.",
    "countered_by": [
      "aleister",
      "omen",
      "arum"
    ],
    "counters": [
      "valhein"
    ],
    "synergies": [
      "thane",
      "krizzix",
      "aya"
    ],
    "counter_tips": "Chú ý lượng trang bị của Lữ Bố. Sử dụng khống chế cứng chỉ định để bắt trong combat tổng.",
    "counter_items": [
      "Áo Choàng Băng Giá",
      "Khiên Thất Truyền"
    ]
  },
  {
    "id": "veera",
    "name": "Veera",
    "avatar": "https://lienquan.garena.vn/wp-content/uploads/2024/05/82a7e1d31f6b20d3faa502e1a215b76c6595119091e7a2-e1718879982854.jpg",
    "roles": [
      "Pháp sư"
    ],
    "lane": "mid",
    "secondary_lane": null,
    "tier": "A",
    "damage_type": "magic",
    "mobility": 55,
    "cc_rating": 75,
    "power_spike": "mid",
    "strengths": "Tướng vị trí MID, bộ kỹ năng cân bằng, có khả năng tạo đột biến giao tranh tốt khi phối hợp cùng đồng đội.",
    "weaknesses": "Cần giữ vị trí cẩn thận, dễ bị bắt lẻ khi thiếu tầm nhìn hoặc khi hết chiêu thức tẩu thoát.",
    "countered_by": [
      "aleister",
      "omen",
      "arum"
    ],
    "counters": [
      "valhein"
    ],
    "synergies": [
      "thane",
      "krizzix",
      "aya"
    ],
    "counter_tips": "Chú ý lượng trang bị của Veera. Sử dụng khống chế cứng chỉ định để bắt trong combat tổng.",
    "counter_items": [
      "Huân Chương Troy",
      "Quả Cầu Băng Sương"
    ]
  },
  {
    "lane": "sp",
    "secondary_lane": "top",
    "tier": "S",
    "damage_type": "true_damage",
    "mobility": 60,
    "cc_rating": 90,
    "power_spike": "all",
    "strengths": "Độ trâu bò top 1 nhờ nội tại hồi phục máu khổng lồ khi xuống máu thấp. Combo ủi chiêu 1 và hất tung chiêu 2 giữ chân đối thủ cực lâu. Chiêu cuối xẻ sát thương chuẩn diện rộng kết liễu cực uy lực.",
    "weaknesses": "Kém cơ động, phụ thuộc nhiều vào Tốc Biến để mở góc ủi chiêu 1 đẹp mắt.",
    "countered_by": [
      "hayate",
      "florentino",
      "chaugnar"
    ],
    "counters": [
      "nakroth",
      "aoi",
      "valhein",
      "yorn"
    ],
    "synergies": [
      "violet",
      "hayate",
      "liliana",
      "tulen"
    ],
    "counter_tips": "Không đứng thẳng hàng để Thane đẩy trúng nhiều người về trụ. Lên các trang bị gây sát thương chuẩn theo % máu.",
    "counter_items": [
      "Thương Xuyên Phá",
      "Mặt Nạ Berith"
    ],
    "id": "thane",
    "name": "Thane",
    "avatar": "https://lienquan.garena.vn/wp-content/uploads/2024/05/71e488144b7dc9f13d40321ce0556efc5847d39f2071a1.png",
    "roles": [
      "Đỡ đòn"
    ]
  },
  {
    "lane": "ad",
    "secondary_lane": "top",
    "tier": "S",
    "damage_type": "hybrid",
    "mobility": 75,
    "cc_rating": 80,
    "power_spike": "early",
    "strengths": "Đè đường số 1 giai đoạn đầu game. Làm choáng đơn mục tiêu chuẩn xác 100% không cần định hướng. Sát thương hỗn hợp vật lý + phép + tốc đánh và tốc chạy thả diều cực khó chịu.",
    "weaknesses": "Tầm đánh tay cơ bản ngắn, không có chiêu lướt vượt địa hình, về late game tầm ảnh hưởng không bằng xạ thủ bắn tỉa truyền thống.",
    "countered_by": [
      "hayate",
      "violet",
      "elsu",
      "yue",
      "liliana"
    ],
    "counters": [
      "hayate",
      "slimz",
      "telannas",
      "yorn"
    ],
    "synergies": [
      "helen",
      "alice",
      "krizzix",
      "thane"
    ],
    "counter_tips": "Đánh hòa hoãn đầu trận, tránh đứng gần bụi để hắn ném phi tiêu choáng. Kéo trận đấu về late game để tận dụng tầm bắn xa hơn.",
    "counter_items": [
      "Khiên Thất Truyền",
      "Giáp Gai",
      "Huân Chương Troy"
    ],
    "id": "valhein",
    "name": "Valhein",
    "avatar": "https://lienquan.garena.vn/wp-content/uploads/2024/05/4b36c6e5e2d1ce9dd9e2841d2902043c5ee04efeb2f2d1.jpg",
    "roles": [
      "Xạ thủ"
    ]
  }
];

// Danh mục đường chuẩn
const LANES = {
  top: { id: "top", name: "Đường Caesar (Top)", shortName: "Top", icon: "🛡️", color: "#f59e0b" },
  jungle: { id: "jungle", name: "Đường Rừng (Jungle)", shortName: "Rừng", icon: "⚔️", color: "#ef4444" },
  mid: { id: "mid", name: "Đường Giữa (Mid)", shortName: "Mid", icon: "🔮", color: "#8b5cf6" },
  ad: { id: "ad", name: "Đường Rồng (Xạ Thủ)", shortName: "AD", icon: "🏹", color: "#06b6d4" },
  sp: { id: "sp", name: "Trợ Thủ (Support)", shortName: "SP", icon: "💚", color: "#10b981" }
};

// Danh mục Tier Meta
const TIERS = {
  "S+": { name: "S+ Tier (Trùm Meta)", color: "#eab308", bg: "#fef08a", border: "#ca8a04" },
  "S":  { name: "S Tier (Hot Pick)", color: "#8b5cf6", bg: "#ddd6fe", border: "#7c3aed" },
  "A":  { name: "A Tier (Mạnh Mẽ)", color: "#3b82f6", bg: "#bfdbfe", border: "#2563eb" },
  "B":  { name: "B Tier (Tình Huống)", color: "#64748b", bg: "#e2e8f0", border: "#475569" }
};
