const range = document.getElementById("font-size-control");
const text = document.getElementById("text");

text.style.fontSize = `${range.value}px`;

const inputChange = (event) => {
  text.style.fontSize = `${event.currentTarget.value}px`;
};
range.addEventListener("input", inputChange);
