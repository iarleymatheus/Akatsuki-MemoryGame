let game = {
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