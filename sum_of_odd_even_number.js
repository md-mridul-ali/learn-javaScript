/***

Subtask-1:

Display sum of all the odd numbers from 91 to 129.

 */
/***

Subtask-2:

Display sum of all the even numbers from 51 to 85.

 */
//sum of odd numbers
let startNumber=91;
let lastNumber=129;
let sum=0;
for(let i=startNumber; i<=lastNumber; i++)
{
    if(i %2 !== 0)
    {
        sum=sum+i;
    }
}
console.log("Sum of odd numbers:",sum);
console.log("******************************")
//sum of even numbers
let startNum=51;
let lastNum=85;
let result=0;
for(let j=startNum; j<=lastNum; j++)
{
    if(j %2 == 0)
    {
        result=result+j;
    }
}
console.log("Sum of even numbers:",result);