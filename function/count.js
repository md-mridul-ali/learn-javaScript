// Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string

function countDown(numbers)
{
   var count=0;
   for(let i=0; i<numbers.length; i++)
   {
       if(numbers[i] === '0')
       {
        count=count+1;
        
       }
       
   }
   return count;
}
var numbers='1001101';
const result = countDown(numbers);
console.log(result);