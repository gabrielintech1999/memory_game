import cardArray from "./data.js";








let cards = [];






const cardsPosition = [];

cardArray.sort(() => 0.5 - Math.random());

console.log(cardArray[0]);

const grid = document.getElementById("grid");

for (let i = 0; i < 12; i++) {
  const card = document.createElement("img");
  card.className = "card";
  card.src = "images/blank.png";
  card.setAttribute("data-id", i);
  card.addEventListener("click", flipCard);
  grid.appendChild(card);
}

function flipCard() {
  const id = this.dataset.id;

  this.src = cardArray[id].img;

  cards.push(cardArray[id].name);
  cardsPosition.push(id);

  if (cards.length === 2) {
    viewGameStatus();
  }
}

function viewGameStatus() {
  const images = document.querySelectorAll("img");

  console.log(images[cardsPosition[0]]);
  console.log(images[cardsPosition[1]]);

  //console.log(images[cardsPosition[0]]);

  if (cards[0].name === cards[1].name) {

    images[cardsPosition[0]].src = "images/white.png";
    images[cardsPosition[1]].src = "images/white.png";
  } else {
    cards = []
    images[cardsPosition[0]].src = "images/blank.png";
    images[cardsPosition[1]].src = "images/blank.png";
  }
}
