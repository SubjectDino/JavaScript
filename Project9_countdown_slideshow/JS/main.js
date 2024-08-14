function countdown(seconds) {
    document.getElementById("countdownDisplay").textContent = seconds;

    var interval = setInterval(function() {
        document.getElementById("countdownDisplay").textContent = seconds; 
        if (seconds <= 0) {
            clearInterval(interval);
            document.getElementById("countdownDisplay").textContent = "Time's up!";
        }
    }, 1000);
}

function countdown(seconds) {
    document.getElementById("countdownDisplay").textContent = seconds;

    var interval = setInterval(function() {
        seconds--; 
        document.getElementById("countdownDisplay").textContent = seconds;

        if (seconds <= 0) {
            clearInterval(interval);
            document.getElementById("countdownDisplay").textContent = "Time's up!";
        }
    }, 1000);
}

var slideIndex = 0;

var slides = ["image1.jpg", "image2.jpg", "image3.jpg"];

function nextSlide() {
    slideIndex = (slideIndex + 1) % slides.length;
    document.getElementById("slideImage").src = slides[slideIndex];
}