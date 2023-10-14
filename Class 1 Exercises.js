/**
 * MATH
 */

// 1. Pagliacci charges $16.99 for a 13” pizza and $19.99 for a 17” pizza.
// What is the area for each of these pizzas?
// (radius would be the listed size - i.e. 13" - divided by 2)
const LARGE_PIZZA_DIAMETER = '17';
const SMALL_PIZZA_DIAMETER = '13';
console.log(`Question 1.`);
let radiusLargePizza = LARGE_PIZZA_DIAMETER / 2;
let areaLargePizza = Math.PI * Math.pow(radiusLargePizza,2);
console.log(areaLargePizza,`area Large Pizza`)
let radiusSmallPizza= SMALL_PIZZA_DIAMETER / 2;
let areaSmallPizza = Math.PI * Math.pow(radiusSmallPizza,2);
console.log(areaSmallPizza,`area Small Pizza`)

// 2. What is the cost per square inch of each pizza?
console.log(`Question 2.`);
let smallPizzaCost = 16.99;
let largePizzaCost = 19.99;
console.log(`Small Pizza cost per inch`,smallPizzaCost/areaSmallPizza,
`\nLarge Pizza cost per inch`, largePizzaCost/areaLargePizza);

// 3. Using the Math object, put together a code snippet
// that allows you to draw a random card with a value
// between 1 and 13 (assume ace is 1, jack is 11…)
console.log(`Question 3.`);
let max = 13
let min = 1

const randomCard = Math.floor(min+Math.random() * max);

console.log(randomCard)

// 4. Draw 3 cards and use Math to determine the highest
// card

console.log(`Question 4.`);
const randomCard1 = Math.floor(min+Math.random() * max);
const randomCard2 = Math.floor(min+Math.random() * max);
const randomCard3 = Math.floor(min+Math.random() * max);
console.log("firstCard", randomCard1,"secondCard",randomCard2,"thirdCard", randomCard3)
console.log('Max of the three random cards',)
console.log(Math.max(randomCard1,randomCard2,randomCard3));


/**
 * ADDRESS LINE
 */
console.log(`Address Line Question 1.`);
// 1. Create variables for firstName, lastName,
// streetAddress, city, state, and zipCode. Use
// this information to create a formatted address block
// that could be printed onto an envelope.
let firstName = 'Robin'
let lastName = 'Perricone'
let streetAddress = '123 coral loop'
let city = 'Colorado Springs'
let state = 'CO'
let zipCode = '90210'
console.log(`${firstName} ${lastName}\n${streetAddress},\n${city},${state},${zipCode}`)

// 2. You are given a string in this format:
// firstName lastName(assume no spaces in either)
// streetAddress
// city, state zip(could be spaces in city and state)
// 
// Write code that is able to extract the first name from this string into a variable.
// Hint: use indexOf, slice, and / or substring
console.log(`Address Line Question 2.`);
let sampleAddressInfo = `firstName lastName 
streetAddress
city, state zip`
let space = sampleAddressInfo.indexOf(' ')
console.log(sampleAddressInfo.substring(0, space));

//console.log(sampleAddressInfo.split(" ")[0])
/**
 * FIND THE MIDDLE DATE
 */
console.log(`Middle Date and Time Question .`);
// On your own find the middle date(and time) between the following two dates:
// 1/1/2020 00:00:00 and 4/1/2020 00:00:00

let dateStart = new Date('1/1/2020 00:00:00') 
let dateEnd = new Date('4/1/2020 00:00:00')


let middleDate= (dateEnd.getTime() - dateStart.getTime()) / 2 
console.log(new Date(dateStart.getTime()+middleDate))
// Look online for documentation on Date objects.

// Starting hint:
const endDate = new Date(2019, 3, 1);
