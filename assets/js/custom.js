// Function to change background color
function changeBackgroundColor() {
    var element = document.getElementById('l-header');
    element.style.backgroundColor = 'rgba(255, 255, 255, 0.7)';
    console.log("adfadsfadsf");
}

// Event listener for scroll event
window.addEventListener('scroll', function() {
    changeBackgroundColor();
});
