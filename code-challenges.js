// ASSESSMENT 1: Coding practical questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Please read all questions thoroughly
// All problems can be solved with concepts covered in class or in the syllabus
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// --------------------1) Create a function that takes in a number and determines if a temperature is below boiling point, at boiling point or above boiling point. Boiling point is 212 degrees Fahrenheit.
// Use the test variables provided below. Expected output: "35 is below boiling point", "350 is above boiling point", "212 is at boiling point"

var temp1 = 35
var temp2 = 350
var temp3 = 212

//make a function that takes a number parameter
const boilingTemperature = (num) => {
    //determine if num is below , at, or above boiling point with condtionals (boiling point is 212 F)
    if (num <= 211) {
        //output `${num} is below bp, at, or above.    
        console.log(`${num} is below boiling point`);
    } else if (num === 212) {
        console.log(`${num} is at boiling point`);
    } else if (num >= 213) {
        console.log(`${num} is above boiling point`);
    } else {
        return "Please enter a number"; //edges in case a number is not entered (for practice)
    }
}
//test
console.log(boilingTemperature(temp3));
// --------------------2) Create a function that takes in two arrays of numbers and returns a single array with all the values sorted least to greatest.
// Use the test variables provided below. Expected output: [-9, -7, 0, 3, 7, 8, 9, 13, 22, 36]

var myNumbers1 = [3, 7, 0, 36, -9]
var myNumbers2 = [8, -7, 22, 9, 13]
var myNumbers3 = []
//make a function that takes two arrays of numbers
const arraySorter = () => {
    myNumbers3 = myNumbers1.concat(myNumbers2).sort((a, b) => a - b) //the sort function by default organizes elements alphabetically so it has to be given more specific instructions to sort numerically. The added instructions tell sort to sort the numbers ascending from least to greatest, to make it descend we could change "a-b" to "b-a". I got the solution from the syllabus but could use help understanding what exactly the a, b represent in this context I understand how it functions but not necessarily what each part represents fully. 
    return myNumbers3;
}
//return a single array with the values sorted least to greatest

console.log(arraySorter());

//Expected output: [-9, -7, 0, 3, 7, 8, 9, 13, 22, 36]


// --------------------3) Create a function that takes in a string of a single word and returns the string with all letters reversed.
// Use the test variables provided below. Expected output: "ovarb", "eilrahc"

var myString1 = "bravo"
var myString2 = "charlie"

//make a function that takes a string
const stringReverser = (word) => {
    var splitString = word.split("") //assigns a new variable the word argument split into an array
    var reverseString = splitString.reverse() //assigns a new variable with the letters reversed in the array
    var joinString = reverseString.join("") //joins the reversed array of letters back into a string and removes the quotes

    return joinString //returns the reversed word
}
//return the string with characters reversed
console.log(stringReverser(myString2));

// --------------------4) Create a function that takes in two numbers and subtracts the smaller number from the larger number.
// Use the two sets of test variables provided below. Expected output: 15, 12

var numberExample1 = 42
var numberExample2 = 27

var numberExample3 = 7
var numberExample4 = 19
//make a function that takes two nums
const subtracter = (num1, num2) => {
    //subtract the smaller num from the larger num
    var result1 = num1 - num2
    var result2 = num2 - num1
    if (num1 > num2) { // if the first number is larger it return the results that follows the format of larger - smaller
        return result1
    } else {              //else the assumption is the second number is larger so it returns num2(larger)-num1(smaller)
        return result2
    }
}
//output the result
console.log(subtracter(numberExample3, numberExample4));



// --------------------5) Copy/paste your code from #4. Refactor your code to also accept non-number edge cases. Inform your user if the variable passed into the subtraction function is not a number.
// Use the two sets of test variables provided below. Expected output: "Your input is not a number", 3
// Hint: There is an operator in JavaScript called typeof :)

var numberExampleRefactor1 = 42
var numberExampleRefactor2 = "hello"

var numberExampleRefactor3 = 27
var numberExampleRefactor4 = 24

const subtracterRefracted = (num1, num2) => {
    //subtract the smaller num from the larger num
    var result1 = num1 - num2
    var result2 = num2 - num1
    if (num1 > num2) { // if the first number is larger it return the results that follows the format of larger - smaller
        return result1
    } else if (num2 > num1) {              //else if the second number is larger so it returns num2(larger)-num1(smaller)
        return result2
    } else if (typeof num1 !== "number" || typeof num2 !== "number") { //edge case tests for use inputs that are not the typeof "number" and outputs informing the user it's not a valid number
        console.log("Your input is not a number");
    }
}
console.log(subtracterRefracted(numberExampleRefactor1, numberExampleRefactor2));