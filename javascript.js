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
    }
    interface.appendChild(gridContainer);
  }
}

createGrid(16);
// create 16x16 grid of square divs
// for loop going from 16 down/up to 16?
//    createelement "div"?
// divs in container (flexbox vertical)horizontalContainer