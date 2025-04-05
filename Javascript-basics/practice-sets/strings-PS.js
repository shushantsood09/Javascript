// Q1 String Length find

let str = 'Har"';
console.log(str.length);

// Q2 Usecase of Includes method.

const sentence = "The quick brown fox jumps over the lazy dog.";

const word = "test";

console.log(
  `The word "${word}" ${
    sentence.includes(word) ? "is" : "is not"
  } in the sentence`
);

// Q3 convert a string to lowercase.

console.log(word.toLowerCase());
console.log(word.toUpperCase());

// Q4 Extract the amount out of the string.

let str2 = "Please give me 1000";

let amount = Number.parseInt(str2.slice(15));

console.log(amount);
console.log(typeof amount);

// Q5 Change 4 chachetr of the string.

let friend2 = 'Abhimanyu';
console.log(friend2);
friend2[3] = 'r'
console.log(friend2)   //Friend is not change because string is immutable.
