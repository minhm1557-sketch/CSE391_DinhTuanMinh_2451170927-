# Phần A
## Câu A1

- Function Declaration:

```js
function tinhThueBaoHiem(luong) {
    const thue = luong > 11000000 ? luong * 0.1 : 0;

    return {
        thuong: thue,
        thuc_nhan: luong - thue
    };
}
```

- Function Expression:

```js
const tinhThueBaoHiem = function(luong) {
    const thue = luong > 11000000 ? luong * 0.1 : 0;

    return {
        thuong: thue,
        thuc_nhan: luong - thue
    };
};
```

- Arrow Function:

```js
const tinhThueBaoHiem = (luong) => {
    const thue = luong > 11000000 ? luong * 0.1 : 0;

    return {
        thuong: thue,
        thuc_nhan: luong - thue
    };
};
```

## Câu A3

```js
const nums = [1,2,3,4,5,6,7,8,9,10];
```

1. Lấy các số chẵn

```js
nums.filter(n => n % 2 === 0);
```

2. Nhân mỗi số với 3

```js
nums.map(n => n * 3);
```

3. Tính tổng tất cả

```js
nums.reduce((sum, n) => sum + n, 0);
```

4. Tìm số đầu tiên > 7

```js
nums.find(n => n > 7);
```

5. Kiểm tra có số > 10 không

```js
nums.some(n => n > 10);
```

6. Kiểm tra tất cả đều > 0

```js
nums.every(n => n > 0);
```

7. Tạo mảng chuỗi chẵn/lẻ

```js
nums.map(n => `Số ${n} là ${n % 2 === 0 ? "chẵn" : "lẻ"}`);
```

8. Đảo ngược mảng không mutate gốc

```js
[nums].reverse();
```

---

## Câu A4

# Phần B
## Câu B1



