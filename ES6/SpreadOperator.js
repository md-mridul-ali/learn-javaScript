const arr1 = [2, 4, 6, 8, 10];
const arr2 = [...arr1];
arr2.push(1, 3, 5, 7, 9);
console.log(`Elements of Array1 = ${arr1}`);
console.log(`Elements of Array2 = ${arr2}`);

const arr3 = [10, 12, 14];
const arr4 = [11, 13, 15];
const arr5 = [...arr3, ...arr4];
console.log(`Elements of Array5 = ${arr5}`);

const numbers = [15, 14, 19, 22, 34, 17];
const max = Math.max(...numbers);
console.log(`Maximum number is = ${max}`);