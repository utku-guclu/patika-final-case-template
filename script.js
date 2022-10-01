const modal = document.getElementById("modal");
const modals = document.getElementById("modals-container");

const modalHTML = `
<div class="close-modal-btn-container">
<button class="modal-close-btn" id="modal-close-btn">X</button>
</div>
<div class="modal-inner" id="modal-inner">
<img src="./img/Vector.png" alt="camper">
<h2>Join the club</h2>
<p class="modal-text" id="modal-text">Subscribe and Get an Extra
    25% Off on your first purchase.</p>
<form target="_blank" action="https://formsubmit.co/stanger307@live.com" method="POST"
    id="consent-form">
    <label for="email"></label>
    <input id="email" name="email" type="email" placeholder="Email address" required>
    <button class="modal-btn" type="submit">Subscribe</button>
    <div class="signup">
        <label for="modal-checkbox">By signing up, you agree to Privacy Policy
            and Terms of Use.
        </label>
        <input id="modal-checkbox" type="checkbox" name="checkbox" unchecked>
    </div>
</form>
</div>
`;

modal.innerHTML = modalHTML;

const modalCloseBtn = document.getElementById("modal-close-btn");
const consentForm = document.getElementById("consent-form");
setTimeout(function () {
  modal.style.display = "inline";
}, 1500);

modalCloseBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

consentForm.addEventListener("submit", (e) => {
  // e.preventDefault();
  console.log("form submitted!");
});

console.log(modals.children);

Array.from(modals.children).map((modal) => {
  modal.innerHTML = modalHTML;
});
