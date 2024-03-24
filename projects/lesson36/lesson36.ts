// Đặt tên thuộc tính thêm "_" ở trước để tránh trùng getter và setter
// Getter setter cho thuộc tính nào nên đặt đúng tên theo thuộc tính đó để dễ dàng thao tác

class Person36 {
    private _age: number;
    public _firstName: string;
    public _lastName: string;

    constructor(_age: number, _firstName: string, _lastName: string) {
        this._age = _age;
        this._firstName = _firstName;
        this._lastName = _lastName;
    }

    // getter
    get age() {
        return this._age
    }

    // setter
    set age(newAge: number) {
        if (newAge <= 0 || newAge >= 200) {
            throw Error('Invalid age');
        }
        this._age = newAge;
    }
}
let Person361 = new Person36(20, 'Noris', 'Nora');
// console.log('check age: ', Person361._age);// Xảy ra lỗi vì gọi vào thuộc tính private
console.log('check age: ', Person361.age);// ok vì gọi getter
// Person361._age = 60 // Xảy ra lỗi vì gọi vào thuộc tính private
Person361.age = 60 // ok vì gọi setter
console.log('check age: ', Person361.age);
