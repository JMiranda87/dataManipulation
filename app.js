//Part 1: Math Problems

const num1 = 10;
const num2 = 20;
const num3 = 5;
const num4 = 15;


const isSum50 = (num1 + num2 + num3 + num4) == 50;
const isDivisibleBy5 = num1 % 5 === 0 && num2 % 5 === 0 && num3 % 5 === 0 && num4 % 5 === 0;
const isUnder25 =  num1 < 25 || num2 < 25 || num3 < 25 || num4 < 25;
const numChain = (num1 - num2 * num3 / num4);

const isValid = isSum50 && isDivisibleBy5 && isUnder25 && numChain;

console.log(`The four numbers are valid according to the provided criteria: ${isValid}.`)

// Part 2: Practical Math

const tripDistance = 1500;
const milesPerGallon1 = 30;
const milesPerGallon2 = 28;
const milesPerGallon3 = 23;
const milesPerHour1 = 55
const milesPerHour2 = 60
const milesPerHour3 = 75
const fuelBudget = 175;
const avgCostPerGallon = 3;

// Gallons of gas needed for the trip

const gallonsNeeded1 = tripDistance / milesPerGallon1;
const gallonsNeeded2 = tripDistance / milesPerGallon2;
const gallonsNeeded3 = tripDistance / milesPerGallon3;

console.log(`The gallons of gas needed for the trip at 55 mph: ${gallonsNeeded1}.`);
console.log(`The gallons of gas needed for the trip at 60 mph: ${gallonsNeeded2}.`);
console.log(`The gallons of gas needed for the trip at 75 mph: ${gallonsNeeded3}.`);

// Calculated cost per trip
const costPerTrip = tripDistance / milesPerGallon1 * avgCostPerGallon;
const costPerTrip2 = tripDistance / milesPerGallon2 * avgCostPerGallon;
const costPerTrip3 = tripDistance / milesPerGallon3  * avgCostPerGallon;

console.log(`Traveling at 55 MPH will cost me $${costPerTrip} out of $175. `);
console.log(`Traveling  at 60 MPH will cost me $${costPerTrip2} out of $175.`);
console.log(`Traveling at 75 MPH will cost me $${costPerTrip3} out of $175.`);


// Will the budget be enough for the trip?

const isBudgetEnough1 = costPerTrip  <= fuelBudget;
const isBudgetEnough2 = costPerTrip2  <= fuelBudget;
const isBudgetEnough3 = costPerTrip3  <= fuelBudget;  

console.log(`The budget is enough for the trip at 55 mph: ${isBudgetEnough1}.`);
console.log(`The budget is enough for the trip at 60 mph: ${isBudgetEnough2}.`);
console.log(`The budget is enough for the trip at 75 mph: ${isBudgetEnough3}.`);

// Time to complete the trip

const timeToComplete1 = tripDistance / milesPerHour1;
const timeToComplete2 = tripDistance / milesPerHour2;
const timeToComplete3 = tripDistance / milesPerHour3;

console.log(`The time to complete the trip at 55 mph: ${timeToComplete1} hours.`);
console.log(`The time to complete the trip at 60 mph: ${timeToComplete2} hours.`);
console.log(`The time to complete the trip at 75 mph: ${timeToComplete3} hours.`);
