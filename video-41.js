console.log(document.body.childNodes[0])
console.log(document.body.childNodes[1])
console.log(document.body.childNodes[2])
console.log(document.body.childNodes[3])


console.log(document.getElementsByTagName("span")[0])
console.dir(document.getElementsByTagName('span')[0])

console.log(document.body.firstChild.nodeName)
console.log(document.body.firstElementChild.nodeName)
console.log(document.body.lastElementChild.nodeName)

        // INNER HTML 
// innerHTML is only valid for Element Nodes 
// For other nodes type we use nodevalue or data
console.log(document.getElementById('second'))
console.log(document.body.querySelector("#second").innerHTML)
// console.log(document.body.querySelector("#second").innerHTML="Hey fuckers")     //We can change the inner HTML

            // OUTER HTML 
console.log(document.body.querySelector("#first").outerHTML)
// we can also change the outer html
console.log(document.querySelector("#first").outerHTML="<div>Example of outer html</div>")


                // nodeValue or data 
console.log(document.body.firstChild.nodeValue)
console.log(document.body.firstChild.data)


                // TEXT CONTENT 
console.log(document.body.textContent)


                    // Become Visible a hiddne element 
let visible = document.body.querySelector("#second").hidden = false
