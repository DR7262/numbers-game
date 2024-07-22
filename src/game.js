import { todaysValues } from "./globals";

export { currentOperation, 
    addNumberToOperation, 
    addOperatorToOperation, 
    getAnswerToOperation,
    removeNumberFromOperation,
    setAnswerToOperation }

let numerator1 = '';
let operator = '';
let numerator2 = '';
let answer;

const currentOperation = {
    numerator1: numerator1,
    operator: operator,
    numerator2: numerator2,
    answer: answer
}

function addNumberToOperation(numberObj) {
    if (numberObj.available) {
        if (currentOperation.numerator1 != '') {
            if (currentOperation.numerator2 != '') {
                currentOperation.numerator2.toggleAvailability();
            }
            currentOperation.numerator2 = numberObj;
        } else {
            currentOperation.numerator1 = numberObj;
        }
    }
}

function removeNumberFromOperation(numberObj, numeratorSide) {
    if (numeratorSide == "left") {
        currentOperation.numerator1 = ''
    } else if (numeratorSide == "right") {
        currentOperation.numerator2 = ''
    }
    numberObj.toggleAvailability();
}

function addOperatorToOperation(member) {
    if (isOperatorValid(member) == true) {
        currentOperation.operator = member;
    }
}

function getAnswerToOperation() {
    const { numerator1, operator, numerator2 } = currentOperation;

    let result;

    switch (operator) {
        case '+':
            result = numerator1.value + numerator2.value;
            break;
        case '-':
            result = numerator1.value - numerator2.value;
            break;
        case 'x':
            result = numerator1.value * numerator2.value;
            break;
        case '÷':
            result = numerator1.value / numerator2.value;
            break;
        default:
            console.log("Invalid operator.");
    }

    return result;
}

function setAnswerToOperation(answer) {
    if (isAnswerValid(answer)) {
        currentOperation.answer = answer;
    } else { currentOperation.answer = "NaN" }
}

function isAnswerValid(answer) {
    if (answer < 0 || answer % 1 != 0) {
        return false
    } else { return true }
}

function isOperatorValid(operator) {
    if (todaysValues.currentOperators.includes(operator)) {
        return true;
    } else return false
}