console.log('hello imuuuuuuu');
// alert('still inder development')

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


// script copy whatsapp number

// display number
document.getElementById('openPopUpBox').addEventListener('click', function () {
    const copyBtn = document.getElementById('copy-list');
    if (copyBtn.style.display === 'none') {
        copyBtn.style.display = 'block';
    } else {
        copyBtn.style.display = 'none'
    }
})


// copy number function start

// copy number function for ovi
document.addEventListener('DOMContentLoaded', function () {
    let copyButton = document.getElementById('copyBtnOvi');
    let copyStatus = document.getElementById('copyNumberOvi');

    // Function to copy a specific word to clipboard
    function copyWord() {
        const wordToCopy = '+880 1401-612266';
        navigator.clipboard.writeText(wordToCopy).then(function () {
            copyNumberOvi.innerText = 'number copied to clipboard!';
        }, function (err) {
            copyNumberOvi.innerText = 'Failed to copy word.';
            console.error('Could not copy text: ', err);
        });
    }

    // Event listener for copy button
    copyButton.addEventListener('click', copyWord);
});

// copy number function for tahsin
document.addEventListener('DOMContentLoaded', function () {
    let copyButton = document.getElementById('copyBtnTsn');
    let copyStatus = document.getElementById('copyNumberTsn');

    // Function to copy a specific word to clipboard
    function copyWord() {
        const wordToCopy = '+880 1610-300268';
        navigator.clipboard.writeText(wordToCopy).then(function () {
            copyNumberTsn.innerText = 'number copied to clipboard!';
        }, function (err) {
            copyNumberTsn.innerText = 'Failed to copy word.';
            console.error('Could not copy text: ', err);
        });
    }

    // Event listener for copy button
    copyButton.addEventListener('click', copyWord);
});
// copy number function end


// script for see more details

// see more details script for tahsin
let clossDetailsForTsn = document.querySelector('.closs-details-for-tsn'),
    openDetailsForTsn = document.querySelector('.open-details-for-tsn'),
    detailsContForTsn = document.querySelector('.details-cont-for-tsn');

// see more details script for ovi
let clossDetailsForOvi = document.querySelector('.closs-details-for-ovi'),
    openDetailsForOvi = document.querySelector('.open-details-for-ovi'),
    detailsContForOvi = document.querySelector('.details-cont-for-ovi');

// opening closing function for tahsin
openDetailsForTsn.addEventListener('click', function () {
    // alert('worked')
    detailsContForTsn.style.display = 'block';
})
clossDetailsForTsn.addEventListener('click', function () {
    detailsContForTsn.style.display = 'none';
})


openDetailsForOvi.addEventListener('click', function () {
    // alert('worked')
    detailsContForOvi.style.display = 'block';
})
clossDetailsForOvi.addEventListener('click', function () {
    detailsContForOvi.style.display = 'none';
})

function chekingTF() {
    detailsContForOvi.style.display = 'block';
    detailsContForTsn.style.display = 'block';
}

openDetailsForOvi.addEventListener('click', function(){
    if (detailsContForOvi.style.display === 'block') {
        // alert('closs the running pop-up box first')
        detailsContForOvi.style.display = 'block'
        detailsContForTsn.style.display = 'none'
    } else {
        // detailsContForOvi.style.display = 'block'
        return null;
    }
})

openDetailsForTsn.addEventListener('click', function(){
    if (detailsContForTsn.style.display === 'block') {
        detailsContForTsn.style.display = 'block';
        detailsContForOvi.style.display = 'none';
    } else {
        return null;
    }
})
