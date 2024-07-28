const interface = document.querySelector(".interface");
const gridContainer = document.querySelector(".gridContainer");
const newGrid = document.querySelector("#newGrid");
const RGBMode = document.querySelector("#RGBMode");


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
    
    // Add function to make random colors. Then attach function here.
    // It should add with same thing (the backgroundcolor thing) but with
    // the rgb values replacing it. Make sure to do the placeholder
    // and fill it with (row) so it isn't yelling about how it doesn't
    // exist. Can be something like (tile) or something as a placeholder.
    // Here as well will be the similar opacity one. I suppose it will
    // Be basically everytime it hovers over it the function will
    // play and reduce by 10 (maybe add a value and subtract from that
    // value in the function and then plug that value as the value of
    // the opacity. Like opacity = value - 1 or something). Thus that value
    // may need to be in the global scope or something. Figure it out.
    // RGB function should use a math.floor and *100 (and maybe rounding)
    // thing to make the value random. Then you can do this for three values,
    // R, G, and B, and plug those values into the backgroundColor like (R,G,B).
  })
    }
    interface.appendChild(gridContainer);
  }
  addRGB()
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


function getRGBValues () {
  const getRandomBetween =
   (min, max) => min + Math.floor(Math.random() * (max - min + 1));
  const r = getRandomBetween(0, 255);
  const g = getRandomBetween(0, 255)
  const b = getRandomBetween(0, 255);
  return rgb = "rgb(" + r + "," + g + "," + b + ")"
}

function addRGB () {
  const rows = document.querySelectorAll(".row")
  RGBMode.addEventListener("click", () => {  
    rows.forEach((row) => {
    row.addEventListener("mouseover", () => {
      row.style.backgroundColor = getRGBValues()
      })
    }) 
  })
}