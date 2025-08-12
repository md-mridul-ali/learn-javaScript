function cashOut( money ) 
{ 
     if(typeof money !== 'number')
     {
        return 'Invalid';
     }
     else if(money < 0)
     {
        return 'Invalid';
     }
     else
     {
        const result=parseFloat((money*0.0175).toFixed(4));
        return result;
     }

}
const money=999;
const result=cashOut(money);
console.log(result);