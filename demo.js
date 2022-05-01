console.log(encodeLine('aabbbc'));

function encodeLine(str) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let encodeStr = '';
    let letterCounter = 1;
    for (let i = 0; i < str.length; i++) {
        let currentLetter = str[i];
        if (str[i + 1] == currentLetter) {
            letterCounter++;
        } else {
            encodeStr += currentLetter + letterCounter;
            letterCounter = 1;
        }
    }
    return encodeStr
}