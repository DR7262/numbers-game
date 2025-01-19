import { todaysValues, numberObj } from "./globals";

export { currentOperation, 
    addNumberToOperation, 
    addOperatorToOperation, 
    getAnswerToOperation,
    isAnswerValid,
    removeNumberFromOperation,
    setAnswerToOperation,
    addNumberToNumberList,
    clearOperation,
    addOperationToHistory,
    undoLastOperation,
    checkForWin }

let numerator1 = '';
let operator = '';
let numerator2 = '';
let answer;

function operationObj(numerator1, operator, numerator2, answer) {
    this.numerator1 = numerator1;
    this.operator = operator;
    this.numerator2 = numerator2;
    this.answer = answer;
}

const currentOperation = new operationObj(numerator1, operator, numerator2, answer);

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

function addOperationToHistory(operation) {
    const { numerator1, operator, numerator2, answer} = operation;
    let pastOperation = new operationObj(numerator1, operator, numerator2, answer);
    todaysValues.history.push(pastOperation);
}

function undoLastOperation() {
    let lastOperationIndex = todaysValues.history.length - 1;
    let lastNumberIndex = todaysValues.numbers.length -1;
    const lastOperation = todaysValues.history[lastOperationIndex]
    lastOperation.numerator1.toggleAvailability();
    lastOperation.numerator2.toggleAvailability();
    todaysValues.history.splice(lastOperationIndex, 1);
    todaysValues.numbers.splice(lastNumberIndex, 1);
    clearOperation(currentOperation);
}

function clearOperation(operation) {
    operation.numerator1 = "";
    operation.numerator2 = "";
    operation.operator = "";
    operation.answer = "";
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

function checkForWin(answer) {
    if (answer == todaysValues.target) {
        return true
    } else return false;
}