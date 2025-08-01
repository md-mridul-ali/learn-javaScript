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
let i=startNumber;
while(i<=lastNumber)
{
    if(i%2 !== 0)
    {
        console.log(i, "is odd number");
    }
     i++;
}
console.log("**************************")
//check even number
let startNum=78;
let lastNum=98;
let j=startNum;
while(j<=lastNum)
{
    if(j%2 == 0)
    {
        console.log(j, "is even number");
    }
    j++;
}