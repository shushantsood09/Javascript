console.log("Hey Shushant");
console.log(console);
console.error("Hey this is an error!");
console.assert(5 > 55);  // Assertion will fail give us the error.

let obj = {a: 1, b: 2, c:3}
console.table(obj);

console.warn("Hey this is a warning!");
console.info("Info it is!");
console.time("A");
console.timeEnd("A");

// For loop duration check.
console.time("forLoop");
for(let i =0; i < 10000; i++){
    console.log("Test")
}

console.timeEnd("forLoop");

