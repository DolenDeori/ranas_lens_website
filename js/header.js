const image = document.querySelector(".hero_image");
const header = document.querySelector(".hero_container");

console.log(image.getAttribute("src"));

header.addEventListener("click", () => {
  image.setAttribute("src", `./assests/images/concert_1.webp`);
});
