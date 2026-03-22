const hamburger = document.getElementById("hamburger");
const navbar = document.getElementById("navbar");
const links = document.querySelectorAll("#navbar a");

hamburger.addEventListener("click", () => {
  navbar.classList.toggle("open");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    navbar.classList.remove("open");
  });
});
