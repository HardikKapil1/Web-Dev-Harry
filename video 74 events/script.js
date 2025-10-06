let button=document.getElementById("btn")

button.addEventListener("click",()=>{
    alert("I was clicked")
    document.querySelector(".box").innerHTML="<b>Yayy you were clicked enjoy your click</b>"
})