# Phần A
## Câu A1

1.  Thẻ `<meta viewpoint>`: `<meta name="viewport" content="width=device-width, initial-scale=1.0">`
        name="viewport": Thiết lập vùng hiển thị trên di động
        width=device-width: Đặt chiều rộng bằng với chiều rộng thiết bị
        initial-scale=1.0: Đặt mức zoom ban đầu là 100%

2.  Nếu thiếu dòng đó thì iPhone giả định trang rộng 980px (như desktop) → thu nhỏ lại → chữ bé xíu → UX tệ.

3.  Mobile-First: Viết giao diện cho điện thoại trước, sau đó mở rộng cho màn hình lớn hơn. Desktop-First: Viết giao diện cho máy tính trước, rồi chỉnh lại cho Mobile.
    
    Mobile-First:
    ```html
        .product-grid {
            display: grid;
            grid-template-columns: 1fr;     
            gap: 16px;
        }

        @media (min-width: 768px) {
            .product-grid {
                grid-template-columns: repeat(2, 1fr);   
            }
        }
    ```

    Desktop-First:
    ```html
        .container { width: 100%; padding: 10px; }

        @media (min-width: 768px) { .container { width: 768px; } }
    ```

    Mobile-First được khuyên dùng vì:
        Mobile tải ít CSS hơn (mobile chỉ tải mobile styles, không download desktop styles)
        Buộc bạn ưu tiên nội dung quan trọng trước (content thinking)
        Google và performance tools đánh giá cao hơn

**Nguồn:** 13_creating_responsive_layouts.md: 3. ⚙️ Core Technical Truth

---

## Câu A2

1. 
| Pixel | Thiết bị đại diện | Ví dụ lưới sản phẩm |
|---|---|---|
| <576px | Mobile | 1 cột |
| >=576px | Mobile L | 2 cột |
| >=768px | Tablet | 2-3 cột |
| >=992px | Desktop | 4 cột |
| >=1200px | Desktop L | 5 cột |
| >=1400px | Desktop XL | 5-6 cột |

**Nguồn:** 13_creating_responsive_layouts.md: 3. ⚙️ Core Technical Truth

---

## Câu A3

| Chiều rộng màn hình | .container width |
|---|---|
| 375px (iPhone SE) | 100% |
| 600px | 540px |
| 800px | 720px |
| 1000px | 960px |
| 1400px | 1140px |

**Nguồn:** Không có

## Câu A4

1. Variables

SCSS cho phép tạo biến để lưu giá trị dùng nhiều lần.

Ví dụ

```
$primary-color: blue;
$text-color: white;

button {
    background: $primary-color;
    color: $text-color;
}
```

Lợi ích
- Dễ đổi màu/theme
- Tránh lặp code
- Dễ bảo trì

---


2. Nesting

SCSS cho phép viết CSS lồng nhau theo cấu trúc HTML.

Ví dụ

```
.navbar {
    background: black;

    ul {
        list-style: none;
    }

    li {
        display: inline-block;
    }

    a {
        color: white;
    }
}
```

CSS sau khi compile

```
.navbar {
    background: black;
}

.navbar ul {
    list-style: none;
}

.navbar li {
    display: inline-block;
}

.navbar a {
    color: white;
}
```

Lợi ích
- Code dễ đọc
- Thấy rõ quan hệ cha-con
- Tổ chức CSS tốt hơn

---


3. Mixins

Mixins giúp tái sử dụng nhiều đoạn CSS.

Ví dụ

```
@mixin flex-center {
    display: flex;
    justify-content: center;
    align-items: center;
}

.container {
    @include flex-center;
}
```

CSS sau khi compile

```
.container {
    display: flex;
    justify-content: center;
    align-items: center;
}
```

Lợi ích
- Tái sử dụng code
- Giảm lặp CSS
- Dễ quản lý responsive/flex/grid

---


4. @extend / Inheritance

Cho phép một class kế thừa CSS từ class khác.

Ví dụ

```
.button {
    padding: 10px;
    border-radius: 5px;
}

.primary-button {
    @extend .button;
    background: blue;
}
```

CSS sau khi compile

```
.button,
.primary-button {
    padding: 10px;
    border-radius: 5px;
}

.primary-button {
    background: blue;
}
```

Lợi ích
- Kế thừa style
- Giảm lặp code
- Dễ xây dựng component

---

# Phần C
## Câu C1

Phân tích Responsive Design của YouTube

1. Mobile (375px)

Đặc điểm:

- Navigation chuyển thành:
  - Menu hamburger ở góc trái
  - Thanh tìm kiếm thu gọn thành icon
  - Bottom navigation xuất hiện ở cuối màn hình

- Content:
  - Video hiển thị 1 cột

- Elements bị ẩn:
  - Sidebar đầy đủ
  - Một số text menu
  - Thanh category dài bị rút gọn

- Font size:
  - Nhỏ hơn desktop để phù hợp màn hình nhỏ

2. Tablet (768px)

Đặc điểm:

- Navigation:
  - Sidebar thu gọn dạng icon
  - Search bar hiển thị đầy đủ hơn mobile

- Content:
  - Hiển thị khoảng 2–3 cột video

- Elements bị ẩn:
  - Một số text trong sidebar

- Font size:
  - Lớn hơn mobile một chút

3. Desktop (1440px)

Đặc điểm:

- Navigation:
  - Sidebar đầy đủ
  - Search bar dài
  - Nhiều menu và shortcut hơn

- Content:
  - Hiển thị khoảng 4–6 cột video

- Elements bị ẩn:
  - Hầu như không có

- Font size:
  - Lớn và dễ đọc hơn mobile

So sánh Responsive

| Thành phần | Mobile | Tablet | Desktop |
|---|---|---|---|
| Navigation | Hamburger + bottom nav | Sidebar icon | Sidebar đầy đủ |
| Số cột video | 1 | 2–3 | 4–6 |
| Search bar | Thu gọn | Trung bình | Đầy đủ |
| Sidebar | Ẩn | Thu gọn | Hiển thị đầy đủ |
| Font size | Nhỏ | Trung bình | Lớn |


Media Queries của YouTube

Media Query 1

```css
@media (max-width: 656px) {
  #guide {
    display: none;
  }
}
```

Ý nghĩa:

- Khi màn hình nhỏ hơn 656px:
  - Sidebar bị ẩn
  - Giao diện tối ưu cho mobile


Media Query 2

```css
@media (min-width: 1000px) {
  #contents {
    grid-template-columns: repeat(4, 1fr);
  }
}
```

Ý nghĩa:

- Khi màn hình lớn:
  - Layout chuyển thành nhiều cột
  - Hiển thị nhiều video hơn trên 1 hàng


Kết luận

YouTube sử dụng Responsive Design bằng:

- CSS Grid và Flexbox
- Media Queries
- Ẩn/hiện navigation theo kích thước màn hình
- Điều chỉnh số cột video động
- Tối ưu trải nghiệm mobile-first