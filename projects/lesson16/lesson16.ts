// Hàm nhận vào 2 số a, b, tính tổng trả về số a+b
const sum = (a: number, b: number): number => {
    return a + b;
}
// console.log('sum(3, 8) = ', sum(3, 'he')); // xảy ra lỗi
console.log('sum(3, 8) = ', sum(3, 8)); // ok


// Hàm log thông tin, không có kiểu dữ liệu trả về
const handleLog = (message: string): void => {
    console.log('message: ', message);
}
handleLog('haha')

