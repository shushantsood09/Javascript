let arr = [34, 3, 66];
console.log(arr);

// Array Map Method - It will create a new array with the requested changes.
let a = arr.map((value) => {
  console.log(value);
  return value + 1;
});
console.log(a);

let b = arr.map((val, index, array) => {
  console.log(val, index, array);
  return val + 1;
});
console.log(b);

// Array Filter Method
let arr2 = [1, 4, 6, 38, 9];
let filteredData = arr2.filter((i) => {
  return i > 5;
});
console.log(filteredData);

// Array Reduce Method

let arr3 = [1, 2, 3, 5, 2, 1];
reduceResult = arr3.reduce((h1, h2) => {
  return h1 + h2;
});
console.log(reduceResult);

// Another way to implement.
const reduce_func = (h1, h2) => {
  return h1 + h2;
};
reduceResult = arr3.reduce(reduce_func);
console.log(reduceResult);
