
alert("Welcome to the Simple Calculator!");

let firstNumber = parseFloat(prompt("Please enter the first number:"));

let secondNumber = parseFloat(prompt("Please enter the second number:"));

let operation = prompt("Which calculation method would you like to use? (+, -, *, /)").trim();

let result;

if (operation === "+") {
    result = firstNumber + secondNumber;
} else if (operation === "-") {
    result = firstNumber - secondNumber;
} else if (operation === "*") {
    result = firstNumber * secondNumber;
} else if (operation === "/") {
    if (secondNumber !== 0) {
        result = firstNumber / secondNumber;
    } else {
        console.log("Division by zero is not allowed!");
    }
} else {
    console.log("Invalid operation! Please use +, -, *, or /.");
}


if (result !== undefined) {
    alert("The result of " + firstNumber + " " + operation + " " + secondNumber + " is: " + result);
}

alert("Thank you for using the calculator! Goodbye!");