let arr = [45, 23, 31, 21]
console.log(arr)

// forEach loop       //performing some opprations on each element 
arr.forEach((item, index, array)=>{
    console.log(item, index, array)
})


// Map method        // create and return a new array 
let a = arr.map((value)=>{
    console.log(value)
    return value+1 // it returns  + 1 value on every element
})
console.log(`return a new array ${a}`)
console.log('return a new array', a)



// Filter method
let arr2 = [44, 66, 77 ,83, 22, 92, 10, 30, 23, 15, 17, 48]
let a2 = arr2.filter((a)=>{
    return a>40;
})
console.log(a2)



// Reduce method
// 1st method 
let arr3 = [2, 4, 6, 7, 8, 9]
let newArr = arr3.reduce((h1, h2)=>{
return h1+h2
})
console.log(newArr)
// 2nd method
let arr4 = [2, 4, 6, 7, 8, 9]
const reduce_func = (h1, h2) => {
    return h1+h2
}
let newArr1 = arr3.reduce(reduce_func)
console.log(newArr1)
// 3rd method
let arr5 = [2, 4, 6, 7, 8, 9]
function add(h1, h2){
    return h1+h2
}
let newArr2 = arr5.reduce(add)
console.log(newArr2)


