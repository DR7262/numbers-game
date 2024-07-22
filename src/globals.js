export { todaysValues };

let target = 200

let numbers = [10, 20, 7, 50, 2, 8]

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

const todaysValues = {
    target: target,
    numbers: numberObjList,
    privateData: privateData,
    currentOperators: currentOperators
}