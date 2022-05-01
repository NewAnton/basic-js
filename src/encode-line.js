const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
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
            if (letterCounter == 1) letterCounter = "";
            encodeStr += letterCounter + currentLetter;
            letterCounter = 1;
        }
    }
    return encodeStr
}

module.exports = {
    encodeLine
};