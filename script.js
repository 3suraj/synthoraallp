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

    // Contact Form Handler
    const projectForm = document.getElementById('project-form');
    if (projectForm) {
        projectForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const submitBtn = projectForm.querySelector('.submit-btn');
            submitBtn.disabled = true;
            submitBtn.textContent = 'Sending...';

            const formData = new FormData(projectForm);
            const formJson = Object.fromEntries(formData.entries());
            
            try {
                const response = await fetch('https://formspree.io/f/your-form-id', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formJson),
                });

                if (response.ok) {
                    // Success message
                    const successMsg = document.createElement('div');
                    successMsg.className = 'form-success';
                    successMsg.innerHTML = `
                        <h4>Thank you for reaching out! 🎉</h4>
                        <p>We've received your message and will get back to you within 24 hours.</p>
                    `;
                    projectForm.replaceWith(successMsg);
                } else {
                    throw new Error('Form submission failed');
                }
            } catch (error) {
                console.error('Form submission error:', error);
                submitBtn.textContent = 'Send Request';
                submitBtn.disabled = false;
                alert('Sorry, there was an error submitting your form. Please try again later.');
            }
        });

        // Form field animations
        const formInputs = projectForm.querySelectorAll('input, select, textarea');
        formInputs.forEach(input => {
            // Add placeholder for label animation
            input.setAttribute('placeholder', ' ');
            
            // Validate on change
            input.addEventListener('change', () => {
                if (input.value) {
                    input.classList.add('has-value');
                } else {
                    input.classList.remove('has-value');
                }
            });
        });
    }

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
            const messageP = synth.querySelector('p');
            if (messageP) {
                messageP.textContent = randomMessage;
            }
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
