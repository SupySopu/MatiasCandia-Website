document.addEventListener('DOMContentLoaded', function () {
    const prevButton = document.getElementById("prev");
    const nextButton = document.getElementById("next");
    const cards = document.querySelector(".cards");
    const images = document.querySelectorAll(".cards a");
    const totalImages = images.length;
    let index = 0;

    if (prevButton && nextButton) {
        nextButton.addEventListener("click", () => changeSlide(1));
        prevButton.addEventListener("click", () => changeSlide(-1));
    }

    function changeSlide(direction) {
        index += direction;

        if (index < 0) {
            index = totalImages - 1;
        } else if (index >= totalImages) {
            index = 0;
        }

        const moveAmount = -index * 360;
        cards.style.transform = `translateX(${moveAmount}px)`;
    }

    setInterval(() => changeSlide(1), 4500);
});
