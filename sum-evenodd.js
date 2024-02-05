// write a function to give me the sum of all numbers in an array.

function doubleOrTriple(number, double) {
    console.log(number);
    if (double === true) {
        number = number * 2;
        return number;
    }
    else {
        number = number * 3;
        return number;
    }
}
const result = doubleOrTriple(3, false);
console.log(result);


// sum of all numbers in an array using function
function sumOfAllNumbers(numbers) {
    let sum = 0;
    for (let number of numbers) {
        sum = sum + number;
    }
    return sum;

}
const total = sumOfAllNumbers([1, 2, 3, 4, 5, 6]);
console.log(total);


// return all the even numbers of an array using function
function Array(numbers) {
    let even = [];
    let sumEven = 0;
    let sumOdd = 0;
    let odd = [];
    for (let i of numbers) {
        if (i % 2 === 0) {
            even.push(i);
            sumEven+=i;

        }
        else {
            odd.push(i);
            sumOdd+=i;
        }
    }
    return { even, odd , sumEven,sumOdd };
}

let Numbers = Array([7, 12, 13, 18, 24, 23, 26, 356]);
console.log("Even Numbers:", Numbers.even);
console.log("Odd Numbers:", Numbers.odd);
console.log("Sum of Even Numbers:", Numbers.sumEven);
console.log("Sum of Odd Numbers:", Numbers.sumOdd);

