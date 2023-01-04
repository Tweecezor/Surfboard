//Для формы
const form = document.querySelector(".delivery__form");
const formSection = document.querySelector(".delivery");
const url = "https://webdev-api.loftschool.com/sendmail";

//Для модалки
const modal = document.querySelector(".modal");
const closeModalBtn = document.querySelector(".modal__btn");
const modalContent = document.querySelector(".modal__content");

//общее
const bodyTag = document.querySelector("body");

const closeModal = () => {
  modal.classList.remove("modal--active");
  // modal.style.top = `0px`;
  bodyTag.classList.remove("disable-scroll");
};

const openModal = (modalContentText = "Письмо отправилось") => {
  // const offsetTop = formSection.offsetTop;
  modalContent.innerHTML = modalContentText;
  modal.classList.add("modal--active");
  // modal.style.top = `${offsetTop}px`;
  bodyTag.classList.add("disable-scroll");
};

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const dataToSend = {
    name: form.elements.name.value,
    phone: form.elements.phone.value,
    comment: form.elements.comment.value,
    to: "test@ya.ru",
  };
  let modalText = "";
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(dataToSend),
    });
    const { message } = await response.json();
    modalText = message;
  } catch (error) {
    const errorText = "Ошибка! Письмо не отправилось. Повторите попытку";
    console.log(errorText);
    modalText = errorText;
  } finally {
    openModal(modalText);
  }
});

closeModalBtn.addEventListener("click", (e) => {
  closeModal();
});

modal.addEventListener("click", (e) => {
  const modalWindow = document.querySelector(".modal__window");
  if (!e.composedPath().includes(modalWindow)) {
    closeModal();
    return;
  }
});
