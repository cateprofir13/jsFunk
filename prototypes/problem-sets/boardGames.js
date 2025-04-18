const { cursorTo } = require('readline');
const { boardGames } = require('../datasets/boardGames');

// To run the code you've written in this file, use node prototypes/problem-sets/boardGames.js

console.log('Running boardGames.js')

/* Board Games Prompts*/

/*
Level 1

Code: 
  Write a function called "listGames" that takes in a type as an argument and returns an array of 
  just the names of the games within a specified type. 

Invoke: 
  To print the value your function returns and confirm it is correct, invoke your function within a console.log().
e.g.
  console.log(listGames("strategy"))
    should print -->      
      ["Chess", "Catan", "Checkers", "Pandemic", "Battle Ship", "Azul", "Ticket to Ride"]

e.g.
  console.log(listGames("childrens"))
    should print -->      
      ["Candy Land", "Connect Four", "Operation", "Trouble"]

Annotate:
  After you find a solution, write out the steps of that solution.  Break them down as much as possible.
  realized i cant iterarte over the hash directly, i had to iterate over the list that holds the types
  use for each to give itaret over the type and give me the type names in an array 
  we can do the same with map
*/
function listGames(type) {
   var typeG = []
   boardGames[type].forEach((typ) => {
    typeG.push(typ.name)
    
  })
  return typeG
}
console.log(listGames("strategy"))

function listGames(type) {
  var typeG = boardGames[type].map((currentT) => {
  return currentT.name
 })
 return typeG
}
console.log(listGames("strategy"))
/*
Level 2

Code: 
  Write a function called "findHighestRatedGamesByType" that takes in a type as an argument 
  returns an object which is the highest rated game within the specified type.

Invoke:
  To print the value your function returns and confirm it is correct, invoke your function within a console.log().
e.g.
  console.log(findHighestRatedGamesByType("strategy"))
    should print -->   
    { name: 'Azul', rating: 8.8, maxPlayers: 4 }

e.g.
  console.log(findHighestRatedGamesByType("party"))
    should print -->   
    { name: 'Codenames', rating: 7.4, maxPlayers: 8 }

Annotation:
  After you find a solution, write out the steps of that solution.  Break them down as much as possible. 

   i need to compare all rating values and return the object with 
   the highest value. the easiest way i can think of is to get the ratings in an array, 
   find the max and then find which game has that rating. i have to be careful about understanding what is data types i am deconstructing to. 
*/
function findHighestRatedGamesByType(type){
  var arrayOnly = boardGames[type]
  var onlyRatings = arrayOnly.map(game => game.rating)
  var bestRating = Math.max(...onlyRatings)
  var object = null
  arrayOnly.forEach((game) =>{
    if (game.rating === bestRating){
      object = game
    }
  })
  return object
}
console.log(findHighestRatedGamesByType("strategy"))



// i am also thinking to somehow compare each objects rating with the first one. 
//  if the second one is not greater then the first, then
//  the first stays as the greatests. if at some point one is greater, 
//  that one becomes the one compared against the following ones
//  reduce with no initial value, takes the first elem as initial value


function findHighestRatedGamesByType(type){
  var boardArray = boardGames[type]
  var bestObj = boardArray.reduce((acc, game) => {
    if (acc.rating > game.rating) {
      return acc
    }
    else {
      return game
    } 
  })
  return bestObj
}
console.log(findHighestRatedGamesByType("strategy"))

// this version sets the result of for each as the first value in the data we have to compare. each loop i compare it to the other, and if its not greater, it stays the same, otherwise its replaced by the highest

function findHighestRatedGamesByType(type){
  var boardArray = boardGames[type]
  var result = boardArray[0]
  boardArray.forEach((game) => {
    if (result.rating < game.rating) {
       result = game
    }     
  })
  return result
}
console.log(findHighestRatedGamesByType("strategy"))

