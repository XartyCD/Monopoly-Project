const burgerButton = document.getElementById("burger")
const burgerMenu = document.getElementById("menu")
const btnsFriends = document.querySelectorAll(".btn-friends-popup")
const friendsWindow = document.getElementById("popup-friends")

// Бургер меню
burgerButton.onclick = function () {
    if (burgerMenu.classList.contains("open")) {
        burgerMenu.classList.remove("open")
    }
    else {
        burgerMenu.classList.add("open")
    }
}

// Обрабатываем событие (click on btnsFriends)
const openFriendsPopup = () => {
    friendsWindow.classList.add("open")
    window.onscroll = () => { window.scroll(0, 0); }
    if (burgerMenu.classList.contains("open")) {
        burgerMenu.classList.remove("open")
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
