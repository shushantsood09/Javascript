// const prompt = require('prompt-sync')();

const canDrive = (age) => {
  return age >= 18 ? true : false;
};

let runAgain = true;

while (runAgain) {
  let age = prompt("Enter your age!");
  age = Number.parseInt(age);

  if( age < 0){
    console.error("Please enter a valid age!");
    
  }

  if (canDrive(age)) {
    alert("You can drive!!");
  } else {
    alert("You cannot drive!!");
  }
  runAgain = confirm("Do you want to run again?");
}


// Q4: Redirect if number is grater then 4.

let number = prompt("Enter a number : ");
number = Number.parseInt(number);

if(number > 4){
  location.href = "https://google.com";
}
