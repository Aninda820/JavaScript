let names = ['itachi', 'madara', 'obito', 'saskey'];
names.forEach((one) => {
    console.log(one.toUpperCase());
});





let arr = [1,2,3,4,5,6,7];
arr.forEach((num) =>{
    console.log(num*num);
});
// Another way
let calCulate = (num) =>{           
    console.log(num*num);
};

arr.forEach(calCulate);




// Map methods      it's return a new array
let anotherArr = [32, 20, 10, 45, 39, 44, 67, 70]
let newArray = anotherArr.map((valu)=>{
    return valu**2;
})
console.log(newArray)



// Filter Methods
let moreArray = [32, 20, 10, 45, 39, 44, 67, 70];
let filterArray = moreArray.filter((val)=>{
    return val%2 === 0;
    // return val>45;
})
console.log(filterArray)


// Reduce Methods
let simpleArray = [1, 3, 5, 7, 4];
let reduceArray = simpleArray.reduce((start, end)=>{
    // return start+end;
    if(start>end){
        return start;
    }else{
        return end;
    }
    // return start>end ? start:end;   // another method
})
console.log(reduceArray);









// // Practice questions
// 1st question
const marks = [77, 93, 99, 54, 92, 38, 90]
let filterMarks = marks.filter((val)=>{
    return val >= 90;
});
console.log(filterMarks);



// 2nd question
let userInput = prompt('Enter a number!');
let addArr = [];
for (let i=1; i<=userInput; i++){
    addArr[i-1] = i;
}
console.log(addArr);
let inputSum = addArr.reduce((val1, val2)=>{
    return val1 + val2;
})
console.log(inputSum);
let fact = addArr.reduce((val1, val2)=>{
    return val1*val2
})
console.log(fact)