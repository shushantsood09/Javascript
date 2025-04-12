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

let sortNum = [1, 2, 3, 4, 6, 5, 909, 565, 544, 9, 0];
sortNum.sort();
console.log(sortNum);
