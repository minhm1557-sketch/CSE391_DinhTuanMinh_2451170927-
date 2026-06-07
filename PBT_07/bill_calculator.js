// Danh sách các món ăn
const menu = [
    { name: "Phở bò", price: 65000 },
    { name: "Trà đá", price: 5000 },
    { name: "Bún chả", price: 55000 },
    { name: "Cơm tấm", price: 45000 },
    { name: "Bánh mì", price: 15000 },
    { name: "Nước cam", price: 10000 },
];

function formatMoney(amount) {
    return Math.round(amount).toLocaleString('vi-VN') + 'đ';
}

function calculateBill(orders, includeTip = true) {
    let subtotal = 0;
    let orderDetails = [];

    for (let i = 0; i < orders.length; i++) {
        const order = orders[i];
        const item = menu[order.itemIndex];
        const total = item.price * order.quantity;
        
        orderDetails.push({
            name: item.name,
            price: item.price,
            quantity: order.quantity,
            total: total
        });
        
        subtotal += total;
    }

    let discountPercent = 0;
    let discountAmount = 0;

    if (subtotal > 1000000) {
        discountPercent = 15;
    } else if (subtotal > 500000) {
        discountPercent = 10;
    }

    const today = new Date();
    const dayOfWeek = today.getDay(); 
    
    if (dayOfWeek === 3) { 
        discountPercent += 5;
    }

    discountAmount = subtotal * (discountPercent / 100);

    const amountAfterDiscount = subtotal - discountAmount;
    const vat = amountAfterDiscount * 0.08;

    const tip = includeTip ? amountAfterDiscount * 0.05 : 0;

    const total = amountAfterDiscount + vat + tip;

    displayBill(orderDetails, subtotal, discountPercent, discountAmount, vat, tip, total, dayOfWeek);

    return {
        subtotal,
        discountPercent,
        discountAmount,
        amountAfterDiscount,
        vat,
        tip,
        total
    };
}

function displayBill(orderDetails, subtotal, discountPercent, discountAmount, vat, tip, total, dayOfWeek) {

    for (let i = 0; i < orderDetails.length; i++) {
        const item = orderDetails[i];
        const itemNum = i + 1;
        const name = item.name.padEnd(20);
        const qty = ("x" + item.quantity).padStart(3);
        const price = ("@" + (item.price / 1000) + "k").padStart(8);
        const itemTotal = ("= " + (item.total / 1000) + "k").padStart(8);
        
        console.log(`║ ${itemNum}. ${name} ${qty} ${price} ${itemTotal}  ║`);
    }
    
    console.log(`║ Tổng cộng:${formatMoney(subtotal).padStart(16)} ║`);
    
    const discountLabel = `Giảm giá (${discountPercent}%)`;
    console.log(`║ ${discountLabel.padEnd(33)} ${formatMoney(discountAmount).padStart(18)} ║`);
    
    console.log(`║ VAT (8%):${formatMoney(vat).padStart(16)} ║`);
    
    if (tip > 0) {
        console.log(`║ Tip (5%):                     ${formatMoney(tip).padStart(16)} ║`);
    }
    

    console.log(`THANH TOÁN:${formatMoney(total).padStart(16)}`);

    
    const dayNames = ["Chủ nhật", "Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7"];
    console.log(`\nNgày: ${dayNames[dayOfWeek]}`);
    if (dayOfWeek === 3) {
        console.log("✨ Hôm nay là thứ 3 - Giảm giá thêm 5%! ✨");
    }
}


const orders1 = [
    { itemIndex: 0, quantity: 2 }, 
    { itemIndex: 1, quantity: 3 },
    { itemIndex: 2, quantity: 1 }, 
];

calculateBill(orders1, true);

const orders2 = [
    { itemIndex: 0, quantity: 5 }, 
    { itemIndex: 3, quantity: 4 },
];

calculateBill(orders2, true);

const orders3 = [
    { itemIndex: 0, quantity: 10 }, 
    { itemIndex: 3, quantity: 10 }, 
];

calculateBill(orders3, true);

const orders4 = [
    { itemIndex: 0, quantity: 3 },
    { itemIndex: 1, quantity: 2 },
];

calculateBill(orders4, false);
