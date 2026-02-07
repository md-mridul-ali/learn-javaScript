const employee = {
    name: 'Mridul',
    designation: 'Dev',
    salary: 20000,
    experience: 1
};
// delete(employee.experience);
// employee.location = 'Dhaka';
// Object.freeze(employee);
// delete(employee.experience);
// employee.salary = employee.salary + 5000;
// employee.location = 'Dhaka';
Object.seal(employee);
delete(employee.experience);
employee.salary = employee.salary + 5000;
employee.location = 'Dhaka';
console.log(employee);