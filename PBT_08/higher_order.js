// ============ HIGHER-ORDER FUNCTIONS ============

// 1. pipe() — Nối chuỗi functions (trái → phải)
function pipe(...fns) {
    return (value) => {
        return fns.reduce((acc, fn) => fn(acc), value);
    };
}

// 2. compose() — Nối chuỗi functions (phải ← trái)
function compose(...fns) {
    return (value) => {
        return fns.reduceRight((acc, fn) => fn(acc), value);
    };
}

// 3. memoize() — Cache kết quả (lưu trữ kết quả đã tính)
function memoize(fn) {
    const cache = {};
    
    return (...args) => {
        const key = JSON.stringify(args);
        
        if (key in cache) {
            console.log(`  [CACHE HIT] ${key}`);
            return cache[key];
        }
        
        console.log(`  [CACHE MISS] Đang tính ${key}...`);
        const result = fn(...args);
        cache[key] = result;
        return result;
    };
}

// 4. debounce() — Chỉ chạy sau delay nếu không có lệnh gọi mới
function debounce(fn, delay) {
    let timeoutId = null;
    
    return (...args) => {
        if (timeoutId !== null) {
            clearTimeout(timeoutId);
        }
        
        timeoutId = setTimeout(() => {
            fn(...args);
            timeoutId = null;
        }, delay);
    };
}

// 5. throttle() — Chỉ chạy 1 lần mỗi interval
function throttle(fn, interval) {
    let lastCall = 0;
    
    return (...args) => {
        const now = Date.now();
        
        if (now - lastCall >= interval) {
            fn(...args);
            lastCall = now;
        }
    };
}

// 6. retry() — Thử lại nếu lỗi
async function retry(fn, maxAttempts = 3, delay = 1000) {
    let lastError;
    
    for (let attempt = 1; attempt <= maxAttempts; attempt++) {
        try {
            console.log(`  [Attempt ${attempt}/${maxAttempts}] Thực hiện...`);
            const result = await fn();
            console.log(`  ✓ Thành công!`);
            return result;
        } catch (error) {
            lastError = error;
            console.log(`  ✗ Lỗi: ${error.message}`);
            
            if (attempt < maxAttempts) {
                console.log(`  ⏳ Chờ ${delay}ms trước lần tiếp theo...`);
                await new Promise(resolve => setTimeout(resolve, delay));
            }
        }
    }
    
    throw new Error(`Thất bại sau ${maxAttempts} lần thử: ${lastError.message}`);
}

// 7. once() — Chỉ chạy 1 lần duy nhất
function once(fn) {
    let called = false;
    let result;
    
    return (...args) => {
        if (!called) {
            called = true;
            result = fn(...args);
        }
        return result;
    };
}

// 8. curry() — Biến hàm thành curried function
function curry(fn) {
    const arity = fn.length;
    
    return function curried(...args) {
        if (args.length >= arity) {
            return fn(...args);
        } else {
            return (...nextArgs) => curried(...args, ...nextArgs);
        }
    };
}

// ============ TEST CASES ============

console.log("╔═════════════════════════════════════════════════════════╗");
console.log("║        HIGHER-ORDER FUNCTIONS - TEST CASES              ║");
console.log("╚═════════════════════════════════════════════════════════╝\n");

// 1. TEST PIPE
console.log("1️⃣  PIPE — Nối chuỗi functions (trái → phải)");
console.log("─".repeat(55));

const process = pipe(
    x => x * 2,        // 5 → 10
    x => x + 10,       // 10 → 20
    x => x.toString(), // 20 → "20"
    x => "Kết quả: " + x
);

console.log(`process(5) = ${process(5)}`);
console.log(`process(100) = ${process(100)}\n`);

// 2. TEST COMPOSE
console.log("2️⃣  COMPOSE — Nối chuỗi functions (phải ← trái)");
console.log("─".repeat(55));

const reverseProcess = compose(
    x => "Kết quả: " + x,
    x => x.toString(),
    x => x + 10,
    x => x * 2
);

console.log(`reverseProcess(5) = ${reverseProcess(5)}\n`);

// 3. TEST MEMOIZE
console.log("3️⃣  MEMOIZE — Cache kết quả");
console.log("─".repeat(55));

