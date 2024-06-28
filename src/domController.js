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

}

function renderCurrentOperation() {

}

function renderHistory() {
    
}