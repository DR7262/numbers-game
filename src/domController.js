import { todaysValues } from "./globals.js";

export function render() {
    renderTarget();
    renderNumberButtons();
    renderOperatorButtons();
    renderCurrentOperation();
    renderHistory();
}

function renderTarget() {
    const targetNumberBox = document.getElementById("target-number");

    targetNumberBox.textContent = todaysValues.target;
}

function renderNumberButtons() {
    const numberButtonContainer = document.getElementById("numbers");
    for (let number in todaysValues.numbers) {
        let numberButton = document.createElement("button");
        numberButton.classList.add("number", "gameButton")
        numberButton.textContent = todaysValues.numbers[number];
        numberButtonContainer.appendChild(numberButton);
    }
}

function renderOperatorButtons() {
    const operatorButtonContainer = document.getElementById("operators");
    let currentOperators = ["+", "-", "x", "÷"]
    for (let operation in currentOperators) {
        let operatorButton = document.createElement("button");
        operatorButton.classList.add("operator", "gameButton");
        operatorButton.textContent = currentOperators[operation];
        operatorButtonContainer.appendChild(operatorButton);
    }
}

function renderCurrentOperation() {
    const currentOperationContainer = document.getElementById("currentOperation");
    let operationMembers = ["numerator left", "chosenOperator", "numerator right", "equalsSign"];
    for (let i in operationMembers) {
        let operationMember = document.createElement("div");
        let listedClasses = operationMembers[i].split(/\s+/);
        console.log(operationMembers[i].split());
        for (let i in listedClasses) {
            operationMember.classList.add(listedClasses[i]);
        };
        if (operationMember.classList.contains("chosenOperator")) {
            //Line below to be removed once interface completed in javascript
            operationMember.textContent = "+"
        } else if (operationMember.classList.contains("equalsSign")) {
            operationMember.textContent = "="
        };
        currentOperationContainer.appendChild(operationMember);
    }
    let evaluateButton = document.createElement("div");
    evaluateButton.classList.add("answer");
    evaluateButton.textContent = " ";
    currentOperationContainer.appendChild(evaluateButton);
}

function renderHistory() {
    
}