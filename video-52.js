// Syncronous-programming

// let a = prompt("What is your name?");
// let b = prompt("What is your age?");
// let c = prompt("What is your favorite color?");
// document.write(
//   `My name is ${a}, my age is ${b} and my favorite color is ${c}.`
// );



// Asynchronous Programming
// console.log("start")
// setTimeout(function () {
//   console.log("Hey I am good");
// }, 3000);
// console.log("end")



// Callbacks
function loadScript(url, Callback) {
  let script = document.createElement("script");
  script.src = url;
  script.onload = function () {
    console.log("script loaded with url" + url);
    Callback(null,url);
  };
  script.onerror = function () {
    console.log("script failed to load with url" + url);
    Callback(new Error('url got some error'));
  }
  document.body.appendChild(script);
}

function hello(error,url) {
    if(error){
        console.log(error);
        return;
    }
  alert("Hello World" + url);
}
function good(error,url) {
    if(error){
        console.log(error);
        return;
    }
  alert("Goodbye World" + url);
}
loadScript(
  "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js",
  hello
);
// loadScript(
//     "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.minee.js",
//     hello
//   );         //with error url
