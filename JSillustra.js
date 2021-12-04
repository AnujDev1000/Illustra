let header = document.querySelector('.header-back');
let menu = document.querySelector('.menu');
let menuBar = document.querySelector('.menu-bar');

menuBar.onclick = () => {
    menu.classList.toggle('menu-active');
    header.classList.toggle('active-header-back');
}

window.onscroll = () => {
    if(window.scrollY > 0)
    {
        header.classList.add('active-header-back');
    }
    else
    {
        header.classList.remove('active-header-back');
    }
    menu.classList.remove('menu-active');
}
