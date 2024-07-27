const interface = document.querySelector(".interface");
const gridContainer = document.querySelector(".gridContainer");
const newGrid = document.querySelector("#newGrid")

function createGrid(size) {
for (let i = 0; i < size; i++) {
  const column = document.createElement("div");
  column.classList.add("column");
  gridContainer.appendChild(column);
  column.style.border = "2px solid black";
  column.style.display = "flex";
  column.style.flex = "1"

  for (let i = 0; i < size; i++) {
    let row = document.createElement("div");
    row.classList.add("row");
    row.style.border = "2px solid black";
    row.style.minWidth = "10px";
    row.style.minHeight = "10px";
    row.style.flex = "1"
    column.appendChild(row);
    row.addEventListener("mouseover", () => {
      row.style.backgroundColor = "black"
  })
    }
    interface.appendChild(gridContainer);
  }
}

createGrid(16);

newGrid.addEventListener("click", () => {
  let columns = document.querySelectorAll(".column")
  columns.forEach((item) => {
    item.remove();
  })
  createGrid(prompt())
})


