// Kiểu never thường dùng cho hàm với mục đích throw exception
// Hàm sẽ không trả về dữ liệu
function handleException(errorMessage: string): never {
    throw Error(errorMessage);
}

let test171 = handleException('Just ERR test');
// console.log('test171 = ', test171); // không hiện thông tin gì 
