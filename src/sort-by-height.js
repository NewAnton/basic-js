const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let sortedArr = arr.slice(0, arr.length).sort(function(a, b) {
        return a - b;
    });
    // console.log(arr);
    // console.log(sortedArr);
    for (let i = 0, j = 0; i < sortedArr.length; i++) {
        if (sortedArr[i] !== -1) {
            for (; j < arr.length; j++) {
                if (arr[j] !== -1) {
                    arr[j] = sortedArr[i]
                    j++;
                    break
                }
            }
        }
    }
    return arr
}

module.exports = {
    sortByHeight
};