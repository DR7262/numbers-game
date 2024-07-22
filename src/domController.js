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
        numberButton.textContent = todaysValues.numbers[number].value;
        numberButton.addEventListener("click", handleClick)
        if (todaysValues.numbers[number].available != true) {
            numberButton.disabled = true;
        } else {
            numberButton.disabled = false;
            todaysValues.privateData.set(numberButton, todaysValues.numbers[number]);
        }
        numberButtonContainer.appendChild(numberButton);
    }
}

function renderOperatorButtons() {
    const operatorButtonContainer = document.getElementById("operators");
    clearContainer(operatorButtonContainer);
    for (let operator in todaysValues.currentOperators) {
        let operatorButton = document.createElement("button");
        operatorButton.classList.add("operator", "gameButton");
        operatorButton.textContent = todaysValues.currentOperators[operator];
        operatorButton.addEventListener("click", handleClick);
        if (todaysValues.currentOperators[operator] == currentOperation.operator) {
            operatorButton.disabled = true;
        } else {
            operatorButton.disabled = false;
            todaysValues.privateData.set(operatorButton, todaysValues.currentOperators[operator])
        }
        operatorButtonContainer.appendChild(operatorButton);
    }
}

function renderCurrentOperation() {
    const currentOperationContainer = document.getElementById("currentOperation");
    clearContainer(currentOperationContainer);
    let operationMembers = ["numerator left", "chosenOperator", "numerator right", "equalsSign"];
    for (let i in operationMembers) {
        let operationMember = document.createElement("button");
        let listedClasses = operationMembers[i].split(/\s+/);
        for (let i in listedClasses) {
            operationMember.classList.add(listedClasses[i]);
        };

        //printing operation content
        if (operationMember.classList.contains("numerator")) {
            if (operationMember.classList.contains("left")) {
                operationMember.textContent = currentOperation.numerator1.value;
                todaysValues.privateData.set(operationMember, currentOperation.numerator1)
            } else {
                operationMember.textContent = currentOperation.numerator2.value
                todaysValues.privateData.set(operationMember, currentOperation.numerator2)
            };
        } else if (operationMember.classList.contains("chosenOperator")) {
            operationMember.textContent = currentOperation.operator;
        } else if (operationMember.classList.contains("equalsSign")) {
            operationMember.textContent = "="
        };
        operationMember.classList.add("gameButton");
        if (operationMember.childNodes == 0) {
            operationMember.disabled = true;
        } else operationMember.disabled = false;
        operationMember.addEventListener("click", handleClick);
        currentOperationContainer.appendChild(operationMember);
    }
    let answerContainer = document.createElement("div");
    answerContainer.classList.add("answer");
    answerContainer.textContent = currentOperation.answer;
    currentOperationContainer.appendChild(answerContainer);
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