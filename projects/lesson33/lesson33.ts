class Person {
    id: string;
    firstName: string;
    lastName: string;

    constructor(id: string, firstName: string, lastName: string) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}

let Person1 = new Person('123', 'Le', 'Hung');
let Person2 = new Person('345', 'Noris', 'Nora');

console.log('Check person1: ', Person1.getFullName());
console.log('Check person2: ', Person2.getFullName());
