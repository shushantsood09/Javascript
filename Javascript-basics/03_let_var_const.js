let b = "Shushant";
let c = null;

const author = "Shushant";
// const shubham;
// let author = 5;   // Here redeclaration and re assignment of the constant is going to give us error.
let d = undefined;
{
    let b = 10;
    console.log(b);   // Here it will print 10 as let is block scoped.
}
console.log(b);   // Here it will print Shushant as let is block scoped.
 

