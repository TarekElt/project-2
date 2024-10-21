window.addEventListener('scroll', function() {
    const image = document.querySelector('.scroll-image');
    const imageRect = image.getBoundingClientRect();
    
    // Check if the image is halfway visible
    const halfwayVisible = imageRect.top < window.innerHeight / 2 && imageRect.bottom > window.innerHeight / 2;

    // Enlarge the image when halfway visible
    if (halfwayVisible) {
        image.classList.add('enlarged');
    } else {
        image.classList.remove('enlarged');
    }
});
