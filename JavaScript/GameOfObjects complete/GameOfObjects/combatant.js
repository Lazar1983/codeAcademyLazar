function Combatant() {
    // a combatant is a being that can fight
    // place combat related methods here
    this.attack = function(target, army) {
        var damage = getRandomNumber(this.minDamage, this.maxDamage);
        if (this instanceof Priest) {
            this.healArmy(army, this.specialConfig);
        } else {
            this.executeSpecial(damage, this.specialConfig);
            target.recieveDamage(damage);
        }  
    }
    this.recieveDamage = function(damage) {
        this.health -= damage;
        this.checkHealth();
    }

    this.executeSpecial = function(damage, specialConfig) {
        if (calculatePercent(specialConfig.chance)) {
            console.log(this.name + " hit the target with " + specialConfig.name + " for " + damage + " damage");
            return damage *= specialConfig.modifier;
        } else {
            return damage;
        }
    }

    this.healArmy = function(army, specialConfig) {
        var healing = this.executeSpecial(250, specialConfig);
        for (var index = 0; index < army.length; index++) {
            army[index].health += healing;
        }
    }
}

Combatant.prototype = new Being();

function SpecialConfig(name, modifier, chance) {
    this.name = name;
    this.modifier = modifier;
    this.chance = chance;
}