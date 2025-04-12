let num = [3, 54, 1, 2, 24];

// Classic for Loop.
// for(let i =0; i< num.length; i++){
//     console.log(num[i]);
// }

// ForEach loop.
num.forEach((element) => {
    console.log(element * element);
});

// Array.from

let data = "Shushant";
let arr = Array.from(data);   //  This means prepare an array from this string.
console.log(arr)

// for...of loop  - It is a shortcut way to access the array elements.
for(let i of num){
    console.log(i)
}

// for...in loop  
for(let item in num){
    console.log(num[item])
}




