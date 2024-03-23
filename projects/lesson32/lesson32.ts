// Function overloading
function add32(a: number, b: number): number;
function add32(a: string, b: string): string;
function add32(a: any, b: any) {
    return a + b;
}

console.log('check add32(3, 2) = ', add32(3, 2));
console.log(`check add32('Noris', 'Nora') = `, add32('Noris', 'Nora'));

class Counter32 {
    private current: number = 0;
    count(): number;
    count(target: number): number[];
    count(target?: number): number | number[] {
        if (target) {
            let values: number[] = [];
            for (let start = this.current; start <= target; start++) {
                values.push(start);
            }
            return values;
        }
        return ++this.current;
    }
}

let counter321 = new Counter32();

console.log(counter321.count());
console.log(counter321.count(20));

