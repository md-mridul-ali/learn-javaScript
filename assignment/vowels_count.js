// Write a function to count the number of vowels in a string.

function vowelCount(string)
{
    let count =0;
   for(let i=0; i<string.length; i++)
   {
        if(string[i].toLowerCase() === 'a' || string[i].toLowerCase() === 'e' || string[i].toLowerCase() === 'i' || string[i].toLowerCase() === 'o' || string[i].toLowerCase() === 'u')
        {
            count++;
        }
   }
   return count;
}
const string='COLO GHURE ASHI';
const count=vowelCount(string);
console.log(count);