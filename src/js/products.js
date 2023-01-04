const products = document.querySelectorAll(".product");
const productsContent = document.querySelectorAll(".product__content");

const closeAll = () => {
  productsContent.forEach((elem) => {
    elem.classList.remove("product__content--active");
    elem.style.width = 0;
  });
};

const calcWidth = () => {
  let itemWidth = 0;
  const windowWidth = document.documentElement.clientWidth;
  const elements = document.querySelectorAll(".product__link");
  const elementWidth = parseInt(getComputedStyle(elements[0]).width);
  const titleWidth = elements.length * elementWidth;
  const elementContent = document.querySelectorAll(".product__text");
  const elementContentStyles = getComputedStyle(elementContent[0]);

  const paddingLeft = parseInt(elementContentStyles["padding-left"]);
  const paddingRight = parseInt(elementContentStyles["padding-left"]);
  const isMobile = window.matchMedia("(max-width: 768px)").matches;
  if (isMobile) {
    itemWidth = windowWidth - titleWidth;
  } else {
    itemWidth = 500;
  }

  return {
    itemWidth,
    contentWidth: itemWidth - paddingLeft,
  };
};

const open = (elem) => {
  elem.classList.add("product__content--active");
  const { itemWidth, contentWidth } = calcWidth();
  const elementTextContent = elem.firstElementChild;

  elementTextContent.style.width = `${contentWidth}px`;
  elem.style.width = `${itemWidth}px`;
};

const closeSlide = (elem) => {
  elem.classList.remove("product__content--active");
  elem.style.width = 0;
};

products.forEach((product, ndx) => {
  product.addEventListener("click", () => {
    if (productsContent[ndx].classList.contains("product__content--active")) {
      closeSlide(productsContent[ndx]);
      return;
    }

    closeAll();
    open(productsContent[ndx]);
  });
});
