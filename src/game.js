import { todaysValues, numberObj } from "./globals";

export { currentOperation, 
    addNumberToOperation, 
    addOperatorToOperation, 
    getAnswerToOperation,
    isAnswerValid,
    removeNumberFromOperation,
    setAnswerToOperation,
    addNumberToNumberList,
    clearOperation }

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
            break;
    }

    return result;
}

function setAnswerToOperation(answer) {
    if (isOperationFilled()) {
        if (isAnswerValid(answer)) {
            currentOperation.answer = answer;
        } else { currentOperation.answer = "NaN" }
    } else {currentOperation.answer = undefined}
}

function addNumberToNumberList(number) {
    let newNumber = new numberObj(number, true);
    todaysValues.numbers.push(newNumber);
}

function clearOperation() {
    currentOperation.numerator1 = '';
    currentOperation.operator = '';
    currentOperation.numerator2 = '';
    currentOperation.answer = undefined;
}

function isOperationFilled() {
    for (let key in currentOperation) {
        if (currentOperation[key] === '') {
            return false;
        }
    }
    return true;
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