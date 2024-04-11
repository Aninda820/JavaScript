// // // alert("hello");
// document.write("hello");

// const sum = (a, b) => {
//     document.write("yes I am running" + ( a + b))
// }
// // setTimeout(func, delay, args1, args2);
// setTimeout(sum, 1000, 1, 2)


// // let a = setTimeout(function () {
// //   alert("This is the setTimeout");
// // }, 2000);

// // let b = prompt("Do you want to run the setTimeout function  (y/n)? ");
// // if (b == "n") {
// //   clearTimeout(a);
// // }else{
// //     console.log(a);
// // }






function mul(a, b){
    document.write(a * b);
}

let userInput = prompt("Enter the numebr!");
userInput = Number.parseInt(userInput)
for (let i = 1; i < 11; i++){
    let x = setInterval(mul, 1000, userInput, i);
    document.write(x);
    document.write("\n")
}

