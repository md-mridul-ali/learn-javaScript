// Your task is to calculate the total budget required to buy electronics:

//     laptop = 35000 tk
//     tablet = 15000 tk
//     mobile = 20000 tk
// Write a JavaScript function named calculateElectronicsBudget that takes in the number of laptop, tablets, and mobile and returns the total money required.

function calculateElectronicsBudget(laptopQuantity, tabletsQuantity, mobileQuantity)
{
    const laptop = 35000; 
    const tablet = 15000; 
    const mobile = 20000;
    
    const totalLaptopPrice=laptopQuantity*laptop;
    const totalTabletsPrice=tabletsQuantity*tablet;
    const totalMobilePrice=mobileQuantity*mobile;

    const totalBudget=totalLaptopPrice+totalTabletsPrice+totalMobilePrice;
    return totalBudget;
} 
const laptopQuantity=1, tabletsQuantity=2, mobileQuantity=3;
const requiredBudget=calculateElectronicsBudget(laptopQuantity, tabletsQuantity, mobileQuantity);
console.log("Budget need", requiredBudget, "Taka");