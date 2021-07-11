class Ninja {
    constructor(name, health = 10, speed = 3, strength = 3) {
    this.name = name;
    this.health = health;
    this.speed = speed;
    this.strength = strength;
    }

    sayName() {
    console.log(`Ninja name : ${this.name}`);
    }
    showStatus() {
    console.log(
    `Ninja name : ${this.name},health: ${this.health},speed: ${this.speed},strength: ${this.strength}`
    );
    }
    drinkSake() {
    this.health += 10;
    }
}

const ninja1 = new Ninja("AMEENA");
ninja1.drinkSake();
ninja1.sayName();
ninja1.showStatus();