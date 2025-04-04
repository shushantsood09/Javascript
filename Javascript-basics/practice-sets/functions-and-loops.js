// Q1 - Prg to print studnets marks in for loop from object.

let marks = {
  Shushant: 90,
  Sumit: 20,
  Lavish: 50,
  Samay: 67,
};

for (let i = 0; i < Object.keys(marks).length; i++) {
  console.log(
    "The marks of " +
      Object.keys(marks)[i] +
      " are : " +
      marks[Object.keys(marks)[i]]
  );
}
for (let key in marks) {
  console.log("The marks of ", key, " are :", marks[key]);
}

// Q2 Find a mean of numbers.

const mean = (a, b, c, d) => {
  return (a + b + c + d) / 4;
};

console.log(mean(4,5,6,7));
