class Ninja {
    constructor(name, health) {
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }

    SayName = () => console.log(`${this.name}`);

    showStats = () => console.log(`Ninja name is: ${this.name} , and his health :${this.health} ,and his speed :${this.speed},and his stength:${this.strength}`);

    drinkSake = () => this.health += 10;


}


class Sensei extends Ninja {
    constructor(name, health) {
        super(name, health);
        this.wisdom = 10;

    }

    speakWisdom = () => console.log("What one programmer can do in one month, two programmers can do in two months");
    drinkSake = () => console.log(`Name: ${this.name}, Health: ${this.health}, Speed: ${this.speed}, Strength: ${this.strength}`);



}
const superSensei = new Sensei("Master Splinter", 200);
superSensei.speakWisdom();
superSensei.showStats();