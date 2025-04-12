let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let numMore = [11, 12, 13, 14, 15, 16, 17, 18, 19];
let numEvenMore = [11, 12, 13, 14, 15, 16, 17, 18, 19];
console.log(num);
console.log(num.length);
delete num[0];
console.log(num);
console.log(num.length);

let newArr = num.concat(numMore, numEvenMore);
console.log(newArr);

// Sort method

let compare = (a, b) => {
  return a - b;
};
let sortNum = [1, 2, 663, 74, 66, 5, 909, 565, 544, 9, 0];
sortNum.sort(compare);
console.log(sortNum);
sortNum.reverse();
console.log(sortNum);

// Splice

let a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let spliceData = a.splice(2, 3, 1011, 1013, 1089, 10000);
console.log(a);
console.log(spliceData);

// Slice
let b = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let data = b.slice(3)
console.log(b);
console.log(data);
