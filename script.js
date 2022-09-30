const modal = document.getElementById("modal");
const modalCloseBtn = document.getElementById("modal-close-btn");
const consentForm = document.getElementById("consent-form");

setTimeout(function () {
  modal.style.display = "inline";
}, 1500);

modalCloseBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

consentForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("form submitted!");
});
