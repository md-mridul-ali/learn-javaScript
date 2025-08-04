/** Problem 04 - (Delete / Store) */ 
var fileName= "result.pdf"; 
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