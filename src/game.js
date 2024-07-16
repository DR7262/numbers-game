export { currentOperation, addNumberToOperation, addOperatorToOperation }

let numerator1 = '';
let operator = '+';
let numerator2 = '';

const currentOperation = {
    numerator1: numerator1,
    operator: operator,
    numerator2: numerator2
}

function addNumberToOperation(member) {
    if (isMemberValid(member) == true) {
        if (currentOperation.numerator1 != '') {
            currentOperation.numerator2 = member;
        } else {
            currentOperation.numerator1 = member;
        }
    }
}

function addOperatorToOperation(member) {
    if (isMemberValid(member) == true) {
        currentOperation.operator = member;
    }
}

function isMemberValid(member) {
    return true;
}