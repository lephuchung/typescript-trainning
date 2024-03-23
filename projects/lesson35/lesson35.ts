// Readonly chỉ cho phép đọc, không cho phép ghi đè
// Tương tự const, nhưng const thao tác với biến
// Readonly có vai trò như access modifiers trong class

class Person35 {
    readonly birthday: Date;

    constructor(birthday: Date) {
        this.birthday = birthday;
    }
}

let Person351 = new Person35(new Date(2003, 4, 25));
console.log('Check birthday: ', Person351.birthday);
// Person351.birthday = new Date(2024, 3, 24); // Xảy ra lỗi vì không được ghi đè
