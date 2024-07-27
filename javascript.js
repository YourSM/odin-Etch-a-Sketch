const rowContainer = document.querySelector(".horizontalContainer");
const interface = document.querySelector(".interface");
const gridContainer = document.querySelector(".gridContainer");

function createGrid(size) {
for (let i = 0; i < size; i++) {
  const column = document.createElement("div");
  gridContainer.appendChild(column);
  column.style.border = "5px solid black";
  for (let i = 0; i < size; i++) {
    let row = document.createElement("div");
    row.classList.add("row");
    row.style.border = "2px solid black";
    row.style.width = "20px";
    row.style.height = "20px";
    column.appendChild(row);
    row.addEventListener("mouseover", () => {
      row.style.backgroundColor = "black"
  })
    }
    interface.appendChild(gridContainer);
  }
}

createGrid(16);




