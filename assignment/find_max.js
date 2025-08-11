// Take three numbers input and find the max number

function getMax(num1, num2, num3)
{
     if(num1 > num2 && num1 > num3)
     {
        return num1;
     }
     else if(num2 > num1 && num2 > num3)
     {
        return num2;
     }
     else
     {
        return num3;
     }
}
const num1=52,num2=85,num3=89;
const greater=getMax(num1,num2,num3);
console.log(greater," is greater then of given numbers.");