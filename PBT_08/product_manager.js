const products = [
    { id: 1, name: "iPhone 16", price: 25990000, category: "phone", stock: 15, rating: 4.5 },
    { id: 2, name: "MacBook Pro", price: 45990000, category: "laptop", stock: 8, rating: 4.8 },
    { id: 3, name: "AirPods Pro", price: 6990000, category: "accessory", stock: 50, rating: 4.3 },
    { id: 4, name: "iPad Air", price: 16990000, category: "tablet", stock: 0, rating: 4.6 },
    { id: 5, name: "Samsung S24", price: 22990000, category: "phone", stock: 20, rating: 4.4 },
    { id: 6, name: "Dell XPS 15", price: 35990000, category: "laptop", stock: 5, rating: 4.7 },
    { id: 7, name: "Galaxy Buds", price: 3490000, category: "accessory", stock: 100, rating: 4.1 },
    { id: 8, name: "Xiaomi Pad 6", price: 7990000, category: "tablet", stock: 25, rating: 4.2 },
    { id: 9, name: "Pixel 9", price: 19990000, category: "phone", stock: 12, rating: 4.6 },
    { id: 10, name: "ThinkPad X1", price: 32990000, category: "laptop", stock: 3, rating: 4.5 }
];

function getInStock(products) {
    return products.filter(product => product.stock > 0);
}

function filterProducts(products, category, minPrice, maxPrice) {
    return products.filter(product => 
        product.category === category && 
        product.price >= minPrice && 
        product.price <= maxPrice
    );
}

function sortByPrice(products, order = "asc") {
    if (order === "asc") {
        return products.sort((a, b) => a.price - b.price);
    } else {
        return products.sort((a, b) => b.price - a.price);
    }
}

function cheapestByCategory(products) {
    return products.reduce((acc, product) => {
        if (!acc[product.category] || product.price < acc[product.category].price) {
            acc[product.category] = product;
        }
        return acc;
    }, {});
}

function totalInventoryValue(products) {
    return products.reduce((total, product) => {
        return total + (product.price * product.stock);
    }, 0);
}

function formatProductList(products) {
    return products.map(product => ({
        name: product.name,
        formattedPrice: product.price.toLocaleString('vi-VN') + 'đ'
    }));
}

function averageRating(products) {
    if (products.length === 0) return 0;
    const totalRating = products.reduce((sum, product) => sum + product.rating, 0);
    return (totalRating / products.length).toFixed(2);
}

function searchProducts(products, keyword) {
    const lowerKeyword = keyword.toLowerCase();
    return products.filter(product => 
        product.name.toLowerCase().includes(lowerKeyword)
    );
}


const inStock = getInStock(products);
console.log(`Số sản phẩm còn hàng: ${inStock.length}`);
inStock.forEach(p => console.log(`  • ${p.name} (${p.stock} cái)`));

const phonesInRange = filterProducts(products, "phone", 15000000, 25000000);
console.log(`Tìm thấy: ${phonesInRange.length} sản phẩm`);
phonesInRange.forEach(p => console.log(`  • ${p.name}: ${p.price.toLocaleString('vi-VN')}đ`));

const sortedAsc = [...products].sort((a, b) => a.price - b.price);
sortedAsc.slice(0, 3).forEach(p => console.log(`  • ${p.name}: ${p.price.toLocaleString('vi-VN')}đ`));
console.log("  ...");

const cheapest = cheapestByCategory(products);
for (let category in cheapest) {
    const p = cheapest[category];
    console.log(`  • ${category.toUpperCase()}: ${p.name} - ${p.price.toLocaleString('vi-VN')}đ`);
}

const totalValue = totalInventoryValue(products);
console.log(`  Tổng giá trị kho: ${totalValue.toLocaleString('vi-VN')}đ`);

const formatted = formatProductList(products).slice(0, 5);
formatted.forEach((p, idx) => console.log(`  ${idx + 1}. ${p.name} - ${p.formattedPrice}`));
console.log("  ...");

const avgRating = averageRating(products);
console.log(`  Điểm rating trung bình: ${avgRating}/5.0 ⭐`);

const searchResults = searchProducts(products, "pad");
console.log(`Tìm thấy: ${searchResults.length} sản phẩm`);
searchResults.forEach(p => console.log(`  • ${p.name} - ${p.price.toLocaleString('vi-VN')}đ`));

const proBrand = searchProducts(products, "pro");
console.log(`Tìm thấy: ${proBrand.length} sản phẩm`);
proBrand.forEach(p => console.log(`  • ${p.name} - ${p.price.toLocaleString('vi-VN')}đ (⭐ ${p.rating})`));


