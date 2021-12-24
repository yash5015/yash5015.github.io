AOS.init();

AOS.init({
  disable: false,
  startEvent: "DOMContentLoaded",
  initClassName: "aos-init",
  animatedClassName: "aos-animate",
  useClassNames: false,
  disableMutationObserver: false,
  debounceDelay: 50,
  throttleDelay: 99,

  offset: 120,
  delay: 0,
  duration: 3000,
  easing: "ease",
  once: false,
  mirror: false,
  anchorPlacement: "top-bottom",
});

var preloader = document.getElementById("loading");

function myFunction() {
  preloader.style.display = "none";
}

window.addEventListener("scroll", function () {
  const nav = document.querySelector("nav");
  nav.classList.toggle("sticky", window.scrollY > 0);
});

function toggleMenu() {
  const menuToggle = document.querySelector(".menuToggle");
  const navigation = document.querySelector(".navigation");

  menuToggle.classList.toggle("active");
  navigation.classList.toggle("active");
}
