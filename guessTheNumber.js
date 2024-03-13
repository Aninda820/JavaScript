console.log("Walcome to our game!");
let systemInput = Math.floor(Math.random() * 10) + 1;
console.log(systemInput);
let gameOver = 10;
count = 0;
while (count < 10) {
  let doYou = prompt("Enter your y/n");
  console.log(doYou);
  if (doYou == 'y') {
    console.log("Walcome sir!");
  } else {
    break;
  }
  let userInput = prompt("Enter the number: ");
  userInput = Number.parseInt(userInput);
  console.log(userInput);

  if (userInput == systemInput) {
    console.log("You guess write, You win!");
    console.log(`You guess the number in ${count+1} guesses`);
    break;
  } else {
    console.log("You guess wrong!, try again");
  }
  count += 1;
  if (count == gameOver) {
    console.log("GameOver");
    break;
  }
}
