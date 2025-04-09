const { bosses } = require('../datasets/bosses');

// To run the code you've written in this file, use node prototypes/problem-sets/bosses.js

console.log('Running bosses.js')

/* Bosses Prompts*/

/*
Level 1

Code: 
  Write a function called "getBossData" that takes in a boss as an argument and returns a string stating that boss's signature move.

Invoke: 
  To print the value your function returns and confirm it is correct, invoke your function within a console.log().
e.g.
  console.log(getBossData("scar"))
    should print --> 
      "Scar's signatureMove is fratricide."

e.g.
  console.log(getBossData("ursula"))
    should print --> 
      "Ursula's signatureMove is tricking fools into signing legal documents without reading them thoroughly."

Annotate:
  After you find a solution, write out the steps of that solution.  Break them down as much as possible. 
*/
// i have an object of objects. how do i iterate over that. i have the string "scar", and I want to get the corresponding boss object from the bosses data.  how do I use that string as a key?
// object entries transforms an object of objects in arrays of arrays. so i after i transofrm them all, since i have an argument that leads towards only one key, i will filter that. that gives me an array with that argument. to get the specific keys of that argument, i need to dig and get the object. 
// function getBossData(bossKey) {
//   const allBossEntries = Object.entries(bosses);
//   const filtered = allBossEntries.filter(entry => entry[0] === bossKey);
//   console.log(filtered)
//   const onlyBossObject = filtered[0][1];
//   console.log(onlyBossObject)
//   result =    `${onlyBossObject.name}'s signature move is ${onlyBossObject.signatureMove}.`
//   return result
    
    
// }
// console.log(getBossData("scar"))

/*
Level 2

Code: 
  Refactor your "getBossData" function so that it takes in 2 arguments - a boss and a specific datapoint.  The function should now return a string stating information about the specified boss based on the specified datapoint. 

Invoke:
  To print the value your function returns and confirm it is correct, invoke your function within a console.log().
e.g.
  console.log(getBossData("scar", "archnemesis"))
    should print --> 
      "Scar's archnemesis is Mufasa."

e.g.
  console.log(getBossData("jafar", "signatureMove"))
    should print --> 
      "Jafar's signatureMove is hypnosis."

e.g.
  console.log(getBossData("ursula", "goal"))
    should print --> 
      "Ursula's goal is to rule the seas."

Annotation:
  After you find a solution, write out the steps of that solution.  Break them down as much as possible. 
*/

// function getBossData(bossKey, datapoint) {
//   const allBossEntries = Object.entries(bosses);
//   const filtered = allBossEntries.filter(entry => entry[0] === bossKey);
//   console.log(filtered)
//   // const onlyBossObject = filtered[0][1];
//   // console.log(onlyBossObject)
//   result =  `${filtered[0][1].name}'s ${datapoint} is ${filtered[0][1][datapoint]}.`
//   return result
    
    
// }
// console.log(getBossData("scar", "archnemesis"))

/*
Level 3

Code: 
  Write a function called "getLoyalty" that returns average loyalty of a given boss's sidekicks.  Don't worry about rounding the decimals.

Invoke: 
  To print the value your function returns and confirm it is correct, invoke your function within a console.log().
e.g.
  console.log(getLoyalty("scar"))
    should print -->  5.33  
e.g.
  console.log(getLoyalty("ursula"))
    should print -->  9.5  

Annotation:
  After you find a solution, write out the steps of that solution.  Break them down as much as possible. 
*/
function getLoyalty(arg) {
  const onlySide = bosses[arg].sidekicks
  // console.log(onlySide)

  const onlyLoyalty = []
  onlySide.forEach((item) => {
    onlyLoyalty.push(item.loyaltyToBoss)
  })
  const result = onlyLoyalty.reduce((acc, nr) => {
        acc += nr
        return acc
  },0)
  return result / onlyLoyalty.length
}
console.log(getLoyalty("scar"))


/*
Level 4

Test:
  * Uncomment the module.exports below.
  * Unskip the bosses prompts tests in your prototype-test.js file.
  * Run `npm test` to confirm that all your functions are passing their tests.
  * Refactor as needed until all bosses tests are passing

Annotation:
  If your tests did not immediately pass, take notes on what details you missed while building and checking your solutions. 
  Take notes on the error messages that led you to fixing those details. 
*/



// module.exports = {
//   getBossData,
//   getLoyalty
// };



