// Take a array, find odd numbers from the array and calculate average of those odd numbers

function oddAverage(numbers)
{
    let count =0;
    let sum=0;
    let avg;
    for(const number of numbers)
    {
        if(number % 2 !== 0)
        {
            sum=sum+number;
            count++;
        }
    }
    avg=(sum/count).toFixed(2);
    return avg;
}
const numbers = [10, 11, 15, 14, 17, 21, 39, 44, 41];
const result = oddAverage(numbers);
console.log("Average of odd numbers:",result);