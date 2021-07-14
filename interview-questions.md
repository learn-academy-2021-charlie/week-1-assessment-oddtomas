# ASSESSMENT 1: Tech Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is a function? Why would you use one?

  Your answer: A function is a re-usable block of code, you would use it when you want your code to perform an action like return something or do a math problem etc. Functions are what give websites, apps, etc functionality. Functions make it so that these interfaces are interactable and can do things for the user.

  Researched answer: Functions are reusable pieces of code that only execute when invoked and always return an output. You can pass a function an argument that gets passed to its parameter and affect the code. By design functions are meant to be used repeatedly. There are different ways to make a function but in general functions consist of a variable declaration, a name, a parameter, curly braces where the actual code to be enacted goes, and a return.  Functions can be invoked throughout the code to perform it's intended task to make the overral code perform as expected, instead of having to rewrite code. 



2. In regards to functions, what is the difference between an argument and a parameter?

  Your answer: The difference between an parameter and an argument is that the parameter is the data that is expected to be passed to the function and the argument is the actual data that is passed by the user or whoever when the function is invoked/called. When a function is called inside the () braces is where the argument is inputted to be passed to the parameter that's in the layout of the function and from there the function will take that information into consideration when the code is executed. 

  Researched answer: Function logic should always be encapsulated meaning that the logic inside of your function can't reference other information inside your program and that's where arguments come in and solve that limitation. Arguments are outside information passed into the function via the parameter. Parameters and arguments are used to expand the functionality of a function instead of it being static this makes it more dynamic. The argument can be changed willingly and as many times as you want to get a different output from the function after it is passed to the parameter. Arguments can be used as edge cases to test for errors inside our codes logic, such as in conditionals an argument can be used to see how code responds to unexpected inputs. A function can have multiple parameters and multiple arguments passed to it.

3. What is an index? What is the difference between index and value?

  Your answer: An index is the position of a value/data inside of an array or a string. In javascript strings and arrays are zero indexed meaning they start from an index of 0, and go up by one. The index is used to access the value inside of that index position when calling on a position inside of an array or stirng.

  Researched answer: Indexes are sequential numbers that are sort of like addresses for the elements in an array or characters in a string. To access the index we use square brackets with arrays or inside the parenthesis of a built in method for strings. Indexes can be used to change the value at that location by essentially creating a variable with the index position. The length of an array or a string is always the last index position plus one. The content of each element in an array is the actual value, so if an array began with the string "orange" the index would be 0 and the value with be "orange".



4. What is a built-in method?

  Your answer: A built in method is essentially a function that's already built into javascript for things like strings that perform actions that you don't have to define yourself with code. .toUpperCase and .slice are examples of built in methods; they perform actions like upper casing a string or in the case of slice it returns a subset of string with a beginning and ending index. Neither of the methods listed require the user to define the function beforehand you just call it.

  Researched answer: Built in methods are premade functionality that exist in javascript to essentially save us time and the hassle of coding commonly used methods. Some built in methods require arguments to perform specific functions. Built in methods provide a wide range of functionality like helping access information, alter values, and retrive specific data. For arrays built in methods fall into two categories; mutators and accessors. Mutators modify the original array and are also known as setters and accessors do not modify the original array and are also known as getters. 



5. Give a brief description of proper pair programming techniques. What are the roles of each person?

  Your answer: In pair programming there is a driver and a navigator. The driver is the person actually coding/typing and the navigator is the person watching over the driver and assisting them along the way. The two roles are meant to work together through the code even though only the driver is meant to be typing at any given time the navigator should be putting in as much input as possible to aid the process. The navigator should be keeping an eye out for small missed syntax, grammatical, or logic errors and give helpful suggestions if the driver gets stuck. 

  Researched answer: Pair programming is used to promote efficiency and create exposure to different perspectives on how to solve the same problem. It is meant to distribute cognitive load between the driver and the navigator. Two set of eyes makes it easier to spot mistakes, and the priocess is meant to alleviate the stress of learning how to program. A pair helps keep eachother accountable to focus on the task and not take shortcuts or get distracted. Talking about the code with a partner helps promote a deeper understanding of the process and with increased specialization more collaboration is required. The driver is meant to be the hands on person who does the actual inputting and the navigator gives the instructions, therefore this approach requires constant communication. The process as a whole is meant to make you a better developer and teammate. 



6. What is something we did in class this week you found helpful?  

  Your answer: Something we did in class this week that I found helpful was the speed we went over every topic. From the introduction to conditions, arrays, and functions the fact that the lessons were slow and thorough was really appreciated. This style gave me time to really digest the information followed by doing hands on work to help solidify the knowledge. I'm really glad we're not just blowing through the topics.



## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. Iteration: An iteration is the process of repeating steps/executing a block of code over and over again. Iterations can be seen in the concept of loops in programming where the code will run repeatedly until a conditon is met. Each time the loops runs that is one iteration.

2. Higher Order Functions: Higher order functions are functions that can take in a function as an argument or return a function as an output. 

3. Jest: Jest is a testing framework intended to ensure correctness of any Javascript codebases with automated quality assurance. 

4. Classes: Classes are resuable and customizable blueprints for objects. Classes are like functions that contain a particular set of data and behavior particular to that class. For example you could make a character class with methods like attack, jump, run etc. 

5. React: React is a javascript library that is used to build smart parts and join them together to create whole applications. 
