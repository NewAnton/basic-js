const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (domains.length == 0) return {}

    for (let i = 0; i < domains.length; i++) {
        domains[i] = domains[i].split(".").reverse();
    }

    let domainsObject = {};
    for (let i = 0; i < domains.length; i++) {
        let domainStart = domains[i][0];
        if (domainsObject["." + domainStart]) {
            domainsObject["." + domainStart] = domainsObject["." + domainStart] + 1;
        } else {
            domainsObject["." + domainStart] = 1;
        }

        for (let j = 1; j < domains[i].length; j++) {
            domains[i][j] = domainStart + "." + domains[i][j]
            if (domainsObject["." + domains[i][j]]) {
                domainsObject["." + domains[i][j]] = domainsObject["." + domains[i][j]] + 1;
            } else {
                domainsObject["." + domains[i][j]] = 1;
            }
            domainStart = domains[i][j];
        }
    }
    return domainsObject
}

module.exports = {
    getDNSStats
};