function  resultReport( marks )
{ 
     // You have to write your code here
     if(Array.isArray(marks))
        {
            let totalMarks=0;
            let count=0;
            let passCount=0;
            let failCount=0;
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
const marks=100;
const result=resultReport(marks);
console.log(result);