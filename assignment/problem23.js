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
const player1={ name: "Germany", foul: 10, cardY: 1, cardR: 1 };
const player2={ name: "France", foul: 10, cardY: 2, cardR: 1 } ;
const result=bestTeam(player1,player2);
console.log(result);