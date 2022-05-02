const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let matrixResult = [];
    for (let i = 0; i < (matrix.length + 2); i++) {
        matrixResult.push([]);
        for (let j = 0; j < (matrix[0].length + 2); j++) {
            matrixResult[i].push(0);
        }
    }
    for (let i = 1; i < matrix.length; i++) {
        for (let j = 1; j < matrix[0].length; j++) {
            if (matrix[i - 1][j - 1] === true) {
                matrixResult[i - 1][j] += 1;
                matrixResult[i - 1][j + 1] += 1;
                matrixResult[i][j + 1] += 1;
                matrixResult[i + 1][j + 1] += 1;
                matrixResult[i + 1][j] += 1;
                matrixResult[i + 1][j - 1] += 1;
                matrixResult[i][j - 1] += 1;
                matrixResult[i - 1][j - 1] += 1;
            }
        }
    }
    let matrixShort = [];
    for (let i = 1; i < (matrix.length + 1); i++) {
        matrixShort.push([]);
        for (let j = 1; j < (matrix[0].length + 1); j++) {
            matrixShort[i - 1].push(matrixResult[i][j]);
        }
    }
    return matrixShort
}

module.exports = {
    minesweeper
};