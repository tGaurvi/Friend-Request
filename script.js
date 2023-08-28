var value=document.querySelector("h3");
var add= document.querySelector("#add");
var remove= document.querySelector("#remove");

add.addEventListener("click",function(){
    value.innerHTML="Friends";
    value.style.color="Green"
})

remove.addEventListener("click",function(){
    value.innerHTML="Unfriend";
    value.style.color="Red"
})
