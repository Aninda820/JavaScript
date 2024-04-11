// 1st question solution

let gta = function(e){
    alert("I love GTA V")
}
let cod = function(e){
    alert("I love cod")
}
let apex = function(e){
    alert("I love apex");
    document.querySelector('#apex').style.background = "red"
    document.querySelector('#apex').style.color = "white";  
}

document.querySelector('#gta').addEventListener('click', gta)
document.querySelector('#cod').addEventListener('click', cod)
document.querySelector('#apex').addEventListener('click', apex)



// 2nd question solution

document.querySelector('#google').addEventListener('click', function(e){
    window.location = "https://www.google.com"
})
document.querySelector('#youtube').addEventListener('click', function(e){
    window.location = "https://www.youtube.com"
})
document.querySelector('#facebook').addEventListener('click', function(e){
    window.location = "https://www.facebook.com"
})