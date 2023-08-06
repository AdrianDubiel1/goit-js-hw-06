const validationInput = document.querySelector("#validation-input");

function checkValidation() {
  const inputLength = validationInput.length;
  const expectedLength = parseInt(validationInput.dataset.length);

  if (inputLength === expectedLength) {
    validationInput.classList.remove("invalid");
    validationInput.classList.add("valid");
  } else {
    validationInput.classList.remove("valid");
    validationInput.classList.add("invalid");
  }
}
validationInput.addEventListener("blur", checkValidation);
