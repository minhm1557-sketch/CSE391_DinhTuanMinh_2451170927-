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