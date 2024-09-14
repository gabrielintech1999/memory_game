import cardArray from "./data.js";

cardArray.sort(() => 0.5 - Math.random());
const grid = document.querySelector("#grid");

console.log(grid);

function createBoard() {
  for (let i = 0; i < cardArray.length; i++) {
    const card = document.createElement("img");


    card.onclick = flipCard


    card.className = "card";
    card.setAttribute("data-id", i)

    card.src = "images/blank.png";

    grid.appendChild(card);
  }
}

createBoard();


function flipCard() {
  console.log(this.dataset.id);
  
}

console.log(cardArray);
