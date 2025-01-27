
const menuAttivo = document.querySelector('.menu-attivo')
const navMenu = document.querySelector('.nav-menu')

menuAttivo.addEventListener('click', () =>{
    if(navMenu.classList.contains('active')){
        navMenu.classList.remove('active')
        navMenu.classList.add('off')
    }else{
        navMenu.classList.remove('off')
        navMenu.classList.add('active')
    }
})

