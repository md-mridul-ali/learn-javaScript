// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

function average(numbers)
{ let sum=0;
    let avg;
   const size=numbers.length;
   for( const number of numbers)
   {
       sum=sum+number;
   }
   avg=sum/size;
   return avg;
}
const numbers=[10, 5, 7, 8];
const result=average(numbers);
console.log("Average is:",result);