// Typescript có thê tự tiên đoán kiểu dữ liệu nếu ta không tự khai báo

let h = 5; // tiên đoán là number
// h = 'haha'; // xảy ra lỗi
console.log('check h: ', h);


let arrr = ['he', 'hi']; // tiên đoán là mảng string
arrr.push('hee'); // ok
// arrr.push(25) // xảy ra lỗi
console.log('check arrr: ', arrr);


let arrrr = ['he', 'ha', 12]; // tiên đoán là mảng chứa string hoặc number 
arrrr.push(20); // ok
arrrr.push('hi'); //ok
console.log('check arrrr: ', arrrr);

// Ta có thê chọn để cho ts tự tiên đoán hoặc fix cứng tùy trường hợp
// Number, String,... là đối tượng
// Nên dùng number, string,...



