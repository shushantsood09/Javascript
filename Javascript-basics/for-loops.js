const prompt = require('prompt-sync')();

for (let i = 0; i < 100; i++) {
  console.log(i);
}

// Q = Program to add first n natural numbers.
let sum = 0;
let n = prompt("Enter the value of n: ");
for(let i = 0; i < n; i++){
    sum += i+1;
    console.log(i+1, "+");
}
console.log("Sum of first " + n + " natural numbers is : "+ sum);

let obj = {
    Shushant:45,
    Shubhum: 12,
    Mayank: 34
}

for (let a in obj){
    // console.log(a);
    console.log("Marks of " + a + " are " + obj[a]);
}

// For for-of loop the object of loop should be iterable i.e. either array or string.

for(let b of "Harry"){
    console.log(b);
}


