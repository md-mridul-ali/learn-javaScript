// You are given an array of numbers. Count how many times the a number is repeated in the array.

// sample-input: numbers = [5,6,11,12,98, 5]

// find: 5

// output: 2

// sample-input:

// numbers = [5,6,11,12,98, 5]

// find: 25

// output: 0

function duplicateCount(numbers)
{
    let count =0;
    const find=5;
    for(const number of numbers)
    {
        if(find === number)
        {
            count++;
        }
    }
    return count;
}
const numbers = [5,6,11,12,98, 5];
const result=duplicateCount(numbers);
console.log(result);