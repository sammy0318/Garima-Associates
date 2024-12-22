// Select DOM elements
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const scrollToTopBtn = document.querySelector('.scroll-to-top'); // Make sure you have this element in your HTML

// Toggle mobile menu
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    // Optional: Toggle aria-expanded attribute for accessibility
    menuToggle.setAttribute(
        'aria-expanded',
        menuToggle.getAttribute('aria-expanded') === 'false' ? 'true' : 'false'
    );
});

// Smooth scroll for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetElement = document.querySelector(this.getAttribute('href'));
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
            
            // Close mobile menu when a link is clicked
            if (navLinks.classList.contains('open')) {
                navLinks.classList.remove('open');
                menuToggle.setAttribute('aria-expanded', 'false');
            }
        }
    });
});

// Scroll to top functionality
if (scrollToTopBtn) {
    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}