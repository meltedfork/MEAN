// Deck of Cards
// using ES6

class Deck{
    constructor(cards){
        this.cards = [];
        let suits = ["hearts", "clubs", "diamonds", "spades"];
        let values = [1,2,3,4,5,6,7,8,9,10,11,12,13];
        for(var suit in suits){
            for(var value in values){
                this.cards.push([values[value], suits[suit]])
            }  
        }
    }

    shuffle(){
        for(var idx = 0; idx < this.cards.length; idx++){
            var random = Math.floor(Math.random()* this.cards.length);
            var card = this.cards[idx];
            this.cards[idx] = this.cards[random];
            this.cards[random] = card;
        }
    } 
    
    deal(){
        let card = Math.floor(Math.random()* this.cards.length);
        return this.cards.splice(card, 1)[0];
    }

    reset(){
        this.cards = [];
        let suits = ["hearts", "clubs", "diamonds", "spades"];
        let values = [1,2,3,4,5,6,7,8,9,10,11,12,13];
        for(var suit in suits){
            for(var value in values){
                this.cards.push([values[value], suits[suit]])
            }  
        }
    }
}

class Player{
    constructor(name){
        this.name = name;
        this.hand = [];

    }

    takeCard(deck){
        var oneCard = deck.deal()
        this.hand.push(oneCard);
        // console.log("this ran??");
    }
    
    discard(){
        
        // this.hand.splice(0, 1);
    }
    
}

// create a new instance of a deck
let newDeck = new Deck();

newDeck.shuffle();
// console.log(newDeck)

// create a new instance of a player
let player1 = new Player("Sammy");
// console.log(player1.name);

newDeck.deal();
// output: one randomized card

player1.takeCard(newDeck);
console.log(player1.hand);
// adds one randomized card to player's hand array

