const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientElem = document.getElementById("ingredients");

const listRefs = ingredients.map((ingredient) => {
  const listRef = document.createElement("li");
  listRef.textContent = ingredient;
  listRef.classList.add("item");
  return listRef;
});

ingredientElem.append(...listRefs);
