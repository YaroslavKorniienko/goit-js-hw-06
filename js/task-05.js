const input = document.getElementById("name-input");
const span = document.getElementById("name-output");

input.addEventListener("input", inputChendge);

function inputChendge(event) {
  console.log(event.currentTarget.value);
  span.textContent = event.currentTarget.value;
  if (event.currentTarget.value === "") {
    span.textContent = "Anonymous";
  }
}
