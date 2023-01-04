const slides = document.querySelectorAll(".slide");
const slider = document.querySelector(".slider__list");
const leftBtn = document.querySelector(".slider__arrow--left");
const rightBtn = document.querySelector(".slider__arrow--right");

//границы
const leftBorder = 0;
const slidesWidth = parseInt(getComputedStyle(slides[0]).width);
const rightBorder = slidesWidth * (slides.length - 1);

leftBtn.addEventListener("click", (e) => {
  const currentRight = parseInt(getComputedStyle(slider).right);
  if (currentRight > leftBorder) {
    slider.style.right = `${currentRight - slidesWidth}px`;
  }
});

rightBtn.addEventListener("click", (e) => {
  const currentRight = parseInt(getComputedStyle(slider).right);

  if (currentRight < rightBorder) {
    slider.style.right = `${currentRight + slidesWidth}px`;
  }
});
