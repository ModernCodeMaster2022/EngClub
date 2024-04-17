const images = [
    "pictures/Pic1.jpg",
    "pictures/Pic2.jpg",
    "pictures/Pic24.jpg",
    "pictures/Pic3.jpg",
    "pictures/Pic4.jpg",
    "pictures/Pic5.jpg",
    "pictures/Pic6.jpg",
    "pictures/Pic7.jpg",
    "pictures/Pic8.jpg",
    "pictures/Pic9.jpg",
    "pictures/Pic10.jpg",
    "pictures/Pic11.jpg",
    "pictures/Pic12.jpg",
    "pictures/Pic13.jpg",
    "pictures/Pic14.jpg",
    "pictures/Pic15.jpg",
    "pictures/Pic16.jpg",
    "pictures/Pic17.jpg",
    "pictures/Pic18.jpg",
    "pictures/Pic19.jpg",
    "pictures/Pic20.jpg",
    "pictures/Pic21.jpg",
    "pictures/Pic22.jpg",
    "pictures/Pic23.jpg"
  ];
let currentIndex = 0;
const imageWidget = document.getElementById("image-widget");
const imageElement = document.getElementById("image-widget-img");
let rotationInterval; // Variable to store interval ID

function changeImage() {
    imageElement.src = images[currentIndex];
}

function updImage(){
    currentIndex = (currentIndex + 1) % images.length;
    imageElement.src = images[currentIndex];
}

function startImageRotation() {
    changeImage();
    rotationInterval = setInterval(updImage, 5000); // Rotate image every 5 seconds
}

// Show image widget and start rotation when page loads
window.addEventListener("load", () => {
    imageWidget.style.display = "block";
    startImageRotation();
});

document.addEventListener("DOMContentLoaded", function () {
    const prevButton = document.getElementById("prev-btn");
    const nextButton = document.getElementById("next-btn");

    // Event listener for previous button
    prevButton.addEventListener("click", function () {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        changeImage();
        restartRotationTimer();
    });

    // Event listener for next button
    nextButton.addEventListener("click", function () {
        currentIndex = (currentIndex + 1) % images.length;
        changeImage();
        restartRotationTimer();
    });

    // Function to restart rotation timer
    function restartRotationTimer() {
        clearInterval(rotationInterval); // Clear existing interval
        startImageRotation(); // Restart rotation timer
    }

    // Initial display of first image
    changeImage();
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

document.addEventListener("DOMContentLoaded", () => {
    const toggleNavBtn = document.getElementById("toggleNavBtn");
    const mobileNavbar = document.getElementById("mobileNavbar");

    // Hide the mobile navbar initially
    mobileNavbar.style.display = "none";

    if (toggleNavBtn) {
      toggleNavBtn.addEventListener("click", () => {
        if (mobileNavbar.style.display === "none" || mobileNavbar.style.display === "") {
          mobileNavbar.style.display = "block";
        } else {
          mobileNavbar.style.display = "none";
        }
      });
    }
  });
