let secretNumber = 0;
let attempts = 0;
let maxAttempts = 7;
let guessedNumbers = [];
let gameActive = false;

const startBtn = document.getElementById('startBtn');
const resetBtn = document.getElementById('resetBtn');

function initGame() {
    secretNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    guessedNumbers = [];
    gameActive = true;
    console.log("Số bí mật: " + secretNumber); 
    alert("🎮 Game bắt đầu!\n\nSố bí mật nằm trong khoảng 1-100.\nBạn có 7 lần để đoán đúng!\n\nHãy nhập số của bạn:");
    playGame();
}

function playGame() {
    if (!gameActive) return;

    const userInput = prompt(`Lần đoán ${attempts + 1}/7\n\nNhập số từ 1-100:`);

    // Nếu user bấm Cancel
    if (userInput === null) {
        gameActive = false;
        alert("Bạn đã thoát game!\n\nSố bí mật là: " + secretNumber);
        return;
    }

    // Validate input
    const guess = parseInt(userInput);

    if (isNaN(guess) || guess < 1 || guess > 100) {
        alert("Lỗi: Vui lòng nhập một số từ 1 đến 100!");
        playGame();
        return;
    }

    if (guessedNumbers.includes(guess)) {
        alert("Bạn đã đoán số " + guess + " rồi!\n\nHãy thử số khác!");
        playGame();
        return;
    }

    guessedNumbers.push(guess);
    attempts++;

    if (guess === secretNumber) {
        gameActive = false;
        alert("🎉 Chúc mừng!\n\nBạn đoán đúng sau " + attempts + " lần! 🏆\n\nSố bí mật là: " + secretNumber);
        return;
    } else if (guess < secretNumber) {
        if (attempts < maxAttempts) {
            alert("Cao hơn!\n\nSố bạn đoán (" + guess + ") quá thấp.\n\nLần đoán còn lại: " + (maxAttempts - attempts));
            playGame();
        } else {
            gameActive = false;
            alert("Hết lượt!\n\nBạn đã dùng hết 7 lần đoán.\nSố bí mật là: " + secretNumber + "\n\nChúc bạn may mắn lần sau! 🍀");
        }
    } else {
        if (attempts < maxAttempts) {
            alert("Thấp hơn!\n\nSố bạn đoán (" + guess + ") quá cao.\n\nLần đoán còn lại: " + (maxAttempts - attempts));
            playGame();
        } else {
            gameActive = false;
            alert("Hết lượt!\n\nBạn đã dùng hết 7 lần đoán.\nSố bí mật là: " + secretNumber + "\n\nChúc bạn may mắn lần sau! 🍀");
        }
    }   
}

startBtn.addEventListener('click', initGame);
resetBtn.addEventListener('click', function() {
    gameActive = false;
    attempts = 0;
    guessedNumbers = [];
    secretNumber = 0;
    alert("🔄 Trò chơi đã được reset!\n\nBấm 'Bắt Đầu Game' để chơi lại.");
});
