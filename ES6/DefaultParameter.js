function sum (num1, num2){
    const result = num1 +num2;
    // console.log(result);
}
sum(10, 15);

//With Default Parameter Function
function sub (num1 = 0, num2 = 0)
{
    return num1 + num2;
}
const result = sub(20);
// console.log(result);

function FullName (firstName, lastName = '')
{
   return firstName + lastName;
}
let fullName = FullName('Mridul');
// console.log(fullName);

function Array(array = [])
{
   console.log(array);
}
Array([12, 15, 14, 18]);