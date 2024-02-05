
// convert celcius to fareinheit 

function celciusToFarenheight(celcius){
    let fareinheit = (celcius * 9/5) + 32;
    return fareinheit;
}
const fareinheit = celciusToFarenheight(3);
console.log(fareinheit);

// Task-2:
// You are given an array of numbers. Count how many times the a number is repeated in the array.
// sample-input: numbers = [5,6,11,12,98, 5]
// find: 5
// output: 2

function repeatedArray(number,j){
   
   let sum = 0;
    for(let i of number){
        if(i === j){
           sum++ 
        }    
    }
    return sum;
}

const sum = repeatedArray([5,6,11,12,98, 5,7,6,5],5);
console.log(`Number is repeated ${sum} times`);



// Write a function to count the number of vowels in a string.
function countVowel(str){
   let count = 0;
   
    for(let vowel of str.toLowerCase()){
        if(vowel === 'a' || vowel === 'e' || vowel === 'i' || vowel === 'o' || vowel === 'u'){
            count++;
        }
       
    }
    return count;
}
const count = countVowel('Ant is A greAt animal');
console.log(count);

// Task-4:
// Write a function to find the longest word in a given string.

// sample-input: I am learning Programming to become a programmer

// sample-output: Programming

function findLongestWord(inputString) {
    const words = inputString.split(' ');

    let longestWord = '';
    let longestLength = 0;

   
    for (let word of words) {
        
        if (word.length > longestLength) {
            longestWord = word;
            longestLength = word.length;
        }
    }

   
    return longestWord;
}

const inputString = 'I am learning Programming to become a programmer';
const longestWord = findLongestWord(inputString);
console.log('Longest Word:', longestWord);

// generate a random number between 10 to 20
console.log(Math.random() * (20-10) + 10);