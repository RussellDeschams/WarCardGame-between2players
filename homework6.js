class Card{
    constructor(index){
    let suitNames = ['spades', 'diamonds', 'clubs', 'hearts'];
          this.index = index;
          this.value = (index % 13)+1;
          this.suit = suitNames[Math.floor(index/13)];
          return this.index, this.value, this.suit;
    }       
}

class Deck{
    constructor(){
    var deck = Array.apply(null, Array(52)).map(function(_, i){ return new Card(i); });
        return deck;
    }
}

class Player{
    constructor(deck){
        this.deck = deck;
        let player1Deck = [],
         player2Deck = [],
        drawIndex;
       

// Deal cards to players (2)
        while( this.deck.length > 0 ){
  // Draw Card for Player1
        drawIndex = Math.random() * this.deck.length;
  
        player1Deck.push(deck.splice(drawIndex, 1)[0] );
  // Draw Card for Player2
       drawIndex = Math.random() * this.deck.length;
        player2Deck.push( deck.splice(drawIndex, 1)[0] );
        }

        return [player1Deck, player2Deck];
    }
}

class DrawAndPlay{
    constructor(player1Deck, player2Deck){
        this.player1Deck = player1Deck;
        this. player2Deck = player2Deck;
        let rewards =[];
        let p1Points = 0, p2Points = 0;

        // keeps running until one deck is empty.
        while(this.player1Deck != 0 || this.player2Deck != 0){
        //prints amount cards saved from tie   
        if(rewards != 0 ){ console.log('rewards = ', rewards); }
        // if either deck is empty, game over
        if( this.player1Deck.length === 0 || this.player2Deck.length === 0 ){
          if( this.player1Deck.length > 0 ){
            console.log('Player1 Won');
            console.log('Player1 points: '+ p1Points + ' Plater2 poits: '+ p2Points);
          } else {
            console.log('Player2 Won');
            console.log('Player1 points: '+ p1Points + ' Plater2 poits: '+ p2Points);
          }
          return console.log("GAME OVER!");
        }

        // draw card from each deck
        let player1Card = this.player1Deck.shift(),
            player2Card = this.player2Deck.shift();
            
      
        // compare cards
        if(player1Card.value === player2Card.value){
          console.log('tie', player1Card, player2Card);
          // tie
          console.log('Player1 Cards left = ' + this.player1Deck.length, 'Player2 Cards left = ' + this.player2Deck.length);
            // play another card
            console.log(player1Card, player2Card);
          rewards.push(player1Card);
          rewards.push(player2Card);
          console.log(rewards);
  
        } else if( player1Card.value > player2Card.value ){
          // Player wins
          p1Points++;
          console.log('Player1 wins round', player1Card, player2Card);
      
          // Reward Cards
          this.player1Deck.splice(this.player1Deck.length, 0, player1Card, player2Card);

          if(rewards.length > 0 ){
            this.player1Deck = this.player1Deck.concat(rewards);
            rewards.length = 0;
          }
          
        } else {
          // Player2 Wins
          p2Points++;
          console.log('Player2 wins round', player1Card, player2Card);
         
          
          // Reward Cards
          this.player2Deck.splice(this.player2Deck.length, 0, player2Card, player1Card);
          if( rewards.length > 0 ){
            this.player2Deck = this.player2Deck.concat(rewards);
            rewards.length = 0;
          }
          
        }
        
        console.log('Player1 Cards left = '+ this.player1Deck.length, 'Player2 Cards left = '+ this.player2Deck.length);
     
      }
    }
    

}

let deck = new Deck();
let player = new Player(deck);
let draw = new DrawAndPlay(player[0], player[1]);
