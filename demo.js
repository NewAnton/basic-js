let n = 675

console.log(deleteDigit(n));

function deleteDigit(n) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let maxNumber = 0;
    let currentNumber = "";
    let numberToString = n.toString();

    for (let i = 0; i < numberToString.length; i++) {
        currentNumber = numberToString.slice(0, i) + numberToString.slice(i + 1);
        console.log(numberToString.slice(0, i), numberToString.slice(i + 1))
        if (currentNumber > maxNumber) maxNumber = currentNumber;
    }

    return parseInt(maxNumber);
}