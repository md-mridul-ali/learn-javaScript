/** Problem -01 ( Divide the Asset ) */ 
var area = 15; 
//write your code here 
console.log(area/2);

/** Problem -02 ( Cycle or Laptop ) */ 
var money = 9999;
//write your code here 
if(money >= 25000)
{
    console.log("Laptop");
}
else if(money >=10000)
{
    console.log("Cycle");
}
else{
    console.log("Chocolate");
}

/** Problem -03 ( Medicine Planner ) */ 
var lastDay = 6; 
//write your code here 
    for(var i=1; i<=lastDay; i++)
    {
        if(i % 3 === 0)
        {
            console.log(i +" "+"-" +" "+"medicine");
        }
        else{
            console.log(i +" "+"-" +" "+"rest");
        }
    }

/** Problem 04 - (Delete / Store) */ 
var fileName="docx.xpdf";
//write your code here 
var firstChar=fileName[0];
var lastFourChar=fileName.slice(-4);
var lastFiveChar=fileName.slice(-5);
if(firstChar === "#" || lastFourChar === ".pdf" || lastFiveChar === ".docx")
{
    console.log("Store");
}
else{
    console.log("Delete");
}

/** Problem 05 - ( PH Email Generator )  */
var student= { name: "mewo" , roll: 96 ,department: "cse" }; 
//write your code here 
console.log(student.name.toLowerCase()+student.roll+"."+student.department.toLowerCase()+"@ph.ac.bd");

/** Problem 06 :  (Current Salary )  */ 
var experience = 40; 
var startingSalary = 30000; 
//write your code here 
var currentSalary=startingSalary
var j=1;
while(j<=experience)
{
    currentSalary=currentSalary+(currentSalary*0.05);
    j++;
}
console.log(currentSalary.toFixed(2));