// Q1 Create array of numbers and take user input in it.
const prompt = require("prompt-sync")();

// let arr = [1, 2, 3, 4, 5, 6, 767];
// let a = prompt("Enter a number : ");

// a = Number.parseInt(a);
// arr.push(a);
// console.log(arr);

// Q2 Create array of numbers and take user input in it umtil 0 is entered.

// let arr1 = [1, 2, 3, 4, 5, 6, 767];
// let a1;
// do {
//   a1 = prompt("Enter a number : ");
//   a1 = Number.parseInt(a1);
//   arr1.push(a1);
// } while (a1 != 0);
// console.log(arr1);

// Q3 Filter for numbers given in an array divisible by 10.
let arr3 = [1, 2, 3, 5, 5, 670, 10, 101, 110, 100];

let d = arr3.filter((x) => {
  return x % 10 == 0;
});
console.log(d);

// Q4 Create an array of square of given numbers.
let arr4 = [1, 2, 3, 5, 5, 670, 10, 101, 110, 100];

let e = arr4.map((x) => {
  return x * x;
});
console.log(e);

// Reduce to claculate the factorial of given number from an array of first n natural numbers.
let arr5 = [1, 2, 3, 4, 5];
let y = arr5.reduce((x1, x2)=> {
    return x1 * x2;
});
console.log(y)
