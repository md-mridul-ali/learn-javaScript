const employee = {
    'name': 'Mridul',
    designation: 'Dev',
    experience: 1,
    salary: 20000,
    'home-address': 'Natore, Rajshahi'
};
const employeeName = employee.name; //Dot notation
console.log(employeeName);
// const employeeAddress1 = employee.home-address;  It gives error. For preventing error we have to use bracket notation.
const employeeAddress = employee['home-address']; //Bracket notation
console.log(employeeAddress);

// console.log(employee);