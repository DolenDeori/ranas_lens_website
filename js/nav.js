"use strict";

// Slecting DOM elements
const hamberger_bar = document.querySelector(".hamberger .bar");
const nav_links = document.querySelector(".nav_links");
const overlay = document.querySelector(".overlay");
const links = document.querySelectorAll(".links");
const social_icons = document.querySelectorAll(".social_icons_2");

hamberger_bar.addEventListener("click", function () {
  nav_links.classList.toggle("show");
  links.forEach((link) => {
    link.classList.toggle("fade");
  });
  social_icons.forEach((icons) => {
    icons.classList.toggle("fade_icons");
  });
});
