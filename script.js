const themeButton = document.getElementById("theme-button");

themeButton.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
  ;
});
const contactButton = document.getElementById("contact-button");
const formStatus = document.getElementById("form-status");

contactButton.addEventListener("click", function () {
    formStatus.textContent = "This is a practice form. No message was sent.";
});