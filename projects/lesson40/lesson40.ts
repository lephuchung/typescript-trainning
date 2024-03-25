interface IPerson {
    // firstName chỉ được khởi tạo giá trị lần đầu, không được ghi đè
    readonly _firstName: string;
    // lastName có thể có hoặc không
    _lastName?: string;
}

function getFullName(person: IPerson) {
    return `${person._firstName} ${person._lastName}`;
}

// Để truyền được vào hàm getFullName, tham số cần tuân theo interface
let person = {
    _firstName: 'Noris',
    _lastName: 'Nora',
    _address: 'Hanoi'
}

console.log('check: ', getFullName(person));
