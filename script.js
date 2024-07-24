document.addEventListener('DOMContentLoaded', () => {
    const skillBars = document.querySelectorAll('.skill-bar');
    
    // Function to animate skill bars
    const animateSkillBars = () => {
        skillBars.forEach(bar => {
            const skillLevel = bar.getAttribute('data-skill');
            bar.style.width = skillLevel + '%';
        });
    };

    // Scroll event listener to trigger animation
    window.addEventListener('scroll', () => {
        const skillsSection = document.getElementById('skills');
        const sectionPosition = skillsSection.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.5;

        if (sectionPosition < screenPosition) {
            animateSkillBars();
        }
    });

    // Form validation
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (name === '' || email === '' || message === '') {
            alert('Please fill in all fields');
            e.preventDefault();
        } else if (!validateEmail(email)) {
            alert('Please enter a valid email address');
            e.preventDefault();
        }
    });

    // Function to validate email
    const validateEmail = (email) => {
        const re = /^[a-zA-Z0-
