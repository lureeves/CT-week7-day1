//==================Exercise #1 ==========//
/*
    Given an array of numbers 1 through 15, loop through the array and log one of the following values for each number:
    "FizzBuzz" - if number is divisible by 3 and 5
    "Fizz" - if number is divisible by 3
    "Buzz" - if number is divisible by 5
    The number - if number is not divisible by 3 or 5
*/

let exerciseOneArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let outArray = ''

for (let num of exerciseOneArr){
    if ((num % 3 == 0) && (num % 5 == 0)){
        outArray += 'FizzBuzz'
    } else if (num % 5 == 0){
        outArray += 'Buzz'
    } else if (num % 3 == 0){
        outArray += 'Fizz'
    } else {
        outArray += num
    }
    outArray += ' '
}

console.log(outArray) // Output - 1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 FizzBuzz 




//============Exercise #2 ============//
/*
Given the two array of numbers below, loop through them both individually and the sum all of the positives elements.

Example 1:
Input: [10, 12, -9, 3, -1, 0, 15] 
Output: 40
Explain: 10 + 12 + 3 + 15 = 40

Example 2:
Input: [3, 5, 7, 9, -10, 2, -22, -1] 
Output: 26
Explain: 3 + 5 + 7 + 9 + 2 = 26

Note: if there is nothing to sum, the sum is default to 0.
*/

let sum = 0;
let numbers1 = [10, 12, -9, 3, -1, 0, 15];

for (num of numbers1){
    if (num > 0){
        sum += num
    }
}
console.log(sum) // Output - 40

let sum2 = 0;
let numbers2 = [3, 5, 7, 9, -10, 2, -22, -1];

for (num of numbers2){
    if (num > 0){
        sum2 += num
    }
}
console.log(sum2) // Output - 26




// Bonus problem from codewars

console.log('_________________')

// Given lst
const lst = [-3, -2, -1, 3, 4, -5, -5, 5, -1, -5]

let output = []

output.push(lst.length)

let temp = [] 
temp = new Set(lst).size // https://stackoverflow.com/questions/15052702/count-unique-elements-in-array-without-sorting
output.push(temp)


console.log(output) // list includes length and count of unique items in array