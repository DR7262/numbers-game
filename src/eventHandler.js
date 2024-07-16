import { todaysValues } from "./globals";
import { render } from "./domController";
import { addNumberToOperation, addOperatorToOperation } from "./game";

export { handleClick }

function handleClick(event) {
    if (event.target.classList.contains("number")) {
        handleNumberClick(event);
        render();
    } else if (event.target.classList.contains("operator")) {
        handleOperatorClick(event);
        render();
    }
}

function handleNumberClick(event) {
    const number = todaysValues.privateData.get(event.target);
    addNumberToOperation(number);
}

function handleOperatorClick(event) {
    const operator = todaysValues.privateData.get(event.target);
    addOperatorToOperation(operator);
}