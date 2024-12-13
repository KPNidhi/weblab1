// scripts.js

// Wait for the DOM to fully load
$(document).ready(function () {
    // Example: Display an alert when the header title is clicked
    $('header h1').click(function () {
        alert('Welcome to Nidhi\'s Personal Website!');
    });

    // Example: Change the text color of the navigation links on hover
    $('nav ul li a').hover(
        function () {
            $(this).css('color', 'blue');
        },
        function () {
            $(this).css('color', '');
        }
    );
});
