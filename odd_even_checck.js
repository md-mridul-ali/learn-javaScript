/***

Subtask-1:

Find all the odd numbers from 61 to 100.

 */


/***

Subtask-2:

Find all the even numbers from 78 to 98.

 */
//Find odd numbers
var startNumber=61;
var lastNumber=100;
for(var i=startNumber; i<=lastNumber; i++)
{
    if(i % 2 !== 0)
    {
        console.log(i,"is a odd number")
    }
}
console.log("**********************************")
//find even number
var startNum=78;
var lastNum=98;
for(var j=startNum; j<=lastNum; j++)
{
    if(j % 2 == 0)
    {
        console.log(j,"is a even number")
    }
}