// Smooth scroll to facilities and contact sections
document.getElementById('facilitiesBtn').addEventListener('click', function() {
    document.getElementById('facilities').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('contactBtn').addEventListener('click', function() {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
});

document.querySelectorAll('.gallery-item').forEach(function(item) {
    item.addEventListener('click', function() {
        var facility = this.getAttribute('data-facility');
        alert('You clicked on: ' + facility);
    });
});


document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Display confirmation message
    document.getElementById('confirmationMessage').style.display = 'block';

    // Clear form fields after submission
    document.getElementById('contactForm').reset();
});