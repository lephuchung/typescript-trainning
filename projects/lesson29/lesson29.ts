// Có thể truyền vào tham số c hoặc không
// Nếu c không được truyền vào thì c sẽ nhận giá trị undefined
const sum29 = (a: number, b: number, c?: number): number => {
    // return a + b + c; // VIết như này sẽ xảy ra lỗi
    if (c) return a + b + c; // c khác undefined thì return như này // ok
    return a + b;
}

console.log('check sum29(4, 5) =', sum29(4, 5));
console.log('check sum29(4, 5, 6) =', sum29(4, 5, 6));
