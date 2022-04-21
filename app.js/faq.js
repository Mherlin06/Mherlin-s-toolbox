const plusBtn = document.querySelectorAll('.faq-btn-plus');
const minusBtn = document.querySelectorAll('.faq-btn-minus');

plusBtn.forEach(button => { button.addEventListener('click', function(e){
    e.currentTarget.parentElement.nextSiblingElement.classList.toggle('show-answer');
    });
    
});