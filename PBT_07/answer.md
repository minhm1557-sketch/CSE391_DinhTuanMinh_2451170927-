# Phần A
## Câu A1

1. Đoạn 1: undefined
Giải thích: Biến tồn tại trước khi gán giá trị.

2. Đoạn 2: ReferenceError
Giải thích: Không thể truy cập trước khi khai báo

3. Đoạn 3: TypeError
Giải thích: const không thể gán lại giá trị.

4. Đoạn 4: [1, 2, 3, 4]
Giải thích: const không cho đổi tham chiếu mảng, nhưng vẫn sửa được nội dung bên trong.

5. Đoạn 5: Trong block: 2; Ngoài block: 1
Giải thích: let có phạm vi block scope nên a bên trong khác với a bên ngoài.

---

## Câu A2


- Dự đoán kết quả:

```js
console.log(typeof null);        // "object"
console.log(typeof undefined);   // "undefined"
console.log(typeof NaN);         // "number"
console.log("5" + 3);           // "53"
console.log("5" - 3);           // 2
console.log("5" * "3");         // 15
console.log(true + true);       // 2
console.log([] + []);           // ""
console.log([] + {});           // "[object Object]"
console.log({} + []);           // 0
```

---

## Câu A3

Dự đoán kết quả:

```js
console.log(5 == "5");          // true
console.log(5 === "5");         // false
console.log(null == undefined); // true
console.log(null === undefined);// false
console.log(NaN == NaN);        // false
console.log(0 == false);        // true
console.log(0 === false);       // false
console.log("" == false);       // true
```

---

## Câu A4

- Tất cả các giá trị Falsy trong JavaScript:

```js
false
0
-0
0n
""
null
undefined
NaN
```

- Dự đoán kết quả:

```js
if ("0") console.log("A");
```

In:

```txt
A
```

```js
if ("") console.log("B");
```

Không in.

```js
if ([]) console.log("C");
```

In:

```txt
C
```

```js
if ({}) console.log("D");
```

In:

```txt
D
```

```js
if (null) console.log("E");
```

Không in.

```js
if (0) console.log("F");
```

Không in.

```js
if (-1) console.log("G");
```

In:

```txt
G
```

```js
if (" ") console.log("H");
```

In:

```txt
H
```

Vì chuỗi chứa dấu cách vẫn là chuỗi không rỗng.

Kết quả cuối cùng:

```txt
A
C
D
G
H
```

---

## Câu A5

- Cách 1:

```js
var greeting = `Xin chào ${name}! Bạn ${age} tuổi.`;
```

- Cách 2:

```js
var url = `https://api.example.com/users/${userId}/orders?page=${page}`;
```

- Cách 3:

```js
var html = `
<div class="card">
    <h2>${title}</h2>
    <p>${description}</p>
    <span>Giá: ${price}đ</span>
</div>
`;
```

# Phần B

# Phần C
## Câu C1

- Các lỗi:

1. Thiếu dấu `;` (không bắt buộc nhưng nên có).
2. `giaBan` được truyền vào là chuỗi `"100000"` thay vì số.
3. Không kiểm tra kiểu dữ liệu của `giaBan`.
4. `if (giaSauGiam = 0)` dùng phép gán `=` thay vì so sánh.
5. Điều kiện miễn phí nên là `giaSauGiam === 0`.
6. Dùng `var` trong vòng lặp với `setTimeout` gây lỗi closure.
7. Nên dùng `let` hoặc `const` thay cho `var`.
8. Hàm có thể trả về cả Number và String, không nhất quán kiểu dữ liệu.

Code đã sửa:

```js
function tinhGiaGiamGia(giaBan, phanTramGiam) {
    if (typeof giaBan !== "number" || isNaN(giaBan)) {
        return "Giá bán không hợp lệ";
    }

    if (phanTramGiam < 0 || phanTramGiam > 100) {
        return "Phần trăm giảm không hợp lệ";
    }

    const giamGia = giaBan * phanTramGiam / 100;
    const giaSauGiam = giaBan - giamGia;

    if (giaSauGiam === 0) {
        console.log("Sản phẩm miễn phí!");
    }

    return giaSauGiam;
}

const gia = tinhGiaGiamGia(100000, 20);
console.log(`Giá sau giảm: ${gia}đ`);

const gia2 = tinhGiaGiamGia(50000, 110);
console.log(`Giá: ${gia2}`);

for (let i = 0; i < 5; i++) {
    setTimeout(function () {
        console.log(`Item ${i}`);
    }, 1000);
}


- Giải thích lỗi `var` trong vòng lặp:

Code gốc:

```js
for (var i = 0; i < 5; i++) {
    setTimeout(function() {
        console.log(i);
    }, 1000);
}
```

Sau khi vòng lặp kết thúc:

```js
i === 5
```

Tất cả callback đều dùng chung biến `i`, nên in:

```txt
5
5
5
5
5
```

Sửa bằng `let`:

```js
for (let i = 0; i < 5; i++) {
    setTimeout(function() {
        console.log(i);
    }, 1000);
}
```

`let` tạo một biến `i` mới cho mỗi lần lặp, nên kết quả:

```txt
0
1
2
3
4
```