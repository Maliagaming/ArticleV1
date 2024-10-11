// Smooth scroll to facilities and contact sections
document.getElementById('facilitiesBtn').addEventListener('click', function() {
    document.getElementById('facilities').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('contactBtn').addEventListener('click', function() {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
});

// Add open click functionality to gallery items
document.querySelectorAll('.gallery-item').forEach(function(item) {
    item.addEventListener('click', function() {
        var facility = this.getAttribute('data-facility');
        alert('You clicked on: ' + facility);
    });
});
