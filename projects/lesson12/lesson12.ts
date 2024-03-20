let test121: string[] = ['hung', 'le', 'phuc']; // Khai báo, khởi tạo một mảng chỉ chứa chuỗi
test121.push('haha'); // ok
// test121.push(25); // xảy ra lỗi

let test122: (string | number | boolean)[] = ['Noris', true, 2003]; // khai báo và khơi tạo một mảng nhiều kiểu dữ liệu
test122.push(25); // ok
test122.push('hi'); //ok
test122.push(false); //ok

let test123 = ['haha', 23]; //Khai báo một mảng không cố định kiểu

console.log('test121 = ', test121);
console.log('test122 = ', test122);
console.log('test123 = ', test123);

