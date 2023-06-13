"use strict";
// Slecting DOM elements
const hamberger_bar = document.querySelector(".hamberger .bar");
const nav_link = document.querySelector(".nav_links");

hamberger_bar.addEventListener("click", function () {
  nav_link.classList.toggle("show");
});
