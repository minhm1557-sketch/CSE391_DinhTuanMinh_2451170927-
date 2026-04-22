# Phần A
## Câu A1

Khi gõ `https://shopee.vn`:

1. Người dùng(tôi) gửi yêu cầu từ thiết bị.
2. Yêu cầu đi qua router đến nhà mạng.
3. Yêu cầu đi đến data center của Shopee ở Việt Nam.
4. Sever phản hồi: gửi về file html, css, js.
5. Chrome nhận file → parse → render → hiển thị.

**Nguồn:** 01_introduction_html_universe.md: Phần 0. 🎬 Opening Hook.
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
   → đổi thành:
   ```html
   <figure class="image">
       <img src="iphone.jpg" alt="iPhone 16 Pro">
   </figure>
   ```

4. `<div class="footer">© 2026 ShopTLU</div>`  
   → dùng `<footer>© 2026 ShopTLU</footer>`

**Nguồn:** *04_visible_part_html.md – Phần 3: Semantic Elements*

