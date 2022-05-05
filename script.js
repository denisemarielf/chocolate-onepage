const form = document.querySelector("form");
const nameInput = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");
const submitButton = document.getElementById("submit-button");
const errorMessage = document.querySelector("small");
const sent = document.querySelector("#contact-us>p");

const inputs = document.querySelectorAll("input,textarea");

const expressions = {
  name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
  email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  phone: /^\d{7,14}$/,
};

function validateForm(e) {
  switch (e.target.name) {
    case "name":
      validateInput(expressions.name, e.target);
      break;
    case "email":
      validateInput(expressions.email, e.target);
      break;
    case "phone":
      validateInput(expressions.phone, e.target);
      break;
    case "message":
      if (e.target.value !== "") {
        correctInput(e.target);
      } else {
        incorrectInput(e.target);
      }
      break;
  }
}

function validateInput(expressions, input) {
  if (expressions.test(input.value)) {
    correctInput(input);
  } else {
    incorrectInput(input);
  }
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (
    errorMessage.style.visibility === "hidden" &&
    nameInput.value !== "" &&
    email.value !== "" &&
    message.value !== "" &&
    phone.value !== ""
  ) {
    sent.style.visibility = "visible";
    inputs.forEach((input) => {
      input.style.borderColor = "black";
    });
    form.reset();
    setTimeout(function () {
      sent.style.visibility = "hidden";
    }, 3000);
  } else {
    errorMessage.style.visibility = "visible";
  }
});

inputs.forEach((input) => {
  input.addEventListener("blur", validateForm);
});

function correctInput(input) {
  errorMessage.style.visibility = "hidden";
  input.style.borderColor = "green";
}

function incorrectInput(input) {
  errorMessage.style.visibility = "visible";
  input.style.borderColor = "red";
}

const hamburguerMenu = document.querySelector("#hamburguer-menu");
const nav = document.querySelector("nav");

hamburguerMenu.addEventListener("click", function () {
  nav.style.display === "none"
    ? (nav.style.display = "block")
    : (nav.style.display = "none");
});

if (window.screen.width > 650) {
  nav.style.display = "flex";
} else {
  nav.style.display = "none";
}


