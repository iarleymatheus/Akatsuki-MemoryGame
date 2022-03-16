let game = {
    lockMode: false,
    firstCard:null,
    secondCard:null,

    setCard: function(id){
       let card = this.cards.filter(card=>card.id===id)[0];
     if(card.flipped || this.lockMode){
         return false;
     }
     if(!this.firstCard){
         this.firstCard = card;
         return true;
     }else{
         this.secondCard = card;
         this.lockMode = true;
         return true;    
        }
    
    
    },

    checkMatch:function(){
        return this.firstCard.icon === this.secondCard.icon;
  
  
    },

    clearCards:function(){
     this.firstCard = null;
     this.secondCard = null;
     this.lockMode = false;
    },   
    persons :[
        'deidara',
        'hidan' , 
        'itat', 
        'kakuzu' ,
        'kisame' ,
        'nagato', 
        'oroc', 
        'sasori' , 
        'tobi',
        'zetsu'],
  
         cards : null,

         createCardsFromPerson : function(){
            this.cards = [];
     
            this.persons.forEach((perso)=> {
                this.cards.push(this.createPairFromPersons(perso));
            
            })
            this.cards = this.cards.flatMap(pair => pair);
            this.shuffleCards();
            return this.cards;
        },
     
     
        createPairFromPersons:function (perso){
         return [
             {
              id: this.createIdFromPersons(perso),
              icon:perso,
              flipped: false,
             } , {
                 id: this.createIdFromPersons(perso),
              icon:perso,
              flipped: false,
             }] 
         },
     
          createIdFromPersons:function(perso){
             return perso + parseInt (Math.random() * 1000)

          },
          shuffleCards: function(cards){
            let currentIndex = this.cards.length;
            let radomIndex = 0;
             while(currentIndex !==0){
                 radomIndex = Math.floor(Math.random() * currentIndex);
                 currentIndex --;
                 [this.cards[radomIndex], this.cards[currentIndex]] = [this.cards[currentIndex], this.cards[radomIndex]]
             }
         
         
            }
}