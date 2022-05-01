const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (!(Array.isArray(members))) return false

    members = members.map((num) => {
        if (typeof num == "string") {
            num = num.trim();
            return num.slice(0, 1).toUpperCase();
        } else {
            return num = "";
        }
    });

    members.sort(function(a, b) {
        if (a > b) {
            return 1;
        }
        if (a < b) {
            return -1;
        }
        return 0;
    });

    return members.join("");
}

module.exports = {
    createDreamTeam
};