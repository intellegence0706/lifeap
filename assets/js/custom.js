// Function to change background color
// function changeBackgroundColor() {
//     var element = document.getElementById('l-header');
//     element.style.backgroundColor = 'rgba(255, 255, 255, 0.7)';
// }

// Event listener for scroll event
// window.addEventListener('scroll', function() {
//     changeBackgroundColor();
// }, { passive: true });
// Select the div with the class '__contact'
const contactDiv = document.querySelector('.__contact');

// Add a click event listener to the div
contactDiv.addEventListener('click', function() {
    // Redirect to the contact.html page
    window.location.href = 'contact.html';
});

const careerDiv = document.querySelector('.__career');

// Add a click event listener to the div
careerDiv.addEventListener('click', function() {
    // Redirect to the career.html page
    window.location.href = 'about.html';
});

