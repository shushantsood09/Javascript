for (let i = 0; i < 500; i++){
    console.log(i);
}

// Program to add first n natural number;

let sum = 0;
let n = 4;
for(let i = 0; i < n; i++){
    sum += (i+1);
}

console.log("Sum of first" , n , "natural numbers is : ", sum);

let obj = { 
    "Shushant" : 90,
    "Shubham" : 80,
    "Suman" : 60,
    "Aman" : 50,
}

// For in Loop
for(let i in obj){
    console.log("Marks of " + i + " are : " + obj[i]);
}

// For of Loop
for(let b of "Harry"){
    console.log(b);
}