const burgerBtn = document.getElementById('burger-btn');
const extendMenu = document.getElementById('extend-menu');

burgerBtn.addEventListener('click', function(){
    extendMenu.classList.toggle('show-extend');
    burgerBtn.classList.toggle('extend-burger');
})