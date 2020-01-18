class Knight {
    constructor(){
        this.attack = 150;
        this.health = 150;
        this.weakness = "archer";
    }
};

class Archer {
    constructor(){
        this.attack = 70;
        this.health = 30;
        this.weakness = "cavalry";
    }
};

class Cavalry {
    constructor(){
        this.attack = 100;
        this.health = 200;
        this.weakness = "knight";

    }
};

class God {
    constructor(){
        this.attack = 9999;
        this.health = 9999;
    }
};

class Battle{
    constructor(){}
    
    addTroops(amount, type, player){
        let attack = 0;
        let health = 0;
        if (type === "knight"){
            let troop = new Knight
            attack = amount * troop.attack;
            health = amount * troop.health;
        } else if (type === "archer"){
            let troop = new Archer
            attack = amount * troop.attack;
            health = amount * troop.health;
        } else if (type === "cavalry"){
            let troop = new Cavalry
            attack = amount * troop.attack;
            health = amount * troop.health;
        } else if (type === "god"){
            let troop = new God
            attack = amount * troop.attack;
            health = amount * troop.health;
        }
        let li = document.createElement("li");
        if (player === "you"){
            document.querySelector("#p1").value = `${amount} ${type}(s) with ${attack} attack and ${health} health.`
        } else {
            document.querySelector("#p2").value = `${amount} ${type}(s) with ${attack} attack and ${health} health.`
        };

    };
}

//Global amount
let amountyou = 0;
let amountennemy = 0;

// Add troops to army1
document.querySelector("#add-army1").addEventListener("click", 
function(e){
    let amount = document.querySelector("#numbertroops1").value;
    let type = document.querySelector("#troops-type").value;
    const battle = new Battle;
    let player = "you"
    battle.addTroops(amount, type, player);
});

document.querySelector("#add-army2").addEventListener("click", 
function(e){
    let amount = document.querySelector("#numbertroops2").value;
    let type = document.querySelector("#troops-type2").value;
    const battle = new Battle;
    let player = "ennemy"
    battle.addTroops(amount, type, player);
});

document.querySelector("#fight").addEventListener("click", 
function() {
    console.log
})
