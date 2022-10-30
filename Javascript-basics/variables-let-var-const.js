let a = 67; // a contains 67.
console.log(a);

console.log("Javascript var, let and const");
var ab = 10;
// var ab = 200;    // It can be buggy to redeclare
{
    var ab = 100;      // Here var is globally declared so, the value  is going to update.
    console.log(ab);
}

console.log(ab);

let b ="Shushant";
// let b ="Shushant";   // Going to get an error.
{
    let b = "Aman";
    console.log(b);  // Let cannot be redeclared in the same scope.
}
console.log(b);
