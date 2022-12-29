const nextBtn = document.querySelector("#next");
const prevBtn = document.querySelector("#prev");

const sliderItems = document.querySelectorAll(".slider__item");

const slider = document.querySelector(".slider");

// let currentRight = 0;

nextBtn.addEventListener("click", (e) => {
  const max = (sliderItems.length - 3) * 100;
  let currentRight = parseInt(getComputedStyle(slider).right);
  console.log(currentRight);
  if (currentRight === max) return;

  currentRight += 100;
  slider.style.right = `${currentRight}px`;
});

prevBtn.addEventListener("click", (e) => {
  let currentRight = parseInt(getComputedStyle(slider).right);
  if (currentRight === 0) return;

  currentRight = currentRight - 100;
  slider.style.right = `${currentRight}px`;
});
