var btn = document.querySelector("#center")
btn.addEventListener("click" , function(){
    document.querySelector("#modal").style.opacity = "1";
    document.querySelector("#modal").style.top = "20%";
    document.querySelector("#modal").style.pointerEvents = "all";
})

var btn2 = document.querySelector("#close")
    btn2.addEventListener("click" , function(){
    document.querySelector("#modal").style.opacity = "0";
    document.querySelector("#modal").style.top = "-20%"
})
