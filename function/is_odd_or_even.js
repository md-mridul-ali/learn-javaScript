// Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd

function odd_even(number)
{
    if(number%2 === 0)
    {
        const result="Even";
        return result;
    }
    else
    {
         const result="Odd";
         return result;
    }
}
const number=10;
const result=odd_even(number);
console.log(result);