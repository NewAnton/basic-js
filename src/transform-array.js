const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (!(Array.isArray(arr))) return `'${arr}' parameter must be an instance of the Array!`;
    let transformArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == `--discard-next`) {
            if (i == arr.length - 1) continue;
            i++;
            continue;
        }
        if (arr[i] == '--discard-prev') {
            if ((i == 0) || (typeof arr[i - 1] == 'string') || (arr[i - 2] == '--discard-next')) continue;
            transformArr.pop();
            continue;
        }
        if (arr[i] == '--double-next') {
            if ((i == arr.length - 1) || (typeof arr[i + 1] == 'string')) continue;
            transformArr.push(arr[i + 1]);
            continue;
        }
        if (arr[i] == `--double-prev`) {
            if ((i == 0) || (typeof arr[i - 1] == 'string') || (arr[i - 2] == '--discard-next')) continue;
            transformArr.push(arr[i - 1]);
            continue;
        }
        transformArr.push(arr[i]);
    }
    return transformArr;
}

module.exports = {
    transform
};