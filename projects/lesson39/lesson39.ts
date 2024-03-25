abstract class Emp39 {
    private _firstName: string;
    private _lastName: string;
    constructor(_firstName: string, _lastName: string) {
        this._firstName = _firstName;
        this._lastName = _lastName;
    }
    abstract getSalary(): number;
    get fullName() {
        return `${this._firstName} ${this._lastName}`;
    }

    compensationStatement(): string {
        return `${this.fullName} make ${this.getSalary()} a month`;
    }
}

class Emp391 extends Emp39 {
    private _salary: number;
    constructor(_firstName: string, _lastName: string, _salary: number) {
        super(_firstName, _lastName);
        this._salary = _salary;
    }
    getSalary(): number {
        return this._salary;
    }
}

let test391 = new Emp391('Noris', 'Nora', 5000);
console.log('check: ', test391.compensationStatement());
