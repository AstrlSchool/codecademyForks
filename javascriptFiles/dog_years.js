//self-explanatory
const myAge = 15;
//provide the years that are different than the others
let earlyYears = 2;
//provides a dog's age in human years
earlyYears *= 10.5;
//myAge has to stay constant, so take away the years that are longer from the shorter ones
let laterYears = myAge-2;
//the years after the first two for dogs are equivalent to roughly 4 human years. so multiply. by 4.
laterYears *= 4;
//add together all of the years to compile myAgeInDogYears
let myAgeInDogYears = earlyYears+laterYears;
//it's my name, but in all lowercase. idk why
let myName = 'Brennan'.toLowerCase();
//show everything in an easy to read manner
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);