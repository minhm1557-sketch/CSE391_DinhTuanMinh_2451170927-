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
