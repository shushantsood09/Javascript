let num = [1,2,3,45,6];

let b = num.toString();   // converts the array into the string.
console.log(b, typeof b);

let c = num.join(" & ");
console.log(c, typeof c);

num.pop();   // Pop() returns the pop element.
console.log(num);
let r = num.push(99);  // Push returns the new array length.
console.log(num);
console.log(r);  

let d = num.shift()   // Remove the element from the start of the array.
console.log(num)    

let e = num.unshift(90909)   // Remove the element from the start of the array.
console.log(num)  


