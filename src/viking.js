// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = healththis.strength = strength
  }

  attack() {
    return this.strength
  }
  receiveDamage(damage) {

    this.health = this.health - damage
  }

}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength)
    this.name = name
  }
  receiveDamage(damage) {
    super.receiveDamage(damage)
    if (this.health > 0) {
      return this.name + "has received" + damage + "points of damage"
    }
    else {
      return this.name + "has died in act of combat"
    }
  }
}

// Saxon
class Saxon extends Soldier { 
  constructor(health,strength){
    super(health,strength)
  }



}

// War
class War { }



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
