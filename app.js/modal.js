const modalOverlay = document.getElementById('modal-overlay');
const modalOpenBtn = document.getElementById('modal-open-btn');
const modalCloseBtn = document.getElementById('modal-close-btn');

modalOpenBtn.addEventListener('click', function(){
    modalOverlay.classList.add('modal-open');
})
modalCloseBtn.addEventListener('click', function(){
    modalOverlay.classList.remove('modal-open');
})