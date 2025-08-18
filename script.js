const track = document.querySelector('.carousel-track');
const items = Array.from(document.querySelectorAll('.carousel-item'));
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

let activeIndex = 0;

// Funkcja do ustawiania układu wrap-around
function updateCarousel() {
    const total = items.length;
    const visible = total >= 5 ? 5 : total;

    // Tworzymy nową kolejność z wrap-around
    const order = [];
    for (let i = -2; i <= visible - 3; i++) {
        order.push((activeIndex + i + total) % total);
    }

    track.innerHTML = '';
    order.forEach((idx, pos) => {
        const el = items[idx];
        el.classList.remove('active');
        if (pos === 2) { // środkowa karta = aktywna
            el.classList.add('active');
        }
        track.appendChild(el);
    });
}

function goToIndex(newIndex) {
    activeIndex = (newIndex + items.length) % items.length;
    updateCarousel();
}

function next() {
    goToIndex(activeIndex + 1);
}

function prev() {
    goToIndex(activeIndex - 1);
}

// Obsługa strzałek
nextBtn.addEventListener('click', next);
prevBtn.addEventListener('click', prev);

// Kliknięcie w kartę
track.addEventListener('click', e => {
    const card = e.target.closest('.carousel-item');
    if (!card) return;

    const clickedIndex = items.indexOf(card);

    if (!card.classList.contains('active')) {
        // Jeśli kliknięto w nieaktywną – ustaw ją jako aktywną
        goToIndex(clickedIndex);
    } else {
        // Jeśli kliknięto w aktywną – fullscreen
        lightboxImg.src = card.querySelector('img').src;
        lightbox.classList.add('show');
    }
});

// Kliknięcie w lightbox lub obraz – zamknięcie
lightbox.addEventListener('click', () => {
    lightbox.classList.remove('show');
});

// Start
updateCarousel();


// Tablica haseł
const ctaTexts = [
    "Get your free quote — Call now: 0744 844 0000",
    "Transform your home with a sauna or sunroom — Tel: 0744 844 0000",
    "Make your dream come true — Call now 0744 844 0000",
    "Enjoy your sauna or sunroom in no time — Call: 0744 844 0000"
];

const ctaElement = document.getElementById("cta-text");
let index = 0;

function changeCTA() {
    // Animacja wyjścia
    ctaElement.style.opacity = 0;
    ctaElement.style.transform = "scale(0.9)";

    setTimeout(() => {
        // Zmieniamy tekst
        ctaElement.textContent = ctaTexts[index];
        // Animacja wejścia
        ctaElement.style.opacity = 1;
        ctaElement.style.transform = "scale(1)";
        // Przygotuj następny tekst
        index = (index + 1) % ctaTexts.length;
    }, 500); // czas animacji wyjścia 0.5s
}

// Uruchamiamy co 10 sekund
setInterval(changeCTA, 10000);

const sections = document.querySelectorAll('section');
let currentSection = 0;
let isScrolling = false;

function scrollToSection(index) {
    if (index < 0 || index >= sections.length) return;
    isScrolling = true;
    sections[index].scrollIntoView({ behavior: 'smooth' });
    currentSection = index;
    setTimeout(() => {
        isScrolling = false;
    }, 600); // czas animacji
}

window.addEventListener('wheel', (e) => {
    if (isScrolling) return;

    if (e.deltaY > 0) {
        // scroll w dół
        scrollToSection(currentSection + 1);
    } else if (e.deltaY < 0) {
        // scroll w górę
        scrollToSection(currentSection - 1);
    }
});
// Otwieranie i zamykanie modala
// const modal = document.getElementById('quote-modal');
// const btn = document.getElementById('open-quote');
// const span = document.querySelector('.modal .close');

// btn.onclick = () => modal.style.display = 'block';
// span.onclick = () => modal.style.display = 'none';
// window.onclick = e => { if(e.target == modal) modal.style.display = 'none'; }
