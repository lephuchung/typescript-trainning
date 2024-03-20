// 2 cách viết như nhau, ts khồng phân biệt "" và ''
let test91: string = 'Lê Phúc Hưng hello world "haha"';
let test92: string = "Lê Phúc Hưng hello world 'haha'";

// let test93: string = "Lê Phúc Hưng hello world "haha""; // xảy ra lỗi
// Nếu muốn dùng dấu ngoặc ttong chuỗi, có thể dùng \' hoặc \"
// Hoặc dùng dấu `` để bọc
let test94: string = `Lê Phúc Hưng "hello world'""' 
xuống dòng`;

console.log('test91: ', test91);
console.log('test92: ', test92);
console.log('test94: ', test94);
