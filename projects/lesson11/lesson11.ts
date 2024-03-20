// khai báo object với js
// let test111 = {};
// test111 = {
//     name: "Noris"
// }
// test111.address = 'Haiphong'; //ok
// Nhưng với ts sẽ xảy ra lỗi vì address không tồn tại

// Các cách khai báo kiểu đối tượng trong ts
// let test112: {};
let test112: object;
test112 = {
    name: 'lehung', // ok 
}
// test112 = 'lehung'; //xảy ra lỗi vì object không dc gán thành chuỗi

let test113: {
    name: string,
    age: number
} = {
    name: 'Nora',
    age: 21
}

console.log('test112 = ', test112);
console.log('test113 = ', test113);


