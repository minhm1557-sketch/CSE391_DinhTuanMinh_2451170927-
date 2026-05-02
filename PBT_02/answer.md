# Phần A
## Câu A1

1. type="email" -> Ô nhập text, tự kiểm tra có @ -> dùng cho form đăng ký
2. type="text" -> Ô nhập thông thường -> dùng cho form nhập thông thường (tên khách, địa chỉ..)
3. type="password" -> Ô nhập mật khẩu, ẩn kí tự -> dùng cho form nhập mật khẩu
4. type="number" -> Ô nhập số, có nút tăng giảm và không thể nhập chữ vào -> dùng cho form nhập số lượng
5. type ="date" -> Ô chọn ngày/tháng/năm, kiểm tra định dạng ngày tháng năm -> dùng để chọn ngày/tháng/năm (nhập ngày sinh)
6. type="time" -> Ô chọn thời gian (giờ, phút), kiểm tra định dạng thời gian -> dùng để chọn thời gian (đặt lịch)
7. type="color" -> Ô chọn màu, chỉ có thể chọn màu và dùng hệ RGB, SHL, HEX -> dùng để chọn màu
8. type="checkbox" -> Ô chọn có hoặc không, required -> dùng để chọn có hoặc không (chọn các thể loại để tìm sách thích hợp)
9. type="radio" -> Ô chọn 1 trong nhiều (cùng name), required -> dùng cho những lựa chọn chỉ chọn 1 (giới tính)
10. type="url" -> Ô nhập link url, kiểm tra định dạng url (http://, https://, ...) -> dùng để nhập đường dẫn

**Nguồn:** 07_forms_interactive.md: 3. ⚙️ Core Technical Truth.

---

## Câu A2

1. Trường hợp 1: không submit được tại để trống khi có required <br>
![alt text](pic/A2_TH1.png)
2. Trường hợp 2: không submit được tại không có @ khi type là email <br>
![alt text](pic/A2_TH2.png)
3. Trường hợp 3: không submit được vì 15 quá giá trị max là 10 <br>
![alt text](pic/A2_TH3.png)
4. Trường hợp 4: không submit được vì pattern chỉ cho nhập số <br>
![alt text](pic/A2_TH4.png)
5. Trường hợp 5: không submit được vì 123 chỉ có độ dài là 3 ít hơn độ dài min là 8 <br>
![alt text](pic/A2_TH5.png)

---

## Câu A3
1. `<label for="email">` quan trọng cho screen reader vì screen reader dựa vào label để đọc tên của input từ đó biết input này phục vụ mục đích gì
2. `<fieldset>` + `<legend>` dùng khi có 1 nhóm input phục vụ mục đích giống nhau, ví dụ:
```html
<fieldset>
  <legend>Phương thức thanh toán</legend>

  <label>
    <input type="radio" name="payment"> COD
  </label>

  <label>
    <input type="radio" name="payment"> Visa
  </label>
</fieldset>
```
3. aria-label dùng để thay thế label (đặt tên cho những phần tử nhưng không hiển thị như label, vd: button). Không nên dùng aria-label khi đã có label có thể dẫn đến screen reader đọc sai.

**Nguồn:** 07_forms_interactive.md: Accessibility — Form cho mọi người.

---

## Câu A4
1. loading="lazy" trong thẻ `<img>` để trì hoãn load ảnh khi người dùng chưa scroll đến gần ảnh, giúp giảm băng thông, trang load nhanh hơn. Không lazy load ảnh "above the fold" (ảnh hero, logo, ảnh đầu tiên user thấy), chỉ lazy load ảnh bên dưới. 

2. Cung cấp nhiều `<source>`trong thẻ `<video>` để video có thể tương thích với nhiều trình duyệt (vì không phải trình duyệt nào cũng hỗ trợ 1 định dạng video nhất định). 3 format video web phổ biến: .mp4, .webm, .ogv

3. Thuộc tính alt trên `<img>` dùng để mô tả ảnh cho screen reader và khi ảnh bị lỗi. alt cho các trường hợp:

    Ảnh sản phẩm iPhone 16: alt="iPhone 16"

    Ảnh trang trí (decorative): bỏ trống

    Ảnh biểu đồ doanh thu Q1/2026:  alt="Biểu đồ doanh thu quý 1 năm 2026" 

**Nguồn:** 06_graphics_multimedia.md: `<img>` — Best Practices.

---

## Câu A5