console.log('This is part 2');

// Basic Math Operations

// Addition
let sum = 5 + 5;
console.log(sum);
sum += 5; // sum = sum + 5
console.log(sum);
sum++; // sum += 1 // sum = sum + 1
console.log(sum);


// Subtraction
let diff = 20 - 5;
console.log(diff);
diff -= 10; // diff = diff - 10
console.log(diff);
diff--; // diff -= 1 // diff = diff - 1
console.log(diff);


// Multiplication
let prod = 8 * 5;
console.log(prod);
prod *= 5; // prod = prod * 5;
console.log(prod);


// Division
let quotient = 40 / 5;
console.log(quotient);
quotient /= 2; // quotient = quotient / 2
console.log(quotient);


// Floor Division - use the .floor method from the built-in Math module
let floor = Math.floor(13/2);
console.log(floor);


// Exponents
let square = 5**2;
console.log(square);
square **= 2; // square = square ** 2
console.log(square);


// Modulo
let remainder = 19 % 4;
console.log(remainder);
remainder %= 2; // remainder = remainder % 2
console.log(remainder);


let myString = 'My age is ';
let myRealAge = 54;

let addedString = myString + myRealAge;
console.log(addedString);
console.log(typeof addedString);


console.log(square);

let popQuiz = square + '4';
// undefined, 629, 6254, 625+4
console.log(popQuiz);
console.log(typeof popQuiz);

let addSquare = square + Number('4');
console.log(addSquare);


let popQuiz2 = square - '4';
// undefined, 621, 6254, 625-4
console.log(popQuiz2);

let subtractStrings = 'word' - 'd';
console.log(subtractStrings); // NaN

// Clear Console
console.clear()

// JavaScript Comparisons
console.log(5 == 5);
console.log(5 == 5.0);
console.log(5 == '5');
console.log(5 === '5');
// == check for equality while allowing for type conversion
// === check for equality but does not allow for type conversion

console.log('1' == true);

// Greater Than (>), Greater Than or Equal (>=), Less Than (<), Less Than or Equal (<=)
// Equal allow type conversion (==), Equal no type conversion (===), 
// Not Equal yes conversion (!=), Not Eqaul no conversion (!==)

console.log('5' != 5);
console.log('5' !== 5);


// Greater Than, Less Than, etc. convert to same type
console.log('10' > 9);

// Be careful with type conversion
console.log('100' > '9'); // Both values are already strings, no conversion needed - compare alphabetically

// When JavaScript compares objects, it looks for REFERENCE ONLY!
let arr1 = [1, 2, 3, 4];
let arr2 = [1, 2, 3, 4];

console.log(arr1 == arr2);
console.log(arr1 === arr2);

let colors = ['red', 'white', 'blue']
let colorsAgain = colors;

console.log(colors == colorsAgain);
console.log(colors === colorsAgain);