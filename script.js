let isEnlarged = false; 
const images = [
    "images/rainbow.jpg",
    "images/sunset.jpg",
    "images/moon_car.jpg",
    "images/moon_city.jpg"
];
let currentIndex = 0;
const mainImage = document.getElementById("main-image");

function showImage(index) {
    mainImage.style.opacity = 0; 
    setTimeout(() => {
        mainImage.src = images[index]; 
        mainImage.style.opacity = 1; 
    }, 500); 
}


window.addEventListener('scroll', function() {
    const imageRect = mainImage.getBoundingClientRect();
    const scrollPosition = window.scrollY;

    const halfwayVisible = imageRect.top < window.innerHeight / 2 && imageRect.bottom > window.innerHeight / 2;

    if (halfwayVisible) {
        mainImage.classList.add('enlarged');
        isEnlarged = true;
    } else if (isEnlarged && scrollPosition < imageRect.top + window.scrollY) {
        mainImage.classList.remove('enlarged');
        isEnlarged = false;
    } else if (scrollPosition >= imageRect.bottom + window.scrollY) {
        mainImage.classList.add('enlarged');
        isEnlarged = true;
    }
});

document.getElementById('dog-button').addEventListener('click', function() {
    toggleGalleryVisibility('dog');
});

document.getElementById('cat-button').addEventListener('click', function() {
    toggleGalleryVisibility('cat');
});

function toggleGalleryVisibility(type) {
    const targetImages = document.querySelectorAll(`#${type}-images img`);
    const otherImages = document.querySelectorAll(`#${type === 'dog' ? 'cat' : 'dog'}-images img`);

    otherImages.forEach(img => {
        img.classList.remove('show');
        img.style.opacity = '0';
    });
    document.getElementById(`${type}-images`).style.display = 'flex';
    targetImages.forEach((img, index) => {
        setTimeout(() => {
            img.classList.add('show');
            img.style.opacity = '1';
        }, index * 100);
    });

    document.getElementById(`${type === 'dog' ? 'cat' : 'dog'}-images`).style.display = 'none';
}

document.getElementById("prev-image").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
});

document.getElementById("next-image").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
});
