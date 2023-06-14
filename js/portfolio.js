//? VARIABLE SELECTION

const filter_links = document.querySelector(".filter_links_container");

const itembox = document.querySelectorAll(".itembox");
filter_links.addEventListener("click", (e) => {
  console.log(e);

  /* this code will add the active class to the selected 
  link and remove active class from other links */

  if (e.target.classList.contains("filter_links")) {
    filter_links.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");

    const filterValue = e.target.getAttribute("data-filter");
    console.log(filterValue);

    itembox.forEach((item) => {
      if (item.classList.contains(filterValue) || filterValue === "all") {
        item.classList.remove("hide_item");
        item.classList.add("show_item");
      } else {
        item.classList.remove("show_item");
        item.classList.add("hide_item");
      }
    });
  }
});
