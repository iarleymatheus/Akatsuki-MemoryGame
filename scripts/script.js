const FRONT = "card_front";
const BACK = "card_back";
const CARD = "card";
const ICON = "icon";

startGame();
play();

function startGame() {
  initializeCards(game.createCardsFromPerson());
}
function initializeCards(cards) {
  let gameBoard = document.getElementById("gameBord");
  gameBoard.innerHTML = '';
  game.cards.forEach((card) => {
    let cardElement = document.createElement("div");
    cardElement.id = card.id;
    cardElement.classList.add(CARD);
    cardElement.dataset.icon = card.icon;
    createCardContent(card, cardElement);

    cardElement.addEventListener("click", flipCard);
    gameBoard.appendChild(cardElement);
  });
}

function createCardContent(card, cardElement) {
  createCardFace(FRONT, card, cardElement);
  createCardFace(BACK, card, cardElement);
}
function createCardFace(face, card, element) {
  let cardElementFace = document.createElement("div");
  cardElementFace.classList.add(face);
  if (face === FRONT) {
    let iconElement = document.createElement("img");
    iconElement.classList.add(ICON);
    iconElement.src = "./assets/" + card.icon + ".png";
    cardElementFace.appendChild(iconElement);
  } else {
    let iconElementBack = document.createElement("img");
    iconElementBack.src = "./assets/akat.png";
    cardElementFace.appendChild(iconElementBack);
  }
  element.appendChild(cardElementFace);
}

function flipCard() {
  if (game.setCard(this.id)) {
    this.classList.add("flip")
    if (game.secondCard) {
      if (game.checkMatch()) {
        game.clearCards();
        if(game.checkGameOver()) {
            let gameOverLayer = document.getElementById("gameOver");
            gameOverLayer.style.display = "flex";
        }
      } else {
        setTimeout(() => {
          let firstCardView = document.getElementById(game.firstCard.id);
          let secondCardView = document.getElementById(game.secondCard.id);

          firstCardView.classList.remove("flip");
          secondCardView.classList.remove("flip");
          game.unflipCards();
        }, 1000);
      }
    }
  }
}
function restart(){
 game.clearCards();
 startGame();
 let gameOverLayer = document.getElementById("gameOver");
            gameOverLayer.style.display = "none";


}
function iniciar(){
  let initialLayer = document.getElementById("gamePlay");
   initialLayer.style.display = "none"
  let gameLayer = document.getElementById("gameBord");
  gameLayer.style.display = "grid";
  document.getElementById("narutomusic").play().
  document.getElementById("narutomusic").loop = true;
}

