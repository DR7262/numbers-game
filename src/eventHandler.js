import { todaysValues } from "./globals";
import { render } from "./domController";
import { addNumberToOperation, 
    addOperatorToOperation, 
    currentOperation, 
    removeNumberFromOperation,
    getAnswerToOperation,
    isAnswerValid, 
    setAnswerToOperation,
    addNumberToNumberList,
    clearOperation } from "./game";

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
    setAnswerToOperation(getAnswerToOperation());
    number.toggleAvailability();
}

function handleOperatorClick(event) {
    const operator = todaysValues.privateData.get(event.target);
    addOperatorToOperation(operator);
    setAnswerToOperation(getAnswerToOperation())
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
    setAnswerToOperation(getAnswerToOperation())
}

function handleChosenOperatorClick() {
    currentOperation.operator = ''
    setAnswerToOperation(getAnswerToOperation())
}

function handleEqualsSignClick() {
    if (isAnswerValid(getAnswerToOperation())) {
        addNumberToNumberList(currentOperation.answer);
        clearOperation();
    }
}