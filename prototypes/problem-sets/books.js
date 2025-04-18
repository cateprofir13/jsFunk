const { books } = require('../datasets/books');

// To run the code you've written in this file, use node prototypes/problem-sets/books.js

console.log('Running books.js')

/* Books Prompts*/

/*
Level 1

Code: 
  Write a function called "removeViolence" that takes in the books data as an argument and returns an array of all book titles that are not horror or true crime.

Invoke: 
  To print the value your function returns and confirm it is correct, invoke your function within a console.log().
e.g.
  console.log(removeViolence(books))
    should print --> 
     [
        '1984', 'The Great Gatsby', 'Lord of the Flies', 'Harry Potter and the Sorcerer\'s Stone', 'The Hitchhiker\'s Guide to the Galaxy', 'Flowers for Algernon', 'Slaughterhouse-Five', 'The Handmaid\'s Tale', 'The Metamorphosis', 'Brave New World', 'Life of Pi', 'The Curious Incident of the Dog in the Night - Time', 'The Bell Jar', 'Catch-22', 'Treasure Island'
      ]

Annotate:
  After you find a solution, write out the steps of that solution.  Break them down as much as possible.
  filter and get the objects that are not horror. map and get the names from that. pay attention to key names. if you have multiple value to compare, use and and write the condition again
*/
function removeViolence(booksP) {
  var filterBooks = booksP.filter(book => book.genre !== 'Horror' && book.genre !== 'True Crime')
  console.log(filterBooks)
  var mappedArray = filterBooks.map(map => map.title)
  return mappedArray
}
console.log(removeViolence(books))

function removeViolence(booksP) {
  var namesArray = []
  booksP.forEach((book) => {
    if (book.genre !== "Horror" && book.genre !== "True Crime") {
      namesArray.push(book.title)
    }
  })
  return namesArray
}
console.log(removeViolence(books))
/*
Level 2

Code: 
  Write a function called "getByGenre" that takes 2 arguments: the books data, and a specified genre.  The function should return an array of objects containing all books of that genre.
 
Invoke:
  To print the value your function returns and confirm it is correct, invoke your function within a console.log().
e.g.
  console.log(getByGenre(books, "Fiction"))
    should print -->   
    [
      {
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        genre: 'Fiction',
        published: 1925
      },
      {
        title: 'Lord of the Flies',
        author: 'William Golding',
        genre: 'Fiction',
        published: 1954
      },
      {
        title: 'Life of Pi',
        author: 'Yann Martel',
        genre: 'Fiction',
        published: 2001
      },
      ...etc
    ]

e.g.
  console.log(getByGenre(books, "Satire"))
    should print -->   
    [
      {
        title: 'Catch-22',
        author: 'Joseph Heller',
        genre: 'Satire',
        published: 1961
      }
    ]

Annotation:
  After you find a solution, write out the steps of that solution.  Break them down as much as possible. 
*/

function getByGenre (data, genre) {
 var genreBooks = []
 data.forEach((book) => {
  if(book.genre === genre) {
    genreBooks.push(book)
  }
 })
 return genreBooks
}

console.log(getByGenre(books, "Satire"))
/*
Level 3

Code: 
  Modify your "getByGenre" function so that it doesn't return the entire book object, only the title.

Invoke:
  To print the value your function returns and confirm it is correct, invoke your function within a console.log().
e.g.
  console.log(getByGenre(books, "Fiction"))
    should print -->   
    [
      'The Great Gatsby',
      'Lord of the Flies',
      'Life of Pi',
      'The Bell Jar',
      'Treasure Island'
    ]

e.g.
  console.log(getByGenre(books, "Satire"))
    should print -->   
    ['Catch-22']

Annotation:
  After you find a solution, write out the steps of that solution.  Break them down as much as possible.  
*/
function getByGenre (data, genre) {
  var genreBooks = []
  data.forEach((book) => {
   if(book.genre === genre) {
     genreBooks.push(book.title)
   }
  })
  return genreBooks
 }
 
 console.log(getByGenre(books, "Satire"))


/*
Level 4

Code: 
  Modify your "getByGenre" function so that it takes in a third argument of a year and only returns the book titles for books published after that year.

Invoke:
  To print the value your function returns and confirm it is correct, invoke your function within a console.log().
e.g.
  console.log(getByGenre(books, "Fiction", 1954))
    should print -->   
    [ 'Life of Pi', 'The Bell Jar' ]

e.g.
  console.log(getByGenre(books, "Science Fiction", 1950))
    should print -->   
    [
      "The Hitchhiker's Guide to the Galaxy",
      'Flowers for Algernon',
      'Slaughterhouse-Five',
      "The Handmaid's Tale"
    ]
    
Annotation:
  After you find a solution, write out the steps of that solution.  Break them down as much as possible.  
*/
function getByGenre (data, genre, year) {
  var genreBooks = []
  data.forEach((book) => {
   if(book.genre === genre && book.published > year) {
     genreBooks.push(book.title)
   }
  })
  return genreBooks
 }
 console.log(getByGenre(books, "Science Fiction", 1950))


/*
Level 5

Code: 
  Write a function called "getNewBooks" that returns an array of objects containing all books that were published in the 90's and 00's. Each object should have only a title property and a year property.

Invoke:
  To print the value your function returns and confirm it is correct, invoke your function within a console.log().
e.g.
  console.log(getNewBooks())
    should print -->   
    [
      { title: 'Harry Potter and the Sorcerer\'s Stone', year: 1997 },
      { title: 'Life of Pi', year: 2001 },
      { title: 'The Curious Incident of the Dog in the Night-Time', year: 2003 }
    ]

Annotation:
  After you find a solution, write out the steps of that solution.  Break them down as much as possible.  
*/


// filter to first get objects based on years.
//  map to delete the author and genre keys. 
// the idea of DESCTRUCTURING!! take the genre property out of the book object, and put everything else into a new object called rest or smth
// 
function getNewBooks() {
  var booksFilter = books.filter(book => book.published >= 1990 && book.published < 2010)
  // console.log(booksFilter)
  var mappedArray = booksFilter.map((book) => {
     const {author, genre, ...rest} = book
     return rest 
  })
  return mappedArray
}
 console.log(getNewBooks())
/*
Level 6

Test:
  * Uncomment the module.exports below.
  * Unskip the Books Prompts tests in your prototype-test.js file.
  * Run `npm test` to confirm that all your functions are passing their tests.
  * Refactor as needed until all Books tests are passing

Annotation:
  If your tests did not immediately pass, take notes on what details you missed while building and checking your solutions. 
  Take notes on the error messages that led you to fixing those details. 
*/



// module.exports = {
//   removeViolence,
//   getByGenre,
//   getNewBooks,
// };
