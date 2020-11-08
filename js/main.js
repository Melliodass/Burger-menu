let burger = document.querySelector('.header__burger');
let menu = document.querySelector('.header__menu');
let list = document.querySelector('.header__list');
let body = document.querySelector('body');
burger.addEventListener('click', function(){
 
  menu.classList.toggle('active');
  list.classList.toggle('active');
  burger.classList.toggle('active');
  body.classList.toggle('lock');
})
window.onresize = function(event) {
  if (screen.availWidth > 768) { 
    menu.classList.remove('active');
    list.classList.remove('active');
   }
};
