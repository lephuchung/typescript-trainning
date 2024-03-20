// ts check kiểu dữ liệu của biến
// code xảy ra lỗi
// let test151 = 'hung';
// test151 = 24;

// Để ts không check kiểu dữ liệu của biến, ta cần code như sau
let tes152: any = 'Noris';
tes152 = 26 // ok
tes152 = true // ok 
console.log('test152 = ', tes152);

// Hạn chế dùng any để tránh gặp phải bug
// any sẽ làm bỏ qua các thuật toán check kiểu dữ liệu
// Đồng thời cũng bỏ qua các thuật toán gợi ý code
