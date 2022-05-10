
const menu = document.querySelector('.menu-item');
const menuList = document.querySelector('#menu-options');
const bars = document.querySelector('#bars');

bars.addEventListener('click', () =>{
    menu.classList.toggle('show-menu');

    console.log(menu.classList);
})

