first.class = "text-black red";
console.dir(document.querySelector("#first"));


// first.className = "red"  //we can change the class dynamically like this


// first.classList.remove("red") //remove


// first.classList.add("red") //add the class



let a =first.classList.toggle("red") //if the class is enabled then add the class 
console.log(a)



let b = first.classList.contains("red")     //It returns true or false
console.log(b);