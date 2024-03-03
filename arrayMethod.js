let familyName = ['Aninda', 'Nila', 'Arka', 'Uttam']
console.log(familyName)

let friends = ['Bibek', 'Raj', 'Anirban', 'Sayan']
console.log(friends)
// familyName.push('Jhrhna')
// familyName.push('name1' ,'name2')
// console.log(familyName)



// let deletedItem = familyName.pop()
// console.log(familyName)
// console.log('Deleted', deletedItem)



// console.log(familyName.concat(friends))




// friends.unshift('Pradip')
// console.log(friends)



// value = friends.shift()
// console.log("The deleted value is", value)



let akatsuki = ['Itachi', 'Kunan', 'Sasuri', 'Daidara', 'Obito', 'Saskey']
console.log(akatsuki)

// console.log(akatsuki.slice(1, 5))


akatsuki.splice(1,2,"Madara")
console.log(akatsuki)



// Let's Practice
let companies = ['Bloomberg', 'Micrisoft', 'Uber', 'Google', 'IBM', 'Netflix']
let delFirst = companies.shift()
console.log("First deleted company name is",delFirst)
console.log(companies)
companies.splice(1, 1, "Ola")
companies.push("Amazon")
console.log(companies)