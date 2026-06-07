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

## Câu 4