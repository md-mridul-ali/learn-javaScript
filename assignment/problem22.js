function  onlyCharacter( str) 
{ 
     // You have to write your code here 
     if(typeof str === 'string')
     {
        let string = str.replace(/\s/g, '');
        string = string.toUpperCase();
        return string;
     }
     else
     {
         return 'Invalid';
     }
}
const str =true ;
const result = onlyCharacter(str);
console.log(result);