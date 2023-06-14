"use strict";

// Slecting DOM elements
const hamberger_bar = document.querySelector(".hamberger .bar");
const nav_link = document.querySelector(".nav_links");
const overlay = document.querySelector(".overlay");

hamberger_bar.addEventListener("click", function () {
  nav_link.classList.toggle("show");
  overlay.classList.toggle("show");
});

overlay.addEventListener("click", () => {
  nav_link.classList.remove("show");
  overlay.classList.toggle("show");
  hamberger_bar.checked = false;
});
