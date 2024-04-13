#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter first number", type: "number", name: "firstNumber" },
    { message: "Enter second number", type: "number", name: "secondNumber" },
    {
        message: "Select one of the operators to perform operation",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"]
    },
]);
console.log("User Input:", answer);
// Debugging statements
console.log("Operator:", answer.operator);
console.log("First number:", answer.firstNumber);
console.log("Second number:", answer.secondNumber);
// Conditional statement
if (answer.operator === "Addition") {
    console.log("Result:", answer.firstNumber + answer.secondNumber);
}
else if (answer.operator === "Subtraction") {
    console.log("Result:", answer.firstNumber - answer.secondNumber);
}
else if (answer.operator === "Multiplication") {
    console.log("Result:", answer.firstNumber * answer.secondNumber);
}
else if (answer.operator === "Division") {
    if (answer.secondNumber !== 0) {
        console.log("Result:", answer.firstNumber / answer.secondNumber);
    }
    else {
        console.log("Error: Division by zero");
    }
}
else {
    console.log("Invalid operator selected");
}
