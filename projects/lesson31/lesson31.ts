// Rest parameters là một mảng các phần tử param truyền vào một hàm
// Phải được viết cuối cùng

// Chỉ có rest params số
const getTotal = (...numbers: number[]): number => {
    let total: number = 0;
    numbers.forEach((num) => total += num);
    return total;
}

console.log(getTotal());
console.log(getTotal(10, 20));
console.log(getTotal(10, 20, 30));

// Có rest params số và 1 số
const multiply = (n: number, ...m: number[]) => {
    return m.map((item) => {
        return n * item;
    });
}

console.log(multiply(10, 1, 2, 3, 4, 5));

// Có rest params chuỗi và 1 chuỗi
const Greet = (greeting: string, ...name: string[]) => {
    return greeting + name.join(', ') + '!';
}

console.log(Greet('Hello', 'Hung', 'Noris', 'Nora'));



