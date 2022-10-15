const burgerBtn = document.querySelector('#burgerBtn')

const iconMenu = document.querySelector('#menuIc')

const burgerMenu = document.querySelector('#burger-menu')

const header = document.querySelector('#header')

const logo = document.querySelector('#logo')

burgerBtn.addEventListener('click', () => {



    let atr = iconMenu.getAttribute('xlink:href')

    if (atr === '#menu') {
        iconMenu.setAttribute('xlink:href', '#close-menu')
        burgerMenu.classList.remove('none')
        logo.classList.add('ops')
    } else {
        iconMenu.setAttribute('xlink:href', '#menu')
        burgerMenu.classList.add('none');
        logo.classList.remove('ops')
    }
})

window.addEventListener('scroll', () => {

    let scrollTop = window.scrollY;

    if (scrollTop > 650) {
        header.classList.add('header--fixed')
    } else {
        header.classList.remove('header--fixed')
    }
});
