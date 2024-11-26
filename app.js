// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
let isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;

// Finally, log the results.
// console.log(isValid);

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && 
  ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
  (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);


//  Check if all numbers are divisible by 5. 

let resultDivisionN1By5 = n1 % 5 === 0;
let resultDivisionN2By5 = n2 % 5 === 0;
let resultDivisionN3By5 = n3 % 5 === 0;
let resultDivisionN4By5 = n4 % 5 === 0;

// Cache the result in a variable.
let allDivisibleBy5 = resultDivisionN1By5 && resultDivisionN2By5 && resultDivisionN3By5 && resultDivisionN4By5;

console.log(`All constants divisible by 5: ${allDivisibleBy5}`); 

// Check if the first number is larger than the last. 
// Cache the result in a variable.
let n1GreaterN4 = n1 > n4;
console.log(`First number is greater then last number: ${n1GreaterN4}`);

// Accomplish this arithmetic chain:
// Subtract the first number from the second number.
let subN2N1=n2-n1;

// Multiply the result by the third number.
let multRezByN3 = subN2N1*n3;

// Find the remainder of dividing the result by the fourth number.
let rezMultByN4 = multRezByN3 % n4;
console.log(`Remaider of dividing (n2-n1)*n3 by ${n4} is ${rezMultByN4}`);

// Change the way that isOver25 calculates so that we do not need to use the NOT operator (!) in other logic comparisons. 
// Rename the variable as appropriate.

// Check if no one number larger than 25
// This time, we use the AND operator to check
// if ALL of the numbers are no larger than 25.
const isUnder25 = n1 < 25 && n2 < 25 && n3 < 25 && n4 < 25;

// Put the results into a single variable for convenience. 
// We teste for "isUnder25" as an alternative.
isValid = isSum50 && isTwoOdd && isUnder25 && isUnique;

// Finally results.
console.log (`The statement what all four numbers are valid according to the provided criteria is  ${isValid}.`);


// Part 2: Practical Math

// You are planning a cross-country road trip!
// The distance of the trip, in total, is 1,500 miles.
const L=1500;
// Your car’s fuel efficiency is as follows:
// At 55 miles per hour, you get 30 miles per gallon.
// At 60 miles per hour, you get 28 miles per gallon.
// At 75 miles per hour, you get 23 miles per gallon.
// You have a fuel budget of $175.
const budget = 175;
// The average cost of fuel is $3 per gallon.
const gasCost = 3;
let fuel = budget / gasCost; //how many gallons I can byu
// Set up a program to answer the following questions:
// How many gallons of fuel will you need for the entire trip?
// Will your budget be enough to cover the fuel expense?
// How long will the trip take, in hours?
// Compare the results when traveling at an average of 55, 60, and 75 miles per hour. Which makes the most sense for the trip?
// Log the results of your calculations using string concatenation or template literals.


// Fuel efficiency:  55 miles p/hour, get 30 miles p/gallon.
let speed = 55;
console.log('Speed '+speed);
let fuelConsumption = 30;
let needFuel = L/fuelConsumption; //How many gallons of fuel I need for this trip
let needBudget = needFuel*gasCost; //Will your budget be enough to cover the fuel expense?
console.log('You need $ '+needBudget);
if (needBudget>budget)
    console.log("You budget is not enough")
else {
    let t=L/speed; //How long will the trip take, in hours
    console.log(`Your trip will take ${t} hours`);
}


// Fuel efficiency:  60 miles p/hour, get 28 miles p/gallon.
speed = 60;
console.log('Speed '+speed);
fuelConsumption = 28;
needFuel = L/fuelConsumption; //How many gallons of fuel I need for this trip
needBudget = needFuel*gasCost; //Will your budget be enough to cover the fuel expense?
console.log('You need $ '+needBudget);
if (needBudget>budget)
    console.log("You budget is not enough")
else {
    let t=L/speed; //How long will the trip take, in hours
    console.log(`Your trip will take ${t} hours`);
}

// Fuel efficiency:  75 miles p/hour, get 23 miles p/gallon.
speed = 75;
console.log('Speed '+speed);
fuelConsumption = 23;
needFuel = L/fuelConsumption; //How many gallons of fuel I need for this trip
needBudget = needFuel*gasCost; //Will your budget be enough to cover the fuel expense?
console.log('You need $ '+needBudget);
if (needBudget>budget)
    console.log("You budget is not enough")
else {
    let t=L/speed; //How long will the trip take, in hours
    console.log(`Your trip will take ${t} hours`);
}
