console.log(document.body.firstChild);
console.log(document.body.lastChild);
console.log(document.body.childNodes);

let arr = Array.from(document.body.childNodes); // Array.from  --> use to convert childNodes to an Array
console.log(arr);

let a = document.body.firstChild;
console.log(a.parentNode);
// console.log(document.body.firstChild.parentNode);

console.log(a.parentElement);
