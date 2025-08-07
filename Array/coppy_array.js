// Copy the given array into another array so that changing the copy does not affect the original.Change the first element of the copied array to 99.

// Input: [1, 2, 3]

// Expected Output:

// Original: [1, 2, 3] Copy: [99, 2, 3]

var numbers=[1, 2, 3];
var coppied_numbers=[];
for(const num of numbers)
{
    coppied_numbers.push(num);
}
coppied_numbers[0]=99;
console.log("Original:",numbers);
console.log("Coppy:",coppied_numbers);