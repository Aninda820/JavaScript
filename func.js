// function sum(x, y){
//     s = x+y;
//     return s;
// }

// let total = sum(4,7)
// console.log(total)



function countVow(userInput){
    // userInput = prompt("Enter a string as a input!")
    point = 0;
    for (let letter of userInput){
        console.log(letter)
        if(letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u"){
            point += 1;
        }
    }
    console.log(point);
}
countVow("akatsuki")


