let lastScroll = 0;
const nav = document.getElementById('main-nav');
const menuToggle = document.getElementById('menu-toggle');
const navList = nav.querySelector('ul');

// Funkcja chowająca menu przy scrollu
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > lastScroll && currentScroll > 100) {
        // scroll w dół – ukryj menu (tylko na desktopie)
        if (window.innerWidth > 768) {
            nav.style.top = '-60px';
        }
    } else {
        // scroll w górę – pokaż menu
        nav.style.top = '0';
    }

    lastScroll = currentScroll;
});

// Funkcja hamburgera
menuToggle.addEventListener('click', () => {
    navList.classList.toggle('show');
});

// KARUZELA NETFLIX STYLE
const carousel = document.querySelector('.carousel');
const cards = document.querySelectorAll('.carousel .card');
let activeIndex = 0;
let isFullscreen = false;

function updateCarousel() {
    cards.forEach((card, index) => {
        card.classList.remove('active');
        if (index === activeIndex) card.classList.add('active');
    });
    const offset = -activeIndex * (cards[0].offsetWidth + 20) + carousel.offsetWidth / 2 - cards[0].offsetWidth / 2;
    carousel.style.transform = `translateX(${offset}px)`;
}

cards.forEach((card, index) => {
    card.addEventListener('click', () => {
        if (!isFullscreen) {
            if (index === activeIndex) {
                card.classList.add('fullscreen');
                isFullscreen = true;
            } else {
                activeIndex = index;
                updateCarousel();
            }
        } else {
            card.classList.remove('fullscreen');
            isFullscreen = false;
        }
    });
});

// ustawienie początkowe
updateCarousel();
