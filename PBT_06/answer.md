# Phần A
## Câu A1

1. Mobile (<768px)

    +------------------+
    |      Box 1       |
    +------------------+

    +------------------+
    |      Box 2       |
    +------------------+

    +------------------+
    |      Box 3       |
    +------------------+

    +------------------+
    |      Box 4       |
    +------------------+


2. Tablet (≥768px)

    +-----------+-----------+
    |   Box 1   |   Box 2   |
    +-----------+-----------+

    +-----------+-----------+
    |   Box 3   |   Box 4   |
    +-----------+-----------+


3. Desktop (≥992px)

    +--------+--------+--------+--------+
    | Box 1  | Box 2  | Box 3  | Box 4  |
    +--------+--------+--------+--------+



| Kích thước | < 768px | 768px - 991px | ≥ 992px |
|------------|---------|---------------|---------|
| Số cột | 1 cột | 2 cột | 4 cột |
| Box layout | Box xếp dọc | 2 box / hàng | 4 box / hàng |

`col-md-6`:

- Ở kích thước `md` trở lên (`≥768px`)
- Box chiếm `6/12` cột
- Tức là chiếm 50% chiều ngang

Không cần viết `col-sm-12` vì:

- Bootstrap dùng Mobile First
- `col-12` đã áp dụng cho mọi màn hình nhỏ hơn `md`
- Nên mobile tự động full width    

**Nguồn:** tuan_4_css_frameworks/bootstrap/02_grid_system/02_grid_system.md: 2. 🌐 Big Picture — Grid System hoạt động thế nào?

---

## Câu A2

1. `d-none d-md-block`

- `d-none` → ẩn element
- `d-md-block` → từ kích thước `md` (≥768px) trở lên sẽ hiển thị dạng `block`

Kết quả:
- `<768px` → bị ẩn
- `≥768px` → hiển thị


2. Spacing Utilities

| Class | Ý nghĩa |
|---|---|
| `mt-3` | margin-top mức 3 |
| `mb-auto` | margin-bottom tự động |
| `ms-2` | margin-left mức 2 |
| `px-4` | padding trái + phải mức 4 |
| `py-1` | padding trên + dưới mức 1 |

Quy ước:
- `m` = margin
- `p` = padding
- `t` = top
- `b` = bottom
- `s` = start (left)
- `e` = end (right)
- `x` = trái + phải
- `y` = trên + dưới


3. `.container`, `.container-fluid`, `.container-md`

| Class | Ý nghĩa |
|---|---|
| `.container` | width cố định theo từng breakpoint |
| `.container-fluid` | luôn full width 100% |
| `.container-md` | full width ở mobile, từ `md` trở lên mới có max-width cố định |

**Nguồn:** tuan_4_css_frameworks/bootstrap/04_utilities/04_utilities.md: 2. 🌐 Big Picture — Cú pháp Utilities, 3. ⚙️ Core Technical Truth

---

# Phần B