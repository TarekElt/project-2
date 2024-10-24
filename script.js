let isEnlarged = false; // Track if the image is enlarged

window.addEventListener('scroll', function() {
    const image = document.querySelector('.scroll-image');
    const imageRect = image.getBoundingClientRect();
    const scrollPosition = window.scrollY; // Current scroll position

    // Check if the image is halfway visible in the viewport
    const halfwayVisible = imageRect.top < window.innerHeight / 2 && imageRect.bottom > window.innerHeight / 2;

    // If halfway visible and below the image, enlarge the image
    if (halfwayVisible) {
        image.classList.add('enlarged');
        isEnlarged = true; // Update the state
    } else if (isEnlarged && scrollPosition < imageRect.top + window.scrollY) {
        // If above the image, revert to original size
        image.classList.remove('enlarged');
        isEnlarged = false; // Update the state
    } else if (scrollPosition >= imageRect.bottom + window.scrollY) {
        // If below the image, keep it enlarged
        image.classList.add('enlarged');
        isEnlarged = true; // Update the state
    }
});

// Button click event listeners
document.getElementById('dog-button').addEventListener('click', function() {
    console.log("Dog button clicked"); // Debug log
    const dogImages = document.querySelectorAll('#dog-images img');
    const catImages = document.querySelectorAll('#cat-images img');

    // Hide cat images
    catImages.forEach(img => {
        img.classList.remove('show'); // Remove the show class to hide
        img.style.opacity = '0'; // Set opacity to 0
    });

    // Show dog images with animation
    document.getElementById('dog-images').style.display = 'flex'; // Show dog images container
    dogImages.forEach((img, index) => {
        setTimeout(() => {
            img.classList.add('show'); // Add the show class to animate
            img.style.opacity = '1'; // Fade in
        }, index * 100); // Stagger the animation
    });

    // Hide the cat images if already displayed
    if (document.getElementById('cat-images').style.display === 'flex') {
        document.getElementById('cat-images').style.display = 'none'; // Hide cat images container
    }
});

document.getElementById('cat-button').addEventListener('click', function() {
    console.log("Cat button clicked"); // Debug log
    const catImages = document.querySelectorAll('#cat-images img');
    const dogImages = document.querySelectorAll('#dog-images img');

    // Hide dog images
    dogImages.forEach(img => {
        img.classList.remove('show'); // Remove the show class to hide
        img.style.opacity = '0'; // Set opacity to 0
    });

    // Show cat images with animation
    document.getElementById('cat-images').style.display = 'flex'; // Show cat images container
    catImages.forEach((img, index) => {
        setTimeout(() => {
            img.classList.add('show'); // Add the show class to animate
            img.style.opacity = '1'; // Fade in
        }, index * 100); // Stagger the animation
    });

    // Hide the dog images if already displayed
    if (document.getElementById('dog-images').style.display === 'flex') {
        document.getElementById('dog-images').style.display = 'none'; // Hide dog images container
    }
});
