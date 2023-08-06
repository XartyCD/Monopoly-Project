
const burgerButton = document.getElementById("burger")
const burgerMenu = document.getElementById("menu")
const btnsFriends = document.querySelectorAll(".btn-friends-popup")
const friendsWindow = document.getElementById("popup-friends")

// Бургер меню (знаю что плохо реализовано (пока и так сойдет))
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
// Бургер меню

// Обрабатываем событие (click on btnsFriends)
const openFriendsPopup = () => {
    friendsWindow.classList.add("open")
    window.onscroll = () => { window.scroll(0, 0); }
    if (burgerStatus === 1) {
        burgerMenu.style.display = "none"
        burgerStatus = 0
    }
}

// Вешаем на классы событие открытия popup-Friends
btnsFriends.forEach(btn => {
    btn.addEventListener('click', openFriendsPopup)
})

// Обработка события клика для закрытия popup-Friends
friendsWindow.addEventListener("click", (event) => {
    if (event.target == friendsWindow || event.target.closest(".popup-friends__close")) {
        friendsWindow.classList.remove("open")
        window.onscroll = () => { window.scroll(); }
    }
})
