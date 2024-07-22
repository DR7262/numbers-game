import { todaysValues } from "./globals";
import { render } from "./domController";
import { addNumberToOperation, 
    addOperatorToOperation, 
    currentOperation, 
    removeNumberFromOperation,
    getAnswerToOperation, 
    setAnswerToOperation } from "./game";

export { handleClick }

function handleClick(event) {
    if (event.target.classList.contains("number")) {
        handleNumberClick(event);
        render();
    } else if (event.target.classList.contains("operator")) {
        handleOperatorClick(event);
        render();
    } else if (event.target.classList.contains("numerator")) {
        handleNumeratorClick(event);
        render();
    } else if (event.target.classList.contains("chosenOperator")) {
        handleChosenOperatorClick();
        render();
    } else if (event.target.classList.contains("equalsSign")) {
        handleEqualsSignClick();
        render();
    }
}

function handleNumberClick(event) {
    const number = todaysValues.privateData.get(event.target)
    addNumberToOperation(number);
    number.toggleAvailability();
}

function handleOperatorClick(event) {
    const operator = todaysValues.privateData.get(event.target);
    addOperatorToOperation(operator);
}

function handleNumeratorClick(event) {
    let numeratorSide
    let numerator = todaysValues.privateData.get(event.target);

    if (event.target.classList.contains("left")) {
        numeratorSide = "left"
    } else if (event.target.classList.contains("right")){
        numeratorSide = "right"
    }

    removeNumberFromOperation(numerator, numeratorSide)
}

function handleChosenOperatorClick() {
    currentOperation.operator = ''
}

function handleEqualsSignClick() {
    setAnswerToOperation(getAnswerToOperation());
}