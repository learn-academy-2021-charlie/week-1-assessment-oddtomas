// ASSESSMENT 1: Coding conceptual questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

var cohort = "Charlie 2021"
console.log(cohort.length)

// a) Your answer: This code will log the length of the string "Charlie 2021" assigned to the cohort variable, resulting in 12 since there is 12 characters.
// b) Verify and explain: When the console.log was uncommented the terminal indeed displayed 12 representing the amount of characters in the string/the length because "cohort.length" is the .length method that returns the length of a string.

// --------------------2) What will this log?

var greeting = "Hello World!"
console.log(greeting[3])

// a) Your answer: This will log "l", specifically the second "l" in the word Hello, because the log is accessing the string in greeting at index position 3 which is actually 4 characters over because strings are indexed zero.
// b) Verify and explain: The code indeed logged "l"; specifically the second "l" in the word Hello located at index position 3, to be sure I swapped out the 3 with a 1 and got a return of "e" which is in index position 1.


// --------------------3) What will this log?

var languages = ["JavaScript", "Ruby", "Python", "C++"]
var index = 1
console.log(languages[index])

// a) Your answer: This will log the array item located at index 1 which is "Ruby" because "index" was assigned a value of 1, and that's what console.log is accessing; languages[at index 1].
// b) Verify and explain: The code indeed logged "Ruby" because the index variable was assinged a value of 1 and inside our languages array, "javascript" is at index 0, and "ruby" is at index 1 therefore that's what we got.


// --------------------4) What will this log?

var weekendDays = ["saturday", "sunday"]
//console.log(weekendDays.toUpperCase())

// a) Your answer: This will log the array with the strings in capitol letters, because the .toUpperCase() method makes all the letters in a string capitol.
// b) Verify and explain: I was wrong, the log actually produced an error stating that "weekendDays.toUpperCase is not a function". This is apparently because arrays do not have a toUpperCase method and there is also to toUpperCase function?


// --------------------5) What will this log?

var dataTypes = ["number", "string", "Boolean"]
console.log(typeof dataTypes.length)

// a) Your answer: This will log the type of data type that the result of dataTypes.length is, which will be a number because .length will evaluate how much data is inside the dataTypes array which will be 3.
// b) Verify and explain: The code indeed logged "number" as the data type of dataTypes.length, because typeof is evaluating what the data type is or will be.
