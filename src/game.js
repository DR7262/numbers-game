export { currentOperation, 
  addNumberToOperation, 
  addOperatorToOperation,
  getAnswerToOperation }

let numerator1 = '';
let operator = '';
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

function isMemberValid(member) {
    return true;
}