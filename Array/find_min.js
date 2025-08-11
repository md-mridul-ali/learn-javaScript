// Find the lowest number in the array below.
// const heights2 = [167, 190, 120, 165, 137];

function getLowest(numbers)
{
    let min=numbers[0];
    for(const number of numbers)
    {
        if(number < min)
        {
            min=number;
        }
    }
    return min;
}
const numbers=[167, 190, 120, 165, 137];
const minNumber=getLowest(numbers);
console.log("Lowest number is:",minNumber);