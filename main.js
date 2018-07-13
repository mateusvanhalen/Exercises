//Create a function called `go` that takes 2 arguments: 
// 1. direction (forwards, backwards, etc.)
// 1. speed (mph).

// The function, when invoked, will print out the following in your console (for example): `The car is moving forward, at 25 mph.

let direction
let speed


function go (direction, speed) { 
    let overspeed = speed - 75
        console.log(`The car is moving ${direction} , at ${speed} mph.`);
  if (speed >= 75) {
      console.log(`SLOW DOWN! You are traveling at ${speed} which is ${overspeed} mph over the limit! `)
      
  }
}

go ("north", 82);
go ("north", 75);
go ("north", 95);
go ("south", 115);
go ("east", 25);


// Add a condition inside the function to check if the speed is greater than 75 mph. If it is, add an additional message of SLOW DOWN!

// Example:

// The car is moving forward at 82 mph
// SLOW DOWN!

//LINE BREAK LINE BREAK LINE BREAK LINE BREAK LINE BREAK

// Given the following set of data about chicken birth rates, you need to filter out the objects where the birth rate value is greater than 15 per 1000 chickens for that year. Store the good years in a new array named `bestYears`.

const bestYears = []
const birthRates = [
  { year: 1969, birthRate: 13}, 
  { year: 1970, birthRate: 16}, 
  { year: 1971, birthRate: 15}, 
  { year: 1972, birthRate: 11}, 
  { year: 1973, birthRate: 18}, 
  { year: 1974, birthRate: 17}, 
  { year: 1975, birthRate: 9}
];

for (currentYear of birthRates) {
    if (currentYear.birthRate > 15) {}
    bestYears.push(currentYear)
}

console.log(bestYears)