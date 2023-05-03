for (let i = 0; i < 5; i++) {
  console.log(i);
}

// Q = Program to add first n natural numbers.
let sum = 0;
let n = 5;
for(let i = 0; i < n; i++){
    sum += i+1;
    // console.log(i+1, "+");
}
console.log("Sum of first"+ n + "natural numbers is : "+ sum);

let obj = {
    Shushant:45,
    Shubhum: 12,
    Mayank: 34
}

for (let a in obj){
    // console.log(a);
    console.log("Marks of " + a + " are " + obj[a]);
}

for(let b of "Harry"){
    console.log(b);
}


