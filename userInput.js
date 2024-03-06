// // Question 1
// let runAgain = true;
// const canDrive = (age) => {
//   return age >= 18 ? true : false;
//   // if (age>18){
//   //     return true;
//   // }else{
//   //     return false;
//   // }
// };
// while (runAgain) {
//   let age = prompt("Enter your age!");
//   age = Number.parseInt(age);
//   console.log(age);
//   if (age < 0){
//     console.error('Please enter a valid number!')
//     break;
//   }
//   if (canDrive(age)) {
//     alert("Yes can drive!");
//   } else {
//     alert("Can't drive!");
//   }
//   runAgain = confirm("Do you want to play again!");
// }



// // Questio 2
// let userInput = prompt("Enter a numebr as input!");
// userInput = Number.parseInt(userInput);
// console.log(userInput);
// if (userInput > 4) {
//   location.href = "https://google.com";
// } else {
//   console.log("Enter a number gratter then 4!");
// }


// Change background color
let colorInput = prompt("Enter background color!");
document.body.style.background = colorInput;
