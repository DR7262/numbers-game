import { todaysValues } from "./globals.js";
import { currentOperation } from "./game.js";
import { handleClick } from "./eventHandler.js";

export function render() {
    todaysValues.privateData = new WeakMap();
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
    clearContainer(numberButtonContainer);
    for (let number in todaysValues.numbers) {
        let numberButton = document.createElement("button");
        numberButton.classList.add("number", "gameButton")
        numberButton.textContent = todaysValues.numbers[number];
        todaysValues.privateData.set(numberButton, todaysValues.numbers[number]);
        numberButton.addEventListener("click", handleClick)
        numberButtonContainer.appendChild(numberButton);
    }
}

function renderOperatorButtons() {
    const operatorButtonContainer = document.getElementById("operators");
    clearContainer(operatorButtonContainer);
    let currentOperators = ["+", "-", "x", "÷"]
    for (let operation in currentOperators) {
        let operatorButton = document.createElement("button");
        operatorButton.classList.add("operator", "gameButton");
        operatorButton.textContent = currentOperators[operation];
        todaysValues.privateData.set(operatorButton, currentOperators[operation])
        operatorButton.addEventListener("click", handleClick);
        operatorButtonContainer.appendChild(operatorButton);
    }
}

function renderCurrentOperation() {
    const currentOperationContainer = document.getElementById("currentOperation");
    clearContainer(currentOperationContainer);
    let operationMembers = ["numerator left", "chosenOperator", "numerator right", "equalsSign"];
    for (let i in operationMembers) {
        let operationMember = document.createElement("div");
        let listedClasses = operationMembers[i].split(/\s+/);
        for (let i in listedClasses) {
            operationMember.classList.add(listedClasses[i]);
        };

        //printing operation content
        if (operationMember.classList.contains("numerator")) {
            if (operationMember.classList.contains("left")) {
                operationMember.textContent = currentOperation.numerator1;
            } else {operationMember.textContent = currentOperation.numerator2};
        }
        else if (operationMember.classList.contains("chosenOperator")) {
            operationMember.textContent = currentOperation.operator;
        } else if (operationMember.classList.contains("equalsSign")) {
            operationMember.textContent = "="
        };
        operationMember.classList.add("gameButton")
        currentOperationContainer.appendChild(operationMember);
    }
    let evaluateButton = document.createElement("div");
    evaluateButton.classList.add("answer");
    evaluateButton.textContent = " ";
    currentOperationContainer.appendChild(evaluateButton);
}

function renderHistory() {
    let historyContainer = document.getElementById("history");
    clearContainer(historyContainer);

    let historyContextMenu = document.createElement("div");
    historyContextMenu.setAttribute("id", "historyMenu")

    let historyTitle = document.createElement("div");
    historyTitle.classList.add("historyTitle")
    historyTitle.textContent = "History"

    let historyButtons = document.createElement("div");
    historyButtons.classList.add("historyButtons")

    let undoButton = document.createElement("button");
    undoButton.classList.add("undoButton", "gameButton");
    undoButton.textContent = "Undo";

    historyButtons.appendChild(undoButton)

    historyContextMenu.appendChild(historyTitle);
    historyContextMenu.appendChild(historyButtons);

    historyContainer.appendChild(historyContextMenu);

    let pastOperationContainer = document.createElement("div");
    pastOperationContainer.classList.add("pastOperation")
    let operationMembers = ["numerator left", "chosenOperator", "numerator right", "equalsSign", "old answer"]
    for (let i in operationMembers) {
        let operationMember = document.createElement("div");
        let listedClasses = operationMembers[i].split(/\s+/);
        for (let i in listedClasses) {
            operationMember.classList.add(listedClasses[i]);
        };
        if (operationMember.classList.contains("chosenOperator")) {
            //Line below to be removed once interface completed in javascript
            operationMember.textContent = "+"
        } else if (operationMember.classList.contains("equalsSign")) {
            operationMember.textContent = "="
        };
        pastOperationContainer.appendChild(operationMember);
    }
    historyContainer.appendChild(pastOperationContainer);
}

function clearContainer(container) {
    container.textContent = "";
}