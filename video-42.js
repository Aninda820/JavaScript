// getAttribute method use to get the value of an attribute
console.log(first.getAttribute("class"))
console.log(document.querySelector("#first").getAttribute("class"))
console.log(first.getAttribute("color"))
console.log(document.querySelector("#first").getAttribute("color"))
console.log(first.getAttribute("id"))



console.log(first.hasAttribute("class"))
console.log(first.hasAttribute("color"))
console.log(first.hasAttribute("style"))


// Hide the containt
first.setAttribute("hidden", "true")

// change the class
first.setAttribute("class", "box container")
console.log(document.querySelector("#first").getAttribute("class"))


// Remove attribute 
console.log(document.querySelector("#first").removeAttribute("class"))
// console.log(document.getElementById("first").removeAttribute("class"))



// Return all attributes(namednodeMap)
console.log(document.querySelector("#first").attributes)



// Coustom attributes
console.log(second.dataset)
console.log(second.dataset.game)
console.log(second.dataset.player)


