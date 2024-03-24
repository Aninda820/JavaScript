let a = document.getElementsByTagName("li")[0];
a.style.color = "red";

Array.from(document.getElementsByTagName("li")).forEach((element) => {
  element.style.color = "green";
});

Array.from(document.getElementsByClassName("myClass")).forEach((element)=>{
    element.style.color = "red"
})
