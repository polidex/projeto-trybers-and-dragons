import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

class PVE extends Battle {
  constructor(
    private _player: Fighter,
    private _monsters: Fighter[] | SimpleFighter[],
  ) {
    super(_player);
  }

  public fight(): number {
    this._monsters.forEach((monster) => {
      while (this._player.lifePoints > 0
        && monster.lifePoints > 0) {
        this.player.attack(monster);
        if (monster.lifePoints > 0) {
          this._player.receiveDamage(monster.strength);
        }
      }
    });
    return super.fight();
  }
}

export default PVE;