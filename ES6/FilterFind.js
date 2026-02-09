const numbers = [5, 8, 10, 17, 18];
const greaterThan10 = numbers.filter((x)=> x > 10);
console.log(`Greater than 10 = ${greaterThan10}`);
const firstEven = numbers.find((x) => x%2 === 0)
console.log(`First even number = ${firstEven}`);
