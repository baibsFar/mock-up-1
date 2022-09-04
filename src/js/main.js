const burgerContainer = document.getElementById('burger-menu')
const exitBurgerMenu = document.getElementById('exit-burger-menu')
const navContainerMob = document.getElementById('nav-container-mobile')


burgerContainer.addEventListener('click', () => {
    navContainerMob.style.transform = 'translateX(0%)'
})

exitBurgerMenu.addEventListener('click', () => {
    navContainerMob.style.transform = 'translateX(-100%)'
})