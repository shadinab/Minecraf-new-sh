
// the tiles image in the inventory and the background sound
export function inventoryImages(){
let isInventoryOpen = false;
document.getElementById("inventory").addEventListener("click", function () {
  const container = document.getElementById("imageContainer");

  document.getElementById("inventoryContainer");
  container.innerHTML = "";

  const imageUrls = [
    "./assets/images/tiles/dirt.png",
    "./assets/images/tiles/grass.jpg",
    "./assets/images/tiles/leaves 1.png",
    "./assets/images/tiles/leaves 2.png",
    "./assets/images/tiles/ore_diamond.png",
    "./assets/images/tiles/stone.png",
    "./assets/images/tiles/stone_diamond_alt.png",
    "./assets/images/tiles/stone_gold.png",
    "./assets/images/tiles/trunk_mid.png",
  ];

  imageUrls.forEach((imageUrl) => {
    const img = document.createElement("img");
    img.src = imageUrl;
    container.appendChild(img);
  });

  if (isInventoryOpen) {
    // Hide the container by setting its style to "display: none;"
    container.style.display = "none";
  } else {
    // Show the container by setting its style to "display: block;"
    container.style.display = "block";
  }
  // Toggle the flag to its opposite state
  isInventoryOpen = !isInventoryOpen;
});
}

