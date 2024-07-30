export { todaysValues, numberObj };
import { generateGame } from "./generator";

let { numbers, target, expression } = generateGame();

let currentOperators = ["+", "-", "x", "÷"]

function numberObj(value, available) {
    this.value = value
    this.available = available
    this.toggleAvailability = function() {
        this.available = !this.available;
    }
}

let numberObjList = []

for (let i in numbers) {
    const number = new numberObj(numbers[i], true);
    numberObjList.push(number);
}

const privateData = new WeakMap();

let history = []

const todaysValues = {
    target: target,
    numbers: numberObjList,
    privateData: privateData,
    currentOperators: currentOperators,
    history: history,
    solution: expression
}

console.log(todaysValues.solution)