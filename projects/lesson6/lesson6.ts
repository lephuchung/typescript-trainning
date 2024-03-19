// Kiểu dữ liệu nguyên thủy

let a: number = 10; // khai báo, định nghĩa kiểu dữ liệu, khởi tạo giá trị bằng 10
// a= 'haha' // sẽ xảy ra lỗi

let b: number; // khai báo, định nghĩa kiểu dữ liệu
b = 100; // khởi tạo giá trị b = 100
b = 2; // gán giá trị b = 2 

// const phải khai báo, định nghĩa kiểu dữ liệu và khởi tạo giá trị trên cùng dòng
// viết như sau sẽ xảy ra lỗi
// const c: number
// c = 10

const c: number = 20;

console.log('a=', a);
console.log('b=', b);
console.log('c=', c);

// Kiểu dữ liệu tham chiếu

// cấu trúc khai báo mảng typescript: tên_biến: kiểu_dữ_liệu_mảng[]
let info: string[] = ['Le Hung', 'Noris', "Nora"];
info.push('2003');
// info.push(2003); // xảy ra lỗi
console.log('info: ', info);


let count: number[] = [1, 2, 3, 4, 5];
// count.push('10');// xảy ra lỗi
count.push(10);
console.log('count: ', count);
