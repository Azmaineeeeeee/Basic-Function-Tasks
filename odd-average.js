// calculate the average of odd numbers in an array.

function oddNumber(numbers) {
    oddSum = 0;
    oddLength = [];
    for (let num of numbers) {
        if (num % 2 !== 0) {
            oddSum += num;
            oddLength.push(num)
        }
    }
    let totalLength = Object.keys(oddLength);
    let oddAvg = (oddSum / totalLength.length);
    return { oddSum, oddLength, totalLength, oddAvg };
}
let average = oddNumber([42,13,58,65,81,7])
console.log("Odd Numbers in this array are:", average.oddLength);
console.log("Sum of the odd numbers are:", average.oddSum);
console.log("Average of the odd numbers:", average.oddAvg);