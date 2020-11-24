const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')
const navLogo = document.querySelector('#navbar__logo')
//display mobile menu

const mobileMenu = () =>{
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
}

menu.addEventListener("click", mobileMenu)

//show active menu

const highlightMenu = () =>{
    const elem = document.querySelector('.highlight')
    const homeMenu = document.querySelector('#home-page')
    const aboutMenu = document.querySelector('#about-page')
    const menuMenu = document.querySelector('#menu-page')
    let scrollPos = window.scrollY

    //adds the 'highlight' class to my menu items
    if (window.innerWidth > 960 && scrollPos < 600){
        homeMenu.classList.add('highlight')
        menuMenu.classList.remove('highlight')
        aboutMenu.classList.remove('highlight')
        return
    }
    else if (window.innerWidth > 960 && scrollPos < 1400){
        menuMenu.classList.add('highlight')
        homeMenu.classList.remove('highlight')
        aboutMenu.classList.remove('highlight')
        return
    }
    else if (window.innerWidth > 960 && scrollPos < 2300){
        aboutMenu.classList.add('highlight')
        menuMenu.classList.remove('highlight')
        homeMenu.classList.remove('highlight')
        return
    }

    if ((elem && window.innerWidth < 960 && scrollPos < 600) || elem){
        elem.classList.remove('highlight')
    }  

};

window.addEventListener("scroll", highlightMenu);
window.addEventListener("click", highlightMenu);


// close mobile menu when clicking on a menu item

const hideMenu = () =>{
    const menuBars = document.querySelector('.is-active')
    if (window.innerWidth <= 768 && menuBars) {
        menu.classList.toggle('is-active')
        menuLinks.classList.remove('active')
    }
};

menuLinks.addEventListener('click', hideMenu)
navLogo.addEventListener('click', hideMenu)