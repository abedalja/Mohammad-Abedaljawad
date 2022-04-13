"use strict";

const btnShowModal = document.querySelectorAll(".show-modal");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnClose = document.querySelector(".close-modal");

// this function removes the class hidden which in turns show the content of modal

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

// using for loop to go through classses

for (let i = 0; i < btnShowModal.length; i++) {
  btnShowModal[i].addEventListener("click", openModal);
}
// this function adds the class hidden which in turns hide the content of modal

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

// close the model by either pressing the X button or pressing on the overlay

btnClose.addEventListener("click", closeModal);

overlay.addEventListener("click", closeModal);

// closing the modal by pressing the escape on keyboard

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
