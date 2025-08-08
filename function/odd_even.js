// Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.

function oddEven(number)
{
    if(number % 2 === 1)
    {
        const result =number*2;
        return result;
    }
    else{
        const result =number/2;
        return result;
    }
}
const result =oddEven(7);
console.log(result);