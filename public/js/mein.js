// script for slider on hero section
document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;

    function nextSlide() {
        slides[currentSlide].classList.remove("active");
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add("active");
    }

    setInterval(nextSlide, 1000); // Change slide every 3 seconds (adjust as needed)
});
// slider for hero section end here


// Popup message box script
let openPopUpBox = document.getElementById('openPopUpBox');
let closePopUp = document.getElementById('closePopUp'); // Corrected typo: clossPopUp to closePopUp
let popUpBox = document.getElementById('popupBox');

// Function to open popup box
function openBox() {
    popUpBox.style.display = 'block';
}

// Function to close popup box
function closeBox() {
    popUpBox.style.display = 'none';
}

// WhatsApp message sending script
document.getElementById('whatsappForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const phoneNumber = '+8801401612266'; // WhatsApp number for sending message

    const message = document.getElementById('message').value;
    const encodedMessage = encodeURIComponent(message);

    let whatsappLink = `https://wa.me/${phoneNumber}`;

    if (message) {
        whatsappLink += `?text=${encodedMessage}`;
    }

    // Display the generated WhatsApp link
    document.getElementById('generatedLink').innerHTML = `Click this link to send message: <a href='${whatsappLink}' target='_blank'>Send Message</a>`;
});
