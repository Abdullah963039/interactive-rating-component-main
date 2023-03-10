// Variables
const submitButton = document.querySelector("[type= 'submit']");
const thanksContainer = document.querySelector(".thanks");
const formBox = document.forms[0];
const userRate = document.getElementById("user-rate");
const ratingValuesContainer = document.querySelector(".rating");
const ratingValues = document.querySelectorAll(".rating li");

// Prevent Send Data With Form
formBox.addEventListener("submit", (e) => {
  e.preventDefault();
});

// Handle Active Class In Rating Buttons
ratingValuesContainer.addEventListener("click", (e) => {
  ratingValues.forEach((li) => li.classList.remove("active"));
  if (e.target.hasAttribute("data-value")) {
    e.target.classList.add("active");
  }
});

// When User Click Submit Button
submitButton.onclick = function () {
  let selectedRate = document.querySelector(".rating li.active");
  if (selectedRate !== null) {
    userRate.innerText = "" + selectedRate.getAttribute("data-value");
    formBox.style.display = "none";
    thanksContainer.classList.add("active");
  }
};
