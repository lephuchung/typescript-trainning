// Thuộc tính và phương thức static có thể được gọi mà không cần khởi tạo đối tượng
class Circle {
    static pi: number = 3.14;
    public test = 20;

    static CalcArea(radius: number): number {
        return this.pi * radius * radius;
    }
}
console.log('check pi: ', Circle.pi);
console.log('check the area of the circle with r = 10: ', Circle.CalcArea(10));
// console.log('check test: ', Circle.test); // Xảy ra lỗi vì test không phải thuộc tính static, cần khởi tạo đối tượng
let Circle381 = new Circle();
console.log('check test: ', Circle381.test); // ok

