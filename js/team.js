const teamTitles = document.querySelectorAll(".member__title");
const members = document.querySelectorAll(".member");
const membersAccordions = document.querySelectorAll(".member__accordion");

const membersLength = members.length;

const closeAccordion = (element) => {
  element.style.height = "0px";
  teamTitles.forEach((item) => {
    item.classList.remove("member__title--active");
  });
  // element.classList.remove("active");
};

const openAccordion = (element) => {
  const height = element.firstElementChild.clientHeight;
  element.style.height = `${height}px`;
  // element.classList.add("active");
};

window.addEventListener("click", (e) => {
  // console.log(e.target);
  closeAllAccordion(e.target);
});

const closeAllAccordion = (target) => {
  if (!target.classList.contains("member__title")) {
    teamTitles.forEach((item) => {
      item.classList.remove("member__title--active");
    });
    membersAccordions.forEach((element) => {
      closeAccordion(element);
    });
  }
};

members.forEach((_, index) => {
  teamTitles[index].addEventListener("click", (e) => {
    const currentTitle = e.target;
    const accordion = membersAccordions[index];

    if (currentTitle.classList.contains("member__title--active")) {
      closeAccordion(accordion);
      return;
    }
    // const currentHeight = getComputedStyle(accordion).height;
    // if (currentHeight !== "0px") {
    //   closeAccordion(accordion);
    //   return;
    // }

    //прежде чем открыть, надо везде закрыть
    membersAccordions.forEach((element) => {
      closeAccordion(element);
    });
    //после того как везде закрыли, то открываем тот, на который был клик
    openAccordion(accordion);
    currentTitle.classList.add("member__title--active");
  });
});
