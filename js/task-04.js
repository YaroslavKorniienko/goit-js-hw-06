let counterValue = 0;
const decrementBtn = document.querySelector("button[data-action='decrement']");
const incrementBtn = document.querySelector("button[data-action='increment']");
const value = document.getElementById("value");

const counterDecrement = () => {
  counterValue -= 1;
  value.textContent = counterValue;
};

const counterIncrement = () => {
  counterValue += 1;
  value.textContent = counterValue;
};

decrementBtn.addEventListener("click", counterDecrement);
incrementBtn.addEventListener("click", counterIncrement);
