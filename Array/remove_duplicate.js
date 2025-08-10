// Take an array with some duplicate values and after that remove duplicate values form the array

function duplicate(numbers)
{
   const newNumbers=[];
   for(const number of numbers)
   {
       if(newNumbers.includes(number) === false)
       {
           newNumbers.push(number);
       }
   }
   return newNumbers;
}
const numbers=[10, 12, 11, 15, 11, 14, 15, 18, 11, 19];
const newNumbers=duplicate(numbers);
console.log("Original array:",numbers);
console.log("New array:",newNumbers);


