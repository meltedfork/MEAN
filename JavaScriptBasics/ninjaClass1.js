// Ninja Class 1
// practice with constructor class

function Ninja(name){
    const ninja = {};
    let speed = 3;
    let strength = 3;
    this.name = name;
    this.health = 100;


    this.sayName = function(){
        console.log("I am " + this.name);
    }
    

    this.showStats = function(){
        console.log("Name: " + this.name + ", Health: " + this.health + ", Speed: " + speed + ", Strength: " + strength);
    }


    this.drinkSake = function(){
        this.health += 10;
    }
    
    return this;
}


// The Ninja class should have the following methods:
// sayName() - This should log that Ninja's name to the console.
// showStats() - This should show the Ninja's Strength and Speed, as well as their health.
// drinkSake() - This should add +10 Health to the Ninja

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
// -> "I am Hyabusa!"
ninja1.showStats();
// -> "Name: Hayabusa, Health: 100, Speed: 3, Strength: 3"
const ninjaDog = new Ninja("Shoshi");
ninjaDog.sayName();
// -> "I am Shoshi"
ninjaDog.drinkSake();
ninjaDog.showStats();
// -> "Name: Shoshi, Health: 110, Speed: 3, Strength: 3"