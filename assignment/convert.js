// Write a function to convert temperature from Celsius to Fahrenheit.

function celToFah(cel)
{
    const fah=(((9*cel)+160)/5).toFixed(2);
    return fah;
}
const cel=39;
const result=celToFah(cel);
console.log(result);
