

export function createGrid() {
  const gridContainer = document.getElementById("gridContainer");
  for (let row = 1; row < 51; row++) {
    for (let col = 1; col < 51; col++) {
      const cell = document.createElement("div");
      cell.className = "cell";
      if (col < 50 && 47 < col && row < 4 && 1 < row) {
        cell.style.backgroundColor = "#f5bc00";
        gridContainer.appendChild(cell);
      } else if (row == 4 && col == 47) {
        cell.classList.add("#f5bc00");
        gridContainer.appendChild(cell);
      } else if (row == 5 && col < 47 && 45 < col) {
        cell.classList.add("#f5bc00");
        gridContainer.appendChild(cell);
      } else if (24 < row && row < 27) {
        cell.classList.add("dirt-grass");
        gridContainer.appendChild(cell);
      }

      // tree 1
      else if (row < 19 && 10 < row && 8 < col && col < 13) {
        cell.classList.add("leaves-1");
        gridContainer.appendChild(cell);
      } else if (9 < col && col < 12 && 18 < row && row < 25) {
        cell.classList.add("trunk-mid");
        gridContainer.appendChild(cell);
      }
      // tree 2
      else if (row < 19 && 10 < row && col < 43 && 38 < col) {
        cell.classList.add("leaves-2");
        gridContainer.appendChild(cell);
      } else if (39 < col && (col < 42) & (18 < row) && row < 25) {
        cell.classList.add("trunk-mid");
        gridContainer.appendChild(cell);
      } else if (row == 45 && col == 8) {
        cell.classList.add("ore-diamond");
        gridContainer.appendChild(cell);
      } else if (row == 49 && col == 42) {
        cell.classList.add("ore-diamond");
        gridContainer.appendChild(cell);
      } else if (row == 40 && col == 26) {
        cell.classList.add("ore-diamond");
        gridContainer.appendChild(cell);
      } else if (row == 36 && col == 4) {
        cell.classList.add("ore-diamond");
        gridContainer.appendChild(cell);
      } else if (row == 36 && col == 45) {
        cell.classList.add("ore-diamond");
        gridContainer.appendChild(cell);
      } else if (row < 41 && 35 < row && col < 31 && 28 < col) {
        cell.classList.add("stone-diamond");
        gridContainer.appendChild(cell);
      } else if (30 < row && row < 35 && col < 8 && 5 < col) {
        cell.classList.add("stone-diamond");
        gridContainer.appendChild(cell);
      } else if (row == 36 && col < 25 && 10 < col) {
        cell.classList.add("stone-gold");
        gridContainer.appendChild(cell);
      } else if (row == 46 && col < 45 && 20 < col) {
        cell.classList.add("stone-gold");
        gridContainer.appendChild(cell);
      } else if (row > 30) {
        cell.classList.add("stone");
        gridContainer.appendChild(cell);
      } else if (row < 25 && 20 < row && col < 35 && 25 < col) {
        cell.classList.add("stone");
        gridContainer.appendChild(cell);
      } else if (row > 26) {
        cell.classList.add("dirt-tiles");
        gridContainer.appendChild(cell);
      } else if (row < 25) {
        cell.style.backgroundColor = "#00ffea";
        gridContainer.appendChild(cell);
      }
    }
  }
}

export class TileManager {
  constructor() {
    this.inventory = [];
  }
}
