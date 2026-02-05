const Addition = (num1=0, num2=0) =>{
   const sum = num1 + num2;
   return sum;
}
const result = Addition(10, 15);
console.log(result);

const Double = (x)=> x*2;
console.log(Double(6));

const IsFirstBig = (x ,y) => x > y;
console.log(IsFirstBig(8, 9));

const FirstElement = (nums) =>nums[0];
console.log(FirstElement([10, 15, 14, 16]));