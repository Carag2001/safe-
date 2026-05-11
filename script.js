// --- NAVBAR DYNAMIQUE ---
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// --- COMPTEURS ANIMÉS ---
const counters = document.querySelectorAll('.counter');
const speed = 200;

const startCounters = () => {
    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const inc = target / speed;

            if (count < target) {
                counter.innerText = Math.ceil(count + inc);
                setTimeout(updateCount, 1);
            } else {
                counter.innerText = target;
            }
        };
        updateCount();
    });
};

// Déclenchement au scroll pour les stats
let observer = new IntersectionObserver((entries) => {
    if(entries[0].isIntersecting) {
        startCounters();
    }
}, { threshold: 0.5 });

observer.observe(document.querySelector('.stats'));

// --- FAQ ACCORDEON ---
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
        item.classList.toggle('active');
        
        // Fermer les autres items
        faqItems.forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.remove('active');
            }
        });
    });
});

// --- ANIMATION APPARITION (ScrollReveal simple) ---
const revealElements = document.querySelectorAll('.cat-card, .stat-card, .hero-content');
window.addEventListener('scroll', () => {
    revealElements.forEach(el => {
        const position = el.getBoundingClientRect().top;
        if (position < window.innerHeight - 100) {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
        }
    });
});

// Init style pour l'animation
revealElements.forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "all 0.8s ease-out";
});
