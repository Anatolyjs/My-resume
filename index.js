
const slider = () => {
    const arrowLeft = document.querySelector('.photo__arrow-left'),
        arrowRight = document.querySelector('.photo__arrow-right'),
        photoContainer = document.querySelector('.photo__body');

    let currentPosition = 0;


    const scrollRight = () => {
        const scrollSize = document.querySelector('.photo__img').offsetWidth;
        arrowLeft.style.display = 'block';
        if (currentPosition === -(scrollSize * 2)) {
            arrowRight.style.display = 'none';
            return;
        }
        currentPosition -= scrollSize;
        if (currentPosition === -(scrollSize * 2)) {
            arrowRight.style.display = 'none';
        }
        photoContainer.style.cssText = `transform: translateX(${currentPosition}px)`;
    };

    const scrollLeft = () => {
        const scrollSize = document.querySelector('.photo__img').offsetWidth;
        arrowRight.style.display = 'block';
        if (currentPosition === 0) {
            arrowLeft.style.display = 'none';
            return;
        }
        currentPosition += scrollSize;
        if (currentPosition >= 0) {
            arrowLeft.style.display = 'none';
        }
        photoContainer.style.cssText = `transform: translateX(${currentPosition}px)`;
    };
    
    arrowRight.addEventListener('click', scrollRight);
    arrowLeft.addEventListener('click', scrollLeft);
}

slider();