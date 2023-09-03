import { createGrid } from "./World.js";
import { inventory1, inventory2, inventory3,inventory4,inventory5,inventory6,inventory7,inventory8,inventory9} from "./Tool.js";

// resetGame
export function resetGame() {
  // Reset the grid to its initial state
  const gridContainer = document.getElementById("gridContainer");
  gridContainer.innerHTML = ""; // Clear the grid

  // Recreate the grid
  createGrid();

  // Clear the inventories
  inventory1.length = 0;
  inventory2.length = 0;
  inventory3.length = 0;
  inventory4.length = 0;
  inventory5.length = 0;
  inventory6.length = 0;
  inventory7.length = 0;
  inventory8.length = 0;
  inventory9.length = 0;

  // Reset the inventory counters
  document.getElementById("1").textContent = "0";
  document.getElementById("2").textContent = "0";
  document.getElementById("3").textContent = "0";
  document.getElementById("4").textContent = "0";
  document.getElementById("5").textContent = "0";
  document.getElementById("6").textContent = "0";
  document.getElementById("7").textContent = "0";
  document.getElementById("8").textContent = "0";
  document.getElementById("9").textContent = "0";

  // Reset the active tool
  activeTool = null;

  // reset the game

}
  

