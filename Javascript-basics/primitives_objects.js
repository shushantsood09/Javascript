// nn bb ss u  - Primivite data type in JS // Trick to learn data types.

let a = null;
let b = 200;
let c = true;  //can also be false.
let d = BigInt("999") + BigInt("1");
let e = "Shushant";
let f = Symbol("I am a nice symbol");
let g = undefined;
console.log(a, b, c, d, e, f, g);

console.log(typeof d) //Console to get the type.

// Objects in JS

const items = {
    "Shushant" : 1,
    "Bhavin": 2,
    "Rohan": undefined,
}

console.log(items);
console.log(items["Shushant"])