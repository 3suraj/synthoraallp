document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scroll behavior
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Mobile Menu Setup
    const nav = document.querySelector('nav');
    const mobileMenuBtn = document.createElement('button');
    mobileMenuBtn.className = 'mobile-menu-btn';
    mobileMenuBtn.innerHTML = `
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
    `;
    document.body.insertBefore(mobileMenuBtn, nav);

    // Mobile menu toggle
    mobileMenuBtn.addEventListener('click', function() {
        nav.classList.toggle('active');
        this.classList.toggle('active');
    });

    // Add scroll to top button
    const scrollTopBtn = document.createElement('button');
    scrollTopBtn.className = 'scroll-top';
    scrollTopBtn.innerHTML = '↑';
    document.body.appendChild(scrollTopBtn);

    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollTopBtn.classList.add('show');
        } else {
            scrollTopBtn.classList.remove('show');
        }
    });

    scrollTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

// Custom cursor
const cursor = document.createElement('div');
cursor.className = 'custom-cursor';
document.body.appendChild(cursor);

document.addEventListener('mousemove', e => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

document.addEventListener('mousedown', () => cursor.classList.add('click'));
document.addEventListener('mouseup', () => cursor.classList.remove('click'));

// Scroll animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in-up').forEach(element => {
    observer.observe(element);
});

// Synth chat messages
const synthMessages = [
    "👋 Hey there! I'm Synth, your AI creative partner.",
    "Need help with content creation? Let's chat!",
    "I can help streamline your creative process.",
    "Want to see how AI can enhance your content?"
];

function showSynthMessage() {
    const synth = document.querySelector('.synth-chat');
    if (synth) {
        const randomMessage = synthMessages[Math.floor(Math.random() * synthMessages.length)];
        synth.textContent = randomMessage;
        synth.style.opacity = '1';
        setTimeout(() => {
            synth.style.opacity = '0';
        }, 5000);
    }
}

// Show Synth messages periodically
setInterval(showSynthMessage, 8000);

// Add fluid background animation
const fluidBg = document.createElement('div');
fluidBg.className = 'fluid-bg';
document.body.insertBefore(fluidBg, document.body.firstChild);

// Initialize modern cards
document.querySelectorAll('.service-card, .process-step, .journey-card').forEach(card => {
    card.classList.add('modern-card', 'fade-in-up');
});
