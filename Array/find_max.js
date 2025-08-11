// Find the highest number in the array below.
// const heights2 = [167, 190, 120, 165, 137];

function getHighest(numbers)
{
   let max=numbers[0];
   for(let number of numbers)
   {
       if(number > max)
       {
          max=number;
       }
   }
   return max;
}
const numbers=[167, 190, 120, 165, 137];
const maxNumber=getHighest(numbers);
console.log("Highest number is:",maxNumber);