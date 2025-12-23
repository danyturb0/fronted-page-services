document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').Value.trim();
    const message = document.getElementById('message').value.trim();

    if(name && message) {
        document.getElementById('formMessage').textContent = "Thanks for reaching out, " + name + "!";
        this.reset();
    } else {
        document.getElementById('formMessage') = "Please fill in all fields.";
    }
});
