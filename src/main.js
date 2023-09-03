import { startButton, startScreen, hiddenScreen } from "./models/Constants.js";
import { createGrid, TileManager } from "./modules/World.js";
import { resetGame } from "./modules/Game.js";
import { inventoryImages } from "../src/modules/Tile.js";

// this display the second page of game when the player clicks the start button in the first page
startButton.addEventListener("click", () => {
  startScreen.style.display = "none";
  hiddenScreen.style.display = "flex";
});

// reset the tiles in the start of the game

document.getElementById("1").textContent = "0";
document.getElementById("2").textContent = "0";
document.getElementById("3").textContent = "0";
document.getElementById("4").textContent = "0";
document.getElementById("5").textContent = "0";
document.getElementById("6").textContent = "0";
document.getElementById("7").textContent = "0";
document.getElementById("8").textContent = "0";
document.getElementById("9").textContent = "0";

createGrid();
inventoryImages();

// reset button function
const resetButton = document.getElementById("reset");
resetButton.addEventListener("click", resetGame);

const tileManager = new TileManager();

// music background
const backgroundMusic = document.getElementById("backgroundMusic");
backgroundMusic.play();
