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

    this.punch = function(ninja){
        ninja.health -= 5;
        console.log(ninja.name +" was punched by "+ this.name +" and lost 5 Health!")
    }

    this.kick = function(ninja){
        ninja.health -= 15;
        console.log(ninja.name +" was kicked by "+ this.name +" and lost 15 Health!")
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
// no console log, but health increased by 10
ninjaDog.showStats();
// -> "Name: Shoshi, Health: 110, Speed: 3, Strength: 3"
ninja1.punch(ninjaDog);
// -> "Shoshi was punched by Hyabusa and lost 5 Health!"
ninjaDog.kick(ninja1);
// -> "Hyabusa was kicked by Shoshi and lost 15 Health!"

// Validations
const ninjaCat = new Ninja("Meowzer");
console.log(ninjaCat instanceof Ninja);
// output: true