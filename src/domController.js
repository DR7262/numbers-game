import { todaysValues } from './globals.js';

export function render() {
    renderTarget();
    renderNumberButtons();
    renderOperatorButtons();
    renderHistory();
}

function renderTarget() {
    const targetNumberBox = document.getElementById("target-number");

    targetNumberBox.textContent = todaysValues.target;
}

function renderNumberButtons() {

}

function renderOperatorButtons() {

}

function renderHistory() {
    
}