class Person37 {
    public _firstName: string;
    public _lastName: string;

    constructor(_firstName: string, _lastName: string) {
        this._firstName = _firstName;
        this._lastName = _lastName;
    }

    describe(): string {
        return `This is ${this._firstName} ${this._lastName}`;
    }
}

class Emp37 extends Person37 {
    public _job: string;

    constructor(_firstName: string, _lastName: string, _job: string) {
        super(_firstName, _lastName);
        this._job = _job;
    }

    // Ghi đè
    describe(): string {
        return `${super.describe()} - a ${this._job}`;
    }
}

let Emp371 = new Emp37('Noris', 'Nora', 'dev');
console.log('check describe: ', Emp371.describe());

