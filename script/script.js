
const menuAttivo = document.querySelector('.menu-attivo')
const navMenu = document.querySelector('.nav-menu')

menuAttivo.addEventListener('click', () =>{
    navMenu.classList.toggle('active')
})