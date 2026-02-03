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

function  onlyCharacter( str) 
{ 
     // You have to write your code here 
     if(typeof str === 'string')
     {
        let string = str.split(' ').join('');
        string = string.toUpperCase();
        return string;
     }
     else
     {
         return 'Invalid';
     }
}

function  bestTeam( player1, player2 )
{ 
     // You have to write your code here
     if(typeof player1 === 'object' && typeof player2 === 'object')
     {
          let sum1=player1.foul + player1.cardY + player1.cardR;
          let sum2=player2.foul + player2.cardY + player2.cardR;
          if(sum1 < sum2)
            {
                return player1.name;
            } 
           else if(sum1 > sum2)
            {
                return player2.name;
            } 
            else
             {
                 return 'Tie';
             }  
     } 
     else
     {
          return 'Invalid';
     }
}

function  isSame(arr1 , arr2 )
{ 
     // You have to write your code here 
     if(Array.isArray(arr1) && Array.isArray(arr2))
     {
        if(arr1.length !== arr2.length)
        {
            return false;
        }
        for(let i=0; i<arr1.length; i++)
        {
            if(arr1[i] !== arr2[i])
            {
                return false;
            }
        }
        return true;
     }
     else
     {
        return 'Invalid';
     }
}

function  resultReport( marks )
{ 
     // You have to write your code here
     if(Array.isArray(marks))
        {
            let totalMarks=0;
            let count=0;
            let passCount=0;
            let failCount=0;
            if(marks.length === 0)
            {
                return{
                    finalScore:0,
                    pass:0,
                    fail:0
                };
            }
            for(let i=0; i<marks.length; i++)
            {
                totalMarks=totalMarks+marks[i];
                count++;
                if(marks[i] >= 40)
                    {
                        passCount++;
                    } 
                else
                    {
                        failCount++;
                    }       
            }
            let avg=Math.round(totalMarks/count);
            return{
                finalScore:avg,
                pass:passCount,
                fail:failCount
            };    
        } 
     else
     {
        return 'Invalid';
     }
}