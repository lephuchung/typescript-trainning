console.log('Đếm từ 0 đến 9');

console.log('Cách 1:');
for (let i = 0; i < 10; i++) {
    console.log('i = ', i);
}

console.log('Cách 2:');
let j = 0;
for (; j < 10; j++) {
    console.log('j = ', j);
}

console.log('Cách 3:');
for (let k = 0; ; k++) {
    if (k > 9) break;
    console.log('k = ', k);
}

console.log('Cách 4:');
let n = 0
for (; ;) {
    console.log('n = ', n);
    n++;
    if (n > 9) break;
}


