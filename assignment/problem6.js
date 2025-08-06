/** Problem 06 :  (Current Salary )  */ 
var experience = 40; 
var startingSalary = 30000; 
//write your code here 
var currentSalary=startingSalary;
var j=1;
while(j<=experience)
{
    currentSalary=currentSalary+(currentSalary*0.05);
    j++;
}
console.log(currentSalary.toFixed(2));