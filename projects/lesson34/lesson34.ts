// Không có access modifiers thì mặc định là public
// Public truy cập thoải mái
// Private truy cập trong lớp
// Protected không thể truy cập từ lớp con (chỉ trong lớp cha)
class Employee {
    public emCode: string;
    private emName: string;

    constructor(emCode: string, emName: string) {
        this.emCode = emCode;
        this.emName = emName;
    }
}

let emp = new Employee('aaa', 'Noris');
emp.emCode = '123'; // ok 
// emp.emName = 'Nora'; // Xảy ra lỗi

class Employee2 {
    protected empCode: string;
    public empName: string;
    constructor(empCode: string, empName: string) {
        this.empCode = empCode;
        this.empName = empName;
    }
}

class SalesEmp extends Employee2 {
    private department: string;
    constructor(name: string, code: string, department: string) {
        super(name, code);
        this.department = department;
    }
}

let sales = new SalesEmp('234', 'Nora', 'HP');
console.log('check sales name: ', sales.empName); // ok
// console.log('check sales code: ', sales.empCode); // Xảy ra lỗi vì empCode có quyền truy cập là protected, không được phép truy cập từ lớp con
// console.log('check sales: ', sales); // xảy ra lỗi vì trong sales có chứa sales code

