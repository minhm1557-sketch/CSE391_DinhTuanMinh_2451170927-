# Phần A

## Câu A1

1. Cách 1: Inline CSS 
    Ví dụ: `<h1 style="color: #2563eb; font-size: 32px;">Tiêu đề</h1>`
    Ưu điểm: nhanh, tiện lợi
    Nhược điểm: khó bảo trì và không tái sử dụng được
    Dùng khi: chỉ css 1 phần tử
2. Cách 2: Internal CSS
    Ví dụ:  ```
            <head>
                <style>
                    h1 { color: #2563eb; font-size: 32px; }
                </style>
            </head>
            ```
    Ưu điểm: dễ quản lí hơn inline, áp dụng cho toàn bộ trang
    Nhược điểm: chỉ dùng được cho 1 trang html
    Dùng khi: project chỉ có 1 trang
3. Cách 3: External CSS
    Ví dụ:  ```
            <head>
                <link rel="stylesheet" href="styles.css">
            </head>
            ```
    Ưu điểm: dễ bảo trì và tái sử dụng, dùng được cho nhiều trang html
    Nhược điểm: phức tạp hơn 2 cách còn lại
    Dùng khi: project lớn, nhiều trang

**Nguồn:** 08_introduction_css.md: 3. ⚙️ Core Technical Truth

---

## Câu A2

1. h1                           → Chọn: "ShopTLU"
2. .price                       → Chọn: "25.990.000đ", "45.990.000đ"
3. #app header                  → Chọn: "ShopTLU Home Products About"
4. nav a:first-child             → Chọn: "Home"
5. .product.featured h2         → Chọn: "MacBook Pro"
6. article > p                  → Chọn: "25.990.000đ", "Mô tả sản phẩm...", "45.990.000đ", "Mô tả sản phẩm..."
7. a[href="/"]                  → Chọn: "Home"
8. .top-bar.dark h1              → Chọn: "ShopTLU"

**Nguồn:** 09_css_selectors.md: 🌐 Big Picture — Bản đồ Selectors

---

## Câu A3

1. Trường hợp 1
→ Chiều rộng thực tế = 400 + 20*2 + 5*2 = 450px
→ Không gian chiếm trang = 450 + 10*2 = 470px

2. Trường hợp 2:
→ Chiều rộng thực tế = 400px
→ Kích thước content thực tế = 400 - 20*2 - 5*2 = 350px
→ Không gian chiếm trang = 400 + 10*2 = 420px

3. Trường hợp 3:
→ Khoảng cách giữa 2 box = max(25, 40) = 40px
→ Không phải 65px vì margin dọc không cộng, lấy giá trị lớn hơn

**Nguồn:** 11_box_model.md

---

## Câu A4

1. Tính specificity score 
Rule A: p
→ (0, 0, 1)

Rule B: .price
→ (0, 1, 0)

Rule C: #main-price
→ (1, 0, 0)

Rule D: p.price
→ (0, 1, 1)

2. Element sẽ có màu đỏ (red) vì rule C có specificity cao nhất

3. Nếu thêm `<p class="price" id="main-price" style="color: orange;">` , element có màu cam (orange) vì đây là inline CSS với độ ưu tiên 1000+

4. Nếu Rule A thêm !important, element có màu đen (black) vì !important sẽ đè toàn bộ specificity bình thường với độ ưu tiên là vô hạn

**Nguồn:** 09_css_selectors.md: Specificity — "Ai thắng khi xung đột?"

# Phần B

## Câu B1

- Các selectors đã dùng: id, element, class, pseudo-class, descendant, universal

# Phần C

## Câu C1

1. Chiều rộng thực tế của sidebar: 300 + 20*2 + 1*2 = 342px
   Chiều rộng thực tế của content: 660 + 30*2 + 1*2 = 722px

2. Layout bị vỡ do chiều rộng của container cha là 960 trong khi tổng chiều rộng thực tế của sidebar và content là 342 + 722 = 1064px > 960px

3. Cách 1: Thêm ở trên đầu css
    ```
    * {
        box-sizing: border-box;
    }
    ```
   Cách 2: Tự chỉnh lại độ rộng của container cha, sidebar và content sao cho độ rộng thực thế của container = sidebar + content 

4. Chứng minh 2 cách qua 2 file html debug_layout.html, debug_layout2.html và 2 file debug_layout.css, debug_layout2.css

---

## Câu C2

1. Sản phẩm A có font-size là 14px và có color là blue

2. "Mô tả sản phẩm" có color là blue

3. "Sản phẩm B" có font-size là 20px và có color là blue

4. "Mô tả sản phẩm B" có color là green






