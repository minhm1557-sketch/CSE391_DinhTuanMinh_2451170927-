# Phần A
## Câu A1

Khi gõ `https://shopee.vn`:

1. Người dùng(tôi) gửi yêu cầu từ thiết bị.
2. Yêu cầu đi qua router đến nhà mạng.
3. Yêu cầu đi đến data center của Shopee ở Việt Nam.
4. Sever phản hồi: gửi về file html, css, js.
5. Chrome nhận file → parse → render → hiển thị.

**Nguồn:** 01_introduction_html_universe.md: Phần 0. 🎬 Opening Hook.
---

## Câu A2

**Code:**

```html
<div class="header">
    <div class="logo">ShopTLU</div>
    <div class="menu">
        <div><a href="/">Trang chủ</a></div>
        <div><a href="/products">Sản phẩm</a></div>
    </div>
</div>
<div class="main">
    <div class="product">
        <div class="title">iPhone 16 Pro</div>
        <div class="price">25.990.000đ</div>
        <div class="image"><img src="iphone.jpg"></div>
    </div>
</div>
<div class="footer">© 2026 ShopTLU</div>
```

**Lỗi semantic:**

1. `<div class="header"> ... </div>` → dùng `<header> ... </header>`

2. `<div class="menu"> ... </div>` → dùng `<nav> ... </nav>`

3. `<div class="image"><img src="iphone.jpg"></div>`  
   → đổi thành `<figure><img src="iphone.jpg" alt="iPhone 16 Pro"></figure>`

4. `<div class="footer">© 2026 ShopTLU</div>`  
   → dùng `<footer>© 2026 ShopTLU</footer>`

5. `<div class="title">iPhone 16 Pro</div>`  
   → dùng `<h2>iPhone 16 Pro</h2>`

6. `<div class="product"> ... </div>`  
   → dùng `<article class="product"> ... </article>`


**Nguồn:** 04_visible_part_html.md – Phần 3: Semantic Elements
---

## Câu A4

**Sự khác nhau giữa thead, tbody và tfoot:**

1. Vai trò: thead để hiển thị phần header của bảng, tbody hiển thị data của bảng còn tfoot hiển thị footer của bảng.

2. Nội dung: thead chứa tiêu đề của cột (được in đậm), tbody chứa những dữ liệu chính và tfoot tổng kết dữ liệu bảng

**Lí do không nên dùng table để tạo layout trang web:**

1. screen reader đọc th như tiêu đề cột, không phải data như td.

2. Khó render từng phần để chỉnh sửa giao diện.

3. Phải lồng nhiều bảng vào nhau dễ dẫn đến code rối và khó điều chỉnh.

**Nguồn:** 04_visible_part_html.md – Phần 3 và 7.
---

# Phần B
## Câu B3

**11 lỗi:**

1. Dòng 1 - Lỗi thiếu html trong thẻ DOCTYPE - thêm html sau DOCTYPE.

2. Dòng 4 - Thiếu thẻ đóng cho thẻ tiltle - thêm thẻ `</tiltle>`.

3. Dòng 5 - charset bị sai - sửa thành UTF-8.

4. Dòng 8 - Thẻ đóng của h1 thiếu dấu / - thêm dấu / ở thẻ đóng của h1.

5. Dòng 12 - Thẻ đóng của a thiếu dấu / - thêm dấu / ở thẻ đóng của a.

6. Dòng 20 - Thẻ img thuộc tính src thiếu ngoặc kép - thêm ngoặc kép bọc iphone.jpg của thuộc tính src trong thẻ img.

7. Dòng 22 - Thẻ p và thẻ b bị sai thứ tự - đổi chỗ thẻ `</p>` và thẻ `</b>`.

8. Dòng 22 - Thẻ b sai semantic - đổi thẻ b thành strong.

9. Dòng 28 - thiếu thead - thêm thẻ thead bọc dòng 28 đến 31.

10. Dòng 28 - Dùng td cho header - đổi td thành th.

11. Dòng 45 - Không đóng thẻ p - thêm thẻ `</p>`.

## Câu B4 

**1:**
![](/pic/semantic)

1. Từ dòng thứ 4 đến dòng thứ 10 đã sử dụng div cho dữ liệu dạng bảng thay vì dùng table.
2. 
**2:**
![](image.png)



