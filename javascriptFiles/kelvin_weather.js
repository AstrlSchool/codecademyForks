//temp today in kelvin
const kelvin = 293;
//kelvin -> celsius
let celsius = kelvin - 273;
//celsius -> farenheit
let fahrenheit = celsius*(9/5)+32;
//fahrenheit usually calculates to a decical point; this code rounds it down to a whole number
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)
let newton = Math.floor(celsius*(33/100));
console.log(`Also, if you wanted to know, the temperature is ${celsius} degrees Celsius and ${newton} degrees Newton. How fun!`);