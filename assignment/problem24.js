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
const arr1={data: [2 , 5 , 6] } ;
const arr2=[2 , 5 , 6] ;
const result=isSame(arr1,arr2);
console.log(result);