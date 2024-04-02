// let a = document.getElementsByClassName("container")[0]
// a.onclick = () => {
//     let b = document.getElementsByClassName('container')[0];
//     b.innerHTML = "Hello World";
// }

const button = document.querySelector('#btn');

function random(number){
return Math.floor(Math.random() * (number + 1 ));
}
button.addEventListener('click', () =>{
    const random_color = `rgb(${random(255)} ${random(255)} ${random(255)})`;
    document.body.style.backgroundColor = random_color;
})