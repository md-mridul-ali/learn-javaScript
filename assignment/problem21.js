function totalFine( fare )
{ 
     // You have to write your code here
     if(typeof fare === 'number' && fare > 0)
     {
         let fine = fare + fare*0.2 + 30;
         return fine;
     }
     else
     {
         return 'Invalid'
     }

}
const fare=0;
const result=totalFine(fare);
console.log(result);