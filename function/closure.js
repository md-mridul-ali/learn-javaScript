function counter()
{
   let count = 10;
   return function(user)
   {
      count = count+1;
      console.log(`${user}'s count  ${count}`);
   }
}
const rahimCounter=counter();
rahimCounter("Rahim");
rahimCounter("Rahim");
rahimCounter("Rahim");
rahimCounter("Rahim");
rahimCounter("Rahim");
console.log("*****************************");
const karimCounter=counter();
karimCounter("Karim");
karimCounter("Karim");
karimCounter("Karim");
karimCounter("Karim");
karimCounter("Karim");
console.log("*****************************");
rahimCounter("Rahim");
rahimCounter("Rahim");
rahimCounter("Rahim");

karimCounter("Karim");
karimCounter("Karim");
karimCounter("Karim");


