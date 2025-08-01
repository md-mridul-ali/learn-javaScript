/***

Subtask-1:

Find all the odd numbers from 61 to 100.

 */


/***

Subtask-2:

Find all the even numbers from 78 to 98.

 */
//check odd number
let startNumber=61;
let lastNumber=100;
for(let i=startNumber; i<=lastNumber; i++)
{
    if(i%2 !== 0)
    {
        console.log(i, "is odd number");
    }
}
console.log("**************************")
//check even number
let startNum=78;
let lastNum=98;
for(let j=startNumber; j<=lastNumber; j++)
{
    if(j%2 == 0)
    {
        console.log(j, "is even number");
    }
}