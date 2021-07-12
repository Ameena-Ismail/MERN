class Card {
    constructor(name, cost) {
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card {
    constructor(name, cost, power, res){
        super(name, cost)
        this.power = power;
        this.res = res;
    }
    

    attack(target){
        if (target instanceof Unit) {
            console.log(`${this.name} attacked ${target.name} for ${this.power}pts of damage!`);
            target.res -= this.power;
        } else {
            throw new Error("Target must be a unit!");
        }
    }

}

class Effect extends Card {
    constructor(name, cost, text, stat, magnitude){
        super(name, cost);
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
    }

    play = (target) => {target instanceof Unit ? (this.stat == "power" ? target.power += this.magnitude : target.res += this.magnitude) : (() => {throw new Error("Target must be a unit!")})()}

}

const redBeltNinja = new Unit("Red Belt Ninja", 3, 3, 4);
const hardAlgo = new Effect("Hard Algo", 2, "Increase the target's res by 3.", "res", 3);
hardAlgo.play(redBeltNinja);

const blackBeltNinja = new Unit("Black Belt Ninja", 4, 5, 4);

const unhandledPromReject = new Effect("Unhandled Promise Rejection", 1, "Reduce target's resilience by 2.", "res", -2);
unhandledPromReject.play(redBeltNinja);

const pairProg = new Effect("Pair Programming", 3, "Increase target's power by 2.", "power", 2);
pairProg.play(redBeltNinja);
redBeltNinja.attack(blackBeltNinja)



console.log(redBeltNinja);
console.log(blackBeltNinja);