import { todaysValues } from "./globals";

export { currentOperation, 
    addNumberToOperation, 
    addOperatorToOperation, 
    getAnswerToOperation,
    removeNumberFromOperation }

let numerator1 = '';
let operator = '';
let numerator2 = '';

const currentOperation = {
    numerator1: numerator1,
    operator: operator,
    numerator2: numerator2
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

    console.log(numerator1, numerator2, operator);

    let result;

    switch (operator) {
        case '+':
            result = numerator1 + numerator2;
            break;
        case '-':
            result = numerator1 - numerator2;
            break;
        case '*':
            result = numerator1 * numerator2;
            break;
        case '/':
            if (numerator1 % numerator2 !== 0) {
              throw new Error("The result of the division must be an integer.");
            }
            result = numerator1 / numerator2;
            break;
        default:
            throw new Error("Invalid operator.");
    }

    // Check if the result is a positive integer
    if (!Number.isInteger(result) || result <= 0) {
        throw new Error("The result must be a positive integer.");
    }

    return result;
}

function isOperatorValid(operator) {
    if (todaysValues.currentOperators.includes(operator)) {
        return true;
    } else return false
}