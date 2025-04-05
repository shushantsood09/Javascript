const prompt = require('prompt-sync')();

// Q1 Program to print student marks in an object using for loop.
let studentMarks = {
  Shushant: 99,
  Aman: 91,
  Shubham: 66,
  Naman: 55,
};

for (let i = 0; i < Object.keys(studentMarks).length; i++) {
  console.log(i);
  console.log(
    "Marks of " +
      Object.keys(studentMarks)[i] +
      " are " +
      studentMarks[Object.keys(studentMarks)[i]]
  );
}

//Q2 Using for in loop for getting students marks.

for (let key in studentMarks) {
  console.log(key);
  console.log("Marks of " + key + " are " + studentMarks[key]);
}

// Q3 Program to print correct number until user enter correct number.

let correctNumber = 4;
let n;
while (n != correctNumber) {
  n = prompt("Please enter the correct number : ");
  console.log("You have entered incorrect number! Please retry.");
}
console.log("You have entered correct number.")

// Q4 Find a mean of numbers.

const mean = (a, b, c, d) => {
    return (a + b + c + d) / 4;
  };
  
  console.log(mean(4,5,6,7));
