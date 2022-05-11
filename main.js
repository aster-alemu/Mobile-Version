
let menu = document.querySelector('.menu-item');
let menuList = document.querySelector('#menu-options');
let bars = document.querySelector('#bars');
const closeMenu = document.querySelector('.fa-times');
const navLink = document.querySelector('.nav-link');

bars.addEventListener('click', () =>{
    menu.classList.toggle('show-menu');
    document.body.style.overflowY = 'hidden';
    console.log(menu.classList);
});

closeMenu.addEventListener('click', () =>{
    menu.classList.toggle('show-menu');
    document.body.style.overflowY = 'scroll';
    console.log(menu.classList);
});

navLink.addEventListener('click', () => {
    document.body.style.overflowY = 'scroll';
    menu.classList.toggle('show-menu');
  });
  