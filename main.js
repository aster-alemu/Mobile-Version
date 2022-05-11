
let menu = document.querySelector('.menu-item');
let menuList = document.querySelector('#menu-options');
let bars = document.querySelector('#bars');

bars.addEventListener('click', () =>{
    menu.classList.toggle('show-menu');

    console.log(menu.classList);
});
