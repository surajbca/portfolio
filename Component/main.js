document.getElementById("contact-form");
document.addEventListener("submit", function (event) {
  event.preventDefault();
  // Send form data to server or perform actions here (submit logic placeholder)
  document.getElementById("contact-form").style.display = "none";
  document.getElementById("success-message").style.display = "block";
});

function toggleMenu() {
  var navLinks = document.getElementById("navLinks");
  if (navLinks.style.display === "flex") {
    navLinks.style.display = "none";
  } else {
    navLinks.style.display = "flex";
    /*navLinks.style.width = "202px";
    navLinks.style.marginLeft = "44%";*/
  }
}
