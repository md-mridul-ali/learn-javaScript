// Use a for...of loop to concatenate all the elements of an array into a single string.

// Input: var numbers = ['Tom', 'Tim', 'Tin', 'Tik']

// Output:

// 'TomTimTinTik'

var numbers = ['Tom', 'Tim', 'Tin', 'Tik'];

var newString="";
for(let i=0; i<numbers.length; i++)
{
    newString=newString + numbers[i];
}
 console.log(newString);

