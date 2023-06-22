"use strict";
// Creating elemnts
const lightbox = document.createElement("div");
const img = document.createElement("img");
const imagebox = document.querySelectorAll(".gallery_image");
const controls = document.querySelector(".lightbox_control");
const next_btn = document.querySelector(".next_btn");
const prev_btn = document.querySelector(".prev_btn");
const total_image = imagebox.length;
let image_count = 0;

// Adding ID
lightbox.id = "lightBox";
document.body.appendChild(lightbox);

const add_image = function (src) {
  img.src = src;
  img.classList.add("ld_img");
  while (lightbox.firstChild) {
    lightbox.removeChild(lightbox.firstChild);
  }
  lightbox.appendChild(img);
};


imagebox.forEach((image, index) => {
  image.addEventListener("click", (e) => {
    lightbox.classList.toggle("active");
    controls.classList.toggle("active_control");
    add_image(image.src);
    image_count = index;
  });
});

next_btn.addEventListener("click", () => {
  if (image_count < total_image - 1) image_count += 1;
  else image_count = 0;
  add_image(imagebox[image_count].src);
});

prev_btn.addEventListener("click", () => {
  if (image_count > 0) image_count -= 1;
  else image_count = total_image - 1;
  add_image(imagebox[image_count].src);
});

lightbox.addEventListener("click", (e) => {
  if (e.target !== e.currentTarget) return;
  lightbox.classList.remove("active");
  controls.classList.remove("active_control");
});
