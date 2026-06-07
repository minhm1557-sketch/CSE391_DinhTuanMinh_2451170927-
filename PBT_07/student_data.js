const students = [
    { name: "An", math: 8, physics: 7, cs: 9, gender: "M" },
    { name: "Bình", math: 6, physics: 9, cs: 7, gender: "F" },
    { name: "Chi", math: 9, physics: 6, cs: 8, gender: "F" },
    { name: "Dũng", math: 5, physics: 5, cs: 6, gender: "M" },
    { name: "Em", math: 10, physics: 8, cs: 9, gender: "F" },
    { name: "Phong", math: 3, physics: 4, cs: 5, gender: "M" },
    { name: "Giang", math: 7, physics: 7, cs: 7, gender: "F" },
    { name: "Huy", math: 4, physics: 6, cs: 3, gender: "M" },
];

function calculateAverage(student) {
    return student.math * 0.4 + student.physics * 0.3 + student.cs * 0.3;
}

function getClassification(average) {
    if (average >= 8.0) {
        return "Giỏi";
    } else if (average >= 6.5) {
        return "Khá";
    } else if (average >= 5.0) {
        return "Trung bình";
    } else {
        return "Yếu";
    }
}



for (let i = 0; i < students.length; i++) {
    const student = students[i];
    const average = calculateAverage(student);
    const classification = getClassification(average);
    
    console.log(`${i + 1}. Tên: ${student.name}`);
    console.log(`   Toán: ${student.math}, Lý: ${student.physics}, CNPM: ${student.cs}`);
    console.log(`   Điểm TB: ${average.toFixed(2)} - Xếp loại: ${classification}`);
    console.log("");
}



let countGioi = 0, countKha = 0, countTrungBinh = 0, countYeu = 0;

for (let i = 0; i < students.length; i++) {
    const average = calculateAverage(students[i]);
    const classification = getClassification(average);
    
    if (classification === "Giỏi") {
        countGioi++;
    } else if (classification === "Khá") {
        countKha++;
    } else if (classification === "Trung bình") {
        countTrungBinh++;
    } else if (classification === "Yếu") {
        countYeu++;
    }
}

console.log(`Giỏi: ${countGioi} sinh viên`);
console.log(`Khá: ${countKha} sinh viên`);
console.log(`Trung bình: ${countTrungBinh} sinh viên`);
console.log(`Yếu: ${countYeu} sinh viên`);


let maxAverage = -1;
let topStudent = null;

for (let i = 0; i < students.length; i++) {
    const average = calculateAverage(students[i]);
    if (average > maxAverage) {
        maxAverage = average;
        topStudent = students[i];
    }
}

console.log(`Tên: ${topStudent.name}`);
console.log(`Điểm TB: ${maxAverage.toFixed(2)}`);
console.log(`Xếp loại: ${getClassification(maxAverage)}`);


let minAverage = Infinity;
let lowestStudent = null;

for (let i = 0; i < students.length; i++) {
    const average = calculateAverage(students[i]);
    if (average < minAverage) {
        minAverage = average;
        lowestStudent = students[i];
    }
}

console.log(`Tên: ${lowestStudent.name}`);
console.log(`Điểm TB: ${minAverage.toFixed(2)}`);
console.log(`Xếp loại: ${getClassification(minAverage)}`);
