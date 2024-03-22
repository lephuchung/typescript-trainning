const sum3 = (a: number, b: number): number => {
    return a + b;
}

function sum4(a: number, b: number): number {
    return a + b;
}

let r: number = 1;
let s: number = 2;
r = sum3(2, 3);
s = sum4(5, 6);

console.log('r = ', r);
console.log('s = ', s);
