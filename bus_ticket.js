/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/
var ticketPrice=800;
var age=35;
var isStudent=true;
if(age < 10)
{
    console.log("You are a child, so you can travell for free!!")
}

else if(age >= 60)
{
    ticketPrice = 800-(800*0.15);
    console.log("You are a senior citizen, so your ticket price is:",ticketPrice);
}
else if(isStudent == true)
{
    ticketPrice = 800-(800*0.5);
    console.log("You are a student, so your ticket price is:",ticketPrice);
}
else
{
    console.log("Your ticket price is:",ticketPrice);
}