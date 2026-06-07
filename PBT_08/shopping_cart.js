function createCart() {
    let items = [];
    let discountCode = null;
    let discountValue = 0;

    return {
        addItem(product, quantity = 1) {
            const existingItem = items.find(item => item.id === product.id);
            
            if (existingItem) {
                existingItem.quantity += quantity;
            } else {
                items.push({
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    quantity: quantity
                });
            }
        },

        removeItem(productId) {
            items = items.filter(item => item.id !== productId);
        },

        updateQuantity(productId, newQuantity) {
            const item = items.find(item => item.id === productId);
            if (item) {
                if (newQuantity <= 0) {
                    this.removeItem(productId);
                } else {
                    item.quantity = newQuantity;
                }
            }
        },

        getTotal() {
            const subtotal = items.reduce((total, item) => {
                return total + (item.price * item.quantity);
            }, 0);

            let discount = 0;
            if (discountCode === "SALE10") {
                discount = subtotal * 0.1;
            } else if (discountCode === "SALE20") {
                discount = subtotal * 0.2;
            } else if (discountCode === "FREESHIP") {
                discount = 30000;
            }

            return subtotal - discount;
        },

        applyDiscount(code) {
            const validCodes = ["SALE10", "SALE20", "FREESHIP"];
            
            if (!validCodes.includes(code)) {
                console.log(`❌ Mã '${code}' không hợp lệ!`);
                return false;
            }
            
            discountCode = code;
            return true;
        },

        printCart() {
            if (items.length === 0) {
                console.log("\n🛒 Giỏ hàng trống");
                return;
            }


            items.forEach((item, index) => {
                const num = (index + 1).toString().padEnd(1);
                const name = item.name.padEnd(20);
                const qty = item.quantity.toString().padStart(2);
                const price = item.price.toLocaleString('vi-VN').padStart(12);
                const total = (item.price * item.quantity).toLocaleString('vi-VN').padStart(10);
                
                console.log(`║ ${num} │ ${name} │ ${qty} │ ${price} │ ${total} ║`);
            });

            const subtotal = items.reduce((total, item) => {
                return total + (item.price * item.quantity);
            }, 0);

            let discountAmount = 0;
            let discountText = "Không";
            
            if (discountCode === "SALE10") {
                discountAmount = subtotal * 0.1;
                discountText = "SALE10 (-10%)";
            } else if (discountCode === "SALE20") {
                discountAmount = subtotal * 0.2;
                discountText = "SALE20 (-20%)";
            } else if (discountCode === "FREESHIP") {
                discountAmount = 30000;
                discountText = "FREESHIP (-30k)";
            }

            const finalTotal = this.getTotal();
            console.log(`Tổng tiền:${subtotal.toLocaleString('vi-VN').padStart(18)}đ`);
            
            if (discountAmount > 0) {
                console.log(`Giảm giá (${discountText}):       ${discountAmount.toLocaleString('vi-VN').padStart(18)}đ`);
            }  
            console.log(`THANH TOÁN:                   ${finalTotal.toLocaleString('vi-VN').padStart(18)}đ`);

        },

        getItemCount() {
            return items.reduce((count, item) => {
                return count + item.quantity;
            }, 0);
        },

        clearCart() {
            items = [];
            discountCode = null;
        },

        getItems() {
            return items;
        }
    };
}


const cart = createCart();

console.log("\n Thêm sản phẩm vào giỏ:");
console.log("  + iPhone 16 x1");
cart.addItem({ id: 1, name: "iPhone 16", price: 25990000 }, 1);

console.log("  + AirPods Pro x2");
cart.addItem({ id: 3, name: "AirPods Pro", price: 6990000 }, 2);

console.log("  + iPhone 16 x1 (tăng từ 1 lên 2)");
cart.addItem({ id: 1, name: "iPhone 16", price: 25990000 }, 1);

cart.printCart();

console.log("Thông tin giỏ:");
console.log(`Tổng số SP: ${cart.getItemCount()} cái`);
console.log(`Tổng tiền: ${cart.getTotal().toLocaleString('vi-VN')}đ`);

console.log("\nÁp dụng mã giảm giá SALE10:");
cart.applyDiscount("SALE10");
cart.printCart();

console.log(" Sau giảm giá:");
console.log(`Tổng số SP: ${cart.getItemCount()} cái`);
console.log(`Tổng tiền: ${cart.getTotal().toLocaleString('vi-VN')}đ`);

console.log("\nXóa AirPods Pro (id: 3):");
cart.removeItem(3);
console.log(`Số SP còn lại: ${cart.getItemCount()} cái`);
cart.printCart();

console.log("\n  Cập nhật số lượng iPhone 16 thành 3:");
cart.updateQuantity(1, 3);
console.log(` Tổng số SP: ${cart.getItemCount()} cái`);
cart.printCart();

console.log("\nThử mã khác - SALE20:");
cart.applyDiscount("SALE20");
cart.printCart();

console.log("\n Thử mã FREESHIP:");
cart.applyDiscount("FREESHIP");
cart.printCart();

console.log("\n Thử mã không hợp lệ:");
cart.applyDiscount("INVALID");

console.log("\n Làm rỗng giỏ:");
cart.clearCart();
cart.printCart();

console.log(" TEST COMPLETE \n");
