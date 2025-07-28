/* You went to the supermarket to buy some oranges and apples. Calculate how much money the shopkeeper will return.

 Input:
 The first line of the input is the taka you have. The second line is the cost of 1 kg of oranges and 1 kg of apples.

 Output:
 Print the result.

 Sample Input:
 1000
 700

 Sample Output:
 300*/

 var money=1000;
 var orangePrice=300;
 var applePrice=250;
 var totalPrice;
 totalPrice=applePrice + orangePrice;
 var returnPrice;
 returnPrice=money - totalPrice;
 console.log("Shopkeeper will return: ",returnPrice, "taka");
