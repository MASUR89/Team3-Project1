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


document.querySelectorAll('.icons .image img').forEach((icon, index) => {
    icon.addEventListener('click', () => {
        const urls = [
            'https://www.facebook.com/groups/276503652755966',   
            'https://www.instagram.com/software.agency/',        
            'https://x.com/?mx=2',                                
            'https://www.youtube.com/results?search_query=software+agency' 
        ];
        
        if (urls[index]) {
            window.open(urls[index], '_blank');
        }
    });
});

document.querySelector('.home-link').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});


document.querySelector('.grey').addEventListener('click', () => {
    const iframe = document.querySelector('iframe');
    const videoUrl = iframe.src.split('?')[0]; // ვიღებ ვიდეოს URL-ს

    window.open(videoUrl, '_blank');
});


var swiper = new Swiper(".mySwiper", {
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: true,
    },
  });

