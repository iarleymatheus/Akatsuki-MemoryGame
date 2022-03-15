const FRONT  = 'card_front';
const BACK = 'card_back';
const CARD = 'card';
const ICON = 'icon';


let persons = [
   'deidara',
   'hidan' , 
   'itat', 
   'kakuzu' ,
   'kisame' ,
   'nagato', 
   'oroc', 
   'sasori' , 
   'tobi',
   'zetsu'];
  
   let cards = null;
   startGame();
  
   function startGame(){
       cards = createCardsFromPerson(persons);
       shuffleCards(cards);
       
       
       initializeCards(cards);
       
   }
 function initializeCards(cards){
  let gameBoard = document.getElementById("gameBord")
  cards.forEach((card)=>{
      let cardElement = document.createElement('div');
      cardElement.id = card.id;
      cardElement.classList.add(CARD);
      cardElement.dataset.icon = card.icon;
       createCardContent(card, cardElement);

      cardElement.addEventListener('click', flipCard);
      gameBoard.appendChild(cardElement);




  })
  

 }

   function createCardContent(card , cardElement){
       createCardFace(FRONT , card , cardElement);
       createCardFace(BACK , card , cardElement);

     }
     function createCardFace(face , card, element){
         let cardElementFace = document.createElement('div')
         cardElementFace.classList.add(face)
         if(face === FRONT){
             let iconElement = document.createElement('img');
             iconElement.classList.add(ICON);
             iconElement.src = "./assets/" + card.icon + ".png";
             cardElementFace.appendChild(iconElement);

         }else{
             let iconElementBack = document.createElement('img');
             iconElementBack.classList.add(ICON);
             iconElementBack.src = "./assets/akat.jpg";
             cardElementFace.appendChild(iconElementBack)

         }
         element.appendChild(cardElementFace);
     }


   function shuffleCards(cards){
   let currentIndex = cards.length;
   let radomIndex = 0;
    while(currentIndex !==0){
        radomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex --;
        [cards[radomIndex], cards[currentIndex]] = [cards[currentIndex], cards[radomIndex]]
    }


   }
   createCardsFromPerson(persons);

   function createCardsFromPerson(persons){
       let cards = [];

       persons.forEach((perso)=> {
           cards.push(createPairFromPersons(perso));
       
       })
       return cards.flatMap(pair => pair);
   }


   function createPairFromPersons(perso){
    return [
        {
         id: createIdFromPersons(perso),
         icon:perso,
         flipped: false,
        } , {
            id: createIdFromPersons(perso),
         icon:perso,
         flipped: false,
        }] 
    }

   
   
    function createIdFromPersons(perso){
        return perso + parseInt (Math.random() * 1000)
    }
    function flipCard(){

    }