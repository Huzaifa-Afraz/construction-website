// alert("working")
var menuBtn=document.querySelector("#menuBar");

menuBtn.addEventListener("click", ()=>{
    
if(menuBtn.classList.contains("fa-bars")){
    
    menuBtn.classList.add("fa-xmark");
    menuBtn.classList.remove("fa-bars");
    document.querySelector(".links").style.left="0%";
}
else {
    
    menuBtn.classList.add("fa-bars");
    menuBtn.classList.remove("fa-xmark");
    document.querySelector(".links").style.left= "-200%";
}

// alert("working")
});