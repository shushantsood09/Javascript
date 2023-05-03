// Chapetr -2 Pratice set

// Q1

// let age = prompt("What is your age");
let age = 12;
if (age > 10 && age < 20) {
  console.log("Your age lies beteen 10 and 20");
} else {
  console.log("Your age  not lies beteen 10 and 20");
}

//Q2

switch (age) {
  case 12:
    console.log("Your age is 12");
    break;
  case 13:
    console.log("Your age is 12");
    break;
  case 14:
    console.log("Your age is 14");
    break;
  case 15:
    console.log("Your age is 15");
    break;
  default:
    console.log("Your age is not special");
}

// Q3
let num = 18;

if (num % 2 == 0 && num % 3 == 0) {
  console.log("Your number is divivsible by 2 and 3");
} else {
  console.log("Your number is not divivsible by 2 and 3");
}

// Q4

{
  let num = 18;

  if (num % 2 == 0 || num % 3 == 0) {
    console.log("Your number is divivsible by either 2 or 3");
  } else {
    console.log("Your number is not divivsible by 2 or 3");
  }
}

// Q5

let agee = 1;
let a  = agee > 18 ? "You can drive" : "You cannot drive";
console.log(a);