const expensiveCalc = memoize((n) => {
    let result = 0;
    for (let i = 0; i < n * 1000000; i++) {
        result += i;
    }
    return result;
});

console.log("Lần 1 (tính toán):");
console.log(`expensiveCalc(50) = ${expensiveCalc(50)}`);

console.log("Lần 2 (từ cache):");
console.log(`expensiveCalc(50) = ${expensiveCalc(50)}`);

console.log("Lần 3 (tính toán - khác tham số):");
console.log(`expensiveCalc(100) = ${expensiveCalc(100)}\n`);

// 4. TEST DEBOUNCE
console.log("4️⃣  DEBOUNCE — Chỉ chạy lần cuối sau delay");
console.log("─".repeat(55));

let searchCount = 0;
const debouncedSearch = debounce((query) => {
    searchCount++;
    console.log(`  🔍 Tìm kiếm: "${query}" (lần ${searchCount})`);
}, 500);

console.log("Gọi 5 lần trong 300ms:");
debouncedSearch("js");
debouncedSearch("javascript");
debouncedSearch("javascript tutorial");
debouncedSearch("javascript advanced");
debouncedSearch("javascript optimization");

console.log("⏳ Chờ 600ms để thấy kết quả...");
setTimeout(() => {
    console.log("");
}, 700);

// 5. TEST THROTTLE
console.log("\n5️⃣  THROTTLE — Chỉ chạy 1 lần mỗi interval");
console.log("─".repeat(55));

let clickCount = 0;
const throttledClick = throttle(() => {
    clickCount++;
    console.log(`  🖱️  Click ${clickCount}`);
}, 300);

console.log("Click 5 lần trong 100ms (mỗi lần):");
for (let i = 0; i < 5; i++) {
    setTimeout(throttledClick, i * 100);
}

setTimeout(() => {
    console.log(`\nTổng click được xử lý: ${clickCount}\n`);
}, 600);

// 6. TEST ONCE
console.log("6️⃣  ONCE — Chỉ chạy 1 lần duy nhất");
console.log("─".repeat(55));

let initCount = 0;
const initialize = once(() => {
    initCount++;
    console.log(`  🔧 Khởi tạo (lần ${initCount})`);
    return "Initialized!";
});

console.log("Lần 1:", initialize());
console.log("Lần 2:", initialize());
console.log("Lần 3:", initialize());
console.log("");

// 7. TEST CURRY
console.log("7️⃣  CURRY — Curried functions");
console.log("─".repeat(55));

const add = curry((a, b, c) => a + b + c);

console.log("add(1, 2, 3) =", add(1, 2, 3));
console.log("add(1)(2)(3) =", add(1)(2)(3));
console.log("add(1, 2)(3) =", add(1, 2)(3));

const multiply = curry((a, b, c, d) => a * b * c * d);
console.log("multiply(2)(3)(4)(5) =", multiply(2)(3)(4)(5));
console.log("");

// 8. TEST RETRY
console.log("8️⃣  RETRY — Thử lại nếu lỗi");
console.log("─".repeat(55));

let attemptCount = 0;
const unreliableAPI = async () => {
    attemptCount++;
    if (attemptCount < 3) {
        throw new Error("Network timeout");
    }
    return "✓ Data received!";
};

console.log("Gọi API không ổn định:");
retry(unreliableAPI, 5, 200)
    .then(result => console.log(`  Kết quả: ${result}\n`))
    .catch(error => console.log(`  ❌ ${error.message}\n`));

// ============ BONUS: FUNCTION COMPOSITION ============

console.log("9️⃣  BONUS: Function Composition");
console.log("─".repeat(55));

const users = [
    { name: "An", age: 25, score: 85 },
    { name: "Bình", age: 30, score: 92 },
    { name: "Chi", age: 22, score: 78 },
];

// Lấy tên người có score cao nhất
const getHighestScorer = pipe(
    arr => arr.sort((a, b) => b.score - a.score),
    arr => arr[0],
    user => user.name + " (score: " + user.score + ")"
);

console.log("Người đạt điểm cao nhất:", getHighestScorer(users));
console.log("");

console.log("✨ TEST COMPLETE ✨\n");
