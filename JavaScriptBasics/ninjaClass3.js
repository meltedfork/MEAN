// Ninja III
// practice creating ES6 class
// with inheritance

class Ninja {
    // parent class
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.speed = 3;
        this.strength = 3;
    }
    
    sayName(){
        console.log(`My name is ${this.name}`);
    }

    // showStats(){
    //     console.log(`${this.name} has ${this.health} health, ${this.speed} speed, and ${this.strength} strength.`)
    // }
    showStats(name){
        if(name instanceof Sensei){
          console.log(`Sensei ${this.name} has ${this.health} health, ${this.speed} speed, ${this.strength} strength, and ${this.wisdom} wisdom.`)
        }
        else{
        console.log(`Ninja ${this.name} has ${this.health} health, ${this.speed} speed, and ${this.strength} strength.`)
        }
    }

    drinkSake(){
        this.health += 10;
        console.log("Yum, sake!");
    }
}

class Sensei extends Ninja {
    // child class
    constructor(name){
        super(name);
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;
    }

    speakWisdom(){
        this.drinkSake();
        console.log(`Sensei ${this.name} shares their wisdom with those who are worthy.`);
    }
}


let ninja1 = new Ninja("Kato");
let sensei1 = new Sensei("Yabe");

ninja1.sayName();  
// output: My name is Kato

ninja1.showStats();
// output: Kato has 100 health, 3 speed, and 3 strength.

ninja1.drinkSake();
// output: Yum, sake!

ninja1.showStats();
// output: Kato has 110 health, 3 speed, and 3 strength.

sensei1.showStats(sensei1);
// output: Sensei Yabe has 200 health, 10 speed, 10 strength, and 10 wisdom.

sensei1.speakWisdom();
// output: Yum, sake!
// output: Sensei Yabe shares their wisdom with those who are worthy.