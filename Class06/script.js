// var x = prompt("Where did pope live?")

// if (x === "Vatican") {
//     alert("Correct!");
// }
// else if(x === "Peshawar"){
//     alert("Correct answer");
// }
// else{
//     alert("Wrong answer");
// }










// // GRADE CALCULATOR

// let marks = +prompt("Enter your marks (0-100):");

// if (marks >= 90 && marks <= 100) {
//     alert(`Your Marks are ${marks}. Your grade is A+`);

// } else if (marks >= 80 && marks < 90) {
//     alert(`Your Marks are ${marks}. Your grade is A`);

// } else if (marks >= 70 && marks < 80) {
//     alert(`Your Marks are ${marks}. Your grade is B`);

// } else if (marks >= 60 && marks < 70) {
//     alert(`Your Marks are ${marks}. Your grade is C`);

// } else if (marks >= 50 && marks < 60) {
//     alert(`Your Marks are ${marks}. Your grade is D`);

// } else if (marks >= 0 && marks < 50) {
//     alert(`Your Marks are ${marks}. Your grade is F`);

// } else {
//     alert("Invalid marks. Please enter a marks between 0 and 100.");
// }



// // Program 1: Checking Age Eligibility (AND)

// let age = +prompt("Enter your age: ");

// if (age >= 18 && age <= 65) { // AND operator checks both conditions
//     alert("You are eligible to work.");
// } else {
//     alert("You are not eligible to work based on your age.");
// }



// // Program 2: Login Access (OR)

// let username = prompt("Enter your username: ");
// let password = prompt("Enter your password: ");

// if (username === "admin" && password === "secret") { // OR operator checks either condition
//     alert("Login successful!");
// } else {
//     alert("Invalid username or password.");
// }



// // Program 3: Checking for Night Time (NOT)

// let hour = +prompt("Enter the current hour (0-23): ");

// if (!(hour >= 7 && hour < 19)) { // NOT operator inverts the condition
//     alert("It's nighttime!");
// } else {
//     alert("It's daytime.");
// }



// // Program 4: Vowel or Consonant Check

// let letter = prompt("Enter a letter: ").toLowerCase(); // Convert input to lowercase

// if (/[aeiou]/.test(letter)) { // Regular expression for vowels
//     alert("The letter is a vowel.");
// } else {
//     alert("The letter is a consonant.");
// }



// // Program 5: Checking for Even or Odd num

// let num = +prompt("Enter a num: ");

// if (num % 2 === 0) {
//     alert("The num is even.");
// } else {
//     alert("The num is odd.");
// }


// // Program 6: Checking for Weekend or Weekday

// let day = prompt("Enter the day of the week (lowercase): ");

// if (day === "saturday" || day === "sunday") { // OR for weekend days
//     alert("It's the weekend!");
// } else {
//     alert("It's a weekday.");
// }




// // NESTED IF STATEMENT

// // Program 1: Number Positivity Check

// let num = parseInt(prompt("Enter a num: "));

// if (num > 0) {
//     alert("The num is positive.");
// } else {
//     if (num < 0) {
//         alert("The num is negative.");
//     } else {
//         alert("The num is zero.");
//     }
// }
