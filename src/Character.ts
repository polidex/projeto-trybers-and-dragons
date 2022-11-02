import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter from './Fighter';
import Race, { Elf } from './Races';
import getRandomInt from './utils';

class Character implements Fighter {
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defanse: number;
  private _dexterity: number;
  private _energy: Energy;

  constructor(name: string) {
    this._dexterity = getRandomInt(1, 10);
    this._race = new Elf(name, this._dexterity);
    this._archetype = new Mage(name);
    this._maxLifePoints = this._race.maxLifePoints / 2;
    this._lifePoints = this._maxLifePoints;
    this._strength = getRandomInt(1, 10);
    this._defanse = getRandomInt(1, 10);
    this._energy = {
      type_: this._archetype.energyType, amount: getRandomInt(1, 10),
    };
  }

  get race(): Race {
    return this._race;
  }

  get archetype(): Archetype {
    return this._archetype;
  }

  get lifePoints(): number {
    return this._lifePoints;
  }

  get strength(): number {
    return this._strength;
  }
  
  get defense(): number {
    return this._defanse;
  }

  get dexterity(): number {
    return this._dexterity;
  }

  get energy(): Energy {
    return { ...this._energy };
  }

  public receiveDamage(attackPoints: number): number {
    const newDmg = attackPoints - this.defense;

    if (newDmg > 0) {
      this._lifePoints -= newDmg;
      if (this.lifePoints <= 0) {
        this._lifePoints = -1;
      }
    }
    return this._lifePoints;
  }

  public attack(enemy: Fighter): void {
    enemy.receiveDamage(this._strength);
  }

  public levelUp(): void {
    const lifeIncrement = this._maxLifePoints + getRandomInt(1, 10);
    this._strength += getRandomInt(1, 10);
    this._dexterity += getRandomInt(1, 10);
    this._defanse += getRandomInt(1, 10);
    this._energy.amount = 10;
    
    if (lifeIncrement > this.race.maxLifePoints) {
      this._maxLifePoints = this.race.maxLifePoints;
    } else {
      this._maxLifePoints = lifeIncrement;
    }
    this._lifePoints = this._maxLifePoints;
  }
}

export default Character;