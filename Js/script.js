// Icône Toggle Navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let navLinks = document.querySelectorAll('.navbar a');

menuIcon.onclick = () => {
    if (menuIcon.name === 'menu-outline') {
        menuIcon.name = 'close-outline';
    } else {
        menuIcon.name = 'menu-outline';
    }
    navbar.classList.toggle('active');
};

// Fermer le menu quand on clique sur un lien
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('active');
        menuIcon.name = 'menu-outline';
    });
});

// Scroll section active
let sections = document.querySelectorAll('section');

window.onscroll = () => {
    let top = window.scrollY;

    sections.forEach(sec => {
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('.navbar a[href*=' + id + ']').classList.add('active');
            });
            // section active for animation on scroll
            sec.classList.add('show-animate');
        }
        // if want to use animation that repeat on scroll use this
        else{
            sec.classList.remove('show-animate');
        }
    });

    // Sticky Header
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
};
