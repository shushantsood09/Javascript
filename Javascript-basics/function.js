const hello = () => {
    console.log("Hello how are you");
    return "Hi";
}

let a = 1;
let b = 2;
let c = 3;

v = hello();
console.log(v);

function onePlusAvg(x, y) {
  console.log("done");
  return 1 + (x + y) / 2;
}

const sum = (p, q) => {
  return p + q;
};

console.log("One plus Average of a and b is : ", onePlusAvg(a, b));
console.log("One plus Average of b and c is : ", onePlusAvg(b, c));
console.log("One plus Average of c and a is : ", onePlusAvg(c, a));
console.log(sum(9,7));
