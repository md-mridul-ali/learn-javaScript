// Find the friend with the smallest name.
// const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

function getSmallest(names)
{
     let smallName=names[0];
     let smallLength=names[0].length;
     for(const name of names)
     {
        if(name.length < smallLength)
        {
            smallLength=name.length;
            smallName=name;
        }
     }
     return smallName;
     
}
const names=['sadia', 'tania', 'bristy', 'papia', 'mim'];
const smallName=getSmallest(names);
console.log(smallName);
