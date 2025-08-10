// Take a year as input and check it is leap year or not 

function leapYear(year)
{
    if(year % 100 !== 0 && year % 4=== 0)
    {
        return true;
    }
    else if( year % 100 ===0 && year % 400 === 0)
    {
        return true;
    }
    else
    {
         return false;
    }
}
const year= 1900;
const isLeapYear=leapYear(year);
console.log("Is ",year," is leap-year?",isLeapYear);