// this version sets best so far as null and includes it in the condition. because the first condition is true, best so far as in the first emelement in the loop gets the value of the first element

function findHighestRatedGamesByType(type) {
    let gamesArray = boardGames[type]
    let bestSoFar = null
    gamesArray.forEach((game) => {
     if(bestSoFar === null || game.rating > bestSoFar.rating) {
        bestSoFar = game     
    }
  })
    return bestSoFar
  }
  console.log(findHighestRatedGamesByType("party"))


  

// { name: 'Azul', rating: 8.8, maxPlayers: 4 }
/*
Level 3

Code: 
  Write a function called "averageScoreByType" that takes in a type as an argument
   and returns the average score for the specified type. 
    Do not worry about rounding your result.

Invoke: 
  To print the value your function returns and confirm it is correct, 
  invoke your function within a console.log().  
e.g.
  console.log(averageScoreByType("strategy"))
    should print -->      
      7

e.g.
  console.log(averageScoreByType("childrens"))
    should print -->      
      4.25

Annotation:
  After you find a solution, write out the steps of that solution.  Break them down as much as possible. 
*/

function averageScoreByType (type) {
  var boardArray = boardGames[type]
  var ratingsOnly = boardArray.map(game => game.rating)
  var bestR = ratingsOnly.reduce((acc, rating) => {
    acc += rating
    return acc
  }, 0)
  console.log(bestR / ratingsOnly.length)
}
console.log(averageScoreByType("childrens"))



/*
Level 4

Code: 
  Write a function called "averageScoreByTypeAndPlayers" that takes in 2 arguments - 
  a type and a maximum number of players.
   The function should return the average score of any games that match the specified 
   type and maximum number of players.  Do not worry about rounding your result.

Invoke: 
  To print the value your function returns and confirm it is correct, invoke your function within a console.log().  
e.g.
  console.log(averageScoreByTypeAndPlayers("strategy", 2))
    should print -->      
      6.16666666667

e.g.
  console.log(averageScoreByTypeAndPlayers("childrens", 4))
    should print -->      
      3.8

Annotation:
  After you find a solution, write out the steps of that solution.  Break them down as much as possible. 
*/
function averageScoreByTypeAndPlayers(type, maxPlayer) {
  var boardArray = boardGames[type]
  var arrayFilter = boardArray.filter((game) => {
    if (game.maxPlayers === maxPlayer) {
      return game
    }
  })
  console.log(arrayFilter)
  var ratingArray = arrayFilter.map(game => game.rating)
  console.log(ratingArray)
  var averageP = ratingArray.reduce((acc, rating) => {
    acc += rating
    return acc

  }, 0)
  console.log(averageP / ratingArray.length)
}
console.log(averageScoreByTypeAndPlayers("strategy", 2))

// first i have to filter the games where maxplayers equals the maxplayer passed in the param. i use filter to check if the game.maxplayers value is the same as the max player passed as arg. then i use that var where i stores the filtered array to map over it and get the ratings only. then use reduce to get the avegrage 
/*







Level 5

Test:
  * Uncomment the module.exports below.
  * Unskip the Board Games Prompts tests in your prototype-test.js file.
  * Run `npm test` to confirm that all your functions are passing their tests.
  * Refactor as needed until all Board Games tests are passing

Annotation:
  If your tests did not immediately pass, take notes on what details you missed while building and checking your solutions. 
  Take notes on the error messages that led you to fixing those details. 
*/



// module.exports = {
//   listGames,
//   findHighestRatedGamesByType,
//   averageScoreByType,
//   averageScoreByTypeAndPlayers
// };

// function findHighestRatedGamesByType(type) {
//     let gamesArray = boardGames[type]
//     let bestSoFar = null
//     gamesArray.forEach((game) => {
//      if(bestSoFar === null || game.rating > bestSoFar.rating) {
//         bestSoFar = game     
//     }
//   })
//     return bestSoFar
//   }
//   console.log(findHighestRatedGamesByType("party"))