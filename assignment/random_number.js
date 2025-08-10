// Generate a random number between 10 to 20.

function randomNumber(num1,num2)
{
    const number=Math.floor(Math.random() * (num2 - num1 + 1)) + num1;
    return number
}
const num1=10;
const num2=20;
const number=randomNumber(num1, num2);
console.log(number);