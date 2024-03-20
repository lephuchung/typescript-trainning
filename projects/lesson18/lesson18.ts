// IDE không check ra lỗi khi compile đoạn lệnh dưới đây 
// Chỉ phát hiện lỗi khi throw
// Điều này sẽ làm giảm trải nghiệm người dùng
// const adđNumberOrString = (a: any, b: any) => {
//     if (typeof (a) === 'number' && typeof (b) === 'number') {
//         return a + b;
//     }
//     if (typeof (a) === 'string' && typeof (b) === 'string') {
//         return a.concat(b);
//     }
//     else throw new Error('Parameters must be string or number!');
// }

// console.log('adđNumberOrString(1,2)=', adđNumberOrString(1, 2));
// console.log(`adđNumberOrString('he','llo')=`, adđNumberOrString('he', 'llo'));
// console.log('adđNumberOrString(true,2)=', adđNumberOrString(true, 2)); // IDE không check ra lỗi

// Giải pháp như sau
const adđNumberOrString = (a: number | string, b: number | string) => {
    if (typeof (a) === 'number' && typeof (b) === 'number') {
        return a + b;
    }
    if (typeof (a) === 'string' && typeof (b) === 'string') {
        return a.concat(b);
    }
    else throw new Error('Parameters must be string or number!');
}

console.log('adđNumberOrString(1,2)=', adđNumberOrString(1, 2));
console.log(`adđNumberOrString('he','llo')=`, adđNumberOrString('he', 'llo'));
// console.log('adđNumberOrString(true,2)=', adđNumberOrString(true, 2)); // IDE check ra lỗi
// Ta có thể gán nhiều kiểu dữ liệu cho biến theo cách đó a: number|string|boolean|...

