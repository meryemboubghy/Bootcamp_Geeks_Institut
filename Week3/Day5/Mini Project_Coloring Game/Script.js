const grid = document.getElementById("grid");
let selecedColor = "white ";

for (let i = 0; i < 60 * 40; i++) {
  const cell = document.createElement("div");
  cell.classList.add("cell");
  cell.addEventListener("click", () => {
    cell.style.backgroundColor = selecedColor;
  });
  cell.addEventListener("mouseover", () => {
    if (isMouseDown) {
      cell.style.backgroundColor = selecedColor;
    }
  });
  grid.appendChild(cell);
}
document.querySelectorAll(".color").forEach((color) => {
  color.addEventListener("click", () => {
    selecedColor = color.style.backgroundColor;
  });
});
let isMouseDown = false;
document.addEventListener("mousedown", () => {
  isMouseDown = true;
});

document.addEventListener("mouseup", () => {
  isMouseDown = false;
});
function clearGrid() {
  document.querySelectorAll(".cell").forEach((cell) => {
    cell.style.backgroundColor = "white";
  });
}
window.clearGrid = clearGrid;
