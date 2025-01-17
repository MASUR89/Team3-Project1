document.querySelectorAll('.q-box .question').forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling; 
        const arrow = question.querySelector('.arrow'); 

        if (answer.classList.contains('show')) {
            answer.classList.remove('show');
            arrow.classList.remove('rotate');
        } else {
            answer.classList.add('show');
            arrow.classList.add('rotate');
        }
    });
});
