const input = document.getElementById("validation-input");

const onBlur = (event) => {
  if (event.currentTarget.value.length >= input.dataset.length) {
    input.classList.add("valid");

    if (input.classList.contains("invalid")) {
      input.classList.remove("invalid");
    }
  } else {
    input.classList.add("invalid");
  }
};
input.addEventListener("blur", onBlur);
