let test101: boolean = true;
let test102: boolean = false;
let test103: boolean = Boolean('');
let test104: boolean = Boolean('haha xin chao');

test101 = false; // ok 
// test102 = 'PhucHungLe'; // xảy ra lỗi
// Boolean và boolean khác nhau
// Boolean là đối tượng sẽ trả về false nếu nội dung truyền vào rỗng, null hoặc undefined
// Còn lại sẽ trả về true

console.log('test101 = ', test101);
console.log('test102 = ', test102);
console.log('test103 = ', test103);
console.log('test104 = ', test104);

