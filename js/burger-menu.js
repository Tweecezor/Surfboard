const burger = document.querySelector(".burger");
const overlay = document.querySelector(".overlay");
const close = document.querySelector(".overlay__close");
const menuItems = document.querySelectorAll(".overlay-menu__link");
const body = document.querySelector("body");

const addOverlay = () => {
  overlay.classList.add("overlay--active");
  body.classList.add("disable-scroll");
};

const removeOverlay = () => {
  overlay.classList.remove("overlay--active");
  body.classList.remove("disable-scroll");
};

burger.addEventListener("click", (e) => {
  e.preventDefault();
  addOverlay();
});

close.addEventListener("click", (e) => {
  e.preventDefault();
  removeOverlay();
});

menuItems.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    removeOverlay();
  });
});
