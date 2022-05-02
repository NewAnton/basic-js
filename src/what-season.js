const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    try {
        if (arguments.length === 0) return 'Unable to determine the time of year!'
        date.getMonth()
    } catch (err) {
        return `Invalid date!`
    }
    if (typeof date !== "object") return `Invalid date!`;

    let month = date.getMonth();
    if ((month === 11) || (month === 0) || (month === 1)) return "winter";
    if ((month === 2) || (month === 3) || (month === 4)) return "spring";
    if ((month === 5) || (month === 6) || (month === 7)) return "summer";
    if ((month === 8) || (month === 9) || (month === 10)) return "fall";
}

module.exports = {
    getSeason
};