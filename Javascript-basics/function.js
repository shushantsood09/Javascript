// Arrow function in JS.
const hello = () => {
    console.log("Hello how are you");
    return "Hi";
}

v = hello();
console.log(v);

// Function for sum of two numbers;

let a = 1;
let b = 2;
let c = 3;



function onePlusAvg(x, y) {
  console.log("done");
  return 1 + (x + y) / 2;
}

// Arrow function in javascript.

const sum = (p, q) => {
  return p + q;
};

console.log("One plus Average of a and b is : ", onePlusAvg(a, b));
console.log("One plus Average of b and c is : ", onePlusAvg(b, c));
console.log("One plus Average of c and a is : ", onePlusAvg(c, a));
console.log(sum(9,7));
