const allFaqCards = document.querySelectorAll('.faq-card');

allFaqCards.forEach(card => { 
    card.addEventListener('click', (e) => {
        e.target.classList.add('faq-card-activ');

        for(let i =0; i<allFaqCards.length; i++){
            if(allFaqCards[i] !== e.target){
                allFaqCards[i].classList.remove('faq-card-activ');
            }
        }
    })
    
})