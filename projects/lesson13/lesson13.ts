// Một mảng gồm các chuỗi và số, không giới hạn phần tử, không quan tâm vị trí phần tử
let test131: (string | number)[] = ['hehe', 12, 'hi'];
test131[1] = 14;

// Một Tuple gồm 1 chuỗi và 1 số, không được phép nhiều hơn, không được phép thay đổi vị trí
let test132: [string, number] = ['hehe', 12];
test132 = ['hung', 11]; // ok 
// let test133: [string, number] = [11, 'hehe']; // xảy ra lỗi
// let test134: [string, number] = ['hehe', 12, 13]; // xảy ra lỗi

// Tuple gồm 3 phần tử, phần tử đầu là chuỗi, 2 phần tử sau là số, phần tử cuối có thể có hoặc không
let test135: [string, number, number?];
test135 = ['he', 12]; // ok
console.log('test135 = ', test135);
test135 = ['hello', 14, 20]; // ok

console.log('test131 = ', test131);
console.log('test132 = ', test132);
console.log('test135 = ', test135);

