"use strict";

const form = document.querySelector("form");
const fname = document.getElementById("full_name");
const phone = document.getElementById("phone_number");
const email = document.getElementById("email");
const service = document.getElementById("service_selection");
const date = document.getElementById("event_date");
const state = document.getElementById("state");
const city = document.getElementById("city");
const zipcode = document.getElementById("zipcode");
const vanue = document.getElementById("vanue_name");

const userDate = new Date(date.value);
const today = new Date();

const setError = function (id, message) {
  const error = document.getElementById(id);
  error.innerText = message;
};

const removeError = function (id) {
  const error = document.getElementById(id);
  error.innerText = "";
};

const form_validation = function () {
  let valid = true;
  if (fname.length < 4) {
    setError("nerror", "Name length too short");
    valid = false;
  } else {
    removeError("nerror");
    valid = true;
  }
  return valid;
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(form_validation());
});
