let student_Marks = [91, 87, 57, 67, 90, false];
console.log(typeof student_Marks);
console.log(student_Marks);
console.log(student_Marks[0]);
console.log(student_Marks[1]);
console.log(student_Marks[2]);
console.log(student_Marks[3]);
console.log(student_Marks[8]); // Will be undefined because index 8 is not there.

console.log("The length of marks are : ", student_Marks.length);

// Adding a new element to a array.

student_Marks[6] = 99;
console.log(student_Marks[6]); // Will be undefined because index 8 is not there.


for(let i = 0; i < student_Marks.length; i++){
    console.log("For loop : ", student_Marks[i])
}
