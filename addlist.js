//select + button
var s=document.getElementById("add")
//select popup and overlay
var popup=document.querySelector(".popup")
var overlay=document.querySelector(".overlay")
s.addEventListener("click",function(){
    popup.style.display="block"
    overlay.style.display="block"
})
//select cancel and ok button
var cancel=document.getElementById("cancel")
var ok=document.getElementById("addsong")
cancel.addEventListener("click",function(){
    popup.style.display="none"
    overlay.style.display="none"
})
function del(event){
    event.target.parentNode.remove()
}
//select all inputs
var input=document.querySelectorAll(".input")
var container=document.querySelector(".container")
console.log(input)
//create new div
ok.addEventListener("click",function(){
    console.log(input[0].value)
    var div=document.createElement("div")
    div.setAttribute("class","music-list")
    div.innerHTML=`<h3>${input[0].value}</h3><h5>${input[1].value}</h5><p>${input[2].value}</p><button id='del' onclick='del(event)'>Delete</button>`
    container.append(div)
    for(i=0;i<input.length;i++){
        input[i].value=""
    }
    popup.style.display="none"
    overlay.style.display="none"
    
})