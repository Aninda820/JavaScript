function sum(x, y) {
  return x + y;
}

let add = sum(2, 3);
console.log(add);

//Arrow function
let arrowSum = (a, b) => {
  console.log(a + b);
};
arrowSum(3, 6);


const countVow = () => {
    let str = prompt('Enter a name!').toLowerCase()
    let count = 0;
    for (const char of str){
        if (char === 'a' || char === 'e' || char=== 'i' || char=== 'o' || char === 'u'){
            count = count + 1;
        }
    }console.log(count);
}

countVow()


function abc(){
    console.log('Hello')
}
function myFunc(abc){
    return abc
}


let x = myFunc(abc)
console.log(x)

