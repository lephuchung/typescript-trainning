// Enum dùng khai báo một nhóm các hằng số
// Giúp giảm việc gõ tay các tên này, giảm khả năng nhầm lẫn
// Nếu không có value thì các phần tử tự động nhận giá trị index 0, 1, 2,...
// VD:
enum test {
    PENDDING,
    FULFILLED,
    REJECTED
}
let test141 = test.PENDDING;
let test142 = test.FULFILLED;
let test143 = test.REJECTED;
console.log('test141 = ', test141);
console.log('test142 = ', test142);
console.log('test143 = ', test143);

// Nếu có phần value, các phần tử sẽ  nhận giá trị value

enum API_STATUS {
    PENDDING = 'PENDDING',
    FULFILLED = 'FULFILLED',
    REJECTED = 'REJECTED'
}

let test144 = API_STATUS.PENDDING;
let test145 = API_STATUS.FULFILLED;
let test146 = API_STATUS.REJECTED;
console.log('test144 = ', test144);
console.log('test145 = ', test145);
console.log('test146 = ', test146);

// Sử dụng dạng code enum có value sẽ làm code FE và BE dễ đọc hơn


