function cartTotal(products)
{
    let total=0;
    for(const product of products)
    {
        const thisProductCost=product.price*product.quantity;
        total=total+thisProductCost;
    }
    return total;
} 
const products=
[
    {name:'shampoo', price:300, quantity:2},
    {name:'conditioner', price:700, quantity:2},
    {name:'perfume', price:700, quantity:1},
    {name:'sunscreen', price:500, quantity:1}
];
const totalCost=cartTotal(products);
console.log("Total cost",totalCost,"Taka");
