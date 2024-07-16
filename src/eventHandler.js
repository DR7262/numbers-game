import { todaysValues } from "./globals";
import { render } from "./domController";
import { addNumberToOperation } from "./game";

export { handleClick }

function handleClick(event) {
    if (event.target.classList.contains("number")) {
        handleNumberClick(event)
        render();
    }
}

function handleNumberClick(event) {
    const number = todaysValues.privateData.get(event.target);
    addNumberToOperation(number);
}