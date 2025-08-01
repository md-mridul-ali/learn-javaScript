/***

Subtask-1:

Display sum of all the odd numbers from 81 to 131.

 */
/***

Subtask-2:

Display sum of all the even numbers from 206 to 311.

 */
//sum os odd number
let num1=81;
let num2=131;
let sum=0;
let i=num1;
while(i<=num2)
{
    if(i%2 !== 0)
    {
        sum=sum+i;
    }
    i++;
}
console.log("Summation odd number:",sum);
console.log("***********************");
//sum of even number
let number1=206;
let number2=311;
let result=0;
let j=number1;
while(j<=number2)
{
    if(j%2 == 0)
    {
        result=result+j;
    }
    j++;
}
console.log("Summation off even number:",result);