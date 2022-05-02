// console.log(transform([1, `--double-prev`, 2, 3, '--double-next', `--discard-next`, 5, 6, '--discard-prev', 7]));
// * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
//  * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
// console.log(transform([1, 2, 3, '--discard-next', 1337, '--discard-prev', 4, 5]));
console.log(transform(3))
console.log(transform(3.312312))
console.log(transform(false))
console.log(transform(null))
console.log(transform(undefined))
console.log(transform({ 'foo': 'bar' }))

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