// const marks = [90, 95, 85];
// const physics = marks[0];
// console.log(physics);
//Instead of this we can use Destructuring

const [physics, math, chemistry] = [90, 95, 85];
console.log(`marks of physics = ${physics}`);
console.log(`marks of math = ${math}`);
console.log(`marks of chemistry = ${chemistry}`);

console.log('---------------------------------');

const {name, price, quantity} = {name: 'Shirt', price: 990, quantity:3};
console.log(`Product Name = ${name}`);
console.log(`Product Price = ${price}`);
console.log(`Product Quantity = ${quantity}`);

console.log('---------------------------------');

// const myObject = {
//     student: 'Mridul',
//     qualification: 'Bsc in CSE'
// };
// const {student: Sadia, qualification: Teacher} = myObject;
// console.log(myObject);