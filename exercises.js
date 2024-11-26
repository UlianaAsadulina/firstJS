// Exercise1
// Declare a variable called num.
// Write a conditional statement that checks if the num is positive or negative.

let n=3;

if ( n > 0 ) {
    console.log("Number is positive");
} else {
    console.log("Number is negative");
}

// Once you have completed the above:

// Change the value of the variable.
// Save & open it again.
// If you were tasked with setting up the security for a web site that only grants access to users over the age of 18, how would you write a conditional that gives users who are 18 or older access, and logs "Access Denied" for users who do not meet the given condition? Give it a try!

// Exercise2
// Write a nested if...else statement.
// Declare a variable called num.
// Add an if...else statement that checks if num is positive & greater than 100.
// Add another statement that checks if num is positive but less than 100.
// Add a final statement to check if num is negative.

let num=10;

if ( (num > 0) && (num > 100) ) {
    console.log("Number is positive and greater than 100");
} else if((num >0) && (num < 100)) {
        console.log("Number is positive and less than 100");
    } 
    else {
        console.log("Number is negative");
}

// Exercise3
// Write an if..else statement for the following requirements:

// If a learner gets 90 or higher: console.log("A")
// If a learner get 80 or above: console.log("B")
// If a learner get 70 or above: console.log("C")
// If a learner get 55 or above: console.log("D")
// Any grade lower than 55: console.log("F")

let score = 50;

if (score >=90) {
    console.log("A");
} 
else if (score >=80) {
    console.log("B");
    } 
    else if (score >=70) {
        console.log("C");
        } 
    else if (score >=55) {
            console.log("D");
        } 
        else if (score <55)  
                console.log("D");
    



                