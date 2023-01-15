function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");
const inputRef = document.querySelector("input");
const boxesRef = document.querySelector("#boxes");

const createBoxes = (amount) => {
  const boxes = [];

  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement("div");
    box.style.backgroundColor = getRandomHexColor();
    box.style.width = `${30 + i * 10}px`;
    box.style.height = `${30 + i * 10}px`;
    boxes.push(box);
  }

  boxesRef.append(...boxes);
};

const onCreate = () => {
  createBoxes(inputRef.value);
};

const destroyBoxes = () => {
  boxesRef.innerHTML = "";
};

createButton.addEventListener("click", onCreate);
destroyButton.addEventListener("click", destroyBoxes);
