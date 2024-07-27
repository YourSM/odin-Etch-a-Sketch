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

newGrid.addEventListener("click", () => {
  let columns = document.querySelectorAll(".column")
  input = prompt("Please choose a value of 100 or below to create a grid!")
  if (input === null || input > 100) {
    alert("Invalid Value. Please try again!")
    return
    } else {
     columns.forEach((item) => {
    item.remove();
    })
  }
  createGrid(input)
})

createGrid(16);