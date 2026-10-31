
// Mobile Navigation
function toggleMenu() {
    document.getElementById("navLinks").classList.toggle("show");
}

// Close menu after clicking a link
document.querySelectorAll("#navLinks a").forEach(link => {
    link.addEventListener("click", function() {
        document.getElementById("navLinks").classList.remove("show");
    });
});

// Contact Form
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;

    document.getElementById("formMessage").textContent =
        "Thank you, " + name + "! Your form was submitted successfully.";

    this.reset();
});
