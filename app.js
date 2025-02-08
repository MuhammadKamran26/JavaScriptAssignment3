let city = prompt("Enter city name:");
if (city === "Karachi") {
    alert("Welcome to the city of lights");
}

let gender = prompt("Enter your gender (male/female):");
if (gender === "male") {
    alert("Good Morning Sir.");
} else if (gender === "female") {
    alert("Good Morning Ma'am.");
}

let signalColor = prompt("Enter traffic signal color (Red, Yellow, Green):");
if (signalColor === "Red") {
    alert("Must Stop");
} else if (signalColor === "Yellow") {
    alert("Ready to move");
} else if (signalColor === "Green") {
    alert("Move now");
} else {
    alert("Invalid signal color");
}

function checkFuel() {
    let fuel = parseFloat(prompt("Enter remaining fuel in litres:"));
    
    if (fuel < 0.25) {
        alert("⚠️ Please refill the fuel in your car!");
    } else {
        alert("✅ You have enough fuel to drive.");
    }
}

checkFuel();


var a = 4;
if (++a === 5){
    alert("given condition for variable a is true");
}


var b = 82;
if (b++ === 83){
    alert("given condition for variable b is true");
}


var c = 12;
if (c++ === 13){
    alert("condition 1 is true");
}
if (c === 13){
    alert("condition 2 is true");
}
if (++c < 14){
    alert("condition 3 is true");
}
if(c === 14){
    alert("condition 4 is true");
}


var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
    alert("The cost equals");
}


if (true){
    alert("True");
}
if (false){
    alert("False");
}


if("car" < "cat"){
    alert("car is smaller than cat");
}


let subject1 = parseFloat(prompt("Enter marks obtained in Subject 1:"));
let subject2 = parseFloat(prompt("Enter marks obtained in Subject 2:"));
let subject3 = parseFloat(prompt("Enter marks obtained in Subject 3:"));
let totalMarks = parseFloat(prompt("Enter total marks:"));

let marksObtained = subject1 + subject2 + subject3;
let percentage = (marksObtained / totalMarks) * 100;

let grade, remarks;
if (percentage >= 80) {
    grade = "A+";
    remarks = "Excellent";
} else if (percentage >= 70) {
    grade = "A";
    remarks = "Good";
} else if (percentage >= 60) {
    grade = "B";
    remarks = "Satisfactory";
} else if (percentage >= 50) {
    grade = "C";
    remarks = "Needs Improvement";
} else {
    grade = "F";
    remarks = "Fail";
}

alert(
    `Total Marks: ${totalMarks}\nMarks Obtained: ${marksObtained}\nPercentage: ${percentage.toFixed(2)}%\nGrade: ${grade}\nRemarks: ${remarks}`
);


let secretNumber = 7; // Secret number
let guess = parseInt(prompt("Guess the secret number (1-10):"));

if (guess === secretNumber) {
    alert("Bingo! Correct answer");
} else if (guess + 1 === secretNumber || guess - 1 === secretNumber) {
    alert("Close enough to the correct answer");
} else {
    alert("Wrong guess");
}

let number = parseInt(prompt("Enter a number:"));
if (number % 3 === 0) {
    alert(`${number} is divisible by 3`);
} else {
    alert(`${number} is not divisible by 3`);
}

let num = parseInt(prompt("Enter a number:"));
if (num % 2 === 0) {
    alert(`${num} is an even number`);
} else {
    alert(`${num} is an odd number`);
}

let temperature = parseFloat(prompt("Enter temperature:"));
if (temperature > 40) {
    alert("It is too hot outside.");
} else if (temperature > 30) {
    alert("The Weather today is Normal.");
} else if (temperature > 20) {
    alert("Today’s Weather is cool.");
} else if (temperature > 10) {
    alert("OMG! Today’s weather is so Cool.");
} else {
    alert("Extreme cold weather.");
}

let num1 = parseFloat(prompt("Enter first number:"));
let num2 = parseFloat(prompt("Enter second number:"));
let operation = prompt("Enter operation (+, -, *, /, %):");

let result;
if (operation === "+") {
    result = num1 + num2;
} else if (operation === "-") {
    result = num1 - num2;
} else if (operation === "*") {
    result = num1 * num2;
} else if (operation === "/") {
    result = num1 / num2;
} else if (operation === "%") {
    result = num1 % num2;
} else {
    alert("Invalid operation");
}

if (result !== undefined) {
    alert(`Result: ${result}`);
}


