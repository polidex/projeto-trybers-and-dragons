import Fighter from '../Fighter';
import Battle from './Battle';

class PVP extends Battle {
  constructor(
    private _firstPlayer: Fighter,
    private _secondPlayer: Fighter,
  ) {
    super(_firstPlayer);
  }

  public fight(): number {
    while (this._firstPlayer.lifePoints > 0
      && this._secondPlayer.lifePoints > 0) {
      this._firstPlayer.attack(this._secondPlayer);
      if (this._secondPlayer.lifePoints > 0) {
        this._secondPlayer.attack(this._firstPlayer);
      }
    }
    return super.fight();
  }
}

export default PVP;