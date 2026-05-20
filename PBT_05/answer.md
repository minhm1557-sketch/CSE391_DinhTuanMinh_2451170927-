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