// Có thể truyền vào biến c hoặc không
// Nếu không truyền vào, c sẽ nhận giá trị mặc định bằng 0 
const sum30 = (a: number, b: number, c: number = 0) => {
    return a + b + c;
}

const sum301 = (a: number, b: number, c = true) => {
    if (c) return a - b;
    else return a + b;
}

console.log('check sum30(1, 2)=', sum30(1, 2));
console.log('check sum30(1, 2, 3)=', sum30(1, 2, 3));
console.log('check sum301(1, 2)=', sum301(1, 2));
console.log('check sum301(1, 2, false)=', sum301(1, 2, false));
