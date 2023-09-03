

let activeTool = null;

// Add event listener to the grid container

// for dirt-tiles
export const inventory1 = [];
// for dirt-grass
export const inventory2 = [];

// shovel --------------------------------------------------------------------------------------

gridContainer.addEventListener("click", (event) => {
  const clickedTile = event.target;

  // Check if the active tool is the shovel and the clicked tile is a stone
  if (
    activeTool === "shovel" &&
    (clickedTile.classList.contains("dirt-tiles") ||
      clickedTile.classList.contains("dirt-grass"))
  ) {
    const newTile = document.createElement("div");
    newTile.className = "cell"; // Set the appropriate class for the new tile
    // // Customize the new tile as needed (e.g., set its class, style, etc.)

    // // Replace the clicked tile with the new tile
    clickedTile.parentNode.replaceChild(newTile, clickedTile);

    if (clickedTile.classList.contains("dirt-tiles")) {
      inventory1.push(clickedTile);
      let number = document.getElementById("1");
      number.textContent = inventory1.length;
      clickedTile.remove();
      console.log(1);
    } else {
      let number = document.getElementById("2");
      number.textContent = inventory2.length + 1;
      inventory2.push(clickedTile);
      clickedTile.remove();
      console.log(2);
    }
  }
});

// pickaxe------------------------------------------------------------------------------------------

// for leaves-1
export const inventory3 = [];
// for leaves-2
export const inventory4 = [];
// for diamond
export const inventory5 = [];
// for stone
export const inventory6 = [];

// Add event listener to the grid container
gridContainer.addEventListener("click", (event) => {
  const clickedTile = event.target;

  // Check if the active tool is the shovel and the clicked tile is a stone
  if (
    activeTool === "pickaxe" &&
    (clickedTile.classList.contains("leaves-1") ||
      clickedTile.classList.contains("leaves-2") ||
      clickedTile.classList.contains("trunk-mid") ||
      clickedTile.classList.contains("stone"))
  ) {
    const newTile = document.createElement("div");
    newTile.className = "cell"; // Set the appropriate class for the new tile
    // // Customize the new tile as needed (e.g., set its class, style, etc.)

    // // Replace the clicked tile with the new tile
    clickedTile.parentNode.replaceChild(newTile, clickedTile);

    if (clickedTile.classList.contains("leaves-1")) {
      inventory3.push(clickedTile);
      clickedTile.remove();
      console.log(3);
      let number = document.getElementById("3");
      number.textContent = inventory3.length;
    } else if (clickedTile.classList.contains("leaves-2")) {
      inventory4.push(clickedTile);
      clickedTile.remove();
      console.log(4);
      let number = document.getElementById("4");
      number.textContent = inventory4.length;
    } else if (clickedTile.classList.contains("trunk-mid")) {
      inventory9.push(clickedTile);
      clickedTile.remove();
      console.log(9);
      let number = document.getElementById("9");
      number.textContent = inventory9.length;
    } else if (clickedTile.classList.contains("stone")) {
      inventory6.push(clickedTile);
      clickedTile.remove();
      console.log(6);
      let number = document.getElementById("6");
      number.textContent = inventory6.length;
    }
  }
});

// ax --------------------------------------------------------------------------

// for trunk
export const inventory7 = [];
// for stone-gold
export const inventory8 = [];
// for stone-diamond
export const inventory9 = [];

// Add event listener to the grid container
gridContainer.addEventListener("click", (event) => {
  const clickedTile = event.target;

  // Check if the active tool is the shovel and the clicked tile is a stone
  if (
    activeTool === "ax" &&
    (clickedTile.classList.contains("ore-diamond") ||
      clickedTile.classList.contains("stone-diamond") ||
      clickedTile.classList.contains("stone-gold"))
  ) {
    const newTile = document.createElement("div");
    newTile.className = "cell"; // Set the appropriate class for the new tile
    // // Customize the new tile as needed (e.g., set its class, style, etc.)

    // // Replace the clicked tile with the new tile
    clickedTile.parentNode.replaceChild(newTile, clickedTile);

    if (clickedTile.classList.contains("ore-diamond")) {
      inventory5.push(clickedTile);
      clickedTile.remove();
      console.log(5);
      let number = document.getElementById("5");
      number.textContent = inventory5.length;
    } else if (clickedTile.classList.contains("stone-diamond")) {
      inventory7.push(clickedTile);
      clickedTile.remove();
      console.log(7);
      let number = document.getElementById("7");
      number.textContent = inventory7.length;
    } else if (clickedTile.classList.contains("stone-gold")) {
      inventory8.push(clickedTile);
      clickedTile.remove();
      console.log(8);
      let number = document.getElementById("8");
      number.textContent = inventory8.length;
    }
  }
});




// shovel hover-----------------------------------------------------------

// Add event listeners to the tool buttons
const shovelButton = document.getElementById("shovel");
shovelButton.addEventListener("click", () => {
  addTiles.style.backgroundColor = "";
  pickaxe.style.backgroundColor = "";
  shovel.style.backgroundColor = "#cfcfe4";
  inventory.style.backgroundColor = "";
  ax.style.backgroundColor = "";
  reset.style.backgroundColor = "";
  activeTool = "shovel";
});

// pickaxe hover-----------------------------------------------------

const pickaxe = document.getElementById("pickaxe");
pickaxe.addEventListener("click", () => {
  addTiles.style.backgroundColor = "";
  pickaxe.style.backgroundColor = "#cfcfe4";
  shovel.style.backgroundColor = "";
  inventory.style.backgroundColor = "";
  ax.style.backgroundColor = "";
  reset.style.backgroundColor = "";
  activeTool = "pickaxe";
});


// ax hover-----------------------------------------------------------
const ax = document.getElementById("ax");
ax.addEventListener("click", () => {
  addTiles.style.backgroundColor = "";
  pickaxe.style.backgroundColor = "";
  shovel.style.backgroundColor = "";
  inventory.style.backgroundColor = "";
  ax.style.backgroundColor = "#cfcfe4";
  reset.style.backgroundColor = "";
  activeTool = "ax";
});


// add-tiles-button hover-------------------------------------------
const addTiles = document.getElementById("add-tiles");
addTiles.addEventListener("click", () => {
  addTiles.style.backgroundColor = "#cfcfe4";
  ax.style.backgroundColor = "";
  pickaxe.style.backgroundColor = "";
  shovel.style.backgroundColor = "";
  inventory.style.backgroundColor = "";
  reset.style.backgroundColor = "";
  addTilesToGame();
});
// inventory - button hover----------------------------------------
const inventory = document.getElementById("inventory");
inventory.addEventListener("click", () => {
  addTiles.style.backgroundColor = "";
  ax.style.backgroundColor = "";
  pickaxe.style.backgroundColor = "";
  shovel.style.backgroundColor = "";
  inventory.style.backgroundColor = "#cfcfe4";
  reset.style.backgroundColor = "";
});
// reset-button hover--------------------------------------------
const reset = document.getElementById("reset");
reset.addEventListener("click", () => {
  addTiles.style.backgroundColor = "";
  ax.style.backgroundColor = "";
  pickaxe.style.backgroundColor = "";
  shovel.style.backgroundColor = "";
  inventory.style.backgroundColor = "";
  reset.style.backgroundColor = "#cfcfe4";
});