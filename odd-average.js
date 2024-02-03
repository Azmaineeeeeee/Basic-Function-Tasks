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
let average = oddNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16])
console.log("Odd Numbers in this array are:", average.oddLength);
console.log("Sum of the odd numbers are:", average.oddSum);
console.log("Average of the odd numbers:", average.oddAvg);