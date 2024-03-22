let age: number = 21;
if (age > 60) {
    console.log('Người già');
} else if (age > 30 && age <= 60) {
    console.log('Người trung niên');
} else if (age > 18 && age <= 30) {
    console.log('Người thanh niên');
} else {
    console.log('Trẻ con');
}

let check: boolean = age != 0;
if (check) {
    console.log('đã sinh');
}
else {
    console.log('chưa sinh');
}