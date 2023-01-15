function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const button = document.querySelector(".change-color");
const textRef = document.querySelector(".color");

const onButtonClick = () => {
  const color = getRandomHexColor();
  document.body.style.backgroundColor = color;
  textRef.textContent = color;
};

button.addEventListener("click", onButtonClick);
