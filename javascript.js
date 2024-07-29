const interface = document.querySelector(".interface");
const gridContainer = document.querySelector(".gridContainer");
const newGrid = document.querySelector("#newGrid");
const RGBMode = document.querySelector("#RGBMode");
const blackoutMode = document.querySelector("#blackoutMode");

  function createGrid(size) {
    for (let i = 0; i < size; i++) {
      const row = document.createElement("div");
      row.classList.add("row");
      gridContainer.appendChild(row);
      row.style.border = "2px solid black";
      row.style.display = "flex";
      row.style.flex = "1";
      for (let i = 0; i < size; i++) {
        let cell = document.createElement("div");
        cell.classList.add("cell");
        cell.style.border = "2px solid black";
        cell.style.minWidth = "10px";
        cell.style.minHeight = "10px";
        cell.style.flex = "1";
        row.appendChild(cell);
        cell.addEventListener("mouseover", () => {
        cell.style.backgroundColor = "black";
      })
        }
        interface.appendChild(gridContainer);
      }
      addRGB();
      addBlackout();
    }

newGrid.addEventListener("click", () => {
  let rows = document.querySelectorAll(".row");
  input = prompt("Please choose a value of 100 or below to create a grid!");
  if (input === null || input > 100) {
    alert("Invalid Value. Please try again!");
    return
    } else {
     rows.forEach((item) => {
    item.remove();
    })
  }
  createGrid(input);
})

createGrid(16);

function getRGBValues () {
  const getRandomBetween =
   (min, max) => min + Math.floor(Math.random() * (max - min + 1));
  const r = getRandomBetween(0, 255);
  const g = getRandomBetween(0, 255)
  const b = getRandomBetween(0, 255);
  return rgb = "rgb(" + r + "," + g + "," + b + ")"
}

function addRGB () {
  const cells = document.querySelectorAll(".cell")
  RGBMode.addEventListener("click", () => {  
    cells.forEach((cell) => {
    cell.addEventListener("mouseover", () => {
      cell.style.backgroundColor = getRGBValues()
      })
    }) 
  })
}

function lowerOpacity(target) {
  let currentOpacity = target.style.opacity;
  if (+currentOpacity === 1) {
    return target.style.opacity = 1;
  } else {
  return target.style.opacity = (currentOpacity - -0.1);
  }
}

function addBlackout () {
  const cells = document.querySelectorAll(".cell");
  blackoutMode.addEventListener("click", () => {
    cells.forEach((cell) => {
      cell.addEventListener("mouseenter", (event) => {
      let target = event.target;
          let = target.style.opacity = lowerOpacity(target);
      })
    })
  })
}