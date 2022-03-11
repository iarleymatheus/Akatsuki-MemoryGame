const FRONT  = 'card_front'
const BACK = 'card_back'

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
  
   createCardsFromPerson(persons);

   function createCardsFromPerson(persons){
       let cards = [];

       for (let perso of persons){
           cards.push(createPairFromPersons(perso));
       }
       
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