// Data (array)
const items = [];

// DOM
const input = document.getElementById("itemInput");
const addBtn = document.getElementById("addBtn");
const removeLastBtn = document.getElementById("removeLastBtn");
const listEl = document.getElementById("list");
const countEl = document.getElementById("count");

// Render array 
function render() {
  listEl.innerHTML = "";

  for (let i = 0; i < items.length; i++) {
    const li = document.createElement("li");
    li.textContent = items[i];
    listEl.appendChild(li);
  }

  countEl.textContent = String(items.length);
  removeLastBtn.disabled = items.length === 0;
}

function addItem() {
  const text = input.value.trim();
  if (text === "") return;

  items.push(text);
  input.value = "";
  input.focus();
  render();
}

function removeLastItem() {
  if (items.length === 0) return;
  items.pop();
  render();
}

// Event listeners only + basic DOM
addBtn.addEventListener("click", addItem);

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") addItem();
});

removeLastBtn.addEventListener("click", removeLastItem);

// Initial
render();