// ===================================
// ELIE BEA - DATA PORTFOLIO
// Script JavaScript avec Particles.js
// ===================================

// ===================================
// PARTICLES CONFIGURATION
// ===================================
particlesJS('particles-js', {
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: ['#6366F1', '#EC4899', '#14B8A6']
        },
        shape: {
            type: 'circle',
            stroke: {
                width: 0,
                color: '#000000'
            }
        },
        opacity: {
            value: 0.5,
            random: true,
            anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: false
            }
        },
        size: {
            value: 3,
            random: true,
            anim: {
                enable: true,
                speed: 2,
                size_min: 0.1,
                sync: false
            }
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#6366F1',
            opacity: 0.2,
            width: 1
        },
        move: {
            enable: true,
            speed: 2,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false,
            attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
            }
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: {
                enable: true,
                mode: 'grab'
            },
            onclick: {
                enable: true,
                mode: 'push'
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 140,
                line_linked: {
                    opacity: 0.5
                }
            },
            push: {
                particles_nb: 4
            }
        }
    },
    retina_detect: true
});

// ===================================
// MOBILE MENU
// ===================================
const burgerMenu = document.getElementById('burgerMenu');
const mobileMenu = document.getElementById('mobileMenu');
const menuOverlay = document.getElementById('menuOverlay');
const mobileLinks = document.querySelectorAll('.mobile-menu a');

function toggleMenu() {
    burgerMenu.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    menuOverlay.classList.toggle('active');
    document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
}

burgerMenu.addEventListener('click', toggleMenu);
menuOverlay.addEventListener('click', toggleMenu);

mobileLinks.forEach(link => {
    link.addEventListener('click', toggleMenu);
});

// ===================================
// THEME TOGGLE (Dark/Light Mode)
// ===================================
const themeToggle = document.getElementById('themeToggle');
const themeIcon = themeToggle.querySelector('i');
let isDark = false;

themeToggle.addEventListener('click', () => {
    isDark = !isDark;
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
    themeIcon.className = isDark ? 'fas fa-sun' : 'fas fa-moon';
});

// ===================================
// SCROLL TO TOP BUTTON
// ===================================
const scrollTopBtn = document.getElementById('scrollTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollTopBtn.classList.add('visible');
    } else {
        scrollTopBtn.classList.remove('visible');
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ===================================
// LANGUAGE SWITCHER (FR/EN)
// ===================================
let currentLang = 'fr';
const langToggle = document.getElementById('langToggle');

langToggle.addEventListener('click', switchLanguage);

function switchLanguage() {
    currentLang = currentLang === 'fr' ? 'en' : 'fr';
    document.documentElement.lang = currentLang;
    
    document.querySelectorAll('[data-fr]').forEach(el => {
        const text = el.getAttribute(`data-${currentLang}`);
        if (text) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = text;
            } else {
                el.textContent = text;
            }
        }
    });
}

// ===================================
// SMOOTH SCROLLING
// ===================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===================================
// INTERSECTION OBSERVER - FADE IN ANIMATIONS
// ===================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

// ===================================
// SKILLS ANIMATION DELAY
// ===================================
document.querySelectorAll('.skill-item').forEach((item, index) => {
    item.style.animationDelay = `${index * 0.1}s`;
});

// ===================================
// STATS COUNTER ANIMATION
// ===================================
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
            entry.target.classList.add('counted');
            const text = entry.target.textContent;
            const isPlus = text.includes('+');
            const isTB = text.includes('TB');
            let target = parseInt(text);
            
            let count = 0;
            const increment = target / 50;
            
            const counter = setInterval(() => {
                count += increment;
                if (count >= target) {
                    entry.target.textContent = target + (isTB ? 'TB+' : '+');
                    clearInterval(counter);
                } else {
                    entry.target.textContent = Math.floor(count) + (isTB ? 'TB+' : '+');
                }
            }, 30);
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-number').forEach(stat => {
    statsObserver.observe(stat);
});

// ===================================
// CONTACT FORM HANDLER
// ===================================
const contactForm = document.getElementById('contactForm');
const modalOverlay = document.getElementById('modalOverlay');
const modalIcon = document.getElementById('modalIcon');
const modalTitle = document.getElementById('modalTitle');
const modalMessage = document.getElementById('modalMessage');
const modalCloseBtn = document.getElementById('modalCloseBtn');

function showModal(type, title, message) {
    modalTitle.textContent = title;
    modalMessage.textContent = message;
    
    if (type === 'success') {
        modalIcon.className = 'modal-icon success';
        modalIcon.innerHTML = '<i class="fas fa-check"></i>';
    } else {
        modalIcon.className = 'modal-icon error';
        modalIcon.innerHTML = '<i class="fas fa-times"></i>';
    }
    
    modalOverlay.classList.add('active');
}

modalCloseBtn.addEventListener('click', function() {
    modalOverlay.classList.remove('active');
});

modalOverlay.addEventListener('click', function(e) {
    if (e.target === this) {
        this.classList.remove('active');
    }
});

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Simulate form submission
    setTimeout(() => {
        const currentLang = document.documentElement.lang || 'fr';
        const successTitle = currentLang === 'fr' ? 'Message Envoyé !' : 'Message Sent!';
        const successMessage = currentLang === 'fr' 
            ? 'Votre message a été envoyé avec succès. Je vous répondrai bientôt !' 
            : 'Your message has been sent successfully. I will get back to you soon!';
        
        showModal('success', successTitle, successMessage);
        contactForm.reset();
    }, 500);
});

// ===================================
// CONSOLE EASTER EGG
// ===================================
console.log('%c Elie Bea - Data Portfolio', 'color: #6366F1; font-size: 24px; font-weight: bold; font-family: JetBrains Mono;');
console.log('%c Data Engineer | Data Scientist | Data Analyst', 'color: #EC4899; font-size: 16px; font-family: JetBrains Mono;');
console.log('%c Transforming data into insights 📊', 'color: #14B8A6; font-size: 14px;');
console.log('%c Portfolio avec particules animées ✨', 'color: #F59E0B; font-size: 12px;');