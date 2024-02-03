// Task-1
// Take four parameters. Multiply the four numbers and then return the result

function multiply(num1, num2, num3, num4) {
    let result = num1 * num2 * num3 * num4;
    return result;
}
const result = multiply(1, 2, 3, 4);
console.log(result);

// Task-2
// Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.

function number(value) {
    if (value % 2 === 1) {
        ans = value * 2;
    }
    else if (value % 2 === 0) {
        ans = value / 2;
    }
    return ans;
}

let answer = number(21);
console.log(answer);

// Task-3
// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

function make_avg(array) {
    let size = array.length;
    let sumArray = 0;
    for (num of array) {
        sumArray += num;
    }
    let arrayAvg = (sumArray / size);
    return { sumArray, arrayAvg, size }
}
let average = make_avg([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log("Average of the numbers is:", average.arrayAvg);
console.log("Sum of the numbers is:", average.sumArray);
console.log("Size of the array is:", average.size);

// Task-4
// Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.

function count_zero(str){
    let sumZero = 0;
    for(let i of str){
       if(i === '0'){
        sumZero++;
       }
    }
    return sumZero;

}
const count = count_zero('0000010');
console.log(count);



