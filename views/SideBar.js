
document.getElementById("buttonClose").addEventListener("click",sideBarClose,false)
document.getElementById("buttonDisplay").addEventListener("click", sideBarOpen,false)
document.getElementById("TheSidebar").style.transition = "all 0.5s ease"

function sideBarOpen(){
    document.getElementById("TheSidebar").style.display= "block"
}
function sideBarClose(){
    document.getElementById("TheSidebar").style.display= "none"
}