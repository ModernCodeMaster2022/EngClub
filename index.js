const images = [
    "Pic1.jpg",
    "Pic2.jpg",
  ];
let currentIndex = 0;
const imageWidget = document.getElementById("image-widget");
const imageElement = document.getElementById("image-widget-img");
let rotationInterval; // Variable to store interval ID

function changeImage() {
    imageElement.src = images[currentIndex];
    currentIndex = (currentIndex + 1) % images.length;
}

function startImageRotation() {
    changeImage();
    rotationInterval = setInterval(changeImage, 5000); // Rotate image every 5 seconds
}

// Show image widget and start rotation when page loads
window.addEventListener("load", () => {
    imageWidget.style.display = "block";
    startImageRotation();
});

document.addEventListener("DOMContentLoaded", function () {
    const thumbnails = ["image1.jpg", "image2.jpg", "image3.jpg"]; // Array of image thumbnails
    const prevButton = document.getElementById("prev-btn");
    const nextButton = document.getElementById("next-btn");

    // Update displayed image
    function updateImage() {
        imageElement.src = images[currentIndex];
    }

    // Event listener for previous button
    prevButton.addEventListener("click", function () {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateImage();
        changeImage();
        restartRotationTimer();
    });

    // Event listener for next button
    nextButton.addEventListener("click", function () {
        currentIndex = (currentIndex + 1) % images.length;
        updateImage();
        changeImage();
        restartRotationTimer();
    });

    // Function to restart rotation timer
    function restartRotationTimer() {
        clearInterval(rotationInterval); // Clear existing interval
        startImageRotation(); // Restart rotation timer
    }

    // Initial display of first image
    updateImage();
});

//Mobile-friendly specifications
window.addEventListener('load', function() {
    var screenWidth = window.innerWidth;
    var contentWrapper = document.getElementById('content-wrapper');
    
    if (screenWidth < 1025) {
        contentWrapper.classList.remove('grid');
        contentWrapper.classList.remove('grid-cols-2');
    }
});

window.addEventListener('resize', function() {
    var screenWidth = window.innerWidth;
    var contentWrapper = document.getElementById('content-wrapper');
    
    if (screenWidth < 1025) {
        contentWrapper.classList.remove('grid');
        contentWrapper.classList.remove('grid-cols-2');
    } else {
        contentWrapper.classList.add('grid');
        contentWrapper.classList.add('grid-cols-2');
    }
});
