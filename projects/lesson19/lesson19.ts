// Cách đặt tên cho union type như sau
type myType = number | string
const adđNumberOrString19 = (a: myType, b: myType) => {
    if (typeof (a) === 'number' && typeof (b) === 'number') {
        return a + b;
    }
    if (typeof (a) === 'string' && typeof (b) === 'string') {
        return a.concat(b);
    }
    else throw new Error('Parameters must be string or number!');
}

console.log('adđNumberOrString19(1,2)=', adđNumberOrString19(1, 2));
console.log(`adđNumberOrString19('he','llo')=`, adđNumberOrString19('he', 'llo'));