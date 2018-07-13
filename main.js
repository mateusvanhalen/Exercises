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


// Add a condition inside the function to check if the speed is greater than 75 mph. If it is, add an additional message of SLOW DOWN!

// Example:

// The car is moving forward at 82 mph
// SLOW DOWN!