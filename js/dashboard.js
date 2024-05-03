"use strict";

window.addEventListener("load", function () {
  const section3 = document.querySelector(".image_upload_section");
  const upload_btn = document.querySelector(".image_upload_btn");
  const close_btn = document.querySelector(".close_upload_box");

  upload_btn.addEventListener("click", () => {
    section3.classList.toggle("show_upload_box");
  });

  close_btn.addEventListener("click", () => {
    if (section3.classList.contains("show_upload_box")) {
      section3.classList.remove("show_upload_box");
    } else {
      return;
    }
  });

  //JS for tool tips BOOTSTRAP
  const tooltipTriggerList = document.querySelectorAll(
    '[data-bs-toggle="tooltip"]'
  );
  const tooltipList = [...tooltipTriggerList].map(
    (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
  );
});
