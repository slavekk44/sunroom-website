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
