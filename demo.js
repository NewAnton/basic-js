console.log(getSumOfDigits(91));

// * For 100, the result should be 1 (1 + 0 + 0 = 1)
// * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)

function getSumOfDigits(n) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let nString = n.toString()
    if (nString.length === 1) return n
    n = 0;
    for (let i = 0; i < nString.length; i++) {
        n += parseInt(nString[i]);
    }
    return getSumOfDigits(n);
}