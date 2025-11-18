const contactForm = document.getElementById('contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const submitButton = document.getElementById('submit-button');

contactForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();
    
    if (validateForm(name, email, message)) {
        // Here you would typically send the form data to a server
        console.log('Form submitted:', { name, email, message });
        alert('Thank you for your message!');
        contactForm.reset();
    }
});

function validateForm(name, email, message) {
    if (!name || !email || !message) {
        alert('Please fill in all fields.');
        return false;
    }
    
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return false;
    }
    
    return true;
}