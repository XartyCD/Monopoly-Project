const burgerButton = document.getElementById("burger")
const burgerMenu = document.getElementById("menu")
let burgerStatus = 0 

burgerButton.onclick = function () {
    if (burgerStatus === 0) {
        burgerMenu.style.display = "block"
        burgerStatus = 1
    }
    else {
        burgerMenu.style.display = "none"
        burgerStatus = 0 
    }
}