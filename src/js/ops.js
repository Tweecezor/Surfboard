const sections = document.querySelectorAll("section");
const display = document.querySelector(".mainContent");
const fixedMenu = document.querySelector(".fixed-menu");
const fixedMenuItems = document.querySelectorAll(".fixed-menu__item");

//set Default active section
sections[0].classList.add("section--active");

let canScroll = true;
// console.log(sections);

function changeSideMenuTheme(sectionNumber) {
  const sidemenuTheme = sections[sectionNumber].getAttribute(
    "data-sidemenu-theme"
  );

  if (sidemenuTheme === "black") {
    fixedMenu.classList.add("fixed-menu--shadow");
  } else {
    fixedMenu.classList.remove("fixed-menu--shadow");
  }
  //убираем все активные жлементы
  fixedMenuItems.forEach((item) =>
    item.classList.remove("fixed-menu__item--active")
  );
  //ставим активный элемент по номеру секции
  fixedMenuItems[sectionNumber].classList.add("fixed-menu__item--active");
}

const changeSection = (sectionNumber) => {
  const position = sectionNumber * -100;

  //убираем везде активные классы
  sections.forEach((item) => {
    item.classList.remove("section--active");
  });

  //добавляем активный класс на секцию
  sections[sectionNumber].classList.add("section--active");

  //выбираем тему для бокового меню
  changeSideMenuTheme(sectionNumber);

  display.style.transform = `translateY(${position}%)`;
};

const scroller = () => {
  let activeSectionPos = 0;

  for (let index = 0; index < sections.length; index++) {
    const element = sections[index];
    if (element.classList.contains("section--active")) {
      activeSectionPos = index;
      break;
    }
  }

  const nextSectionPos = activeSectionPos + 1;
  const prevSectionPos = activeSectionPos - 1;

  return {
    next() {
      if (nextSectionPos < sections.length) {
        changeSection(nextSectionPos);
      }
    },
    prev() {
      if (prevSectionPos >= 0) {
        changeSection(prevSectionPos);
      }
    },
  };
};

window.addEventListener("wheel", (e) => {
  if (canScroll) {
    canScroll = false;
    const deltaY = e.deltaY;

    const { next, prev } = scroller();

    if (deltaY > 0) {
      next();
    }

    if (deltaY < 0) {
      prev();
    }

    setTimeout(() => {
      canScroll = true;
    }, 1300);
  }
});

window.addEventListener("keydown", (e) => {
  const tagName = e.target.tagName.toLowerCase();

  if (tagName === "input" || tagName === "textarea") return;

  const { next, prev } = scroller();

  switch (e.keyCode) {
    case 38:
      prev();
      break;

    case 40:
      next();
      break;
  }
});

//для мобилок
const detect = new MobileDetect(window.navigator.userAgent);
const isMobileVersion = detect.mobile();

console.log(isMobileVersion);

window.addEventListener("touchmove", (e) => {
  e.preventDefault();
});

if (isMobileVersion) {
  $("body").swipe({
    //Generic swipe handler for all directions
    swipe: function (e, direction) {
      const { prev, next } = scroller();

      if (direction === "up") {
        next();
      }

      if (direction === "down") {
        prev();
      }
    },
  });
}

//Боковое вертикальное меню
const menuList = document.querySelectorAll("[data-scroll-to]");
menuList.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    const target = e.target;
    const attr = target.getAttribute("data-scroll-to");
    let sectionPos = 99;
    sections.forEach((section, ndx) => {
      const sectionId = section.getAttribute("data-section-id");
      if (sectionId === attr) {
        sectionPos = ndx;
        return;
      }
    });

    if (sectionPos !== 99) {
      changeSection(sectionPos);
    }
  });
});
