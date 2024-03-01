let marks = [54, 52, 88, 92, 97]
console.log(marks)
console.log(marks[1])

marks[0] = 44
console.log(marks)

let hero = ["Aninda", "Arks", "Nila", "Uttam", "Jhrana"]
for(let val of marks){
    console.log(val)
}



// Let's Practice

/* given array with prices of 5 items --> [250, 645, 300, 900, 50]
All items have an offer of 10% OFF on item */

// let items = [250, 645, 300, 900, 50]
// console.log(items)
// for(let i in items){
//     let offer = items[i]/10
//     console.log(items[i]-offer)
// }


let items = [250, 645, 300, 900, 50]
for (let i = 0; i < items.length; i++){ 
    let offer = items[i] / 10;
    items[i] -= offer;
}
console.log(items)