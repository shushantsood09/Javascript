const prompt = require('prompt-sync')();

// While Loop
let x = 20;

let i =0;

while (i < x){
    console.log(i);
    i++;
}

// Do while loop

console.log("\nDo While loop \n");

let n = prompt("Enter the value of n : ");

let j = 0;
do{
    console.log(j);
    j++
}while(j < n)    
