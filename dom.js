// // Access tags using id
// let paragrapy1 = document.getElementById("myId1");
// console.dir(paragrapy1);
// // console.log(paragrapy)


// //Access tags using class
// let heading = document.getElementsByClassName("myClass");  // return HTML collections      it is very semiler to an array
// console.dir(heading);
// console.log(heading);


// // Access tags using id
// let button = document.getElementById("myButton");
// console.dir(button);


// // Access tags using tag
// let para = document.getElementsByTagName("p");
// console.dir(para);





// Query selector
let fElements = document.querySelector("p"); //get first element
// querySelector return node list
console.dir(fElements);

let allElements = document.querySelectorAll("p"); //get all matching elements
console.dir(allElements);


// Query selector based on id
let button = document.querySelector("#myButton");
console.dir(button);




const Properties = {
    tagName: 'returns tag for element nodes',
    innerText: 'return the text content of the element and all its children',
    innerHTML: 'return the plain text or HTML contents in the element',
    textContent: 'return textual content even for hidden elements' 
}
console.log(Properties)