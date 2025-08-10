// Take input as inch and convert from inch to feet

// function inchToFeet(inch)
// {
//    const feet= (inch/12).toFixed(2);
//    return feet;
// }
// const height=68;
// const result=inchToMiles(height);
// console.log(result);

function inchToFeet(inch)
{
   const feet=parseInt(inch/12);
   const inchRemain=inch%12;
   const result=feet + " ft " + inchRemain + " inch";
   return result;
}
const height=68;
const result=inchToFeet(height);
console.log(result);