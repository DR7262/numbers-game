export { generateGame };

function generateNumbers(random, largeNumbers, smallNumbers, numberCount = 6) {
    const selectedNumbers = [];

    while (selectedNumbers.length < numberCount) {
        if (random() < 0.5 && largeNumbers.length > 0) {
            const index = Math.floor(random() * largeNumbers.length);
            selectedNumbers.push(largeNumbers.splice(index, 1)[0]);
        } else if (smallNumbers.length > 0) {
            const index = Math.floor(random() * smallNumbers.length);
            selectedNumbers.push(smallNumbers.splice(index, 1)[0]);
        }
    }

    return selectedNumbers;
}

function getSeedFromDate() {
    const today = getTodaysDate();

    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
    const day = String(today.getDate()).padStart(2, '0');

    return `${year}${month}${day}`; // Outputs in YYYY-MM-DD format
}

function getTodaysDate() {
    const today = new Date();
    return today;
}

function createPRNG(seed) {
    return function() {
        seed = (seed * 1664525 + 1013904223) % 4294967296;
        return seed / 4294967296;
    };
}

function generateGame(seedDate, numberCount = 6) {
    const seed = getSeedFromDate(seedDate);
    const random = createPRNG(seed);

    const largeNumbers = [25, 50, 75, 100];
    const smallNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const numbers = generateNumbers(random, largeNumbers, smallNumbers, numberCount);

    function getRandomOperation() {
        const operations = ['+', '-', '*', '/'];
        return operations[Math.floor(random() * operations.length)];
    }

    function evaluate(a, b, operation) {
        switch (operation) {
            case '+': return a + b;
            case '-': return a - b;
            case '*': return a * b;
            case '/': return b !== 0 ? a / b : null;
        }
    }

    let target;
    let expression;
    do {
        // Attempt to generate a valid expression
        let remainingNumbers = numbers.slice();
        let result = remainingNumbers.pop();
        expression = result.toString();

        while (remainingNumbers.length > 0) {
            const nextNumber = remainingNumbers.pop();
            const operation = getRandomOperation();
            const newResult = evaluate(result, nextNumber, operation);

            if (newResult === null || !Number.isInteger(newResult) || newResult < 0) {
                remainingNumbers.push(nextNumber); // Put back and try different order
            } else {
                result = newResult;
                expression = `(${expression} ${operation} ${nextNumber})`;
            }
        }

        target = Math.round(result); // Ensure the target is an integer
    } while (target < 100 || target > 999); // Ensure target is within the desired range

    return {
        numbers,
        target,
        expression // For verification or debugging
    };
}